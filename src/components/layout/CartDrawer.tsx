import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Gift, 
  Tag, 
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';
import { Button } from '../ui/Button';

export const CartDrawer: React.FC = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
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
    toggleGiftWrap
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isCartOpen) return null;

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

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-spiritual-earth-900/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slide-up border-l border-spiritual-earth-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-spiritual-earth-100 flex items-center justify-between bg-spiritual-bg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">
                  Your Sacred Cart
                </h2>
                <span className="text-xs text-spiritual-earth-500 font-sans">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-spiritual-earth-400 hover:text-spiritual-earth-800 hover:bg-spiritual-earth-100 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-spiritual-gold-50/70 border-b border-spiritual-gold-200/60">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium text-spiritual-earth-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-600" />
                {freeShippingRemaining === 0 ? (
                  <span className="text-emerald-700 font-semibold">
                    🎉 You unlocked Free Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-spiritual-gold-800">{formatCurrency(freeShippingRemaining)}</strong> for <strong className="text-emerald-700">Free Express Shipping</strong>
                  </span>
                )}
              </span>
              <span className="text-[11px] font-bold text-spiritual-gold-800">
                {freeShippingProgress}%
              </span>
            </div>
            <div className="w-full bg-spiritual-earth-200/80 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-spiritual-gold-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-spiritual-earth-100">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-spiritual-gold-50 flex items-center justify-center text-spiritual-gold-500 text-3xl">
                  🪔
                </div>
                <h3 className="font-serif text-xl font-semibold text-spiritual-earth-900">
                  Your cart is empty
                </h3>
                <p className="text-xs text-spiritual-earth-600 max-w-xs leading-relaxed">
                  Bring divine serenity, authentic Bhimseni camphor, and floral dhoop into your home.
                </p>
                <Button 
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  variant="gold"
                  size="sm"
                >
                  Explore Sacred Products
                </Button>
              </div>
            ) : (
              cartItems.map((item) => {
                const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
                const mrp = item.selectedVariant ? item.selectedVariant.mrp : item.product.mrp;
                const itemKey = `${item.product.id}-${item.selectedVariant?.id || 'default'}`;

                return (
                  <div key={itemKey} className="py-4 first:pt-0 last:pb-0 flex gap-3.5 group">
                    {/* Thumbnail */}
                    <Link
                      to={`/products/${item.product.slug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="w-20 h-20 rounded-xl overflow-hidden bg-spiritual-earth-50 border border-spiritual-earth-200 shrink-0"
                    >
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link 
                            to={`/products/${item.product.slug}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-serif text-sm font-semibold text-spiritual-earth-900 hover:text-spiritual-gold-700 transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedVariant?.id)}
                            className="text-spiritual-earth-400 hover:text-rose-600 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {item.selectedVariant && (
                          <span className="text-[11px] font-medium text-spiritual-gold-700 bg-spiritual-gold-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                            {item.selectedVariant.name}
                          </span>
                        )}

                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-sm font-bold text-spiritual-earth-900">
                            {formatCurrency(price)}
                          </span>
                          {mrp > price && (
                            <span className="text-xs text-spiritual-earth-400 line-through">
                              {formatCurrency(mrp)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center border border-spiritual-earth-300 rounded-full bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedVariant?.id)}
                            className="p-1 text-spiritual-earth-600 hover:text-spiritual-earth-900 px-2 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-spiritual-earth-900 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedVariant?.id)}
                            className="p-1 text-spiritual-earth-600 hover:text-spiritual-earth-900 px-2 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-semibold text-spiritual-earth-800">
                          {formatCurrency(price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer / Summary if items present */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-spiritual-bg border-t border-spiritual-earth-200 space-y-3.5">
              
              {/* Gift wrap checkbox */}
              <label className="flex items-center gap-2.5 text-xs text-spiritual-earth-800 bg-white p-2.5 rounded-xl border border-spiritual-earth-200 cursor-pointer hover:border-spiritual-gold-300 transition-colors">
                <input 
                  type="checkbox" 
                  checked={isGiftWrap}
                  onChange={(e) => toggleGiftWrap(e.target.checked)}
                  className="rounded text-spiritual-gold-600 focus:ring-spiritual-gold-400 w-4 h-4"
                />
                <Gift className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
                <span className="flex-1">
                  Add Auspicious Gift Wrap & Blessing Note (<strong className="text-spiritual-earth-900">+₹49</strong>)
                </span>
              </label>

              {/* Coupon Form */}
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                  <div className="flex items-center gap-2 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>{appliedCoupon.code}</strong> applied (-{formatCurrency(discountAmount)})</span>
                  </div>
                  <button 
                    onClick={removeCoupon}
                    className="text-xs text-rose-600 hover:underline font-semibold"
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
                        placeholder="Coupon (e.g. DIVYAMRIT10)"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value);
                          setCouponError('');
                        }}
                        className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 uppercase font-mono"
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

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-spiritual-earth-700 pt-1 border-t border-spiritual-earth-200/60">
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
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700">FREE</span>
                    ) : (
                      formatCurrency(shippingFee)
                    )}
                  </span>
                </div>
                {giftWrapFee > 0 && (
                  <div className="flex justify-between">
                    <span>Gift Wrap</span>
                    <span className="font-semibold">{formatCurrency(giftWrapFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-spiritual-earth-900 pt-2 border-t border-spiritual-earth-200">
                  <span>Total Amount</span>
                  <span className="text-base text-spiritual-gold-800">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Checkout Action Buttons */}
              <div className="space-y-2 pt-1">
                <Button 
                  onClick={handleProceedToCheckout}
                  variant="gold"
                  size="md"
                  fullWidth
                  leftIcon={<Lock className="w-4 h-4" />}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Proceed to Secure Checkout
                </Button>

                <div className="flex items-center justify-between text-xs text-spiritual-earth-600 px-1">
                  <Link 
                    to="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="underline text-spiritual-earth-800 hover:text-spiritual-gold-700 font-medium"
                  >
                    View Full Cart Page
                  </Link>
                  <span className="flex items-center gap-1 text-[11px] text-spiritual-earth-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Razorpay 256-Bit SSL
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
