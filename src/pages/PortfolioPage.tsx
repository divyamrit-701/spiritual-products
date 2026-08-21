import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { Product, ProductCategory } from '../types';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { formatCurrency } from '../utils/formatters';
import { RatingStars } from '../components/ui/RatingStars';
import { Badge } from '../components/ui/Badge';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShoppingBag, 
  Eye, 
  Filter, 
  SlidersHorizontal, 
  Download, 
  Printer, 
  Check, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const PortfolioPage: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFragrance, setSelectedFragrance] = useState<string>('all');
  const [selectedPackSize, setSelectedPackSize] = useState<string>('all');
  const [viewStyle, setViewStyle] = useState<'lookbook' | 'table'>('lookbook');
  const [sortOption, setSortOption] = useState<string>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Collect unique fragrances
  const allFragrances = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (p.fragrance) set.add(p.fragrance);
    });
    return Array.from(set);
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedFragrance !== 'all' && p.fragrance !== selectedFragrance) return false;
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'bestseller') return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
      if (sortOption === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedFragrance, sortOption]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: 'Product Catalogue & Portfolio' }]} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-spiritual-earth-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Complete Master Catalogue • 2026 Edition</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-spiritual-earth-900">
              Divyamrit Product Portfolio & Lookbook
            </h1>
            <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans max-w-2xl">
              A comprehensive index of all 24+ temple-grade formulations, pure Bhimseni camphor variants, floral agarbatti, brassware, and ceremonial gift hampers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              leftIcon={<Printer className="w-4 h-4" />}
            >
              Print Catalogue
            </Button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-spiritual-earth-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Category */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-spiritual-bg font-medium text-spiritual-earth-900 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 cursor-pointer"
              >
                <option value="all">All Categories ({PRODUCTS.length})</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.itemCount})
                  </option>
                ))}
              </select>
            </div>

            {/* Fragrance */}
            <div>
              <select
                value={selectedFragrance}
                onChange={(e) => setSelectedFragrance(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-spiritual-bg font-medium text-spiritual-earth-900 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 cursor-pointer"
              >
                <option value="all">All Fragrance Profiles</option>
                {allFragrances.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-spiritual-bg font-medium text-spiritual-earth-900 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="bestseller">Best Selling</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>

          {/* Layout switcher */}
          <div className="flex items-center gap-1 bg-spiritual-earth-100 p-1 rounded-xl">
            <button
              onClick={() => setViewStyle('lookbook')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewStyle === 'lookbook'
                  ? 'bg-white text-spiritual-earth-900 shadow-xs'
                  : 'text-spiritual-earth-600 hover:text-spiritual-earth-900'
              }`}
            >
              Lookbook Grid
            </button>
            <button
              onClick={() => setViewStyle('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewStyle === 'table'
                  ? 'bg-white text-spiritual-earth-900 shadow-xs'
                  : 'text-spiritual-earth-600 hover:text-spiritual-earth-900'
              }`}
            >
              Spec Sheet Table
            </button>
          </div>

        </div>

        {/* View Mode 1: Lookbook Detailed Grid */}
        {viewStyle === 'lookbook' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-spiritual-earth-200 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-spiritual-bg">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.bestseller && <Badge variant="gold">Bestseller</Badge>}
                      {product.charcoalFree && <Badge variant="tulsi">0% Charcoal</Badge>}
                    </div>

                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md text-spiritual-earth-800 hover:bg-spiritual-gold-500 hover:text-white transition-all shadow-sm"
                      title="Quick Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-spiritual-earth-500">
                      <span className="font-medium">{product.categoryName}</span>
                      <span className="text-spiritual-gold-700 font-serif">{product.fragrance}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors line-clamp-1">
                      <Link to={`/products/${product.slug}`}>{product.name}</Link>
                    </h3>

                    <p className="text-xs text-spiritual-earth-600 line-clamp-2 font-sans">
                      {product.shortDescription}
                    </p>

                    <div className="pt-1 flex items-center justify-between text-xs">
                      <span className="text-spiritual-earth-500"><strong>Pack:</strong> {product.packSize}</span>
                      <RatingStars rating={product.rating} count={product.reviewCount} size="sm" />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-spiritual-earth-100 mt-2">
                  <div className="pt-3">
                    <span className="text-lg font-serif font-extrabold text-spiritual-earth-900 block">
                      {formatCurrency(product.price)}
                    </span>
                    <span className="text-[10px] text-spiritual-earth-400 line-through">
                      MRP {formatCurrency(product.mrp)}
                    </span>
                  </div>

                  <div className="pt-3 flex items-center gap-2">
                    <Link
                      to={`/products/${product.slug}`}
                      className="p-2 text-xs font-semibold text-spiritual-earth-700 hover:text-spiritual-gold-700 underline"
                    >
                      View Specs
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white text-xs font-semibold transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-spiritual-gold-300" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Spec Sheet Table */
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 shadow-spiritual overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs divide-y divide-spiritual-earth-200">
                <thead className="bg-spiritual-earth-50 text-spiritual-earth-700 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Item</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Fragrance Note</th>
                    <th className="p-4">Pack Size</th>
                    <th className="p-4">Burn Time</th>
                    <th className="p-4">Price / MRP</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-spiritual-earth-100">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-spiritual-gold-50/40 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <img 
                          src={p.images[0]} 
                          alt={p.name} 
                          className="w-10 h-10 rounded-lg object-cover bg-spiritual-bg shrink-0 border border-spiritual-earth-200"
                        />
                        <div>
                          <Link to={`/products/${p.slug}`} className="font-serif font-bold text-sm text-spiritual-earth-900 hover:text-spiritual-gold-700">
                            {p.name}
                          </Link>
                          {p.hindiName && (
                            <span className="text-[11px] text-spiritual-earth-500 font-serif italic block">{p.hindiName}</span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-spiritual-earth-700 font-medium">{p.categoryName}</td>
                      <td className="p-4 text-spiritual-gold-800 font-serif">{p.fragrance}</td>
                      <td className="p-4 text-spiritual-earth-700">{p.packSize}</td>
                      <td className="p-4 text-spiritual-earth-700">{p.burnTime || 'N/A'}</td>
                      <td className="p-4">
                        <span className="font-bold text-spiritual-earth-900 block">{formatCurrency(p.price)}</span>
                        <span className="text-[10px] text-spiritual-earth-400 line-through">MRP {formatCurrency(p.mrp)}</span>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => addToCart(p)}
                          className="px-3 py-1.5 bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white rounded-lg text-xs font-semibold transition-colors"
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
