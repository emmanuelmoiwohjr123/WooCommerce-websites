
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-woo-blue text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Discover Quality Products For Every Need</h1>
            <p className="text-lg text-gray-300">
              Shop our curated collection of premium products at affordable prices.
              From fashion to electronics, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-woo-teal hover:bg-woo-teal/90 text-white font-medium">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/category/featured">Featured Items</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop" 
                alt="Shopping"
                className="h-full w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
