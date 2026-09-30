import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Flame, 
  Gift, 
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCatalogDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setCatalogDropdownOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-spiritual-bg/95 backdrop-blur-md shadow-sm border-b border-spiritual-earth-200/80 py-3.5' 
        : 'bg-spiritual-bg/90 backdrop-blur-xs border-b border-spiritual-earth-200/40 py-4.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Brand Logo (Dhicam inspiration) */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center border border-spiritual-gold-300/80 shadow-xs group-hover:scale-105 transition-transform">
              <span className="text-lg">🪔</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-2.5xl font-bold tracking-tight text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors">
                Divyamrit
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] font-medium text-spiritual-earth-500 -mt-1 font-sans">
                Vedic Spiritual Essentials
              </span>
            </div>
          </Link>

          {/* CENTER: Clean Navigation with Smooth Catalog Dropdown */}
          <nav className="hidden md:flex items-center space-x-9">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-spiritual-earth-800 hover:text-spiritual-gold-800 transition-colors py-1 cursor-pointer"
            >
              Home
            </button>

            {/* Catalog Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setCatalogDropdownOpen(true)}
              onMouseLeave={() => setCatalogDropdownOpen(false)}
            >
              <button
                onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-spiritual-earth-800 hover:text-spiritual-gold-800 transition-colors py-1 cursor-pointer"
              >
                <span>Catalog</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${catalogDropdownOpen ? 'rotate-180 text-spiritual-gold-600' : ''}`} />
              </button>

              {/* Smooth Animated Dropdown Menu */}
              {catalogDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-spiritual-earth-200/90 p-2.5 space-y-1">
                    
                    <button
                      onClick={() => handleNavClick('dhoop-feature')}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-spiritual-gold-50/70 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-spiritual-gold-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif font-bold text-sm text-spiritual-earth-900 group-hover:text-spiritual-gold-800">
                          Dhoop Sticks
                        </div>
                        <div className="text-[11px] text-spiritual-earth-500 font-sans">
                          100% Bambooless & Charcoal-Free
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('camphor-feature')}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-spiritual-gold-50/70 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-spiritual-gold-600 group-hover:text-white transition-colors">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif font-bold text-sm text-spiritual-earth-900 group-hover:text-spiritual-gold-800">
                          Bhimseni Camphor
                        </div>
                        <div className="text-[11px] text-spiritual-earth-500 font-sans">
                          100% Pure Organic • Zero Soot
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('products')}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-spiritual-gold-50/70 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-spiritual-gold-600 group-hover:text-white transition-colors">
                        <Gift className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-serif font-bold text-sm text-spiritual-earth-900 group-hover:text-spiritual-gold-800">
                          Combo Offers
                        </div>
                        <div className="text-[11px] text-spiritual-earth-500 font-sans">
                          Sacred Sadhana Sets & Savings
                        </div>
                      </div>
                    </button>

                    <div className="pt-1.5 border-t border-spiritual-earth-100 mt-1">
                      <button
                        onClick={() => handleNavClick('products')}
                        className="w-full flex items-center justify-between p-2 text-xs font-bold text-spiritual-gold-800 hover:text-spiritual-gold-900 hover:bg-spiritual-gold-50/40 rounded-lg transition-colors"
                      >
                        <span>View All Products</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-spiritual-earth-800 hover:text-spiritual-gold-800 transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>

          </nav>

          {/* RIGHT: Search & Cart Action Icons (Dhicam style) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Search Icon Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-spiritual-earth-700 hover:text-spiritual-gold-800 hover:bg-spiritual-gold-50/60 rounded-full transition-colors"
              aria-label="Search spiritual products"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Cart Trigger with Live Count */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-spiritual-earth-700 hover:text-spiritual-gold-800 hover:bg-spiritual-gold-50/60 rounded-full transition-colors group"
              aria-label={`View cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-spiritual-gold-600 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Quick WhatsApp Order CTA */}
            <a
              href="https://wa.me/919820012345?text=Hello%20Divyamrit%2C%20I%20would%20like%20to%20place%20an%20order%20for%20pure%20puja%20essentials."
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-700 text-white text-xs font-bold tracking-wide transition-all shadow-xs active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-spiritual-gold-300" />
              <span>Direct Order</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-spiritual-earth-800 hover:bg-spiritual-gold-50 rounded-lg transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.8]" /> : <Menu className="w-6 h-6 stroke-[1.8]" />}
            </button>

          </div>

        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-4 border-t border-spiritual-earth-200 mt-3 space-y-3 animate-fade-in">
            
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold text-spiritual-earth-900 hover:bg-spiritual-gold-50 rounded-xl"
            >
              Home
            </button>

            {/* Mobile Catalog Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-spiritual-earth-900 hover:bg-spiritual-gold-50 rounded-xl"
              >
                <span>Catalog</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCatalogOpen ? 'rotate-180 text-spiritual-gold-600' : ''}`} />
              </button>

              {mobileCatalogOpen && (
                <div className="pl-6 pr-2 space-y-1.5 py-1">
                  <button
                    onClick={() => handleNavClick('dhoop-feature')}
                    className="block w-full text-left py-2 text-xs font-semibold text-spiritual-earth-700 hover:text-spiritual-gold-800"
                  >
                    → Dhoop Sticks (100% Bambooless)
                  </button>
                  <button
                    onClick={() => handleNavClick('camphor-feature')}
                    className="block w-full text-left py-2 text-xs font-semibold text-spiritual-earth-700 hover:text-spiritual-gold-800"
                  >
                    → Bhimseni Camphor (Pure Crystals)
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="block w-full text-left py-2 text-xs font-semibold text-spiritual-earth-700 hover:text-spiritual-gold-800"
                  >
                    → Combo Offers (Sacred Sadhana Sets)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('why-us')}
              className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold text-spiritual-earth-900 hover:bg-spiritual-gold-50 rounded-xl"
            >
              Why Choose Divyamrit
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold text-spiritual-earth-900 hover:bg-spiritual-gold-50 rounded-xl"
            >
              Contact & Devotee Desk
            </button>

            <div className="pt-2">
              <a
                href="https://wa.me/919820012345?text=Hello%20Divyamrit%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-700 text-white text-xs font-bold shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order on WhatsApp (+91 98200 12345)</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </header>
  );
};
