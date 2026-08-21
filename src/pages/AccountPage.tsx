import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { formatCurrency, formatDate } from '../utils/formatters';
import { Button } from '../components/ui/Button';
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  Trash2, 
  Plus, 
  CheckCircle2, 
  Truck, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Address } from '../types';

type AccountTab = 'orders' | 'addresses' | 'wishlist' | 'profile';

export const AccountPage: React.FC = () => {
  const { orders, savedAddresses, deleteAddress, saveAddress } = useOrder();
  const { wishlistIds } = useWishlist();
  
  const [activeTab, setActiveTab] = useState<AccountTab>('orders');
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  // Address add state
  const [newFullName, setNewFullName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newLine1, setNewLine1] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newState, setNewState] = useState('Maharashtra');
  const [newPincode, setNewPincode] = useState('');

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleSaveNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddr: Address = {
      fullName: newFullName,
      phone: newPhone,
      email: newEmail,
      addressLine1: newLine1,
      city: newCity,
      state: newState,
      pincode: newPincode,
      addressType: 'Home'
    };
    saveAddress(newAddr);
    setIsAddingAddress(false);
    // reset
    setNewFullName('');
    setNewPhone('');
    setNewEmail('');
    setNewLine1('');
    setNewCity('');
    setNewPincode('');
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: 'My Devotee Account' }]} />

        {/* User Banner */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-8 shadow-spiritual flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 font-serif font-bold text-2xl flex items-center justify-center border-2 border-spiritual-gold-300">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-bold text-spiritual-earth-900">
                  Aarav Sharma
                </h1>
                <span className="bg-spiritual-gold-100 text-spiritual-gold-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-spiritual-gold-300">
                  Devotee Member
                </span>
              </div>
              <p className="text-xs text-spiritual-earth-500 font-sans mt-0.5">
                aarav.sharma@example.com • +91 98234 56789
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-spiritual-earth-600 bg-spiritual-bg px-4 py-2 rounded-2xl border border-spiritual-earth-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Customer Profile</span>
          </div>
        </div>

        {/* Account Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-spiritual-earth-200 pb-2 overflow-x-auto">
          {[
            { id: 'orders', label: `My Orders (${orders.length})`, icon: <Package className="w-4 h-4" /> },
            { id: 'wishlist', label: `Saved Wishlist (${wishlistProducts.length})`, icon: <Heart className="w-4 h-4" /> },
            { id: 'addresses', label: `Saved Addresses (${savedAddresses.length})`, icon: <MapPin className="w-4 h-4" /> },
            { id: 'profile', label: 'Personal Profile', icon: <User className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AccountTab)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === tab.id
                  ? 'bg-spiritual-earth-900 text-white shadow-sm'
                  : 'text-spiritual-earth-700 hover:bg-spiritual-earth-100'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-12 text-center space-y-4">
                <Package className="w-12 h-12 text-spiritual-earth-300 mx-auto" />
                <h3 className="font-serif text-xl font-bold text-spiritual-earth-900">No Past Orders Found</h3>
                <p className="text-xs text-spiritual-earth-600">Your placed orders will appear here for easy live tracking.</p>
                <Link to="/shop">
                  <Button variant="gold" size="sm">Start Shopping</Button>
                </Link>
              </div>
            ) : (
              orders.map((ord) => (
                <div
                  key={ord.id}
                  className="bg-white rounded-3xl border border-spiritual-earth-200 shadow-spiritual overflow-hidden divide-y divide-spiritual-earth-100"
                >
                  {/* Order Header */}
                  <div className="p-5 sm:p-6 bg-spiritual-bg flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-serif font-bold text-base text-spiritual-earth-900 block">
                        Order #{ord.orderNumber}
                      </span>
                      <div className="text-spiritual-earth-500 font-sans">
                        Placed on {formatDate(ord.date)} • Payment: <strong className="text-spiritual-earth-800">{ord.paymentMethod}</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-[11px] text-spiritual-earth-400 block font-mono">Total Paid</span>
                        <span className="font-serif font-bold text-sm text-spiritual-gold-800">
                          {formatCurrency(ord.total)}
                        </span>
                      </div>
                      <span className="bg-spiritual-gold-100 text-spiritual-gold-900 px-3 py-1 rounded-full text-xs font-bold border border-spiritual-gold-300">
                        {ord.orderStatus}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="divide-y divide-spiritual-earth-100">
                      {ord.items.map((item) => (
                        <div key={item.id} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4 text-xs">
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-xl object-cover bg-spiritual-bg border border-spiritual-earth-200 shrink-0"
                            />
                            <div className="min-w-0">
                              <span className="font-serif font-bold text-sm text-spiritual-earth-900 truncate block">
                                {item.name}
                              </span>
                              {item.variantName && (
                                <span className="text-[11px] text-spiritual-gold-700 font-medium">{item.variantName}</span>
                              )}
                              <span className="text-spiritual-earth-500 block mt-0.5">Qty: {item.quantity}</span>
                            </div>
                          </div>
                          <span className="font-bold text-spiritual-earth-900 font-mono">
                            {formatCurrency(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Tracking Footer */}
                  <div className="p-4 sm:p-5 bg-spiritual-earth-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-spiritual-earth-700">
                      <Truck className="w-4 h-4 text-spiritual-gold-600" />
                      <span>{ord.deliveryPartner} • Tracking ID: <strong className="font-mono text-spiritual-earth-900">{ord.trackingNumber}</strong></span>
                    </div>
                    <Link
                      to={`/order-confirmation/${ord.id}`}
                      className="text-xs font-bold text-spiritual-gold-800 hover:underline"
                    >
                      View Live Stepper & Receipt &rarr;
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Wishlist */}
        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            {wishlistProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-12 text-center space-y-4">
                <Heart className="w-12 h-12 text-rose-300 mx-auto" />
                <h3 className="font-serif text-xl font-bold text-spiritual-earth-900">Your Wishlist is Empty</h3>
                <p className="text-xs text-spiritual-earth-600">Save your favorite pure incense, camphor, and brassware for later.</p>
                <Link to="/shop">
                  <Button variant="gold" size="sm">Explore Sacred Products</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Saved Addresses */}
        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-spiritual-earth-900">
                Your Saved Shipping Addresses
              </h3>
              <Button
                onClick={() => setIsAddingAddress(!isAddingAddress)}
                variant="secondary"
                size="sm"
                leftIcon={<Plus className="w-4 h-4" />}
              >
                {isAddingAddress ? 'Cancel' : 'Add New Address'}
              </Button>
            </div>

            {isAddingAddress && (
              <form onSubmit={handleSaveNewAddress} className="bg-white p-6 rounded-3xl border border-spiritual-earth-200 shadow-spiritual space-y-4 max-w-xl animate-slide-up">
                <h4 className="font-serif text-base font-bold text-spiritual-earth-900">Enter New Address</h4>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={newFullName}
                    onChange={(e) => setNewFullName(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone *"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300"
                />
                <textarea
                  required
                  rows={2}
                  placeholder="Street Address / Flat No. *"
                  value={newLine1}
                  onChange={(e) => setNewLine1(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="City *"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300"
                  />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="6-Digit Pincode *"
                    value={newPincode}
                    onChange={(e) => setNewPincode(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300"
                  />
                </div>
                <Button type="submit" variant="gold" size="sm">Save Address</Button>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedAddresses.map((addr, idx) => (
                <div
                  key={`addr-${idx}`}
                  className="bg-white p-6 rounded-3xl border border-spiritual-earth-200 shadow-spiritual space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1.5 text-xs text-spiritual-earth-800">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-spiritual-earth-900 font-serif">{addr.fullName}</span>
                      <span className="text-[10px] font-bold bg-spiritual-gold-50 text-spiritual-gold-800 px-2 py-0.5 rounded-full border border-spiritual-gold-200">
                        {addr.addressType}
                      </span>
                    </div>
                    <p className="text-spiritual-earth-600">{addr.phone}</p>
                    <p>{addr.addressLine1}</p>
                    {addr.addressLine2 && <p>{addr.addressLine2}</p>}
                    <p>{addr.city}, {addr.state} – <strong>{addr.pincode}</strong></p>
                  </div>

                  <div className="pt-3 border-t border-spiritual-earth-100 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Deliverable via BlueDart Air
                    </span>
                    <button
                      onClick={() => deleteAddress(idx)}
                      className="text-xs text-rose-600 hover:underline font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-10 shadow-spiritual max-w-2xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-spiritual-earth-900">
              Personal Information
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-spiritual-earth-800">
              <div>
                <label className="block text-xs font-semibold text-spiritual-earth-500 mb-1">Full Name</label>
                <div className="p-3 bg-spiritual-bg rounded-xl border border-spiritual-earth-200 font-medium">Aarav Sharma</div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-spiritual-earth-500 mb-1">Email Address</label>
                <div className="p-3 bg-spiritual-bg rounded-xl border border-spiritual-earth-200 font-medium">aarav.sharma@example.com</div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-spiritual-earth-500 mb-1">Mobile (WhatsApp Updates)</label>
                <div className="p-3 bg-spiritual-bg rounded-xl border border-spiritual-earth-200 font-mono">+91 98234 56789</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
