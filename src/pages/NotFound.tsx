
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-woo-blue mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-woo-teal hover:bg-woo-blue">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
