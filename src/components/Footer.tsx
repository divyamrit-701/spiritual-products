import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="bg-spiritual-earth-950 text-spiritual-earth-300 py-12 border-t border-spiritual-earth-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Info Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-spiritual-earth-800/80 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl">🪔</span>
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Divyamrit
              </span>
            </div>
            <p className="text-xs text-spiritual-earth-400 font-sans max-w-sm">
              Thoughtfully crafted spiritual essentials for your everyday rituals.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-spiritual-earth-300">
            <a 
              href="tel:+919820012345" 
              className="flex items-center gap-1.5 hover:text-spiritual-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-spiritual-gold-500" />
              <span>+91 98200 12345</span>
            </a>
            <a 
              href="mailto:care@divyamrit.com" 
              className="flex items-center gap-1.5 hover:text-spiritual-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-spiritual-gold-500" />
              <span>care@divyamrit.com</span>
            </a>
            <span className="flex items-center gap-1.5 text-spiritual-earth-400">
              <MapPin className="w-3.5 h-3.5 text-spiritual-gold-500" />
              <span>Varanasi, UP, Bharat</span>
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 hover:text-white flex items-center justify-center text-spiritual-earth-300 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Privacy Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-spiritual-earth-500 font-sans">
          <div>
            © 2026 Divyamrit Aromatics Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onPrivacyClick}
              className="hover:text-spiritual-gold-400 underline underline-offset-2 transition-colors"
            >
              Privacy Policy & Terms
            </button>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in India
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
