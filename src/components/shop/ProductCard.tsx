
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/shop';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };
  
  return (
    <div className="group relative bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pb-[100%] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {product.salePrice && (
          <span className="absolute top-2 right-2 bg-woo-red text-white text-xs font-bold py-1 px-2 rounded">
            SALE
          </span>
        )}
        
        <div className="p-4">
          <h3 className="text-base font-medium text-gray-800 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.shortDescription}</p>
          
          <div className="flex items-baseline mt-2">
            {product.salePrice ? (
              <>
                <span className="text-lg font-bold text-woo-blue">${product.salePrice.toFixed(2)}</span>
                <span className="ml-2 text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-woo-blue">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full mt-3 bg-woo-teal hover:bg-woo-blue transition-colors"
          >
            <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
