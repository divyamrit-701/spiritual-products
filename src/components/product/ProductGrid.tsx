import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
  columns?: 2 | 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onQuickView,
  columns = 4
}) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-white rounded-3xl border border-spiritual-earth-200 p-8 space-y-3">
        <div className="text-4xl">🪔</div>
        <h3 className="font-serif text-xl font-bold text-spiritual-earth-900">
          No sacred products found
        </h3>
        <p className="text-sm text-spiritual-earth-600 max-w-sm mx-auto">
          Try resetting your filters or adjusting your price and fragrance preferences.
        </p>
      </div>
    );
  }

  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  return (
    <div className={`grid gap-5 sm:gap-6 ${columnClasses[columns]}`}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};
