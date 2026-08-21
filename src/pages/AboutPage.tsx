import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Sparkles, Heart, ShieldCheck, Flower2, Award, Leaf, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-spiritual-gold-100 text-spiritual-gold-900 text-xs font-semibold border border-spiritual-gold-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devotion • Purity • Sustainability</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-spiritual-earth-900 leading-tight">
            Crafting Sacred Aromas with Uncompromised Purity
          </h1>
          <p className="text-base sm:text-lg text-spiritual-earth-700 font-sans leading-relaxed">
            Divyamrit is an Indian spiritual lifestyle brand dedicated to reviving the sacred ancient scents of Sanatana Dharma while uplifting rural artisan communities and protecting holy Indian rivers.
          </p>
        </div>

        {/* Core Narrative Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-spiritual-earth-900 text-white p-8 sm:p-14 shadow-2xl border border-spiritual-earth-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-spiritual-gold-300 uppercase tracking-widest">
              The Divyamrit Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-snug">
              Every Flame Should Illuminate, Every Scent Should Cleanse.
            </h2>
            <p className="text-xs sm:text-sm text-spiritual-earth-200 leading-relaxed font-sans">
              In Sanskrit scriptures, lighting a lamp or burning sacred incense (*Dhoopa*) is not merely ritual; it is a sacred technology (*Yajna Upachara*) intended to balance the subtle prana of your living sanctuary.
            </p>
            <p className="text-xs sm:text-sm text-spiritual-earth-200 leading-relaxed font-sans">
              When commercial markets compromised on purity by introducing charcoal, dipped perfumes, and synthetic wax into puja items, we chose to stand firmly for authenticity.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-spiritual-earth-800/80 border border-spiritual-earth-700 text-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-gold-400">100%</span>
              <p className="text-[11px] text-spiritual-earth-300 mt-1">Chemical & Charcoal Free</p>
            </div>
            <div className="p-4 rounded-2xl bg-spiritual-earth-800/80 border border-spiritual-earth-700 text-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-gold-400">0.00%</span>
              <p className="text-[11px] text-spiritual-earth-300 mt-1">Black Soot on Bhimseni Camphor</p>
            </div>
            <div className="p-4 rounded-2xl bg-spiritual-earth-800/80 border border-spiritual-earth-700 text-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-gold-400">50 Tonnes+</span>
              <p className="text-[11px] text-spiritual-earth-300 mt-1">Temple Flowers Upcycled</p>
            </div>
            <div className="p-4 rounded-2xl bg-spiritual-earth-800/80 border border-spiritual-earth-700 text-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-gold-400">120+</span>
              <p className="text-[11px] text-spiritual-earth-300 mt-1">Women Artisans Supported</p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Sourcing */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900">
              Our 4 Pillars of Conscious Devotion
            </h3>
            <p className="text-xs sm:text-sm text-spiritual-earth-600">
              How we formulate, harvest, and craft every sacred offering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-spiritual-earth-200 shadow-spiritual space-y-3">
              <Flower2 className="w-8 h-8 text-rose-600" />
              <h4 className="font-serif text-base font-bold text-spiritual-earth-900">Temple Flower Upcycling</h4>
              <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
                We collect sanctified floral offerings from holy shrines in Kashi and Vrindavan, saving them from polluting the Ganga, and recycle them into fragrant flora bathi.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-spiritual-earth-200 shadow-spiritual space-y-3">
              <ShieldCheck className="w-8 h-8 text-spiritual-gold-600" />
              <h4 className="font-serif text-base font-bold text-spiritual-earth-900">100% Pure Bhimseni</h4>
              <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
                Our camphor is extracted naturally from botanical trees. It leaves zero residue, produces pure golden-blue flames, and releases therapeutic respiratory vapors.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-spiritual-earth-200 shadow-spiritual space-y-3">
              <Users className="w-8 h-8 text-spiritual-tulsi-600" />
              <h4 className="font-serif text-base font-bold text-spiritual-earth-900">Women Artisan Empowerment</h4>
              <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
                Every incense stick is hand-rolled by trained rural women artisans across Uttar Pradesh, providing fair wages, dignity, and economic independence.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-spiritual-earth-200 shadow-spiritual space-y-3">
              <Award className="w-8 h-8 text-spiritual-earth-800" />
              <h4 className="font-serif text-base font-bold text-spiritual-earth-900">Heirloom Metalcraft</h4>
              <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans">
                Our heavy brass Akhand Diyas and Kalash vessels are crafted by traditional Thathera generational coppersmiths in Moradabad.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-spiritual-gold-100/70 border border-spiritual-gold-300 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900">
            Experience the Divine Difference
          </h3>
          <p className="text-xs sm:text-sm text-spiritual-earth-700 max-w-xl mx-auto font-sans">
            Bring the pure aroma of temple sanctums into your home mandir today.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link to="/shop">
              <Button variant="gold" size="md">Explore Sacred Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="md">Contact Our Concierge</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
