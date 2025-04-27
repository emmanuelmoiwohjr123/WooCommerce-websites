
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-woo-blue text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WooStore</h3>
            <p className="text-sm text-gray-300">
              Your one-stop shop for quality products at affordable prices. We're dedicated to
              providing an exceptional shopping experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/clothing" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/category/electronics" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/home-garden" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link to="/category/books" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Books
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-2">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm text-gray-800 bg-white rounded-l-md focus:outline-none"
              />
              <button className="bg-woo-teal text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-300">
            <p>© {new Date().getFullYear()} WooStore. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
