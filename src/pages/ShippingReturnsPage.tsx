import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Truck, RotateCcw, ShieldCheck, Clock, MapPin, PackageCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Shipping & Returns Policy' }]} />

        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-spiritual-gold-100 text-spiritual-gold-900 text-xs font-semibold border border-spiritual-gold-300">
            <Truck className="w-3.5 h-3.5" />
            <span>Pan-India Delivery Guarantee</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-spiritual-earth-900">
            Shipping & Returns Policy
          </h1>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans max-w-xl mx-auto">
            Clear, transparent policies crafted with utmost care for your sacred puja essentials.
          </p>
        </div>

        {/* 3 Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-spiritual-earth-200 shadow-sm space-y-2 text-center">
            <Clock className="w-8 h-8 text-spiritual-gold-600 mx-auto" />
            <h3 className="font-serif text-base font-bold text-spiritual-earth-900">24-Hour Dispatch</h3>
            <p className="text-xs text-spiritual-earth-600">All orders are ritual-inspected and packed within 24 hours.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-spiritual-earth-200 shadow-sm space-y-2 text-center">
            <Truck className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="font-serif text-base font-bold text-spiritual-earth-900">Free Over ₹999</h3>
            <p className="text-xs text-spiritual-earth-600">Free Express Air Shipping across all 28,000+ Indian PIN codes.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-spiritual-earth-200 shadow-sm space-y-2 text-center">
            <ShieldCheck className="w-8 h-8 text-indigo-600 mx-auto" />
            <h3 className="font-serif text-base font-bold text-spiritual-earth-900">100% Transit Safe</h3>
            <p className="text-xs text-spiritual-earth-600">Free immediate replacement for any brass or glass breakage.</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-10 shadow-spiritual space-y-8 text-xs sm:text-sm text-spiritual-earth-800 font-sans leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-spiritual-earth-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-spiritual-gold-600" />
              <span>1. Delivery Timelines Across Bharat</span>
            </h2>
            <p>
              We partner with India's leading logistics providers including <strong>BlueDart Express, Delhivery, DTDC, and India Post Speed Post</strong> to reach every corner of the nation.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-left text-xs divide-y divide-spiritual-earth-200 border border-spiritual-earth-200 rounded-xl">
                <thead className="bg-spiritual-earth-50 text-spiritual-earth-800 font-bold">
                  <tr>
                    <th className="p-3">Destination Region</th>
                    <th className="p-3">Estimated Transit Time</th>
                    <th className="p-3">Courier Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-spiritual-earth-100">
                  <tr>
                    <td className="p-3 font-semibold">Tier 1 Metros (Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Pune)</td>
                    <td className="p-3">2 – 3 Business Days</td>
                    <td className="p-3 text-spiritual-gold-800 font-medium">Express Air Cargo</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Tier 2 & 3 Cities (Jaipur, Lucknow, Ahmedabad, Chandigarh, Kochi, Patna, etc.)</td>
                    <td className="p-3">3 – 4 Business Days</td>
                    <td className="p-3 text-spiritual-gold-800 font-medium">Express Air / Surface</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">North-East, J&K, Himachal & Remote Postal Areas</td>
                    <td className="p-3">5 – 7 Business Days</td>
                    <td className="p-3 text-spiritual-gold-800 font-medium">Speed Post Air</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-spiritual-earth-100">
            <h2 className="font-serif text-xl font-bold text-spiritual-earth-900 flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-spiritual-gold-600" />
              <span>2. Shockproof Sacred Packaging</span>
            </h2>
            <p>
              We treat devotional brassware, crystal attar bottles, and glass akhand diyas with deep respect. Every package is protected using:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-spiritual-earth-700">
              <li>5-ply heavy corrugated outer shipping box.</li>
              <li>High-density molded honeycomb air-cushioning.</li>
              <li>Moisture-resistant inner sealing for fresh Bhimseni camphor and dhoop resins.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-spiritual-earth-100">
            <h2 className="font-serif text-xl font-bold text-spiritual-earth-900 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-spiritual-gold-600" />
              <span>3. Replacement & Returns Policy</span>
            </h2>
            <p>
              Because spiritual and puja items are sanctified for personal worship, opened consumable products (like dhoop sticks or camphor) cannot be restocked once burnt. However, we offer an unconditional guarantee:
            </p>
            <div className="p-4 rounded-2xl bg-spiritual-gold-50 border border-spiritual-gold-200 text-spiritual-earth-900 space-y-2">
              <strong className="block font-serif text-sm">Damaged in Transit / Wrong Item Received?</strong>
              <p className="text-xs">
                Simply send a photo of the damaged package or broken glass/brass within 48 hours of delivery to <strong className="text-spiritual-gold-900">care@divyamrit.com</strong> or WhatsApp <strong className="text-spiritual-gold-900">+91 98200 12345</strong>. We will dispatch a brand new replacement immediately with zero questions asked.
              </p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
