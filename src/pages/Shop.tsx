import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { Product, ProductCategory } from '../types';
import { ProductGrid } from '../components/product/ProductGrid';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { formatCurrency } from '../utils/formatters';
import { 
  Filter, 
  X, 
  Sparkles, 
  SlidersHorizontal, 
  ChevronDown, 
  Star, 
  RotateCcw,
  Check
} from 'lucide-react';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'bestselling' | 'newest';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const tagParam = searchParams.get('tag');
  const searchParam = searchParams.get('search');

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [selectedFragrance, setSelectedFragrance] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(2500);
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyCharcoalFree, setOnlyCharcoalFree] = useState<boolean>(false);
  const [onlyBestsellers, setOnlyBestsellers] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Quick view state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Collect unique fragrances
  const allFragrances = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (p.fragrance) set.add(p.fragrance);
    });
    return Array.from(set);
  }, []);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Fragrance
      if (selectedFragrance !== 'all' && p.fragrance !== selectedFragrance) {
        return false;
      }
      // Price
      if (p.price > maxPrice) {
        return false;
      }
      // Rating
      const pRating = p.rating ?? 5;
      if (minRating > 0 && pRating < minRating) {
        return false;
      }
      // Charcoal free
      if (onlyCharcoalFree && !p.charcoalFree) {
        return false;
      }
      // Bestseller
      if (onlyBestsellers && !p.bestseller) {
        return false;
      }
      // Tag
      if (tagParam && (!p.tags || !p.tags.includes(tagParam))) {
        return false;
      }
      // Search
      if (searchParam) {
        const q = searchParam.toLowerCase();
        const matches = 
          p.name.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          (p.fragrance && p.fragrance.toLowerCase().includes(q)) ||
          p.shortDescription.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return (b.rating ?? 5) - (a.rating ?? 5);
        case 'bestselling':
          return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
        case 'newest':
          return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, [
    selectedCategory,
    selectedFragrance,
    maxPrice,
    minRating,
    onlyCharcoalFree,
    onlyBestsellers,
    sortOption,
    tagParam,
    searchParam
  ]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedFragrance('all');
    setMaxPrice(2500);
    setMinRating(0);
    setOnlyCharcoalFree(false);
    setOnlyBestsellers(false);
    setSortOption('featured');
    setSearchParams({});
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedFragrance !== 'all' || 
    maxPrice < 2500 || 
    minRating > 0 || 
    onlyCharcoalFree || 
    onlyBestsellers ||
    tagParam ||
    searchParam;

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Header */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'Shop All Products' }]} />
        </div>

        {/* Page Title & Synopsis */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-spiritual-earth-200">
          <div className="space-y-1.5">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
              Sacred Devotional Collection
            </h1>
            <p className="text-sm text-spiritual-earth-600 font-sans max-w-2xl">
              Discover authentic temple-grade dhoop sticks, pure Bhimseni camphor, organic floral incense, brass essentials, and pure non-alcoholic attars.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Trigger */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-spiritual-earth-200 text-xs font-semibold text-spiritual-earth-800 shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-spiritual-gold-600" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-spiritual-gold-600" />
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-xs text-spiritual-earth-600 font-medium whitespace-nowrap hidden sm:inline">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="px-3 py-2 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white font-medium text-spiritual-earth-900 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 shadow-sm cursor-pointer"
              >
                <option value="featured">Featured Sacred Items</option>
                <option value="bestselling">Best Sellers</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 py-4">
            <span className="text-xs font-medium text-spiritual-earth-500">
              Active Filters:
            </span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 text-xs bg-spiritual-gold-100 text-spiritual-gold-900 px-3 py-1 rounded-full border border-spiritual-gold-300">
                Category: {CATEGORIES.find(c => c.id === selectedCategory)?.name || selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedFragrance !== 'all' && (
              <span className="inline-flex items-center gap-1 text-xs bg-spiritual-gold-100 text-spiritual-gold-900 px-3 py-1 rounded-full border border-spiritual-gold-300">
                Fragrance: {selectedFragrance}
                <button onClick={() => setSelectedFragrance('all')} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
              </span>
            )}
            {maxPrice < 2500 && (
              <span className="inline-flex items-center gap-1 text-xs bg-spiritual-gold-100 text-spiritual-gold-900 px-3 py-1 rounded-full border border-spiritual-gold-300">
                Max {formatCurrency(maxPrice)}
                <button onClick={() => setMaxPrice(2500)} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
              </span>
            )}
            {minRating > 0 && (
              <span className="inline-flex items-center gap-1 text-xs bg-spiritual-gold-100 text-spiritual-gold-900 px-3 py-1 rounded-full border border-spiritual-gold-300">
                {minRating}★ & Above
                <button onClick={() => setMinRating(0)} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
              </span>
            )}
            {onlyCharcoalFree && (
              <span className="inline-flex items-center gap-1 text-xs bg-spiritual-gold-100 text-spiritual-gold-900 px-3 py-1 rounded-full border border-spiritual-gold-300">
                0% Charcoal Only
                <button onClick={() => setOnlyCharcoalFree(false)} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
              </span>
            )}
            {onlyBestsellers && (
              <span className="inline-flex items-center gap-1 text-xs bg-spiritual-gold-100 text-spiritual-gold-900 px-3 py-1 rounded-full border border-spiritual-gold-300">
                Bestsellers Only
                <button onClick={() => setOnlyBestsellers(false)} className="hover:text-rose-600"><X className="w-3 h-3" /></button>
              </span>
            )}
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-semibold text-spiritual-gold-700 hover:text-spiritual-gold-800 underline ml-2 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All</span>
            </button>
          </div>
        )}

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-6">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-3xl border border-spiritual-earth-200 shadow-spiritual h-fit sticky top-28">
            
            <div className="flex items-center justify-between pb-3 border-b border-spiritual-earth-100">
              <span className="font-serif text-base font-bold text-spiritual-earth-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-spiritual-gold-600" />
                <span>Filter Products</span>
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-spiritual-gold-700 hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-bold text-spiritual-earth-800 uppercase tracking-wider mb-2.5">
                Categories
              </label>
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedCategory === 'all'
                      ? 'bg-spiritual-gold-100 text-spiritual-gold-900 font-bold'
                      : 'text-spiritual-earth-700 hover:bg-spiritual-earth-50'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[11px] text-spiritual-earth-400">{PRODUCTS.length}</span>
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-spiritual-gold-100 text-spiritual-gold-900 font-bold'
                        : 'text-spiritual-earth-700 hover:bg-spiritual-earth-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[11px] text-spiritual-earth-400">{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div className="pt-4 border-t border-spiritual-earth-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-spiritual-earth-800">
                <span className="uppercase tracking-wider">Max Price</span>
                <span className="text-spiritual-gold-800 font-serif text-sm">{formatCurrency(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={200}
                max={2500}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-spiritual-gold-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-spiritual-earth-400 font-mono">
                <span>₹200</span>
                <span>₹2,500</span>
              </div>
            </div>

            {/* Fragrance Filter */}
            <div className="pt-4 border-t border-spiritual-earth-100">
              <label className="block text-xs font-bold text-spiritual-earth-800 uppercase tracking-wider mb-2">
                Sacred Fragrance
              </label>
              <select
                value={selectedFragrance}
                onChange={(e) => setSelectedFragrance(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white font-medium text-spiritual-earth-800 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 cursor-pointer"
              >
                <option value="all">All Fragrance Notes</option>
                {allFragrances.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="pt-4 border-t border-spiritual-earth-100 space-y-1.5">
              <label className="block text-xs font-bold text-spiritual-earth-800 uppercase tracking-wider mb-1">
                Minimum Rating
              </label>
              {[4.8, 4.5, 4.0].map((star) => (
                <button
                  key={`star-filter-${star}`}
                  type="button"
                  onClick={() => setMinRating(minRating === star ? 0 : star)}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs transition-colors ${
                    minRating === star
                      ? 'bg-spiritual-gold-100 text-spiritual-gold-900 font-bold'
                      : 'hover:bg-spiritual-earth-50 text-spiritual-earth-700'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <span>{star}★ & above</span>
                  </span>
                  {minRating === star && <Check className="w-3.5 h-3.5 text-spiritual-gold-700" />}
                </button>
              ))}
            </div>

            {/* Special Badges Checkbox */}
            <div className="pt-4 border-t border-spiritual-earth-100 space-y-2">
              <label className="flex items-center gap-2.5 text-xs text-spiritual-earth-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyCharcoalFree}
                  onChange={(e) => setOnlyCharcoalFree(e.target.checked)}
                  className="rounded text-spiritual-gold-600 focus:ring-spiritual-gold-400 w-4 h-4"
                />
                <span>0% Charcoal / Bambooless Only</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-spiritual-earth-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyBestsellers}
                  onChange={(e) => setOnlyBestsellers(e.target.checked)}
                  className="rounded text-spiritual-gold-600 focus:ring-spiritual-gold-400 w-4 h-4"
                />
                <span>Bestsellers Only</span>
              </label>
            </div>

          </aside>

          {/* Right Product Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between text-xs text-spiritual-earth-600">
              <span>Showing <strong>{filteredProducts.length}</strong> sacred products</span>
            </div>

            <ProductGrid 
              products={filteredProducts} 
              onQuickView={(p) => setQuickViewProduct(p)}
              columns={3}
            />
          </div>

        </div>

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
