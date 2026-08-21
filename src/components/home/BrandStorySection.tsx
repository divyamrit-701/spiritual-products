import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Sparkles, Flower2, Heart, Award, ArrowRight } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden relative">
      
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-spiritual-gold-100/40 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Images Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] bg-spiritual-bg border border-spiritual-earth-200">
                  <img
                    src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600"
                    alt="Temple Flower Upcycling in Varanasi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 rounded-3xl bg-spiritual-gold-50 border border-spiritual-gold-200 text-center space-y-1">
                  <span className="font-serif text-3xl font-bold text-spiritual-gold-800">50,000+</span>
                  <p className="text-xs text-spiritual-earth-700 font-medium">Kg Temple Flowers Upcycled from River Ganga</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-3xl bg-spiritual-tulsi-50 border border-spiritual-tulsi-100 text-center space-y-1">
                  <span className="font-serif text-3xl font-bold text-spiritual-tulsi-800">120+</span>
                  <p className="text-xs text-spiritual-earth-700 font-medium">Rural Artisan Women Employed with Dignity</p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] bg-spiritual-bg border border-spiritual-earth-200">
                  <img
                    src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=600"
                    alt="Handcrafted Pure Brass Puja Vessels"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Sacred Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900 leading-tight">
              Reviving Ancient Vedic Purity for the Modern Sanctuary
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-spiritual-earth-700 font-sans leading-relaxed">
              <p>
                For centuries, temple rituals across Bharat were filled with the celestial aromas of pure sandalwood paste, wild guggal resins, and natural camphor. However, in modern times, cheap chemical-laden synthetic incense took over.
              </p>
              <p>
                <strong>Divyamrit</strong> was founded with a sacred vow: to bring back 100% natural, unadulterated spiritual essentials to Indian home mandirs.
              </p>
              <p>
                We partner directly with temple trusts in Kashi and Vrindavan to save sacred floral offerings from entering the holy Ganga, hand-crafting them into charcoal-free dhoop and organic agarbatti while generating dignified livelihoods for rural women artisans.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80">
                <Flower2 className="w-5 h-5 text-spiritual-tulsi-600 mb-2" />
                <h4 className="font-serif text-sm font-bold text-spiritual-earth-900">Zero Charcoal</h4>
                <p className="text-[11px] text-spiritual-earth-500 mt-0.5">Non-toxic white smoke safe for infants and elders.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80">
                <Heart className="w-5 h-5 text-rose-600 mb-2" />
                <h4 className="font-serif text-sm font-bold text-spiritual-earth-900">Artisan Dignity</h4>
                <p className="text-[11px] text-spiritual-earth-500 mt-0.5">Fair wages and safe work environments in UP & Rajasthan.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-spiritual-bg border border-spiritual-earth-200/80">
                <Award className="w-5 h-5 text-spiritual-gold-600 mb-2" />
                <h4 className="font-serif text-sm font-bold text-spiritual-earth-900">100% Bhimseni</h4>
                <p className="text-[11px] text-spiritual-earth-500 mt-0.5">Zero wax or petrochemical adulterants.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link to="/story">
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Read Our Full Story
                </Button>
              </Link>
              <Link to="/about" className="text-xs font-semibold text-spiritual-earth-800 hover:text-spiritual-gold-700 underline">
                Learn About Our Sourcing
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
