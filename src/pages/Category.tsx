
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import ProductGrid from '@/components/shop/ProductGrid';
import { getProductsByCategory, categories } from '@/data/products';
import { Product } from '@/types/shop';

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState(categories.find(c => c.slug === slug));
  const [sortBy, setSortBy] = useState('featured');

 
  
  useEffect(() => {
    if (slug) {
      const categoryProducts = getProductsByCategory(slug);
      setProducts(categoryProducts);
      setCategory(categories.find(c => c.slug === slug));
    }
  }, [slug]);
  
  const sortedProducts = [...products].sort((a, b) => {
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
        {category && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-woo-blue">{category.name}</h1>
            {category.description && (
              <p className="mt-2 text-gray-600">{category.description}</p>
            )}
          </div>
        )}
        
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
        
        <ProductGrid products={sortedProducts} />
      </div>
    </MainLayout>
  );
};

export default Category;
