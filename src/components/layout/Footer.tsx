import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  RotateCcw, 
  Send,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { CATEGORIES } from '../../data/categories';
import { useToast } from '../../context/ToastContext';

export const Footer: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address', undefined, 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to Spiritual Circle ✨', 'Check your inbox for 10% off code DIVYAMRIT10', 'success');
  };

  return (
    <footer className="bg-spiritual-earth-900 text-spiritual-cream pt-16 pb-8 border-t border-spiritual-earth-800">
      
      {/* 4 Feature Badges on top of footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-spiritual-earth-800/80">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-spiritual-earth-800 flex items-center justify-center text-spiritual-gold-400 shrink-0 border border-spiritual-earth-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">100% Pure & Authentic</h4>
              <p className="text-xs text-spiritual-earth-300 mt-1 leading-relaxed">
                Zero charcoal, zero toxic fillers, and original Bhimseni camphor.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-spiritual-earth-800 flex items-center justify-center text-spiritual-gold-400 shrink-0 border border-spiritual-earth-700">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">Express Delivery</h4>
              <p className="text-xs text-spiritual-earth-300 mt-1 leading-relaxed">
                Fast shipping across all 28,000+ Indian pincodes. Free on orders ₹999+.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-spiritual-earth-800 flex items-center justify-center text-spiritual-gold-400 shrink-0 border border-spiritual-earth-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">Safe & Secure</h4>
              <p className="text-xs text-spiritual-earth-300 mt-1 leading-relaxed">
                256-bit encrypted checkout via Razorpay with UPI and COD options.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-spiritual-earth-800 flex items-center justify-center text-spiritual-gold-400 shrink-0 border border-spiritual-earth-700">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">Guaranteed Transit</h4>
              <p className="text-xs text-spiritual-earth-300 mt-1 leading-relaxed">
                Hassle-free replacement for any transit damage or breakages.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Story & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-spiritual-earth-300 leading-relaxed max-w-sm font-sans pt-1">
              Divyamrit is devoted to reviving ancient Vedic aromatics, pure Bhimseni camphor, and sacred temple-flower incense. We honor Sanatana traditions while empowering rural artisan women in Bharat.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-spiritual-gold-300 font-serif">
              <span>ॐ असतो मा सद्गमय • तमसो मा ज्योतिर्गमय</span>
            </div>

            <div className="pt-2 text-xs text-spiritual-earth-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-spiritual-gold-500 shrink-0" />
                <span>Sanctum House, Dashashwamedh Ghat Road, Varanasi 221001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-spiritual-gold-500 shrink-0" />
                <span>+91 98200 12345 (Mon - Sat, 9 AM - 7 PM IST)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-spiritual-gold-500 shrink-0" />
                <span>care@divyamrit.com / bulk@divyamrit.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 tracking-wide uppercase text-xs">
              Sacred Products
            </h3>
            <ul className="space-y-2.5 text-xs text-spiritual-earth-300">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/category/${cat.slug}`}
                    className="hover:text-spiritual-gold-300 transition-colors inline-block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/portfolio" className="text-spiritual-gold-400 font-semibold hover:underline">
                  Full Catalogue &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Support */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 tracking-wide uppercase text-xs">
              Customer Support
            </h3>
            <ul className="space-y-2.5 text-xs text-spiritual-earth-300">
              <li>
                <Link to="/about" className="hover:text-spiritual-gold-300 transition-colors">
                  About Divyamrit
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-spiritual-gold-300 transition-colors">
                  Our Sacred Story & Heritage
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-spiritual-gold-300 transition-colors">
                  Themed Collections
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-spiritual-gold-300 transition-colors">
                  Spiritual Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-spiritual-gold-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="hover:text-spiritual-gold-300 transition-colors">
                  Shipping & Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-spiritual-gold-300 transition-colors">
                  Contact & Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-spiritual-gold-300 transition-colors">
                  Track My Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Spiritual Newsletter */}
          <div className="space-y-3.5">
            <h3 className="font-serif text-base font-bold text-white tracking-wide uppercase text-xs">
              Join Our Spiritual Circle
            </h3>
            <p className="text-xs text-spiritual-earth-300 leading-relaxed font-sans">
              Subscribe to receive weekly Vedic wisdom, auspicious tithi alerts, and exclusive devotee offers.
            </p>

            {subscribed ? (
              <div className="p-3 bg-spiritual-gold-500/20 border border-spiritual-gold-400/40 rounded-xl text-xs text-spiritual-gold-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-spiritual-gold-400 shrink-0" />
                <span>Thank you! Welcome to the Divyamrit family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2.5 bg-spiritual-earth-800 border border-spiritual-earth-700 rounded-xl text-xs text-white placeholder:text-spiritual-earth-500 focus:outline-none focus:border-spiritual-gold-500 font-sans"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-spiritual-gold-600 hover:bg-spiritual-gold-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[11px] text-spiritual-earth-400">
                  🎁 Get flat 10% off code instantly. No spam, ever.
                </div>
              </form>
            )}

            {/* Social Icons representation */}
            <div className="pt-2">
              <span className="text-[11px] text-spiritual-earth-400 block mb-2 font-medium">
                Follow Our Daily Rituals:
              </span>
              <div className="flex items-center gap-2">
                <a href="#instagram" className="w-8 h-8 rounded-lg bg-spiritual-earth-800 hover:bg-spiritual-gold-600 text-white flex items-center justify-center text-xs transition-colors border border-spiritual-earth-700">
                  IG
                </a>
                <a href="#youtube" className="w-8 h-8 rounded-lg bg-spiritual-earth-800 hover:bg-spiritual-gold-600 text-white flex items-center justify-center text-xs transition-colors border border-spiritual-earth-700">
                  YT
                </a>
                <a href="#whatsapp" className="w-8 h-8 rounded-lg bg-spiritual-earth-800 hover:bg-spiritual-gold-600 text-white flex items-center justify-center text-xs transition-colors border border-spiritual-earth-700">
                  WA
                </a>
                <a href="#facebook" className="w-8 h-8 rounded-lg bg-spiritual-earth-800 hover:bg-spiritual-gold-600 text-white flex items-center justify-center text-xs transition-colors border border-spiritual-earth-700">
                  FB
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright, Legal, Payment Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-spiritual-earth-800/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-spiritual-earth-400">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span>&copy; {new Date().getFullYear()} Divyamrit Aromatics Pvt. Ltd. All rights reserved.</span>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-spiritual-gold-300 underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-spiritual-gold-300 underline">Terms & Conditions</Link>
            <Link to="/shipping-returns" className="hover:text-spiritual-gold-300 underline">Shipping & Refunds</Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-spiritual-earth-400 font-sans">
              Accepted Payments:
            </span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-spiritual-earth-300">
              <span className="bg-spiritual-earth-800 px-2 py-0.5 rounded border border-spiritual-earth-700">UPI</span>
              <span className="bg-spiritual-earth-800 px-2 py-0.5 rounded border border-spiritual-earth-700">RuPay</span>
              <span className="bg-spiritual-earth-800 px-2 py-0.5 rounded border border-spiritual-earth-700">Visa/MC</span>
              <span className="bg-spiritual-earth-800 px-2 py-0.5 rounded border border-spiritual-earth-700">NetBanking</span>
              <span className="bg-spiritual-earth-800 px-2 py-0.5 rounded border border-spiritual-earth-700">COD</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
