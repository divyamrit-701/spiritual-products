import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Eye, Star, Check, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';

interface FeaturedProductsSectionProps {
  onQuickView: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onQuickView,
  onProductClick
}) => {
  const { addToCart } = useCart();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredProducts = activeCategoryFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategoryFilter);

  return (
    <section id="products" className="py-16 sm:py-24 bg-spiritual-bg border-b border-spiritual-earth-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sacred Collection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900">
              Featured Sacred Offerings
            </h2>
            <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans max-w-xl">
              Authentic Indian devotional essentials handcrafted with natural resins, pure sandalwood, and organic camphor crystals.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'All Offerings' },
              { id: 'dhoop-sticks', label: 'Dhoop Sticks' },
              { id: 'camphor', label: 'Bhimseni Camphor' },
              { id: 'combo-packs', label: 'Combo Offers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategoryFilter === tab.id
                    ? 'bg-spiritual-earth-900 text-white shadow-xs'
                    : 'bg-white text-spiritual-earth-700 hover:bg-spiritual-gold-50 border border-spiritual-earth-200/90'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sadhna-Inspired Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-spiritual-earth-200/90 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Frame with Badges and Quick View */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-spiritual-earth-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                    {product.bestseller && (
                      <span className="bg-spiritual-gold-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                        Bestseller
                      </span>
                    )}
                    {product.charcoalFree && (
                      <span className="bg-spiritual-earth-900/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        0% Charcoal
                      </span>
                    )}
                  </div>

                  {/* Quick View Button on Image */}
                  <button
                    type="button"
                    onClick={() => onQuickView(product)}
                    className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-spiritual-earth-800 hover:bg-spiritual-gold-600 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                    title="Quick Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Info Container */}
                <div className="p-6 space-y-3">
                  
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif italic text-spiritual-gold-800 font-medium">
                      {product.categoryName}
                    </span>
                    
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{(product.rating ?? 4.9).toFixed(1)}</span>
                      <span className="text-spiritual-earth-400 text-[11px] font-normal">
                        ({product.reviewCount ?? 120})
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onProductClick(product)}
                    className="font-serif text-xl sm:text-2xl font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors line-clamp-1 cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  {product.hindiName && (
                    <p className="text-xs text-spiritual-earth-500 font-serif italic -mt-1">
                      {product.hindiName}
                    </p>
                  )}

                  {/* Short Description */}
                  <p className="text-xs text-spiritual-earth-600 font-sans leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Pack Specs Info */}
                  <div className="pt-1 text-[11px] text-spiritual-earth-500 flex items-center gap-2">
                    <span><strong>Pack:</strong> {product.packSize}</span>
                    {product.burnTime && (
                      <>
                        <span>•</span>
                        <span><strong>Burn:</strong> {product.burnTime.split('per')[0]}</span>
                      </>
                    )}
                  </div>

                </div>
              </div>

              {/* Price & Add to Cart Footer */}
              <div className="p-6 pt-0 border-t border-spiritual-earth-100 flex items-center justify-between gap-3 mt-2">
                <div className="pt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-serif font-extrabold text-spiritual-earth-900">
                      {formatCurrency(product.price)}
                    </span>
                    {product.mrp > product.price && (
                      <span className="text-xs text-spiritual-earth-400 line-through">
                        {formatCurrency(product.mrp)}
                      </span>
                    )}
                  </div>
                  {product.discountPercentage > 0 && (
                    <span className="text-[10px] font-bold text-emerald-700 block">
                      Save {product.discountPercentage}% off
                    </span>
                  )}
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="px-5 py-2.5 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white text-xs font-bold tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-spiritual-gold-300" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
