import React from 'react';
import { Flame, Check, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';
import { formatCurrency } from '../../utils/formatters';

interface CamphorFeatureSectionProps {
  onExploreClick: () => void;
  onQuickView: (product: any) => void;
}

export const CamphorFeatureSection: React.FC<CamphorFeatureSectionProps> = ({
  onExploreClick,
  onQuickView
}) => {
  const { addToCart, setIsCartOpen } = useCart();
  const camphorProduct = PRODUCTS.find((p) => p.slug === 'divyamrit-bhimseni-kapoor-pure-crystals-100g') || PRODUCTS[1];

  const handleAddToCart = () => {
    addToCart(camphorProduct);
    setIsCartOpen(true);
  };

  return (
    <section id="camphor-feature" className="py-16 sm:py-24 bg-spiritual-bg border-b border-spiritual-earth-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Authentic Editorial Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5" />
                <span>Sacred Offering 02</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900 leading-tight">
                <Link to={`/products/${camphorProduct.slug}`} className="hover:text-spiritual-gold-800 transition-colors">
                  Divyamrit Bhimseni Kapoor – Pure Crystals | 100g
                </Link>
              </h2>
              <p className="text-xs sm:text-sm font-serif italic text-spiritual-gold-800">
                {camphorProduct.hindiName}
              </p>
            </div>

            <p className="text-sm sm:text-base text-spiritual-earth-700 leading-relaxed font-sans font-normal">
              {camphorProduct.shortDescription}
            </p>

            {/* 6 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {camphorProduct.keyFeatures?.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-spiritual-earth-200/80 shadow-xs">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-spiritual-earth-200">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-serif font-extrabold text-spiritual-earth-900">
                    {formatCurrency(camphorProduct.price)}
                  </span>
                  {camphorProduct.mrp > camphorProduct.price && (
                    <span className="text-xs text-spiritual-earth-400 line-through">
                      MRP {formatCurrency(camphorProduct.mrp)}
                    </span>
                  )}
                  {camphorProduct.discountPercentage > 0 && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Save {camphorProduct.discountPercentage}% OFF
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-spiritual-earth-500 font-sans block mt-0.5">
                  Pack Size: {camphorProduct.packSize}
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
                  to={`/products/${camphorProduct.slug}`}
                  className="px-5 py-3 rounded-full bg-white hover:bg-spiritual-gold-50 text-spiritual-earth-900 border border-spiritual-earth-300 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT: Premium White Marble Camphor Scene Image */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <Link to={`/products/${camphorProduct.slug}`} className="block relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-spiritual-earth-100 group">
              <img
                src="/images/camphor_feature.jpg"
                alt="Divyamrit Bhimseni Kapoor Pure Crystals 100g"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 bg-spiritual-earth-900/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-spiritual-gold-400" />
                <span>Pure Crystal Form</span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-spiritual-earth-200/80 shadow-md flex items-center justify-between text-xs">
                <div>
                  <span className="font-serif font-bold text-spiritual-earth-900 block text-sm">
                    Pure Bhimseni Kapoor Crystals
                  </span>
                  <span className="text-spiritual-earth-500 font-sans text-[11px]">
                    100g × 1 Box (Special Pooja Pack)
                  </span>
                </div>
                <span className="font-bold text-spiritual-gold-800 text-sm font-serif">
                  {formatCurrency(camphorProduct.price)}
                </span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
