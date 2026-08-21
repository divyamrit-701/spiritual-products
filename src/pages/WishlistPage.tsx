import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ProductGrid } from '../components/product/ProductGrid';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Product } from '../types';

export const WishlistPage: React.FC = () => {
  const { wishlistIds } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: 'Saved Wishlist' }]} />

        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-spiritual-earth-200">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
              Your Sacred Wishlist ({wishlistProducts.length})
            </h1>
            <p className="text-xs sm:text-sm text-spiritual-earth-600 font-sans mt-1">
              Your saved items for upcoming pujas, festivals, and personal sadhana.
            </p>
          </div>
          <Link to="/shop">
            <Button variant="secondary" size="sm">
              Browse More Products
            </Button>
          </Link>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-12 sm:p-20 text-center space-y-5 shadow-spiritual max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto text-3xl">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-spiritual-earth-900">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs sm:text-sm text-spiritual-earth-600 font-sans leading-relaxed">
              Click the heart icon on any product to save it to your wishlist and revisit it anytime.
            </p>
            <div className="pt-2">
              <Link to="/shop">
                <Button variant="gold" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Sacred Store
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <ProductGrid
              products={wishlistProducts}
              onQuickView={(p) => setQuickViewProduct(p)}
              columns={4}
            />
          </div>
        )}

      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
