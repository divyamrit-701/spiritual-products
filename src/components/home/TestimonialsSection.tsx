import React from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { RatingStars } from '../ui/RatingStars';
import { CheckCircle2, Sparkles, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devotee Blessings & Praise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Trusted by Thousands of Indian Homes
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Read how our unadulterated sacred fragrances and pure camphor have elevated daily worship across Bharat.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-spiritual-bg p-6 sm:p-8 rounded-3xl border border-spiritual-earth-200/80 shadow-spiritual flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-spiritual-gold-300/50 absolute top-6 right-6" />
              
              <div className="space-y-3">
                <RatingStars rating={item.rating} size="sm" showCount={false} />
                <p className="text-xs sm:text-sm text-spiritual-earth-800 leading-relaxed font-serif italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-spiritual-earth-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 font-serif font-bold text-sm flex items-center justify-center border border-spiritual-gold-300">
                  {item.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-spiritual-earth-900">
                      {item.name}
                    </span>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-xs text-spiritual-earth-500 font-sans">
                    {item.city}, {item.state} • <span className="text-spiritual-gold-700 font-medium">{item.productUsed}</span>
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
