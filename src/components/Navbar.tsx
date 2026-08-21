import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-spiritual-bg/95 backdrop-blur-md shadow-sm border-b border-spiritual-earth-200/70 py-3' 
        : 'bg-spiritual-bg/80 backdrop-blur-xs border-b border-spiritual-earth-200/40 py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-spiritual-gold-100 text-spiritual-gold-700 flex items-center justify-center border border-spiritual-gold-300/80 group-hover:scale-105 transition-transform">
              <span className="text-base">🪔</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-spiritual-earth-900 group-hover:text-spiritual-gold-700 transition-colors">
                Divyamrit
              </span>
              <span className="block text-[9px] uppercase tracking-[0.2em] font-medium text-spiritual-earth-500 -mt-1">
                Pure Spiritual Essentials
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs font-semibold uppercase tracking-wider text-spiritual-earth-800 hover:text-spiritual-gold-700 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('products')}
              className="text-xs font-semibold uppercase tracking-wider text-spiritual-earth-800 hover:text-spiritual-gold-700 transition-colors"
            >
              Our Products
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-xs font-semibold uppercase tracking-wider text-spiritual-earth-800 hover:text-spiritual-gold-700 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('why-us')}
              className="text-xs font-semibold uppercase tracking-wider text-spiritual-earth-800 hover:text-spiritual-gold-700 transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollTo('order')}
              className="text-xs font-semibold uppercase tracking-wider text-spiritual-earth-800 hover:text-spiritual-gold-700 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Order CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOrderClick}
              className="px-5 py-2 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <span>Order Now</span>
              <span className="text-spiritual-gold-300 text-sm">&rarr;</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOrderClick}
              className="px-3.5 py-1.5 rounded-full bg-spiritual-earth-900 text-white text-xs font-semibold"
            >
              Order Now
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-spiritual-earth-800 hover:bg-spiritual-gold-50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-spiritual-earth-200 mt-3 space-y-2 animate-fade-in">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-spiritual-earth-800 hover:bg-spiritual-gold-50 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('products')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-spiritual-earth-800 hover:bg-spiritual-gold-50 rounded-lg"
            >
              Our Products
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-spiritual-earth-800 hover:bg-spiritual-gold-50 rounded-lg"
            >
              About the Brand
            </button>
            <button
              onClick={() => scrollTo('why-us')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-spiritual-earth-800 hover:bg-spiritual-gold-50 rounded-lg"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollTo('order')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-spiritual-earth-800 hover:bg-spiritual-gold-50 rounded-lg"
            >
              Contact & Order
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
