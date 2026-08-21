import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, Sun } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-spiritual-earth-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sun className="w-3.5 h-3.5" />
            <span>About Divyamrit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Rooted in Tradition. Made for Today.
          </h2>
        </div>

        {/* 2-3 Concise Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-spiritual-earth-700 font-sans leading-relaxed max-w-2xl mx-auto">
          <p>
            At <strong>Divyamrit</strong>, we believe that daily prayer and meditation should be pure, unhurried, and uplifting. In a market crowded with synthetic fragrances and coal-filled incense, we returned to classical Vedic roots to create clean spiritual essentials.
          </p>
          <p>
            We focus exclusively on two foundational elements of Indian home worship: <strong>Bambooless Dhoop Sticks</strong> and <strong>100% Pure Bhimseni Camphor</strong>. Both are crafted without toxic burning agents, heavy black soot, or artificial additives.
          </p>
        </div>

        {/* 3 Trust Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
          
          <div className="p-5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-spiritual-earth-900">
              Quality Products
            </h3>
            <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
              100% natural resins, aged sandalwood, and crystalline Bhimseni camphor with zero black soot.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-spiritual-earth-900">
              Traditional Craftsmanship
            </h3>
            <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
              Handcrafted in accordance with Vedic Dhoopa Vidhana and time-honored Indian traditions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-spiritual-earth-900">
              Everyday Rituals
            </h3>
            <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
              Thoughtfully packed for morning Sandhya, evening Aarti, yoga, and creating a peaceful home aura.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
