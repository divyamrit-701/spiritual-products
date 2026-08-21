import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageSquare, CheckCircle2, Truck, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface OrderSectionProps {
  selectedProduct: 'dhoop' | 'camphor' | 'both';
  onProductChange: (productType: 'dhoop' | 'camphor' | 'both') => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({
  selectedProduct,
  onProductChange
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Price calculations
  const productPrices = {
    dhoop: 349,
    camphor: 449,
    both: 749
  };

  const productNames = {
    dhoop: 'Pure Bambooless Dhoop Sticks (Pack of 40)',
    camphor: 'Pure Bhimseni Camphor Box (250g Jar)',
    both: 'Sacred Duo (Dhoop Sticks 40s + Bhimseni Camphor 250g)'
  };

  const subtotal = productPrices[selectedProduct] * quantity;
  const isFreeShipping = subtotal >= 749;
  const shippingFee = isFreeShipping ? 0 : 50;
  const total = subtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim() || !pincode.trim()) {
      alert('Please fill out your Name, Phone, Address, and PIN code.');
      return;
    }

    // Compose formatted WhatsApp message
    const orderDetails = `*🪔 DIVYAMRIT - NEW ORDER REQUEST*
----------------------------------
*Item:* ${productNames[selectedProduct]}
*Quantity:* ${quantity}
*Total Amount:* ₹${total} (incl. shipping)

*Customer Details:*
*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Address:* ${address.trim()}
*PIN Code:* ${pincode.trim()}
${notes.trim() ? `*Notes:* ${notes.trim()}` : ''}
----------------------------------
Please confirm my order and share payment/delivery details.`;

    const encodedMsg = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/919820012345?text=${encodedMsg}`;

    // Mark as submitted
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="order" className="py-16 sm:py-24 bg-spiritual-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Direct Ordering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Order Your Sacred Essentials
          </h2>
          <p className="text-sm text-spiritual-earth-600 font-sans">
            Direct, hassle-free ordering. Fill the simple form below to place your order via WhatsApp or receive a prompt confirmation.
          </p>
        </div>

        {/* Order Card Form */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-10 shadow-spiritual">
          
          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900">
                Order Sent with Devotion!
              </h3>
              <p className="text-xs sm:text-sm text-spiritual-earth-600 max-w-md mx-auto leading-relaxed font-sans">
                Your order request for <strong>{productNames[selectedProduct]}</strong> has been initiated via WhatsApp. Our team will verify your address and dispatch within 24 hours.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-spiritual-earth-300 text-xs font-semibold text-spiritual-earth-800 hover:bg-spiritual-gold-50"
                >
                  Place Another Order
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-bold text-spiritual-earth-800 uppercase tracking-wider mb-2.5">
                  1. Select Sacred Product *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  <button
                    type="button"
                    onClick={() => onProductChange('dhoop')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedProduct === 'dhoop'
                        ? 'border-spiritual-gold-500 bg-spiritual-gold-50/70 ring-1 ring-spiritual-gold-400'
                        : 'border-spiritual-earth-200 hover:border-spiritual-earth-300 bg-spiritual-bg/50'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-spiritual-earth-900">
                      Dhoop Sticks
                    </div>
                    <div className="text-xs text-spiritual-gold-800 font-extrabold mt-1">
                      ₹349 <span className="text-[10px] font-normal text-spiritual-earth-500">(40 Sticks)</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onProductChange('camphor')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedProduct === 'camphor'
                        ? 'border-spiritual-gold-500 bg-spiritual-gold-50/70 ring-1 ring-spiritual-gold-400'
                        : 'border-spiritual-earth-200 hover:border-spiritual-earth-300 bg-spiritual-bg/50'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-spiritual-earth-900">
                      Bhimseni Camphor
                    </div>
                    <div className="text-xs text-spiritual-gold-800 font-extrabold mt-1">
                      ₹449 <span className="text-[10px] font-normal text-spiritual-earth-500">(250g Jar)</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onProductChange('both')}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      selectedProduct === 'both'
                        ? 'border-spiritual-gold-500 bg-spiritual-gold-50/70 ring-1 ring-spiritual-gold-400'
                        : 'border-spiritual-earth-200 hover:border-spiritual-earth-300 bg-spiritual-bg/50'
                    }`}
                  >
                    <span className="absolute -top-2 right-3 bg-spiritual-gold-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Save ₹49
                    </span>
                    <div className="font-serif font-bold text-sm text-spiritual-earth-900">
                      Sacred Duo (Both)
                    </div>
                    <div className="text-xs text-spiritual-gold-800 font-extrabold mt-1">
                      ₹749 <span className="text-[10px] font-normal text-spiritual-earth-400 line-through">₹798</span>
                    </div>
                  </button>

                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-xs font-bold text-spiritual-earth-800 uppercase tracking-wider mb-2">
                  2. Select Quantity
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={`qty-${num}`}
                      type="button"
                      onClick={() => setQuantity(num)}
                      className={`w-10 h-10 rounded-xl border text-xs font-bold transition-all ${
                        quantity === num
                          ? 'bg-spiritual-earth-900 text-white border-spiritual-earth-900'
                          : 'bg-spiritual-bg border-spiritual-earth-200 text-spiritual-earth-800 hover:border-spiritual-gold-400'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Details */}
              <div className="space-y-4 pt-2 border-t border-spiritual-earth-100">
                <label className="block text-xs font-bold text-spiritual-earth-800 uppercase tracking-wider">
                  3. Delivery Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-spiritual-bg/40 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-sans"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-spiritual-bg/40 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      required
                      placeholder="Complete Address (House/Flat No., Street, City) *"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-spiritual-bg/40 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-sans"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="6-Digit PIN Code *"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-spiritual-bg/40 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Optional message / Puja notes / Delivery preferences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-spiritual-earth-300 bg-spiritual-bg/40 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-sans"
                  />
                </div>
              </div>

              {/* Cost Summary & Place Order CTA */}
              <div className="p-4 rounded-2xl bg-spiritual-gold-50 border border-spiritual-gold-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs text-spiritual-earth-600">
                    Total: <strong>{quantity}x {productNames[selectedProduct].split('(')[0]}</strong>
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-extrabold text-spiritual-earth-900">
                    ₹{total} {shippingFee === 0 ? <span className="text-xs text-emerald-700 font-sans font-bold">(Free Shipping)</span> : <span className="text-xs text-spiritual-earth-500 font-sans">(+₹50 Shipping)</span>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Place Order via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-spiritual-earth-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Advance Commitment Required • Pay via UPI or Cash on Delivery</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
