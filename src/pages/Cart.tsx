
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <div className="mb-6">
              <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild className="bg-woo-teal hover:bg-woo-blue">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border">
                <div className="p-6 border-b">
                  <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Subtotal</div>
                  </div>
                </div>
                
                {cartItems.map((item) => {
                  const product = item.product;
                  const price = product.salePrice || product.price;
                  const subtotal = price * item.quantity;
                  
                  return (
                    <div key={product.id} className="p-6 border-b">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-6">
                          <div className="flex items-center gap-4">
                            <Link to={`/product/${product.id}`}>
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                            </Link>
                            <div>
                              <Link 
                                to={`/product/${product.id}`}
                                className="font-medium text-woo-blue hover:underline"
                              >
                                {product.name}
                              </Link>
                              <button
                                onClick={() => removeFromCart(product.id)}
                                className="flex items-center text-xs text-gray-500 hover:text-woo-red mt-2"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-span-2 text-center">
                          ${price.toFixed(2)}
                        </div>
                        
                        <div className="col-span-2">
                          <div className="flex items-center justify-center border rounded">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(product.id, item.quantity - 1)}
                              disabled={item.quantity === 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="col-span-2 text-right font-medium">
                          ${subtotal.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                <div className="p-6 flex justify-between">
                  <Button variant="ghost" className="text-gray-600" onClick={clearCart}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                  
                  <Button asChild className="bg-woo-blue hover:bg-woo-blue/90">
                    <Link to="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border p-6 sticky top-20">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">{cartTotal >= 50 ? "Free" : "$4.99"}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(cartTotal >= 50 ? cartTotal : cartTotal + 4.99).toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-woo-teal hover:bg-woo-blue">
                  Proceed to Checkout
                </Button>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-2">We Accept</h3>
                  <div className="flex gap-2">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">Visa</span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">Mastercard</span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
