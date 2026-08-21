import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Product } from '../types';
import { Sparkles } from 'lucide-react';

export const CollectionDetailPage: React.FC = () => {
  const { collectionSlug } = useParams<{ collectionSlug: string }>();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const collection = COLLECTIONS.find((c) => c.slug === collectionSlug) || COLLECTIONS[0];
  const products = PRODUCTS.filter((p) => collection.productIds.includes(p.id));

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs
          items={[
            { label: 'Collections', to: '/collections' },
            { label: collection.name }
          ]}
        />

        {/* Collection Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-spiritual-earth-900 text-white p-8 sm:p-12 shadow-2xl border border-spiritual-earth-800">
          <img
            src={collection.bannerImage}
            alt={collection.name}
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spiritual-earth-950 via-spiritual-earth-900/80 to-transparent" />
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-300 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{collection.occasion}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {collection.name}
            </h1>
            <p className="text-sm sm:text-base text-spiritual-earth-200 font-sans leading-relaxed">
              {collection.description}
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-spiritual-earth-600">
            <span>Curated items in this ritual suite ({products.length})</span>
            <Link to="/shop" className="text-spiritual-gold-700 font-semibold hover:underline">
              Browse All Products &rarr;
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
