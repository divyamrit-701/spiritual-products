import React from 'react';
import { Sparkles, Check, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';
import { formatCurrency } from '../../utils/formatters';

interface DhoopFeatureSectionProps {
  onExploreClick: () => void;
  onQuickView: (product: any) => void;
}

export const DhoopFeatureSection: React.FC<DhoopFeatureSectionProps> = ({
  onExploreClick,
  onQuickView
}) => {
  const { addToCart, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const dhoopProduct = PRODUCTS.find((p) => p.slug === 'divyamrit-4-in-1-premium-mix-fragrance-dhoop-sticks-pack-of-2') || PRODUCTS[0];

  const handleAddToCart = () => {
    addToCart(dhoopProduct);
    setIsCartOpen(true);
  };

  return (
    <section id="dhoop-feature" className="py-16 sm:py-24 bg-white border-b border-spiritual-earth-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Premium Lifestyle Image Scene */}
          <div className="lg:col-span-6 relative">
            <Link to={`/products/${dhoopProduct.slug}`} className="block relative rounded-3xl overflow-hidden shadow-2xl border-4 border-spiritual-bg aspect-[4/3] sm:aspect-[16/11] bg-spiritual-earth-100 group">
              <img
                src="/images/dhoop_feature.jpg"
                alt="Divyamrit 4-in-1 Premium Mix Fragrance Dhoop Sticks Pack of 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 bg-spiritual-earth-900/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />
                <span>4-in-1 Divine Fragrances</span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-spiritual-earth-200/80 shadow-md flex items-center justify-between text-xs">
                <div>
                  <span className="font-serif font-bold text-spiritual-earth-900 block text-sm">
                    Rose, Mogra, Loban & Guggal
                  </span>
                  <span className="text-spiritual-earth-500 font-sans text-[11px]">
                    200g × 2 Boxes (400g Total Quantity)
                  </span>
                </div>
                <span className="font-bold text-spiritual-gold-800 text-sm font-serif">
                  {formatCurrency(dhoopProduct.price)}
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT: Authentic Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sacred Offering 01</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900 leading-tight">
                <Link to={`/products/${dhoopProduct.slug}`} className="hover:text-spiritual-gold-800 transition-colors">
                  Divyamrit 4-in-1 Premium Mix Fragrance Dhoop Sticks – Pack of 2
                </Link>
              </h2>
              <p className="text-xs sm:text-sm font-serif italic text-spiritual-gold-800">
                {dhoopProduct.hindiName}
              </p>
            </div>

            <p className="text-sm sm:text-base text-spiritual-earth-700 leading-relaxed font-sans font-normal">
              {dhoopProduct.shortDescription}
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {dhoopProduct.keyFeatures?.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-xs text-spiritual-earth-800 font-medium leading-snug block">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Price & CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-spiritual-earth-100">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-serif font-extrabold text-spiritual-earth-900">
                    {formatCurrency(dhoopProduct.price)}
                  </span>
                  <span className="text-xs text-spiritual-earth-500">
                    (MRP incl. all taxes)
                  </span>
                </div>
                <span className="text-[11px] text-spiritual-earth-500 font-sans block mt-0.5">
                  Pack Size: {dhoopProduct.packSize}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 sm:flex-initial px-5 py-3 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white text-xs font-bold tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-4 h-4 text-spiritual-gold-300" />
                  <span>Add to Cart</span>
                </button>

                <Link
                  to={`/products/${dhoopProduct.slug}`}
                  className="px-5 py-3 rounded-full bg-spiritual-bg hover:bg-spiritual-gold-50 text-spiritual-earth-900 border border-spiritual-earth-300 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
