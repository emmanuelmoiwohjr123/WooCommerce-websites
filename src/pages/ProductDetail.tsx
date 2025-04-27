
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { getProductById, getProductsByCategory } from '@/data/products';
import { Product } from '@/types/shop';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Minus, Plus, Tag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import ProductGrid from '@/components/shop/ProductGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(Number(id));
      setProduct(foundProduct);
      
      if (foundProduct) {
        setActiveImage(foundProduct.images[0]);
        
        // Get related products from same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
  }, [id]);
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/shop" className="text-woo-teal hover:underline">
            Back to shop
          </Link>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/shop" className="text-sm text-gray-500 hover:text-woo-blue">
            ← Back to shop
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4 overflow-hidden rounded-lg border bg-white">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-auto object-contain aspect-square"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`relative border rounded w-20 h-20 p-1 ${
                      activeImage === image ? 'border-woo-blue' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            
            <div className="mt-4 mb-6">
              {product.salePrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-woo-blue">${product.salePrice.toFixed(2)}</span>
                  <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="bg-woo-red text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-woo-blue">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-600 mb-8">{product.shortDescription}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <span className="text-gray-700">Availability:</span>
              {product.stock > 0 ? (
                <span className="text-green-600">In Stock ({product.stock} items)</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-700">Quantity:</span>
              <div className="flex items-center border rounded">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-woo-teal hover:bg-woo-blue"
              size="lg"
              disabled={product.stock <= 0}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-600">
              <Tag className="h-4 w-4" />
              <span>
                Categories: {product.tags.join(', ')}
              </span>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Additional Information</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-6 bg-white border rounded-lg">
              <h2 className="text-xl font-bold mb-4">Product Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </TabsContent>
            
            <TabsContent value="details" className="p-6 bg-white border rounded-lg">
              <h2 className="text-xl font-bold mb-4">Additional Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700">SKU</p>
                  <p className="text-gray-600">{product.sku}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Category</p>
                  <p className="text-gray-600">{product.category}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Tags</p>
                  <p className="text-gray-600">{product.tags.join(', ')}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6 bg-white border rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold">Customer Reviews</h2>
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                      />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-700">{product.rating}/5</span>
                </div>
              </div>
              
              <div className="border-t pt-6 text-center">
                <p className="text-gray-600 mb-4">Be the first to review this product</p>
                <Button>Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <ProductGrid products={relatedProducts} title="You may also like" />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
