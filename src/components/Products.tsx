import React from 'react';
import { Sparkles, Check, Flame, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProductsProps {
  onSelectProduct: (productType: 'dhoop' | 'camphor' | 'both') => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-spiritual-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Sacred Pair</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900">
            Two Essentials for Divine Serenity
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Crafted without compromises. Pure, unadulterated spiritual essentials for your daily morning and evening rituals.
          </p>
        </div>

        {/* The Two Main Products Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* PRODUCT 1: DHOOP STICKS */}
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between group">
            
            <div>
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-spiritual-earth-100">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=900"
                  alt="Divyamrit Pure Bambooless Dhoop Sticks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-spiritual-earth-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  0% Charcoal • Bambooless
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-spiritual-gold-700 uppercase tracking-wider block">
                    Product 01 • Temple Dhoop
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900 mt-1">
                    Pure Bambooless Dhoop Sticks
                  </h3>
                  <p className="text-xs text-spiritual-earth-500 font-serif italic mt-0.5">
                    शुद्ध मैसूर चंदन व गुग्गल धूप बत्ती
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-spiritual-earth-700 leading-relaxed font-sans">
                  Rich, soothing fragrance designed to create a calm and serene atmosphere during your daily rituals. Hand-rolled with pure aged sandalwood powder, wild Guggal resin, and natural plant binders.
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-1 border-t border-spiritual-earth-100">
                  <div className="flex items-center gap-2.5 text-xs text-spiritual-earth-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Bamboo-Free & Charcoal-Free (Pure white smoke)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-spiritual-earth-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Slow, uniform burning time of <strong>45 to 50 minutes</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-spiritual-earth-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Handmade ceramic stand included inside every box</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Price & Action */}
            <div className="p-6 sm:p-8 pt-0 border-t border-spiritual-earth-100 flex items-center justify-between gap-4 mt-2">
              <div className="pt-4">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-spiritual-earth-900 block">
                  ₹349
                </span>
                <span className="text-[11px] text-spiritual-earth-500 font-sans block">
                  Pack of 40 Sticks (Standard Pack)
                </span>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectProduct('dhoop')}
                  className="px-6 py-3 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>Order Dhoop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* PRODUCT 2: CAMPHOR BOX */}
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between group">
            
            <div>
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-spiritual-earth-100">
                <img
                  src="https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=900"
                  alt="Divyamrit Pure Bhimseni Camphor Box"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-spiritual-earth-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  100% Pure • Zero Black Soot
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-spiritual-gold-700 uppercase tracking-wider block">
                    Product 02 • Temple Camphor
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900 mt-1">
                    Pure Bhimseni Camphor Box
                  </h3>
                  <p className="text-xs text-spiritual-earth-500 font-serif italic mt-0.5">
                    भीमसेनी शुद्ध कपूर क्रिस्टल (100% प्राकृतिक)
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-spiritual-earth-700 leading-relaxed font-sans">
                  Pure, clean-burning camphor for daily puja and traditional rituals. Naturally crystallized from pine and camphor bark, sublimating completely without leaving dark carbon residue on brass idols.
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-1 border-t border-spiritual-earth-100">
                  <div className="flex items-center gap-2.5 text-xs text-spiritual-earth-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Leaves <strong>0.00% black residue</strong> or oily soot</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-spiritual-earth-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Crisp, refreshing therapeutic vapor for respiratory ease</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-spiritual-earth-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Airtight UV-lock metal jar preserving freshness for 24 months</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Price & Action */}
            <div className="p-6 sm:p-8 pt-0 border-t border-spiritual-earth-100 flex items-center justify-between gap-4 mt-2">
              <div className="pt-4">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-spiritual-earth-900 block">
                  ₹449
                </span>
                <span className="text-[11px] text-spiritual-earth-500 font-sans block">
                  250g Airtight Jar (Temple Pack)
                </span>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectProduct('camphor')}
                  className="px-6 py-3 rounded-full bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>Order Camphor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Ritual Duo Combo Offer banner */}
        <div className="bg-spiritual-gold-50/90 rounded-3xl border border-spiritual-gold-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-spiritual-gold-800 font-mono">
              ★ Complete Sacred Pair Offer
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-spiritual-earth-900">
              Get Both: Dhoop Sticks (40s) + Bhimseni Camphor (250g)
            </h4>
            <p className="text-xs text-spiritual-earth-600">
              Everything needed for morning meditation and evening Aarti. Save ₹49 on the ritual duo.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <span className="font-serif text-2xl font-bold text-spiritual-earth-900 block">
                ₹749
              </span>
              <span className="text-[11px] text-spiritual-earth-400 line-through">
                ₹798
              </span>
            </div>
            <button
              type="button"
              onClick={() => onSelectProduct('both')}
              className="px-6 py-3 rounded-full bg-spiritual-gold-600 hover:bg-spiritual-gold-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Order Sacred Duo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
