import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { formatCurrency, formatDate } from '../utils/formatters';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  MapPin, 
  Printer, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderById } = useOrder();

  const order = getOrderById(orderId || '') || {
    id: 'ord-divya-sample',
    orderNumber: 'DA-2026-98231',
    date: new Date().toISOString().split('T')[0],
    items: [
      {
        id: 'oi-sample',
        productId: 'prod-dhoop-01',
        name: 'Mysore Sandalwood Bambooless Dhoop Sticks',
        variantName: '40 Sticks',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
        price: 349,
        quantity: 2
      }
    ],
    subtotal: 698,
    discount: 0,
    shippingFee: 0,
    giftWrapFee: 0,
    total: 698,
    shippingAddress: {
      fullName: 'Aarav Sharma',
      phone: '+91 98234 56789',
      email: 'aarav.sharma@example.com',
      addressLine1: 'Flat 402, Shiv Shanti Residency, FC Road',
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411004',
      addressType: 'Home' as const
    },
    paymentMethod: 'Razorpay (UPI / Cards / NetBanking)' as const,
    paymentStatus: 'Paid' as const,
    orderStatus: 'Order Placed' as const,
    estimatedDelivery: 'In 2-3 Business Days (Express Air)',
    trackingNumber: 'BD-88239120',
    deliveryPartner: 'BlueDart Express Air'
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: 'Order Confirmed' }]} />

        {/* Celebratory Banner */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-8 sm:p-12 text-center shadow-spiritual space-y-4">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devotional Blessings Placed</span>
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-spiritual-earth-900">
            Thank You for Your Sacred Order!
          </h1>

          <p className="text-xs sm:text-sm text-spiritual-earth-600 max-w-md mx-auto leading-relaxed">
            Order <strong className="text-spiritual-earth-900 font-mono">#{order.orderNumber}</strong> has been received. A confirmation email with receipt and live BlueDart tracking has been sent to <strong>{order.shippingAddress.email}</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              leftIcon={<Printer className="w-4 h-4" />}
            >
              Print Devotional Receipt
            </Button>
            <Link to="/account">
              <Button variant="secondary" size="sm">
                View in My Account
              </Button>
            </Link>
          </div>
        </div>

        {/* Live Order Tracking Stepper */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-8 shadow-spiritual space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-spiritual-earth-100">
            <div>
              <h3 className="font-serif text-lg font-bold text-spiritual-earth-900">
                Live Order Journey
              </h3>
              <span className="text-xs text-spiritual-earth-500 font-mono">
                Tracking ID: {order.trackingNumber} ({order.deliveryPartner})
              </span>
            </div>
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
              Estimated Delivery: {order.estimatedDelivery}
            </div>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {[
              { title: 'Order Confirmed', subtitle: 'Payment Verified', active: true },
              { title: 'Ritual Blessed & Packed', subtitle: 'In Varanasi Sanctum', active: true },
              { title: 'In Transit', subtitle: 'Air Express Logistics', active: false },
              { title: 'Out for Delivery', subtitle: 'To Your Doorstep', active: false }
            ].map((step, idx) => (
              <div key={`track-${idx}`} className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.active ? 'bg-spiritual-gold-600 text-white' : 'bg-spiritual-earth-100 text-spiritual-earth-400'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className={`h-1 flex-1 rounded ${step.active ? 'bg-spiritual-gold-500' : 'bg-spiritual-earth-100'}`} />
                </div>
                <div>
                  <div className={`text-xs font-bold font-serif ${step.active ? 'text-spiritual-earth-900' : 'text-spiritual-earth-400'}`}>
                    {step.title}
                  </div>
                  <div className="text-[10px] text-spiritual-earth-500 font-sans">
                    {step.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details & Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Shipping Address */}
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 shadow-spiritual space-y-3">
            <h4 className="font-serif text-base font-bold text-spiritual-earth-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-spiritual-gold-600" />
              <span>Delivery Destination</span>
            </h4>
            <div className="text-xs text-spiritual-earth-700 space-y-1 leading-relaxed">
              <div className="font-bold text-spiritual-earth-900">{order.shippingAddress.fullName}</div>
              <div>{order.shippingAddress.phone}</div>
              <div>{order.shippingAddress.addressLine1}</div>
              {order.shippingAddress.addressLine2 && <div>{order.shippingAddress.addressLine2}</div>}
              <div>{order.shippingAddress.city}, {order.shippingAddress.state} – <strong>{order.shippingAddress.pincode}</strong></div>
              <div className="pt-2 text-[11px] text-spiritual-earth-500">Payment: <strong>{order.paymentMethod}</strong> ({order.paymentStatus})</div>
            </div>
          </div>

          {/* Items & Payment Total */}
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 shadow-spiritual space-y-3">
            <h4 className="font-serif text-base font-bold text-spiritual-earth-900 flex items-center gap-2">
              <Package className="w-4 h-4 text-spiritual-gold-600" />
              <span>Sacred Items Summary</span>
            </h4>
            
            <div className="space-y-2 max-h-40 overflow-y-auto divide-y divide-spiritual-earth-100 pr-1">
              {order.items.map((item) => (
                <div key={item.id} className="py-2 flex items-center justify-between text-xs">
                  <div className="truncate max-w-[220px]">
                    <span className="font-semibold text-spiritual-earth-900">{item.name}</span>
                    {item.variantName && <span className="text-[10px] text-spiritual-gold-700 block">{item.variantName}</span>}
                  </div>
                  <span className="font-mono text-spiritual-earth-700">x{item.quantity} = {formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-spiritual-earth-100 flex items-center justify-between text-sm font-bold font-serif text-spiritual-earth-900">
              <span>Total Paid:</span>
              <span className="text-spiritual-gold-800 text-base">{formatCurrency(order.total)}</span>
            </div>
          </div>

        </div>

        {/* Back to Shop */}
        <div className="text-center pt-4">
          <Link to="/shop">
            <Button variant="gold" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Continue Exploring Collection
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};
