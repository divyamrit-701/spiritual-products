import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Sparkles, 
  Tag, 
  Gift, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft,
  Lock,
  MessageSquare
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountAmount,
    shippingFee,
    giftWrapFee,
    total,
    freeShippingRemaining,
    freeShippingProgress,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    isGiftWrap,
    toggleGiftWrap,
    orderNote,
    setOrderNote
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setCouponInput('');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] bg-spiritual-bg py-12 sm:py-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-spiritual-gold-100 text-spiritual-gold-700 flex items-center justify-center mx-auto text-4xl shadow-inner">
            🪔
          </div>
          <h1 className="font-serif text-3xl font-bold text-spiritual-earth-900">
            Your Sacred Cart is Empty
          </h1>
          <p className="text-sm text-spiritual-earth-600 font-sans leading-relaxed">
            Fill your home with the divine purity of Bhimseni camphor, organic floral agarbatti, and authentic brass puja essentials.
          </p>
          <div className="pt-2">
            <Link to="/shop">
              <Button variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Sacred Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: 'Sacred Cart' }]} />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-spiritual-earth-200">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
              Your Sacred Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </h1>
            <p className="text-xs sm:text-sm text-spiritual-earth-600 font-sans mt-1">
              Review your selected devotional items before secure checkout.
            </p>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-rose-600 hover:underline font-semibold flex items-center gap-1 self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Entire Cart</span>
          </button>
        </div>

        {/* Free Shipping Progress Bar Banner */}
        <div className="p-4 sm:p-5 bg-white rounded-3xl border border-spiritual-gold-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-medium text-spiritual-earth-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-spiritual-gold-600" />
              {freeShippingRemaining === 0 ? (
                <strong className="text-emerald-700">
                  🎉 Congratulations! You unlocked Free Express Air Shipping!
                </strong>
              ) : (
                <span>
                  Add <strong className="text-spiritual-gold-800">{formatCurrency(freeShippingRemaining)}</strong> more to get <strong className="text-emerald-700">Free Express Air Shipping</strong>
                </span>
              )}
            </span>
            <span className="font-bold text-spiritual-gold-800">{freeShippingProgress}%</span>
          </div>
          <div className="w-full bg-spiritual-earth-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-spiritual-gold-500 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Grid: Cart Items (8 Cols) + Summary (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Items Table/List (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-3xl border border-spiritual-earth-200 shadow-spiritual overflow-hidden divide-y divide-spiritual-earth-100">
              
              {/* Header row on desktop */}
              <div className="hidden sm:grid grid-cols-12 p-4 bg-spiritual-earth-50 text-xs font-bold text-spiritual-earth-700 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {cartItems.map((item) => {
                const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
                const mrp = item.selectedVariant ? item.selectedVariant.mrp : item.product.mrp;
                const itemKey = `${item.product.id}-${item.selectedVariant?.id || 'std'}`;

                return (
                  <div key={itemKey} className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    
                    {/* Thumbnail + Name (Col 6) */}
                    <div className="sm:col-span-6 flex items-center gap-4">
                      <Link
                        to={`/products/${item.product.slug}`}
                        className="w-20 h-20 rounded-2xl overflow-hidden bg-spiritual-bg border border-spiritual-earth-200 shrink-0"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="min-w-0">
                        <Link
                          to={`/products/${item.product.slug}`}
                          className="font-serif font-bold text-sm sm:text-base text-spiritual-earth-900 hover:text-spiritual-gold-700 line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        {item.selectedVariant && (
                          <span className="text-xs font-semibold text-spiritual-gold-700 bg-spiritual-gold-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                            {item.selectedVariant.name}
                          </span>
                        )}
                        <div className="text-[11px] text-spiritual-earth-500 font-sans mt-0.5">
                          Fragrance: {item.product.fragrance}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedVariant?.id)}
                          className="text-xs text-rose-600 hover:underline inline-flex items-center gap-1 mt-1 font-medium"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* Price (Col 2) */}
                    <div className="sm:col-span-2 sm:text-center text-xs">
                      <span className="font-bold text-spiritual-earth-900 sm:block">{formatCurrency(price)}</span>
                      {mrp > price && (
                        <span className="text-[11px] text-spiritual-earth-400 line-through sm:block ml-2 sm:ml-0">
                          {formatCurrency(mrp)}
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls (Col 2) */}
                    <div className="sm:col-span-2 flex sm:justify-center">
                      <div className="flex items-center border border-spiritual-earth-300 rounded-2xl bg-white p-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedVariant?.id)}
                          className="p-1.5 text-spiritual-earth-600 hover:text-spiritual-earth-900 rounded-xl hover:bg-spiritual-earth-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-spiritual-earth-900 min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedVariant?.id)}
                          className="p-1.5 text-spiritual-earth-600 hover:text-spiritual-earth-900 rounded-xl hover:bg-spiritual-earth-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal (Col 2) */}
                    <div className="sm:col-span-2 sm:text-right font-bold font-serif text-sm sm:text-base text-spiritual-earth-900">
                      {formatCurrency(price * item.quantity)}
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Special Puja Note / Instructions */}
            <div className="bg-white p-5 rounded-3xl border border-spiritual-earth-200 shadow-sm space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-spiritual-earth-800">
                <MessageSquare className="w-4 h-4 text-spiritual-gold-600" />
                <span>Special Puja or Gifting Instructions (Optional)</span>
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please include Diwali greeting card addressed to Sharma Family..."
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-spiritual-bg focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-sans"
              />
            </div>

            {/* Continue Shopping Link */}
            <div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-xs font-semibold text-spiritual-earth-800 hover:text-spiritual-gold-700 underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Continue Shopping & Explore More Sacred Items</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Checkout Summary (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-7 shadow-spiritual space-y-6">
              <h3 className="font-serif text-xl font-bold text-spiritual-earth-900 pb-3 border-b border-spiritual-earth-100">
                Cart Summary
              </h3>

              {/* Gift wrap checkbox */}
              <label className="flex items-center gap-3 p-3 rounded-2xl bg-spiritual-gold-50/60 border border-spiritual-gold-200 cursor-pointer select-none text-xs text-spiritual-earth-800">
                <input
                  type="checkbox"
                  checked={isGiftWrap}
                  onChange={(e) => toggleGiftWrap(e.target.checked)}
                  className="rounded text-spiritual-gold-600 focus:ring-spiritual-gold-400 w-4 h-4"
                />
                <Gift className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
                <span className="flex-1">
                  Add Auspicious Gift Wrap (+<strong>₹49</strong>)
                </span>
              </label>

              {/* Coupon Form */}
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs">
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>{appliedCoupon.code}</strong> applied (-{formatCurrency(discountAmount)})</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-xs text-rose-600 font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-1">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-spiritual-earth-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Discount Code (e.g. DIVYAMRIT10)"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value);
                          setCouponError('');
                        }}
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white font-mono uppercase"
                      />
                    </div>
                    <Button type="submit" variant="secondary" size="sm">
                      Apply
                    </Button>
                  </div>
                  {couponError && (
                    <p className="text-[11px] text-rose-600 pl-1">{couponError}</p>
                  )}
                </form>
              )}

              {/* Cost breakdown */}
              <div className="space-y-2 text-xs text-spiritual-earth-700 pt-2 border-t border-spiritual-earth-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-spiritual-earth-900">{formatCurrency(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span className="font-semibold">-{formatCurrency(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold">
                    {shippingFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : formatCurrency(shippingFee)}
                  </span>
                </div>
                {giftWrapFee > 0 && (
                  <div className="flex justify-between">
                    <span>Gift Wrap</span>
                    <span className="font-semibold">{formatCurrency(giftWrapFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-serif font-bold text-spiritual-earth-900 pt-3 border-t border-spiritual-earth-200">
                  <span>Total Amount</span>
                  <span className="text-xl text-spiritual-gold-800">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <div className="space-y-2 pt-2">
                <Button
                  onClick={() => navigate('/checkout')}
                  variant="gold"
                  size="lg"
                  fullWidth
                  leftIcon={<Lock className="w-4 h-4" />}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Proceed to Secure Checkout
                </Button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-spiritual-earth-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Razorpay 256-Bit SSL Encrypted & Verified</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
