import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Flower2, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../utils/formatters';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-spiritual-cream/70 via-spiritual-bg to-spiritual-bg pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-spiritual-earth-200/60">
      
      {/* Sacred Background Geometric Mandala Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-spiritual-gold-200/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Sacred Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spiritual-gold-100/90 border border-spiritual-gold-300 text-spiritual-gold-900 text-xs font-semibold tracking-wide">
              <span className="text-spiritual-gold-600 font-serif text-sm">🪔</span>
              <span>100% Authentic Indian Spiritual Essentials</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-6xl font-extrabold text-spiritual-earth-900 leading-[1.12] tracking-tight">
              Bring <span className="text-spiritual-gold-600 italic">Purity</span>, Peace & Divine Fragrance Into Your Home
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-spiritual-earth-700 leading-relaxed max-w-2xl font-sans">
              Experience temple-grade Bhimseni camphor with zero black soot, charcoal-free dhoop sticks handcrafted from upcycled temple flowers, and heirloom brassware crafted for serene daily sadhana.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/shop">
                <Button 
                  variant="gold" 
                  size="lg" 
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-lg"
                >
                  Shop Sacred Collection
                </Button>
              </Link>

              <Link to="/collections">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Themed Collections
                </Button>
              </Link>
            </div>

            {/* 4 Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-spiritual-earth-200/80">
              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-full bg-spiritual-gold-100 text-spiritual-gold-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-spiritual-earth-900">100% Pure</div>
                  <div className="text-[10px] text-spiritual-earth-500">Zero Chemical Wax</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-full bg-spiritual-tulsi-100 text-spiritual-tulsi-700 flex items-center justify-center shrink-0">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-spiritual-earth-900">0% Charcoal</div>
                  <div className="text-[10px] text-spiritual-earth-500">Pure White Smoke</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Flower2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-spiritual-earth-900">Sacred Upcycling</div>
                  <div className="text-[10px] text-spiritual-earth-500">Kashi Temple Flowers</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-spiritual-earth-900">Pan-India Express</div>
                  <div className="text-[10px] text-spiritual-earth-500">Free Above ₹999</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-spiritual-earth-100 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1000"
                  alt="Sacred Dhoop and Incense Rituals"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950/80 via-transparent to-transparent" />
                
                {/* Bottom Overlay Info on image */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[11px] font-mono text-spiritual-gold-300 uppercase tracking-widest">
                    Signature Formulation
                  </span>
                  <h3 className="font-serif text-xl font-bold">
                    Mysore Sandalwood & Bhimseni Karpuram
                  </h3>
                  <p className="text-xs text-spiritual-earth-200">
                    Hand-rolled with sacred resins and wild honey.
                  </p>
                </div>
              </div>

              {/* Floating Floating Product Highlight Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-spiritual-earth-200 shadow-xl max-w-[210px] animate-pulse-subtle">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-spiritual-bg shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=200" 
                      alt="Bhimseni Camphor"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-spiritual-earth-900 font-serif">
                      Bhimseni Camphor
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold">
                      0% Black Carbon Soot
                    </div>
                    <div className="text-xs font-bold text-spiritual-gold-700">
                      {formatCurrency(449)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Review Badge 2 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-spiritual-earth-200 shadow-xl max-w-[220px]">
                <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                  ★★★★★
                </div>
                <p className="text-[11px] text-spiritual-earth-800 italic font-serif leading-snug">
                  "Leaves no black smoke on our brass mandir. Exceptional purity!"
                </p>
                <div className="text-[10px] font-semibold text-spiritual-earth-500 mt-1">
                  — Priya S., Bengaluru
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
