import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOrderClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 lg:pt-18 lg:pb-24">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spiritual-gold-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-spiritual-gold-200/90 text-spiritual-gold-900 text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-600" />
              <span>Authentic Indian Spiritual Essentials</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-spiritual-earth-900 leading-[1.15] tracking-tight">
              Pure Fragrance.<br />
              <span className="text-spiritual-gold-600 italic">Timeless Tradition.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-spiritual-earth-700 font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Thoughtfully crafted spiritual essentials for your everyday rituals. Experience the serenity of clean-burning Bhimseni camphor and charcoal-free botanical dhoop.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-earth-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowDown className="w-4 h-4 text-spiritual-gold-300" />
              </button>

              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-spiritual-gold-50 text-spiritual-earth-900 border border-spiritual-earth-300 font-semibold text-sm transition-all shadow-xs hover:border-spiritual-gold-400 active:scale-95"
              >
                Order Direct
              </button>
            </div>

            {/* 3 Value Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-spiritual-earth-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-spiritual-gold-600" />
                100% Charcoal Free
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-spiritual-gold-600" />
                Zero Black Soot
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-spiritual-gold-600" />
                Direct WhatsApp Order
              </span>
            </div>

          </div>

          {/* Right Visual Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-spiritual-earth-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=900"
                  alt="Lit spiritual dhoop with serene fragrant smoke"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950/70 via-transparent to-transparent" />
                
                {/* Image caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-mono text-spiritual-gold-300 uppercase tracking-widest block">
                    Handcrafted in Bharat
                  </span>
                  <div className="font-serif text-lg font-bold">
                    Natural Dhoop & Pure Camphor
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-spiritual-earth-200 shadow-xl max-w-[190px]">
                <div className="text-[11px] font-serif font-bold text-spiritual-earth-900">
                  Daily Sandhya Rituals
                </div>
                <div className="text-[10px] text-spiritual-earth-500 mt-0.5">
                  Natural aromas for morning meditation & evening aarti.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
