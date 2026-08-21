import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductGallery } from '../components/product/ProductGallery';
import { PincodeChecker } from '../components/product/PincodeChecker';
import { HowToUseSection } from '../components/product/HowToUseSection';
import { ReviewSection } from '../components/product/ReviewSection';
import { FrequentlyBoughtTogether } from '../components/product/FrequentlyBoughtTogether';
import { ProductGrid } from '../components/product/ProductGrid';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { RatingStars } from '../components/ui/RatingStars';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { 
  ShoppingBag, 
  Heart, 
  Share2, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Flame, 
  Plus, 
  Minus, 
  Check,
  Award,
  Zap
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

type DetailTab = 'description' | 'ingredients' | 'how-to-use' | 'specs' | 'reviews';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<DetailTab>('description');

  const isLiked = isInWishlist(product.id);
  const currentVariant = product.variants ? product.variants[selectedVariantIndex] : undefined;
  const currentPrice = currentVariant ? currentVariant.price : product.price;
  const currentMrp = currentVariant ? currentVariant.mrp : product.mrp;
  const savings = currentMrp - currentPrice;

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, currentVariant);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, currentVariant);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied to Clipboard', 'Share this sacred formulation with family & friends.', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Breadcrumb Navigation */}
        <div>
          <Breadcrumbs
            items={[
              { label: 'Shop', to: '/shop' },
              { label: product.categoryName, to: `/category/${product.category}` },
              { label: product.name }
            ]}
          />
        </div>

        {/* Top Section: Gallery + Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Gallery (7 Cols on desktop) */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Product Purchasing Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-spiritual-earth-200/90 shadow-spiritual">
            
            {/* Header badges & Category */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {product.bestseller && <Badge variant="gold">★ Bestseller</Badge>}
                {product.charcoalFree && <Badge variant="tulsi">0% Charcoal</Badge>}
                {product.organic && <Badge variant="earth">100% Organic</Badge>}
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="p-2 rounded-full text-spiritual-earth-500 hover:text-spiritual-earth-900 hover:bg-spiritual-earth-100 transition-colors"
                aria-label="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Hindi Name */}
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900 leading-tight">
                {product.name}
              </h1>
              {product.hindiName && (
                <p className="text-sm font-serif italic text-spiritual-gold-700 mt-1">
                  {product.hindiName}
                </p>
              )}
            </div>

            {/* Rating Summary */}
            <div className="flex items-center gap-3 pt-1 border-b border-spiritual-earth-100 pb-3">
              <RatingStars rating={product.rating} count={product.reviewCount} size="md" />
              <span className="text-xs text-spiritual-earth-400">|</span>
              <button 
                onClick={() => setActiveTab('reviews')}
                className="text-xs text-spiritual-gold-700 hover:underline font-semibold"
              >
                Read {product.reviewCount} Reviews
              </button>
            </div>

            {/* Pricing Section */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-extrabold text-spiritual-earth-900">
                  {formatCurrency(currentPrice)}
                </span>
                {currentMrp > currentPrice && (
                  <span className="text-base text-spiritual-earth-400 line-through">
                    {formatCurrency(currentMrp)}
                  </span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/90 px-2.5 py-1 rounded-full">
                    {product.discountPercentage}% OFF (Save {formatCurrency(savings)})
                  </span>
                )}
              </div>
              <span className="text-xs text-emerald-700 font-medium block">
                Inclusive of all taxes • Free express shipping above ₹999
              </span>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-spiritual-earth-700 leading-relaxed font-sans">
              {product.shortDescription}
            </p>

            {/* Variant / Pack Size Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="space-y-2 pt-2 border-t border-spiritual-earth-100">
                <div className="flex items-center justify-between text-xs font-semibold text-spiritual-earth-800">
                  <span>Select Pack Option:</span>
                  <span className="text-spiritual-gold-700">{currentVariant?.name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.variants.map((v, idx) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        selectedVariantIndex === idx
                          ? 'border-spiritual-gold-600 bg-spiritual-gold-50/80 shadow-xs ring-1 ring-spiritual-gold-400'
                          : 'border-spiritual-earth-200 hover:border-spiritual-gold-300 bg-white'
                      }`}
                    >
                      <span className="text-xs font-bold text-spiritual-earth-900">{v.name}</span>
                      <div className="flex items-baseline justify-between mt-1">
                        <span className="text-xs font-extrabold text-spiritual-gold-800">{formatCurrency(v.price)}</span>
                        {v.mrp > v.price && (
                          <span className="text-[10px] text-spiritual-earth-400 line-through">{formatCurrency(v.mrp)}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Primary Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-spiritual-earth-300 rounded-2xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-spiritual-earth-600 hover:text-spiritual-earth-900 rounded-xl hover:bg-spiritual-earth-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-sm font-bold text-spiritual-earth-900 min-w-[28px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-spiritual-earth-600 hover:text-spiritual-earth-900 rounded-xl hover:bg-spiritual-earth-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="gold"
                  size="md"
                  className="flex-1"
                  leftIcon={<ShoppingBag className="w-4 h-4" />}
                >
                  Add to Sacred Cart
                </Button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-2xl border transition-colors shrink-0 ${
                    isLiked
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'bg-white border-spiritual-earth-200 text-spiritual-earth-700 hover:text-rose-600'
                  }`}
                  aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500 text-rose-600' : ''}`} />
                </button>
              </div>

              {/* Buy Now Button */}
              <Button
                onClick={handleBuyNow}
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<Zap className="w-4 h-4 text-spiritual-gold-400" />}
              >
                Instant Buy Now
              </Button>
            </div>

            {/* Pincode & Delivery Checker */}
            <div className="pt-2">
              <PincodeChecker />
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-spiritual-earth-100 text-xs text-spiritual-earth-700">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
                <span>Express Air Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
                <span>100% Purity Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
                <span>Hassle-Free Transit Cover</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
                <span>Temple Grade Artisan Craft</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabbed In-Depth Details Section */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200 shadow-spiritual p-6 sm:p-10 space-y-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b border-spiritual-earth-200 pb-4">
            {[
              { id: 'description', label: 'Sacred Significance & Description' },
              { id: 'ingredients', label: 'Pure Ingredients & Sourcing' },
              { id: 'how-to-use', label: 'How to Use & Safety' },
              { id: 'specs', label: 'Product Specifications' },
              { id: 'reviews', label: `Devotee Reviews (${product.reviewCount})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DetailTab)}
                className={`font-serif text-sm sm:text-base font-bold pb-2 px-2 transition-all relative ${
                  activeTab === tab.id
                    ? 'text-spiritual-gold-800 border-b-2 border-spiritual-gold-600'
                    : 'text-spiritual-earth-500 hover:text-spiritual-earth-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pt-2">
            
            {activeTab === 'description' && (
              <div className="space-y-6 max-w-4xl">
                <div className="space-y-4 text-sm sm:text-base text-spiritual-earth-800 font-sans leading-relaxed">
                  <p>{product.description}</p>
                </div>

                {/* Fragrance Profile Card if available */}
                {product.fragranceProfile && (
                  <div className="bg-spiritual-gold-50/70 rounded-2xl p-6 border border-spiritual-gold-200 space-y-4">
                    <h4 className="font-serif text-base font-bold text-spiritual-earth-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-spiritual-gold-600" />
                      <span>Fragrance Pyramid & Sacred Aura</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-spiritual-earth-200/80">
                        <span className="font-bold text-spiritual-earth-500 uppercase tracking-wider block mb-1">Top Notes</span>
                        <p className="font-medium text-spiritual-earth-900">{product.fragranceProfile.topNotes.join(', ')}</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-spiritual-earth-200/80">
                        <span className="font-bold text-spiritual-earth-500 uppercase tracking-wider block mb-1">Heart Notes</span>
                        <p className="font-medium text-spiritual-earth-900">{product.fragranceProfile.heartNotes.join(', ')}</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-spiritual-earth-200/80">
                        <span className="font-bold text-spiritual-earth-500 uppercase tracking-wider block mb-1">Base Notes</span>
                        <p className="font-medium text-spiritual-earth-900">{product.fragranceProfile.baseNotes.join(', ')}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs pt-1">
                      <span><strong>Intensity:</strong> {product.fragranceProfile.intensity}</span>
                      <span>•</span>
                      <span><strong>Sacred Aura:</strong> {product.fragranceProfile.aura}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-6 max-w-3xl">
                <p className="text-sm text-spiritual-earth-700 leading-relaxed font-sans">
                  We pledge absolute transparency. Every raw ingredient is ethically harvested, certified pure, and free from cheap synthetic petrochemicals or coal.
                </p>

                <div className="space-y-2">
                  <h4 className="font-serif text-base font-bold text-spiritual-earth-900 mb-3">
                    Active Sacred Ingredients:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.ingredients.map((ing, idx) => (
                      <li 
                        key={`ing-${idx}`}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-spiritual-bg border border-spiritual-earth-200 text-xs sm:text-sm text-spiritual-earth-900 font-medium"
                      >
                        <Check className="w-4 h-4 text-spiritual-tulsi-600 shrink-0 mt-0.5" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'how-to-use' && (
              <div className="max-w-3xl">
                <HowToUseSection product={product} />
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl">
                <table className="w-full text-xs sm:text-sm divide-y divide-spiritual-earth-200">
                  <tbody className="divide-y divide-spiritual-earth-100">
                    <tr className="py-2.5">
                      <td className="py-2.5 font-bold text-spiritual-earth-600 w-1/3">Pack Size</td>
                      <td className="py-2.5 text-spiritual-earth-900">{product.packSize}</td>
                    </tr>
                    {product.burnTime && (
                      <tr className="py-2.5">
                        <td className="py-2.5 font-bold text-spiritual-earth-600">Burn Duration</td>
                        <td className="py-2.5 text-spiritual-earth-900">{product.burnTime}</td>
                      </tr>
                    )}
                    {Object.entries(product.specifications).map(([k, v]) => (
                      <tr key={k} className="py-2.5">
                        <td className="py-2.5 font-bold text-spiritual-earth-600">{k}</td>
                        <td className="py-2.5 text-spiritual-earth-900">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <ReviewSection product={product} />
            )}

          </div>

        </div>

        {/* Frequently Bought Together Bundle */}
        <FrequentlyBoughtTogether currentProduct={product} />

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-spiritual-earth-900">
                You May Also Reverence
              </h3>
              <Link to={`/category/${product.category}`} className="text-xs font-semibold text-spiritual-gold-700 hover:underline">
                View All {product.categoryName} &rarr;
              </Link>
            </div>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}

      </div>
    </div>
  );
};
