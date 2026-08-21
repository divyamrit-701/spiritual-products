import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-spiritual-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Formulations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Explore by Sacred Category
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Handcrafted temple essentials designed to elevate your daily prayers, meditation, and festive celebrations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-spiritual-earth-200/90 shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-spiritual-earth-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Item count chip */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-spiritual-earth-900 text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  {cat.itemCount} Items
                </div>
              </div>

              {/* Text info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[11px] font-serif italic text-spiritual-gold-700 block">
                    {cat.hindiName}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-700 transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-spiritual-earth-500 line-clamp-2 mt-1 font-sans">
                    {cat.tagline}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-semibold text-spiritual-gold-700 group-hover:text-spiritual-gold-800 transition-colors">
                  <span>Shop Category</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-10">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-spiritual-earth-800 hover:text-spiritual-gold-700 underline underline-offset-4"
          >
            <span>View All Categories & Fragrance Profiles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
