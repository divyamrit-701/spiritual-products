import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';
import { Sparkles, Tag, CheckCircle2, ShieldCheck, Gift } from 'lucide-react';
import { Button } from '../ui/Button';

export const OrderSummary: React.FC = () => {
  const {
    cartItems,
    subtotal,
    discountAmount,
    shippingFee,
    giftWrapFee,
    total,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    isGiftWrap,
    toggleGiftWrap
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApply = (e: React.FormEvent) => {
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

  return (
    <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-7 shadow-spiritual space-y-6">
      
      <div className="flex items-center justify-between pb-4 border-b border-spiritual-earth-100">
        <h3 className="font-serif text-lg font-bold text-spiritual-earth-900">
          Order Summary ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
        </h3>
        <span className="text-xs text-spiritual-gold-700 font-semibold bg-spiritual-gold-50 px-2.5 py-1 rounded-full border border-spiritual-gold-200">
          256-Bit SSL Encrypted
        </span>
      </div>

      {/* Cart Items List */}
      <div className="max-h-60 overflow-y-auto divide-y divide-spiritual-earth-100 pr-1 scrollbar-thin">
        {cartItems.map((item) => {
          const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
          const key = `${item.product.id}-${item.selectedVariant?.id || 'std'}`;

          return (
            <div key={key} className="py-3 first:pt-0 last:pb-0 flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-spiritual-bg border border-spiritual-earth-200 shrink-0">
                <img 
                  src={item.product.images[0]} 
                  alt={item.product.name} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 bg-spiritual-earth-900 text-white text-[10px] font-bold px-1.5 rounded-tl-md">
                  x{item.quantity}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-serif font-bold text-spiritual-earth-900 truncate">
                  {item.product.name}
                </h4>
                {item.selectedVariant && (
                  <span className="text-[10px] text-spiritual-gold-700 font-medium block">
                    {item.selectedVariant.name}
                  </span>
                )}
                <span className="text-xs font-bold text-spiritual-earth-900 mt-0.5 block">
                  {formatCurrency(price * item.quantity)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gift wrapping toggle */}
      <label className="flex items-center gap-3 p-3 rounded-2xl bg-spiritual-gold-50/60 border border-spiritual-gold-200/80 cursor-pointer select-none text-xs text-spiritual-earth-800">
        <input 
          type="checkbox"
          checked={isGiftWrap}
          onChange={(e) => toggleGiftWrap(e.target.checked)}
          className="rounded text-spiritual-gold-600 focus:ring-spiritual-gold-400 w-4 h-4"
        />
        <Gift className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
        <span className="flex-1">
          Auspicious Gift Packaging & Hand-written Blessing Note (+<strong>₹49</strong>)
        </span>
      </label>

      {/* Coupon Code Section */}
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
        <form onSubmit={handleApply} className="space-y-1">
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
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-mono uppercase"
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

      {/* Calculation rows */}
      <div className="space-y-2 text-xs text-spiritual-earth-700 pt-2 border-t border-spiritual-earth-100">
        <div className="flex justify-between">
          <span>Item Subtotal</span>
          <span className="font-semibold text-spiritual-earth-900">{formatCurrency(subtotal)}</span>
        </div>

        {discountAmount > 0 && (
          <div className="flex justify-between text-emerald-700">
            <span>Special Devotee Discount</span>
            <span className="font-semibold">-{formatCurrency(discountAmount)}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Standard Express Shipping</span>
          <span className="font-semibold">
            {shippingFee === 0 ? (
              <span className="text-emerald-700 font-bold">FREE (Orders ₹999+)</span>
            ) : (
              formatCurrency(shippingFee)
            )}
          </span>
        </div>

        {giftWrapFee > 0 && (
          <div className="flex justify-between">
            <span>Gift Wrap & Blessing Note</span>
            <span className="font-semibold">{formatCurrency(giftWrapFee)}</span>
          </div>
        )}

        <div className="flex justify-between text-base font-serif font-bold text-spiritual-earth-900 pt-3 border-t border-spiritual-earth-200">
          <span>Grand Total (GST Included)</span>
          <span className="text-xl text-spiritual-gold-800">{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="p-3 bg-spiritual-earth-50 rounded-2xl text-[11px] text-spiritual-earth-600 flex items-center gap-2 border border-spiritual-earth-200/60">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>100% Money-back Transit Protection on all fragile items.</span>
      </div>

    </div>
  );
};
