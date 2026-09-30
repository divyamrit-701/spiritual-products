import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

interface ExploreCategoriesSectionProps {
  onCategoryClick: (categoryId: string) => void;
}

export const ExploreCategoriesSection: React.FC<ExploreCategoriesSectionProps> = ({
  onCategoryClick
}) => {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-white border-b border-spiritual-earth-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Divine Formulations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900">
            Explore Our Products
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Carefully curated spiritual essentials for your daily worship, prayer rituals, and serene home living.
          </p>
        </div>

        {/* 3-Column Desktop Grid / Responsive Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="bg-spiritual-bg rounded-3xl border border-spiritual-earth-200/90 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Category Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-spiritual-earth-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950/60 via-transparent to-transparent" />
                  
                  {/* Category Hindi Moniker */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-serif italic text-xs text-spiritual-gold-300">
                      {category.hindiName}
                    </span>
                    <span className="text-[10px] font-semibold bg-spiritual-earth-900/80 px-2.5 py-0.5 rounded-full border border-spiritual-earth-700">
                      {category.itemCount} {category.itemCount === 1 ? 'Offering' : 'Offerings'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif text-2xl font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-spiritual-earth-600 font-sans leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-spiritual-earth-200/60 mt-2">
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-spiritual-gold-800 group-hover:text-spiritual-gold-900">
                  <span>Explore {category.name}</span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-spiritual-gold-600 group-hover:text-white flex items-center justify-center transition-colors border border-spiritual-earth-200 shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
