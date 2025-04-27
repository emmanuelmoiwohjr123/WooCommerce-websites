
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types/shop';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}`} className="group relative block overflow-hidden rounded-lg">
      <div className="relative h-60 w-full overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
        {category.description && (
          <p className="mt-1 text-sm text-gray-200">{category.description}</p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;
