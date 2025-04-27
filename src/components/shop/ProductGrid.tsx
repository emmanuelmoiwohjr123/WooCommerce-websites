
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/shop';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <div className="py-6">
      {title && <h2 className="text-2xl font-bold mb-6 text-woo-blue">{title}</h2>}
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
