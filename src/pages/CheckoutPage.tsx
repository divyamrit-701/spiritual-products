import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import { Address, OrderItem } from '../types';
import { AddressForm } from '../components/checkout/AddressForm';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { RazorpayModal } from '../components/checkout/RazorpayModal';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { 
  ShieldCheck, 
  Lock, 
  Truck, 
  CreditCard, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  MapPin
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, discountAmount, appliedCoupon, shippingFee, giftWrapFee, total, isGiftWrap, orderNote, clearCart } = useCart();
  const { createOrder, savedAddresses } = useOrder();
  const { showToast } = useToast();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [shippingAddress, setShippingAddress] = useState<Address>(() => {
    return savedAddresses[0] || {
      fullName: '',
      phone: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: 'Maharashtra',
      pincode: '',
      addressType: 'Home',
      isDefault: true
    };
  });

  const [deliveryMethod, setDeliveryMethod] = useState<'standard' | 'express'>('standard');
  const [isRazorpayModalOpen, setIsRazorpayModalOpen] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] bg-spiritual-bg py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <div className="text-4xl">🪔</div>
          <h2 className="font-serif text-2xl font-bold text-spiritual-earth-900">
            Your Cart is Empty
          </h2>
          <p className="text-xs text-spiritual-earth-600">
            Please add items to your cart before proceeding to checkout.
          </p>
          <Link to="/shop">
            <Button variant="gold" size="md">
              Return to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingAddress.fullName || !shippingAddress.phone || !shippingAddress.email || !shippingAddress.addressLine1 || !shippingAddress.pincode || !shippingAddress.city) {
      showToast('Please fill in all required delivery address fields.', undefined, 'error');
      return;
    }
    if (!/^[1-9][0-9]{5}$/.test(shippingAddress.pincode.trim())) {
      showToast('Please enter a valid 6-digit Indian PIN code.', undefined, 'error');
      return;
    }
    setCurrentStep(2);
  };

  const handleStep2Submit = () => {
    setCurrentStep(3);
  };

  const handleInitiatePayment = () => {
    setIsRazorpayModalOpen(true);
  };

  const handlePaymentSuccess = async (paymentId: string, paymentMethodName: string) => {
    setIsRazorpayModalOpen(false);

    const orderItems: OrderItem[] = cartItems.map((ci) => {
      const price = ci.selectedVariant ? ci.selectedVariant.price : ci.product.price;
      return {
        id: `oi-${Date.now()}-${ci.product.id}`,
        productId: ci.product.id,
        name: ci.product.name,
        variantName: ci.selectedVariant?.name,
        image: ci.product.images[0],
        price,
        quantity: ci.quantity
      };
    });

    const isCod = paymentMethodName.includes('Cash on Delivery');

    try {
      const newOrder = await createOrder({
        items: orderItems,
        subtotal,
        discount: discountAmount,
        couponCode: appliedCoupon?.code,
        shippingFee,
        giftWrapFee,
        total,
        shippingAddress,
        paymentMethod: isCod ? 'Cash on Delivery (COD)' : 'Razorpay (UPI / Cards / NetBanking)',
        paymentStatus: isCod ? 'Pending COD Verification' : 'Paid',
        orderStatus: 'Order Placed',
        estimatedDelivery: 'In 2-3 Business Days (Express Air)',
        specialInstructions: orderNote
      });

      clearCart();
      showToast('Order Placed Successfully! 🪔', `Order #${newOrder.orderNumber} confirmed.`, 'success');
      navigate(`/order-confirmation/${newOrder.id}`);
    } catch (e) {
      showToast('Failed to create order', undefined, 'error');
    }
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs
          items={[
            { label: 'Cart', to: '/cart' },
            { label: 'Secure Checkout' }
          ]}
        />

        {/* Title & Steps Stepper */}
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Devotional Checkout & Delivery
          </h1>

          {/* Stepper indicator */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl">
            <div className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 ${
              currentStep >= 1 ? 'bg-white border-spiritual-gold-500 text-spiritual-gold-900 shadow-xs' : 'bg-spiritual-earth-100 text-spiritual-earth-500 border-transparent'
            }`}>
              <span className="w-5 h-5 rounded-full bg-spiritual-gold-500 text-white flex items-center justify-center text-[11px] font-bold">1</span>
              <span>Shipping Address</span>
            </div>

            <div className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 ${
              currentStep >= 2 ? 'bg-white border-spiritual-gold-500 text-spiritual-gold-900 shadow-xs' : 'bg-spiritual-earth-100 text-spiritual-earth-500 border-transparent'
            }`}>
              <span className="w-5 h-5 rounded-full bg-spiritual-gold-500 text-white flex items-center justify-center text-[11px] font-bold">2</span>
              <span>Delivery Method</span>
            </div>

            <div className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2 ${
              currentStep >= 3 ? 'bg-white border-spiritual-gold-500 text-spiritual-gold-900 shadow-xs' : 'bg-spiritual-earth-100 text-spiritual-earth-500 border-transparent'
            }`}>
              <span className="w-5 h-5 rounded-full bg-spiritual-gold-500 text-white flex items-center justify-center text-[11px] font-bold">3</span>
              <span>Payment</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Form Steps (7 Cols) + Summary (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Multi-step checkout panels */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Shipping Address */}
            <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-8 shadow-spiritual space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-spiritual-earth-100">
                <h3 className="font-serif text-lg font-bold text-spiritual-earth-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-spiritual-gold-600" />
                  <span>1. Delivery Address in India</span>
                </h3>
                {currentStep > 1 && (
                  <button 
                    onClick={() => setCurrentStep(1)}
                    className="text-xs font-semibold text-spiritual-gold-700 hover:underline"
                  >
                    Edit Address
                  </button>
                )}
              </div>

              {currentStep === 1 ? (
                <form onSubmit={handleStep1Submit} className="space-y-6">
                  <AddressForm address={shippingAddress} onChange={setShippingAddress} />

                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    fullWidth
                  >
                    Continue to Delivery Method &rarr;
                  </Button>
                </form>
              ) : (
                <div className="text-xs text-spiritual-earth-800 space-y-1 bg-spiritual-bg p-4 rounded-2xl border border-spiritual-earth-200">
                  <div className="font-bold text-sm text-spiritual-earth-900">{shippingAddress.fullName} ({shippingAddress.phone})</div>
                  <div>{shippingAddress.addressLine1}</div>
                  {shippingAddress.addressLine2 && <div>{shippingAddress.addressLine2}</div>}
                  <div>{shippingAddress.city}, {shippingAddress.state} – <strong>{shippingAddress.pincode}</strong></div>
                  <div className="text-[11px] text-spiritual-earth-500 font-mono mt-1">Receipt Email: {shippingAddress.email}</div>
                </div>
              )}
            </div>

            {/* Step 2: Delivery Method */}
            {currentStep >= 2 && (
              <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-8 shadow-spiritual space-y-6 animate-slide-up">
                <div className="flex items-center justify-between pb-3 border-b border-spiritual-earth-100">
                  <h3 className="font-serif text-lg font-bold text-spiritual-earth-900 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-spiritual-gold-600" />
                    <span>2. Delivery Speed & Logistics</span>
                  </h3>
                  {currentStep > 2 && (
                    <button 
                      onClick={() => setCurrentStep(2)}
                      className="text-xs font-semibold text-spiritual-gold-700 hover:underline"
                    >
                      Change
                    </button>
                  )}
                </div>

                {currentStep === 2 ? (
                  <div className="space-y-4">
                    <label className={`p-4 rounded-2xl border flex items-start justify-between gap-4 cursor-pointer transition-all ${
                      deliveryMethod === 'standard' 
                        ? 'border-spiritual-gold-500 bg-spiritual-gold-50/60 ring-1 ring-spiritual-gold-400' 
                        : 'border-spiritual-earth-200'
                    }`}>
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          checked={deliveryMethod === 'standard'}
                          onChange={() => setDeliveryMethod('standard')}
                          className="mt-1 text-spiritual-gold-600 focus:ring-spiritual-gold-400"
                        />
                        <div>
                          <div className="font-serif font-bold text-sm text-spiritual-earth-900">
                            Standard Express Air (BlueDart / Delhivery)
                          </div>
                          <div className="text-xs text-spiritual-earth-600 mt-0.5">
                            Delivered in 2 to 4 business days. Includes 100% transit damage protection.
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 font-mono">
                        {shippingFee === 0 ? 'FREE' : '₹70'}
                      </span>
                    </label>

                    <Button
                      onClick={handleStep2Submit}
                      variant="gold"
                      size="md"
                      fullWidth
                    >
                      Continue to Payment &rarr;
                    </Button>
                  </div>
                ) : (
                  <div className="text-xs text-spiritual-earth-800 bg-spiritual-bg p-4 rounded-2xl border border-spiritual-earth-200 flex items-center justify-between">
                    <span>Standard Express Air (BlueDart • 2-4 Days)</span>
                    <span className="font-bold text-emerald-700">{shippingFee === 0 ? 'FREE' : '₹70'}</span>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-8 shadow-spiritual space-y-6 animate-slide-up">
                <div className="flex items-center justify-between pb-3 border-b border-spiritual-earth-100">
                  <h3 className="font-serif text-lg font-bold text-spiritual-earth-900 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-spiritual-gold-600" />
                    <span>3. Payment Gateway Selection</span>
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-spiritual-gold-50/70 border border-spiritual-gold-200 text-xs text-spiritual-earth-800 space-y-1">
                    <strong className="block font-serif text-sm text-spiritual-earth-900">
                      Razorpay Multi-Option Payment Gateway
                    </strong>
                    <p>
                      Supports instant UPI (GPay, PhonePe, Paytm, QR), all Indian Debit & Credit Cards, 50+ Banks NetBanking, and Cash on Delivery (COD).
                    </p>
                  </div>

                  <Button
                    onClick={handleInitiatePayment}
                    variant="gold"
                    size="lg"
                    fullWidth
                    leftIcon={<Lock className="w-4 h-4" />}
                  >
                    Open Razorpay Gateway to Pay
                  </Button>

                  <div className="text-center pt-1">
                    <span className="text-[11px] text-spiritual-earth-500 font-mono">
                      🔒 256-Bit SSL Encrypted • Powered by Razorpay India
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Order Summary (5 Cols) */}
          <div className="lg:col-span-5">
            <OrderSummary />
          </div>

        </div>

      </div>

      {/* Razorpay Checkout Modal Simulator */}
      <RazorpayModal
        isOpen={isRazorpayModalOpen}
        onClose={() => setIsRazorpayModalOpen(false)}
        amount={total}
        customerName={shippingAddress.fullName}
        customerEmail={shippingAddress.email}
        customerPhone={shippingAddress.phone}
        onPaymentSuccess={handlePaymentSuccess}
      />

    </div>
  );
};
