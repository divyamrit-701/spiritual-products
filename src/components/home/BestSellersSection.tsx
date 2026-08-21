import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../../types';

interface BestSellersSectionProps {
  onQuickView?: (product: Product) => void;
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({ onQuickView }) => {
  const bestSellers = PRODUCTS.filter((p) => p.bestseller || p.featured).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-spiritual-cream/40 border-y border-spiritual-earth-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Devotee Favorites</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
              Most Loved Divine Essentials
            </h2>
            <p className="text-sm text-spiritual-earth-600 font-sans">
              Handpicked customer favorites revered for exceptional purity, long burn times, and sacred fragrance.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-spiritual-gold-700 hover:text-spiritual-gold-800 transition-colors"
          >
            <span>View All Bestsellers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
