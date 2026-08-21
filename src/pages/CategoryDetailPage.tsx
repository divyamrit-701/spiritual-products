import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Product } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

export const CategoryDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const category = CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];
  const products = PRODUCTS.filter((p) => p.category === category.id);

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs
          items={[
            { label: 'Categories', to: '/categories' },
            { label: category.name }
          ]}
        />

        {/* Hero Banner for Category */}
        <div className="relative rounded-3xl overflow-hidden bg-spiritual-earth-900 text-white p-8 sm:p-12 shadow-2xl border border-spiritual-earth-800">
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spiritual-earth-950 via-spiritual-earth-900/80 to-transparent" />
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-sm font-serif italic text-spiritual-gold-300">
              {category.hindiName}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-spiritual-earth-200 font-sans leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-spiritual-earth-600">
            <span>Showing {products.length} sacred items in <strong>{category.name}</strong></span>
            <Link to="/shop" className="text-spiritual-gold-700 font-semibold hover:underline">
              View All Store Products &rarr;
            </Link>
          </div>

          <ProductGrid
            products={products}
            onQuickView={(p) => setQuickViewProduct(p)}
            columns={4}
          />
        </div>

      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
