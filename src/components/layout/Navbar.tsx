import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  Flame,
  Flower2,
  Gift
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { CATEGORIES } from '../../data/categories';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const location = useLocation();
  const { totalCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  }, [location.pathname]);

  // Scroll detection for shadow & blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop', hasDropdown: true },
    { label: 'Categories', path: '/categories' },
    { label: 'Collections', path: '/collections' },
    { label: 'Catalogue', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Our Story', path: '/story' },
    { label: 'Spiritual Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-spiritual border-b border-spiritual-earth-200/70 py-2.5' 
          : 'bg-spiritual-bg/95 backdrop-blur-xs border-b border-spiritual-earth-200/50 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-spiritual-earth-800 hover:bg-spiritual-gold-50 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || 
                  (link.path === '/shop' && location.pathname.startsWith('/shop'));

                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.path}
                      className="relative group"
                      onMouseEnter={() => setShopDropdownOpen(true)}
                      onMouseLeave={() => setShopDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                          isActive 
                            ? 'text-spiritual-gold-700 font-semibold' 
                            : 'text-spiritual-earth-800 hover:text-spiritual-gold-700'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      </Link>

                      {/* Mega dropdown menu for Shop */}
                      {shopDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-spiritual-earth-200 p-4 animate-slide-up z-50">
                          <div className="text-xs font-semibold text-spiritual-earth-400 uppercase tracking-wider mb-2 px-2">
                            Sacred Categories
                          </div>
                          <div className="space-y-1">
                            {CATEGORIES.slice(0, 6).map((cat) => (
                              <Link
                                key={cat.id}
                                to={`/category/${cat.slug}`}
                                className="flex items-center justify-between p-2 rounded-xl hover:bg-spiritual-gold-50/70 text-spiritual-earth-900 group/item transition-colors"
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="w-2 h-2 rounded-full bg-spiritual-gold-500 group-hover/item:scale-125 transition-transform" />
                                  <span className="text-sm font-medium">{cat.name}</span>
                                </div>
                                <span className="text-[11px] text-spiritual-earth-500 font-serif">
                                  {cat.hindiName}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-3 pt-3 border-t border-spiritual-earth-100 flex items-center justify-between px-2">
                            <Link 
                              to="/shop" 
                              className="text-xs font-semibold text-spiritual-gold-700 hover:text-spiritual-gold-800 underline underline-offset-2"
                            >
                              View All 24+ Products &rarr;
                            </Link>
                            <Link 
                              to="/collections" 
                              className="text-xs font-medium text-spiritual-earth-600 hover:text-spiritual-earth-900"
                            >
                              Explore Collections
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2.5 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-spiritual-gold-700 font-semibold' 
                        : 'text-spiritual-earth-800 hover:text-spiritual-gold-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons: Search, Wishlist, Account, Cart */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Quick Search Button */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-full text-spiritual-earth-700 hover:text-spiritual-earth-900 hover:bg-spiritual-gold-50 transition-colors text-sm"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
                <span className="hidden xl:inline text-xs text-spiritual-earth-500 bg-spiritual-earth-100/80 px-2 py-0.5 rounded-full">
                  Search sacred items...
                </span>
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className="relative p-2 rounded-full text-spiritual-earth-700 hover:text-spiritual-earth-900 hover:bg-spiritual-gold-50 transition-colors"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-spiritual-maroon-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse-subtle">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Account Link */}
              <Link
                to="/account"
                className="hidden sm:inline-flex p-2 rounded-full text-spiritual-earth-700 hover:text-spiritual-earth-900 hover:bg-spiritual-gold-50 transition-colors"
                aria-label="My Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 bg-spiritual-earth-900 hover:bg-spiritual-earth-800 text-white px-3.5 py-2 rounded-full text-sm font-medium transition-transform active:scale-95 shadow-sm"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4 text-spiritual-gold-400" />
                <span className="hidden sm:inline text-xs">Cart</span>
                <span className="bg-spiritual-gold-500 text-spiritual-earth-900 text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-spiritual-earth-200/80 bg-white shadow-xl animate-slide-up">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              
              {/* Mobile Search Bar */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-spiritual-earth-50 border border-spiritual-earth-200 text-spiritual-earth-500 text-sm text-left"
              >
                <Search className="w-4 h-4 text-spiritual-gold-600" />
                <span>Search dhoop, camphor, agarbatti, brass...</span>
              </button>

              {/* Navigation links */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/shop"
                  className="flex items-center gap-2 p-3 rounded-xl bg-spiritual-gold-50/50 border border-spiritual-gold-200 text-spiritual-earth-900 text-sm font-semibold"
                >
                  <Sparkles className="w-4 h-4 text-spiritual-gold-600" />
                  <span>All Products</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center gap-2 p-3 rounded-xl bg-spiritual-gold-50/50 border border-spiritual-gold-200 text-spiritual-earth-900 text-sm font-semibold"
                >
                  <Flame className="w-4 h-4 text-spiritual-gold-600" />
                  <span>Lookbook</span>
                </Link>
                <Link
                  to="/categories"
                  className="flex items-center gap-2 p-3 rounded-xl bg-spiritual-earth-50 text-spiritual-earth-800 text-sm font-medium"
                >
                  <Flower2 className="w-4 h-4 text-spiritual-tulsi-500" />
                  <span>Categories</span>
                </Link>
                <Link
                  to="/collections"
                  className="flex items-center gap-2 p-3 rounded-xl bg-spiritual-earth-50 text-spiritual-earth-800 text-sm font-medium"
                >
                  <Gift className="w-4 h-4 text-spiritual-maroon-500" />
                  <span>Collections</span>
                </Link>
              </div>

              <div className="border-t border-spiritual-earth-100 pt-3 space-y-1.5">
                <Link
                  to="/about"
                  className="block px-3 py-2 text-sm text-spiritual-earth-800 font-medium hover:bg-spiritual-gold-50 rounded-lg"
                >
                  About Divyamrit
                </Link>
                <Link
                  to="/story"
                  className="block px-3 py-2 text-sm text-spiritual-earth-800 font-medium hover:bg-spiritual-gold-50 rounded-lg"
                >
                  Our Sacred Story & Artisans
                </Link>
                <Link
                  to="/blog"
                  className="block px-3 py-2 text-sm text-spiritual-earth-800 font-medium hover:bg-spiritual-gold-50 rounded-lg"
                >
                  Spiritual Knowledge & Vedic Wisdom
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-sm text-spiritual-earth-800 font-medium hover:bg-spiritual-gold-50 rounded-lg"
                >
                  Contact & Temple Concierge
                </Link>
                <Link
                  to="/account"
                  className="block px-3 py-2 text-sm text-spiritual-earth-800 font-medium hover:bg-spiritual-gold-50 rounded-lg"
                >
                  My Account & Orders
                </Link>
              </div>

              {/* Mobile helpline info */}
              <div className="bg-spiritual-earth-50 p-3.5 rounded-xl text-xs text-spiritual-earth-700 flex items-center justify-between">
                <div>
                  <div className="font-semibold">Devotee Support Helpline</div>
                  <div className="text-spiritual-earth-500 mt-0.5">+91 98200 12345 • 9 AM - 7 PM</div>
                </div>
                <Link 
                  to="/faq" 
                  className="text-spiritual-gold-700 font-semibold underline text-xs"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
