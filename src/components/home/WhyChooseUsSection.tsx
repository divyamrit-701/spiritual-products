import React from 'react';
import { ShieldCheck, Leaf, Sparkles, Award, Heart, Flame } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-spiritual-gold-700" />,
      title: 'Pure & Authentic',
      description: '100% natural botanical formulations without synthetic chemical binders, artificial dyes, or coal fillers.'
    },
    {
      icon: <Leaf className="w-6 h-6 text-spiritual-gold-700" />,
      title: 'Carefully Selected Ingredients',
      description: 'Hand-picked wild desert Guggal resin, pure aged Mysore sandalwood powder, and organic pine crystal camphor.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-spiritual-gold-700" />,
      title: 'Traditional Spiritual Heritage',
      description: 'Formulated strictly according to sacred Vedic Dhoopa Vidhana and classical Indian scripture principles.'
    },
    {
      icon: <Award className="w-6 h-6 text-spiritual-gold-700" />,
      title: 'Premium Quality Assured',
      description: 'Leaves 0.00% black soot on brass idols, burns with a calm holy flame, and releases clean, headache-free aromas.'
    },
    {
      icon: <Heart className="w-6 h-6 text-spiritual-gold-700" />,
      title: 'Thoughtfully Crafted',
      description: 'Hand-rolled by skilled artisans and sealed in airtight moisture-lock metal containers for lasting freshness.'
    },
    {
      icon: <Flame className="w-6 h-6 text-spiritual-gold-700" />,
      title: 'Made for Everyday Puja',
      description: 'Balanced for daily morning Sandhya prayers, evening family Aarti, yoga practice, and calming home meditation.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-spiritual-earth-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Divyamrit Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900">
            Why Choose Divyamrit?
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            We returned to ancient Vedic roots to bring true purity back into your daily home prayers.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={`feature-${idx}`}
              className="p-7 rounded-3xl bg-spiritual-bg border border-spiritual-earth-200/90 shadow-xs hover:border-spiritual-gold-400 hover:shadow-spiritual transition-all duration-300 space-y-3.5 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-spiritual-gold-100 flex items-center justify-center border border-spiritual-gold-200/70 shadow-2xs">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-spiritual-earth-900">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-spiritual-earth-600 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
