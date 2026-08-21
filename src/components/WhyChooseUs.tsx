import React from 'react';
import { ShieldCheck, Flame, Heart, PackageCheck, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Pure & Quality Assured',
      description: 'Zero coal, zero petroleum wax, and zero toxic chemical binders.'
    },
    {
      icon: <Flame className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Made for Daily Rituals',
      description: 'Formulated for daily morning Sandhya and evening family Aarti.'
    },
    {
      icon: <Heart className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Traditional Values',
      description: 'Crafted with reverence according to authentic Vedic principles.'
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Carefully Packed',
      description: 'Airtight, damage-proof packaging delivered safely to your home.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-y border-spiritual-earth-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Divyamrit Promise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Why Choose Us
          </h2>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={`why-${idx}`}
              className="p-6 rounded-3xl bg-spiritual-bg border border-spiritual-earth-200/80 text-center space-y-3 hover:border-spiritual-gold-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-spiritual-gold-100 flex items-center justify-center mx-auto border border-spiritual-gold-200/60">
                {item.icon}
              </div>
              <h3 className="font-serif text-base font-bold text-spiritual-earth-900">
                {item.title}
              </h3>
              <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
