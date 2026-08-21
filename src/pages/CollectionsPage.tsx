import React from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../data/collections';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Themed Collections' }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Ritual Suites</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Sacred Ritual Collections
          </h1>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Specially assembled suites designed for specific spiritual rituals, festival blessings, home warmings, and deep morning sadhana.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              to={`/collection/${col.slug}`}
              className="group relative rounded-3xl overflow-hidden bg-spiritual-earth-900 text-white border border-spiritual-earth-800 shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[16/9] flex flex-col justify-end p-6 sm:p-8"
            >
              <img
                src={col.bannerImage}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950/95 via-spiritual-earth-950/60 to-transparent" />
              
              <div className="relative z-10 space-y-2">
                {col.badge && (
                  <Badge variant="gold" size="sm">
                    {col.badge}
                  </Badge>
                )}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-spiritual-gold-300 transition-colors">
                  {col.name}
                </h3>
                <p className="text-xs sm:text-sm text-spiritual-earth-200 line-clamp-2 max-w-lg font-sans">
                  {col.description}
                </p>

                <div className="pt-2 flex items-center text-xs font-bold text-spiritual-gold-300 group-hover:text-white transition-colors">
                  <span>Explore Collection ({col.productIds.length} Items)</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
