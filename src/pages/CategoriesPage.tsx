import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Categories Hub' }]} />

        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Collections by Tradition</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Sacred Devotional Categories
          </h1>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Explore our thoughtfully curated categories spanning pure Bhimseni camphor, bambooless dhoop, floral incense, authentic brassware, and festive gift boxes.
          </p>
        </div>

        {/* Categories Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl border border-spiritual-earth-200 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col group"
            >
              {/* Category Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-spiritual-earth-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950/80 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-serif italic text-spiritual-gold-300">
                    {cat.hindiName}
                  </span>
                  <h3 className="font-serif text-xl font-bold">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-spiritual-earth-600 leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Fragrance tags */}
                <div>
                  <span className="text-[11px] font-bold text-spiritual-earth-500 uppercase tracking-wider block mb-1.5">
                    Featured Fragrance / Notes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.featuredFragrances ? (
                      cat.featuredFragrances.map((f) => (
                        <span key={f} className="text-[11px] bg-spiritual-gold-50 text-spiritual-gold-900 border border-spiritual-gold-200 px-2 py-0.5 rounded-full font-medium">
                          {f}
                        </span>
                      ))
                    ) : cat.featuredFragrance ? (
                      <span className="text-[11px] bg-spiritual-gold-50 text-spiritual-gold-900 border border-spiritual-gold-200 px-2 py-0.5 rounded-full font-medium">
                        {cat.featuredFragrance}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="pt-2 border-t border-spiritual-earth-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-spiritual-earth-500">
                    {cat.itemCount} Sacred Products
                  </span>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-spiritual-gold-700 hover:text-spiritual-gold-800 transition-colors"
                  >
                    <span>Browse Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
