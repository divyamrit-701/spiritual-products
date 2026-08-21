import React from 'react';
import { Address } from '../../types';
import { MapPin, User, Phone, Mail, Home, Building, Building2 } from 'lucide-react';

interface AddressFormProps {
  address: Address;
  onChange: (updated: Address) => void;
}

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi NCR', 'Jammu & Kashmir', 'Ladakh', 'Puducherry'
];

export const AddressForm: React.FC<AddressFormProps> = ({ address, onChange }) => {
  const handleChange = (field: keyof Address, value: any) => {
    onChange({ ...address, [field]: value });
  };

  return (
    <div className="space-y-4">
      
      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-spiritual-earth-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              required
              placeholder="e.g. Aarav Sharma"
              value={address.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
            Mobile Number (for delivery SMS & OTP) *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-spiritual-earth-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="tel"
              required
              maxLength={15}
              placeholder="+91 98234 56789"
              value={address.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
          Email Address (for order receipt & tracking) *
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-spiritual-earth-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="email"
            required
            placeholder="aarav.sharma@example.com"
            value={address.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
          />
        </div>
      </div>

      {/* Street Address Line 1 */}
      <div>
        <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
          Flat / House No., Building Name, Street *
        </label>
        <div className="relative">
          <MapPin className="w-4 h-4 text-spiritual-earth-400 absolute left-3 top-3" />
          <textarea 
            required
            rows={2}
            placeholder="e.g. Flat 402, Shiv Shanti Residency, FC Road"
            value={address.addressLine1}
            onChange={(e) => handleChange('addressLine1', e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-sans"
          />
        </div>
      </div>

      {/* Landmark / Line 2 */}
      <div>
        <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
          Landmark / Area (Optional)
        </label>
        <input 
          type="text"
          placeholder="e.g. Near Gokhale Monument / Opposite Shiva Temple"
          value={address.addressLine2 || ''}
          onChange={(e) => handleChange('addressLine2', e.target.value)}
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
        />
      </div>

      {/* Pincode, City, State */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
            6-Digit Pincode *
          </label>
          <input 
            type="text"
            required
            maxLength={6}
            placeholder="e.g. 411004"
            value={address.pincode}
            onChange={(e) => handleChange('pincode', e.target.value.replace(/\D/g, ''))}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
            City / Town *
          </label>
          <input 
            type="text"
            required
            placeholder="e.g. Pune"
            value={address.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
            State *
          </label>
          <select
            value={address.state}
            onChange={(e) => handleChange('state', e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
          >
            {INDIAN_STATES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Address Type Selector */}
      <div>
        <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1.5">
          Address Type
        </label>
        <div className="flex gap-3">
          {[
            { id: 'Home', icon: <Home className="w-3.5 h-3.5" /> },
            { id: 'Office', icon: <Building className="w-3.5 h-3.5" /> },
            { id: 'Mandir / Ashram', icon: <Building2 className="w-3.5 h-3.5" /> }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleChange('addressType', item.id as any)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                address.addressType === item.id
                  ? 'bg-spiritual-gold-100 border-spiritual-gold-500 text-spiritual-gold-900 font-bold'
                  : 'bg-white border-spiritual-earth-200 text-spiritual-earth-700 hover:border-spiritual-gold-300'
              }`}
            >
              {item.icon}
              <span>{item.id}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
