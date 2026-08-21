import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, X, Sparkles, ArrowRight, Flame, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { formatCurrency } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { RatingStars } from '../ui/RatingStars';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = [
  'Bhimseni Camphor',
  'Mysore Sandalwood Dhoop',
  'Akhand Diya',
  'Flora Agarbatti',
  'Ruh Gulab Attar',
  'Panchamrit Ghee Wicks',
  'Festive Gift Box'
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();

  // Filter products matching name, category, fragrance, ingredients, tags
  const matchedProducts = searchQuery
    ? PRODUCTS.filter((p) => {
        return (
          p.name.toLowerCase().includes(searchQuery) ||
          p.categoryName.toLowerCase().includes(searchQuery) ||
          p.fragrance.toLowerCase().includes(searchQuery) ||
          p.shortDescription.toLowerCase().includes(searchQuery) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery)) ||
          p.ingredients.some((i) => i.toLowerCase().includes(searchQuery))
        );
      })
    : [];

  const matchedCategories = searchQuery
    ? CATEGORIES.filter((c) => 
        c.name.toLowerCase().includes(searchQuery) || 
        c.tagline.toLowerCase().includes(searchQuery) ||
        c.featuredFragrances.some(f => f.toLowerCase().includes(searchQuery))
      )
    : [];

  const handleSelectSearch = (term: string) => {
    setQuery(term);
  };

  const handleProductClick = (slug: string) => {
    onClose();
    navigate(`/products/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-spiritual-earth-900/70 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      <div className="flex min-h-full items-start justify-center p-4 sm:p-6 sm:pt-16">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all border border-spiritual-earth-200 animate-slide-up">
          
          {/* Search Header Input */}
          <div className="p-4 sm:p-5 border-b border-spiritual-earth-100 flex items-center gap-3 bg-spiritual-bg">
            <Search className="w-5 h-5 text-spiritual-gold-600 shrink-0" />
            <input 
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for dhoop, pure camphor, attar, brass diya..."
              className="w-full bg-transparent text-base sm:text-lg text-spiritual-earth-900 placeholder:text-spiritual-earth-400 focus:outline-none font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-full text-spiritual-earth-400 hover:text-spiritual-earth-700 transition-colors"
                aria-label="Clear search text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-spiritual-earth-500 hover:text-spiritual-earth-900 hover:bg-spiritual-earth-100 transition-colors"
              aria-label="Close search modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: suggestions or results */}
          <div className="max-h-[60vh] overflow-y-auto p-5">
            {searchQuery === '' ? (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-spiritual-earth-500 uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-600" />
                    <span>Popular Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_SEARCHES.map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSelectSearch(term)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-spiritual-earth-50 hover:bg-spiritual-gold-100 text-spiritual-earth-800 hover:text-spiritual-gold-900 border border-spiritual-earth-200 transition-colors flex items-center gap-1.5"
                      >
                        <Search className="w-3 h-3 text-spiritual-gold-500" />
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-spiritual-earth-500 uppercase tracking-wider mb-3">
                    <Flame className="w-3.5 h-3.5 text-spiritual-gold-600" />
                    <span>Trending Collections</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {CATEGORIES.slice(0, 6).map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/category/${cat.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-xl bg-spiritual-bg hover:bg-spiritual-gold-50 border border-spiritual-earth-100 hover:border-spiritual-gold-300 transition-all text-left group"
                      >
                        <div className="text-xs font-serif font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 line-clamp-1">
                          {cat.name}
                        </div>
                        <div className="text-[11px] text-spiritual-earth-500 font-sans mt-0.5">
                          {cat.itemCount} items
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : matchedProducts.length === 0 && matchedCategories.length === 0 ? (
              <div className="py-8 text-center space-y-2">
                <p className="text-sm font-semibold text-spiritual-earth-800">
                  No divine matches found for "{query}"
                </p>
                <p className="text-xs text-spiritual-earth-500">
                  Try searching for 'camphor', 'sandalwood', 'diya', 'rose', or 'ghee'.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Category matches */}
                {matchedCategories.length > 0 && (
                  <div>
                    <span className="text-xs font-semibold text-spiritual-earth-400 uppercase tracking-wider block mb-2">
                      Matching Categories ({matchedCategories.length})
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {matchedCategories.map((c) => (
                        <Link
                          key={c.id}
                          to={`/category/${c.slug}`}
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-spiritual-gold-50 border border-spiritual-gold-200 text-xs font-medium text-spiritual-earth-900 hover:bg-spiritual-gold-100 transition-colors"
                        >
                          <span>{c.name}</span>
                          <ArrowRight className="w-3 h-3 text-spiritual-gold-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product matches */}
                {matchedProducts.length > 0 && (
                  <div>
                    <span className="text-xs font-semibold text-spiritual-earth-400 uppercase tracking-wider block mb-3">
                      Products ({matchedProducts.length})
                    </span>
                    <div className="divide-y divide-spiritual-earth-100">
                      {matchedProducts.map((p) => (
                        <div 
                          key={p.id} 
                          className="py-3 flex items-center justify-between gap-3 hover:bg-spiritual-gold-50/50 p-2 rounded-xl transition-colors group cursor-pointer"
                          onClick={() => handleProductClick(p.slug)}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img 
                              src={p.images[0]} 
                              alt={p.name} 
                              className="w-12 h-12 rounded-lg object-cover bg-spiritual-earth-50 shrink-0 border border-spiritual-earth-200"
                            />
                            <div className="min-w-0">
                              <h4 className="text-sm font-semibold font-serif text-spiritual-earth-900 group-hover:text-spiritual-gold-800 truncate">
                                {p.name}
                              </h4>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs font-bold text-spiritual-earth-900">
                                  {formatCurrency(p.price)}
                                </span>
                                <span className="text-xs text-spiritual-earth-400">|</span>
                                <RatingStars rating={p.rating} size="sm" showCount={false} />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(p);
                                onClose();
                              }}
                              className="p-2 rounded-full bg-spiritual-earth-100 hover:bg-spiritual-gold-500 hover:text-white text-spiritual-earth-800 transition-colors"
                              title="Add to Cart"
                            >
                              <ShoppingBag className="w-4 h-4" />
                            </button>
                            <ArrowRight className="w-4 h-4 text-spiritual-earth-300 group-hover:text-spiritual-gold-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer banner */}
          <div className="p-3 bg-spiritual-earth-50 border-t border-spiritual-earth-100 text-center text-xs text-spiritual-earth-600">
            Press <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-spiritual-earth-200 rounded font-mono">ESC</kbd> to close or explore <Link to="/shop" onClick={onClose} className="text-spiritual-gold-700 font-semibold underline">All Products</Link>
          </div>

        </div>
      </div>
    </div>
  );
};
