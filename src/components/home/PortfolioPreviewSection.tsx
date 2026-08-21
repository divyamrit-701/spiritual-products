import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCategory, Product } from '../../types';
import { ProductCard } from '../product/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PortfolioPreviewSectionProps {
  onQuickView?: (product: Product) => void;
}

const TABS: { id: 'all' | ProductCategory; label: string }[] = [
  { id: 'all', label: 'All Sacred Items' },
  { id: 'dhoop-sticks', label: 'Dhoop Sticks' },
  { id: 'camphor', label: 'Bhimseni Camphor' },
  { id: 'incense-sticks', label: 'Flora Agarbatti' },
  { id: 'puja-essentials', label: 'Puja Brass & Tilak' },
  { id: 'gift-hampers', label: 'Gift Hampers' }
];

export const PortfolioPreviewSection: React.FC<PortfolioPreviewSectionProps> = ({ onQuickView }) => {
  const [activeTab, setActiveTab] = useState<'all' | ProductCategory>('all');

  const filtered = activeTab === 'all' 
    ? PRODUCTS.slice(0, 8) 
    : PRODUCTS.filter((p) => p.category === activeTab).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-spiritual-cream/30 border-y border-spiritual-earth-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Catalogue Preview</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Our Sacred Product Portfolio
          </h2>
          <p className="text-sm text-spiritual-earth-600 font-sans">
            Explore authentic formulas crafted for your home temple, morning sadhana, and festive rituals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-spiritual-earth-900 text-white shadow-md'
                  : 'bg-white text-spiritual-earth-700 hover:bg-spiritual-gold-50 border border-spiritual-earth-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-spiritual-gold-600 hover:bg-spiritual-gold-500 text-white text-sm font-bold shadow-lg hover:shadow-gold-glow transition-all active:scale-95"
          >
            <span>View Full Product Catalogue & Lookbook</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
