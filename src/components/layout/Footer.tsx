import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageSquare, 
  Heart, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer id="contact" className="bg-spiritual-earth-950 text-spiritual-earth-300 pt-16 pb-10 border-t border-spiritual-earth-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-spiritual-earth-800/80">
          
          {/* COLUMN 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-spiritual-gold-500/20 text-spiritual-gold-400 flex items-center justify-center border border-spiritual-gold-400/40 text-xl">
                🪔
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-wide block">
                  Divyamrit
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-spiritual-gold-400 font-sans">
                  Vedic Spiritual Essentials
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-spiritual-earth-400 font-sans leading-relaxed">
              Thoughtfully crafted spiritual essentials for your everyday rituals. Reviving the sacred ancient aromas of Sanatana Dharma with pure sandalwood, wild resins, and 100% pure Bhimseni camphor.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-spiritual-earth-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-spiritual-gold-400 shrink-0 mt-0.5" />
                <span>Sanctum House, Dashashwamedh Ghat Road, Varanasi, Uttar Pradesh – 221001, Bharat</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-spiritual-gold-400 shrink-0" />
                <a href="tel:+919820012345" className="hover:text-white transition-colors">+91 98200 12345</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-spiritual-gold-400 shrink-0" />
                <a href="mailto:care@divyamrit.com" className="hover:text-white transition-colors">care@divyamrit.com</a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: HELP & SUPPORT (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Help & Support
            </h4>
            <ul className="space-y-2 text-xs text-spiritual-earth-400 font-sans">
              <li>
                <button onClick={() => onNavClick('contact')} className="hover:text-spiritual-gold-400 transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="https://wa.me/919820012345" target="_blank" rel="noreferrer" className="hover:text-spiritual-gold-400 transition-colors">
                  Customer Care WhatsApp
                </a>
              </li>
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-spiritual-gold-400 transition-colors">
                  Frequently Asked Questions (FAQs)
                </button>
              </li>
              <li>
                <Link to="/shipping-returns" className="hover:text-spiritual-gold-400 transition-colors">
                  Track Your Parcel
                </Link>
              </li>
              <li>
                <button onClick={() => onNavClick('products')} className="hover:text-spiritual-gold-400 transition-colors">
                  Bulk & Temple Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: INFORMATION & POLICIES (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Information
            </h4>
            <ul className="space-y-2 text-xs text-spiritual-earth-400 font-sans">
              <li>
                <Link to="/privacy-policy" className="hover:text-spiritual-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-spiritual-gold-400 transition-colors">
                  Terms & Conditions of Sale
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="hover:text-spiritual-gold-400 transition-colors">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="hover:text-spiritual-gold-400 transition-colors">
                  Pan-India Shipping Policy
                </Link>
              </li>
              <li>
                <button onClick={() => onNavClick('why-us')} className="hover:text-spiritual-gold-400 transition-colors">
                  100% Purity Guarantee
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: FOLLOW US & NEWSLETTER (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Follow Us
            </h4>
            <p className="text-xs text-spiritual-earth-400 font-sans">
              Join our spiritual circle for morning shlokas & auspicious dates.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 hover:text-white flex items-center justify-center text-spiritual-earth-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 hover:text-white flex items-center justify-center text-spiritual-earth-300 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 hover:text-white flex items-center justify-center text-spiritual-earth-300 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919820012345"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-spiritual-gold-400/80 uppercase font-mono tracking-wider block">
                Official Store
              </span>
              <span className="text-xs text-spiritual-earth-300 font-medium">
                divyamrit.store
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Purity Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-spiritual-earth-500 font-sans text-center sm:text-left">
          <div>
            © 2026 Divyamrit Aromatics Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="flex items-center gap-1.5 text-spiritual-earth-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% Pure & Authentic Vedic Formulations
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted in India
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
