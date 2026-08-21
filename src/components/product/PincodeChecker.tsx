import React, { useState } from 'react';
import { MapPin, Truck, CheckCircle2, AlertCircle } from 'lucide-react';

export const PincodeChecker: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [deliveryInfo, setDeliveryInfo] = useState<{
    date: string;
    city: string;
    isExpress: boolean;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincode.trim();

    if (!/^[1-9][0-9]{5}$/.test(cleanPin)) {
      setStatus('error');
      setDeliveryInfo(null);
      return;
    }

    // Metro vs non-metro mock calculation based on first digit
    const firstDigit = cleanPin[0];
    const isMetro = ['1', '4', '5', '6', '7'].includes(firstDigit);
    
    const deliveryDays = isMetro ? 2 : 4;
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + deliveryDays);

    const formattedDate = targetDate.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });

    const mockCities: Record<string, string> = {
      '1': 'Delhi NCR & Northern Hub',
      '2': 'UP & Uttarakhand Region',
      '3': 'Rajasthan & Gujarat Hub',
      '4': 'Mumbai / Maharashtra Region',
      '5': 'Hyderabad / Telangana Hub',
      '6': 'Chennai & Tamil Nadu Hub',
      '7': 'Kolkata & Eastern Hub',
      '8': 'Bihar & Jharkhand Region',
      '9': 'Central & Western Hub'
    };

    setDeliveryInfo({
      date: formattedDate,
      city: mockCities[firstDigit] || 'Express Delivery Available',
      isExpress: true
    });
    setStatus('success');
  };

  return (
    <div className="bg-spiritual-earth-50/70 p-4 rounded-2xl border border-spiritual-earth-200/80 space-y-2.5">
      <div className="flex items-center gap-2 text-xs font-semibold text-spiritual-earth-800">
        <MapPin className="w-4 h-4 text-spiritual-gold-600 shrink-0" />
        <span>Check Delivery & Cod Availability</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input 
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit Pincode (e.g. 110001)"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/\D/g, ''));
            setStatus('idle');
          }}
          className="flex-1 px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-mono"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white rounded-xl text-xs font-semibold transition-colors"
        >
          Check
        </button>
      </form>

      {status === 'error' && (
        <div className="flex items-center gap-1.5 text-xs text-rose-600 animate-fade-in">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Please enter a valid 6-digit Indian PIN code.</span>
        </div>
      )}

      {status === 'success' && deliveryInfo && (
        <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1 animate-fade-in">
          <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Delivery to {deliveryInfo.city}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700 pl-5">
            <Truck className="w-3.5 h-3.5 shrink-0" />
            <span>Estimated Delivery by <strong>{deliveryInfo.date}</strong> (Express Air)</span>
          </div>
          <div className="pl-5 text-[11px] text-emerald-600">
            ✓ Cash on Delivery Available • Free Shipping on ₹999+
          </div>
        </div>
      )}
    </div>
  );
};
