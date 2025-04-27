
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import ProductGrid from '@/components/shop/ProductGrid';
import CategoryCard from '@/components/shop/CategoryCard';
import { getFeaturedProducts, getFeaturedCategories } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredCategories = getFeaturedCategories();

  return (
    <MainLayout>
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-woo-blue">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
        
        {/* Featured Products */}
        <section>
          <ProductGrid products={featuredProducts} title="Featured Products" />
        </section>
        
        {/* Promo Section */}
        <section className="mt-16">
          <div className="bg-woo-lightgray rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-woo-blue">Free Shipping on Orders Over $50</h2>
                <p className="text-gray-600 mb-6">
                  Shop today and take advantage of our free shipping offer.
                  No discount code needed, applied automatically at checkout.
                </p>
                <a href="/shop" className="bg-woo-teal text-white px-6 py-3 rounded-md inline-block hover:bg-woo-blue transition-colors">
                  Shop Now
                </a>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=2012&auto=format&fit=crop" 
                  alt="Free shipping" 
                  className="max-h-40 inline-block"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
