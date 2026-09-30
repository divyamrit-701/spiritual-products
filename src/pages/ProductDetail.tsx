import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ProductCard } from '../components/product/ProductCard';
import { 
  ShoppingBag, 
  Zap, 
  Truck, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  ArrowRight,
  Package,
  RotateCcw,
  Clock,
  MapPin,
  ChevronRight,
  Share2
} from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { useToast } from '../context/ToastContext';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const { showToast } = useToast();

  // Find product by slug or default to first product
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'details' | 'how-to-use'>('description');

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id);

  const handleAddToCart = () => {
    addToCart(product, undefined, quantity);
    setIsCartOpen(true);
    showToast(`${product.name} added to cart!`, undefined, 'success');
  };

  const handleBuyNow = () => {
    addToCart(product, undefined, quantity);
    navigate('/checkout');
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeChecked(true);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product Link Copied!', 'Share with friends & family', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Clickable Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: product.categoryName, to: `/#products` },
            { label: product.name }
          ]}
        />

        {/* Top Product Hero: Left Gallery / Right Purchasing Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Product Image Gallery (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-spiritual-earth-200/90 shadow-spiritual aspect-[4/3] sm:aspect-square flex items-center justify-center group">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Share Floating Button */}
              <button
                type="button"
                onClick={handleShare}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-spiritual-earth-700 hover:text-spiritual-gold-800 hover:bg-white transition-all shadow-sm"
                title="Share Product"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* Discount / Category Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                <span className="bg-spiritual-earth-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  {product.categoryName}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    Save {product.discountPercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-white ${
                      selectedImageIndex === idx
                        ? 'border-spiritual-gold-600 shadow-sm ring-1 ring-spiritual-gold-400'
                        : 'border-spiritual-earth-200/90 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Guarantees Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-2xl border border-spiritual-earth-200/80 text-center space-y-1">
                <Clock className="w-4 h-4 text-spiritual-gold-600 mx-auto" />
                <span className="text-[11px] font-bold text-spiritual-earth-900 block font-serif">24h Dispatch</span>
                <span className="text-[10px] text-spiritual-earth-500 block">Express Air Logistics</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-spiritual-earth-200/80 text-center space-y-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto" />
                <span className="text-[11px] font-bold text-spiritual-earth-900 block font-serif">100% Genuine</span>
                <span className="text-[10px] text-spiritual-earth-500 block">Authentic Divyamrit</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-spiritual-earth-200/80 text-center space-y-1">
                <RotateCcw className="w-4 h-4 text-indigo-600 mx-auto" />
                <span className="text-[11px] font-bold text-spiritual-earth-900 block font-serif">Safe Transit</span>
                <span className="text-[10px] text-spiritual-earth-500 block">Damage Replacement</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Product Purchasing Information & Actions (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title & Category Header */}
            <div className="space-y-2 border-b border-spiritual-earth-200/70 pb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-spiritual-gold-700">
                  Divyamrit Spiritual Brand
                </span>
                <span className="text-xs font-serif italic text-spiritual-earth-500">
                  {product.categoryName}
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-spiritual-earth-900 leading-tight">
                {product.name}
              </h1>

              {product.hindiName && (
                <p className="text-xs sm:text-sm font-serif italic text-spiritual-earth-600">
                  {product.hindiName}
                </p>
              )}
            </div>

            {/* Pricing Section (Accurate Pricing) */}
            <div className="bg-white p-4.5 sm:p-5 rounded-2xl border border-spiritual-earth-200/90 shadow-xs space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-black text-spiritual-earth-900">
                  {formatCurrency(product.price)}
                </span>

                {product.mrp > product.price ? (
                  <>
                    <span className="text-sm sm:text-base text-spiritual-earth-400 line-through">
                      MRP {formatCurrency(product.mrp)}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Save {formatCurrency(product.mrp - product.price)} (8% OFF)
                    </span>
                  </>
                ) : (
                  <span className="text-xs font-medium text-spiritual-earth-500 font-sans">
                    (MRP inclusive of all taxes)
                  </span>
                )}
              </div>
              
              <div className="text-xs text-spiritual-earth-600 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free Express Air Shipping on orders over ₹749</span>
              </div>
            </div>

            {/* Available Size / Variant Pill Display */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-spiritual-earth-800">
                Pack Size & Net Quantity
              </label>
              <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-spiritual-gold-50 border border-spiritual-gold-300 text-spiritual-earth-900 font-medium text-xs sm:text-sm">
                <Package className="w-4 h-4 text-spiritual-gold-700 shrink-0" />
                <span><strong>{product.packSize}</strong></span>
                {product.netQuantity && (
                  <span className="text-spiritual-earth-500">({product.netQuantity})</span>
                )}
              </div>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-spiritual-earth-700 leading-relaxed font-sans bg-white p-4 rounded-2xl border border-spiritual-earth-200/80">
              {product.shortDescription}
            </p>

            {/* Quantity Controls & Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-spiritual-earth-800">
                  Quantity:
                </span>
                
                <div className="flex items-center border border-spiritual-earth-300 rounded-2xl bg-white p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-spiritual-earth-700 hover:bg-spiritual-earth-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs sm:text-sm font-bold text-spiritual-earth-900 min-w-[28px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-spiritual-earth-700 hover:bg-spiritual-earth-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart & Buy Now Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-3.5 px-6 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-earth-800 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-spiritual-gold-300" />
                  <span>Add to Cart</span>
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 px-6 rounded-full bg-spiritual-gold-600 hover:bg-spiritual-gold-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-spiritual-gold-100" />
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Direct WhatsApp Ordering Assistance */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919820012345?text=${encodeURIComponent(`Hello Divyamrit, I would like to order ${quantity}x ${product.name} (${product.packSize}) at ${formatCurrency(product.price * quantity)}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Order via WhatsApp (+91 98200 12345)</span>
                </a>
              </div>
            </div>

            {/* Pincode Estimator Form */}
            <div className="p-4 bg-white rounded-2xl border border-spiritual-earth-200/80 space-y-2">
              <span className="text-xs font-bold text-spiritual-earth-900 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-spiritual-gold-600" />
                <span>Check Delivery & Cash on Delivery (COD)</span>
              </span>
              
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN Code"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-spiritual-bg font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-spiritual-earth-900 text-white text-xs font-semibold hover:bg-spiritual-gold-600 transition-colors"
                >
                  Check
                </button>
              </form>

              {pincodeChecked && (
                <div className="text-[11px] text-emerald-700 flex items-center gap-1.5 font-medium pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Express Air Delivery available for {pincode} in 2 to 4 business days.</span>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* BELOW SECTION: Tabs for Product Description, Key Features, Details Table, How to Use */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200/90 shadow-spiritual overflow-hidden">
          
          {/* Tabs Navigation Header */}
          <div className="flex items-center gap-2 border-b border-spiritual-earth-200 px-6 pt-4 overflow-x-auto">
            {[
              { id: 'description', label: 'Product Description' },
              { id: 'features', label: 'Key Features' },
              { id: 'details', label: 'Product Details' },
              { id: 'how-to-use', label: 'How to Use & Ritual' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-spiritual-gold-600 text-spiritual-gold-900'
                    : 'border-transparent text-spiritual-earth-500 hover:text-spiritual-earth-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Product Description */}
          {activeTab === 'description' && (
            <div className="p-6 sm:p-10 space-y-4 animate-fade-in text-xs sm:text-sm text-spiritual-earth-800 font-sans leading-relaxed whitespace-pre-line">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-spiritual-earth-900">
                About {product.name}
              </h3>
              <p className="leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Tab 2: Key Features */}
          {activeTab === 'features' && (
            <div className="p-6 sm:p-10 space-y-4 animate-fade-in">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-spiritual-earth-900">
                Key Product Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {product.keyFeatures?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-spiritual-earth-800 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Product Details Specifications Table */}
          {activeTab === 'details' && (
            <div className="p-6 sm:p-10 space-y-4 animate-fade-in">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-spiritual-earth-900">
                Complete Specifications
              </h3>
              
              <div className="overflow-hidden border border-spiritual-earth-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-spiritual-earth-200">
                  <tbody className="divide-y divide-spiritual-earth-100">
                    {product.productDetails && Object.entries(product.productDetails).map(([key, val]) => (
                      <tr key={key} className="hover:bg-spiritual-gold-50/30 transition-colors">
                        <td className="p-3.5 bg-spiritual-bg font-bold text-spiritual-earth-900 w-1/3 border-r border-spiritual-earth-200">
                          {key}
                        </td>
                        <td className="p-3.5 text-spiritual-earth-700">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 4: How to Use */}
          {activeTab === 'how-to-use' && (
            <div className="p-6 sm:p-10 space-y-4 animate-fade-in">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-spiritual-earth-900">
                Step-by-Step Pooja & Ritual Usage
              </h3>
              <div className="space-y-3 pt-2">
                {Array.isArray(product.howToUse) && product.howToUse.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80">
                    <span className="w-6 h-6 rounded-full bg-spiritual-gold-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-spiritual-earth-800 leading-relaxed font-sans">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-spiritual-gold-700 block">
                  Complete Your Sadhana
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900">
                  Related Spiritual Essentials
                </h3>
              </div>
              <Link to="/#products" className="text-xs font-bold text-spiritual-gold-800 hover:underline flex items-center gap-1">
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
