
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categories } from '@/data/products';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/shop">Shop</Link>
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-woo-blue">
          WooStore
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-6">
          <Link to="/" className="text-sm font-medium text-gray-600 transition-colors hover:text-woo-blue">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-gray-600 transition-colors hover:text-woo-blue">
              Shop
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/shop">All Products</Link>
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="w-5 h-5" />
          </Button>
          
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`${cartCount > 0 ? 'text-woo-blue' : 'text-gray-600'}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className={`absolute -top-1 -right-1 w-5 h-5 text-xs bg-woo-teal text-white rounded-full flex items-center justify-center ${cartCount > 0 ? 'animate-cart-pulse' : ''}`}>
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
