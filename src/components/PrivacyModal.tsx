import React from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl border border-spiritual-earth-200 max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 relative max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-spiritual-earth-500 hover:text-spiritual-earth-900 hover:bg-spiritual-earth-100 transition-colors"
          aria-label="Close Privacy Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Purity Policy</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-spiritual-earth-900">
            Privacy & Trust Policy
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-spiritual-earth-700 font-sans leading-relaxed">
          <div>
            <strong className="text-spiritual-earth-900 block mb-1">1. Customer Privacy Commitment</strong>
            <p>
              Divyamrit collects only the necessary shipping and contact details (Name, Phone Number, Delivery Address) strictly to dispatch your spiritual products via express logistics. We will never sell, rent, or share your personal details with third-party marketers.
            </p>
          </div>

          <div>
            <strong className="text-spiritual-earth-900 block mb-1">2. 100% Purity & Natural Variations</strong>
            <p>
              Our Dhoop Sticks and Bhimseni Camphor are handcrafted using pure botanical crystals, wild resins, and aged sandalwood without synthetic colors or chemicals. Slight natural color variations between batches are a hallmark of authentic, unadulterated botanical ingredients.
            </p>
          </div>

          <div>
            <strong className="text-spiritual-earth-900 block mb-1">3. Direct WhatsApp Ordering & Safety</strong>
            <p>
              Ordering directly connects you with our consecrated support team in Varanasi. Payment can be finalized conveniently via UPI or Cash on Delivery upon shipment verification.
            </p>
          </div>

          <div>
            <strong className="text-spiritual-earth-900 block mb-1">4. Contact & Support</strong>
            <p>
              For any questions regarding your order or spiritual formulations, contact us anytime at <span className="font-semibold text-spiritual-earth-900">care@divyamrit.com</span> or WhatsApp <span className="font-semibold text-spiritual-earth-900">+91 98200 12345</span>.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white text-xs font-bold transition-all"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
