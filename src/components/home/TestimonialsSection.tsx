import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Sparkles, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIdx((curr) => (curr + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-spiritual-bg border-b border-spiritual-earth-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devotee Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Genuine experiences from homes across Bharat practicing daily morning and evening worship.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl border border-spiritual-earth-200/90 p-6 shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Title */}
                <h3 className="font-serif font-bold text-base text-spiritual-earth-900 leading-snug">
                  "{testimonial.title}"
                </h3>

                {/* Comment */}
                <p className="text-xs text-spiritual-earth-600 font-sans leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-3 border-t border-spiritual-earth-100 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-spiritual-earth-900 font-serif text-sm">
                    {testimonial.author}
                  </span>
                  {testimonial.verifiedBuyer && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Buyer
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-spiritual-earth-500 font-sans">
                  {testimonial.location} • <span className="text-spiritual-gold-800 font-medium">{testimonial.productBought}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
