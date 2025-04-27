
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductGrid from '@/components/shop/ProductGrid';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
    
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return (a.salePrice || a.price) - (b.salePrice || b.price);
    } else if (sortBy === 'price-desc') {
      return (b.salePrice || b.price) - (a.salePrice || a.price);
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      // Default to featured sorting
      return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
    }
  });
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar/Filters */}
          <div className="md:col-span-1">
            <div className="sticky top-20 bg-white rounded-lg border p-6">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === null ? "default" : "ghost"}
                  className={selectedCategory === null ? "bg-woo-blue w-full justify-start" : "w-full justify-start"}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Products
                </Button>
                
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.slug ? "default" : "ghost"}
                    className={selectedCategory === category.slug ? "bg-woo-blue w-full justify-start" : "w-full justify-start"}
                    onClick={() => setSelectedCategory(category.slug)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-500">
                  Showing {sortedProducts.length} products
                </p>
              </div>
              
              <div className="flex items-center">
                <label className="text-sm mr-2">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md p-2 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <ProductGrid products={sortedProducts} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
