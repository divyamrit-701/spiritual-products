import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Sparkles, Heart, Flower2, Award, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const OurStoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Our Story & Heritage' }]} />

        {/* Story Hero */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-spiritual-gold-100 text-spiritual-gold-900 text-xs font-semibold border border-spiritual-gold-300">
            <Sun className="w-3.5 h-3.5" />
            <span>From the Ghats of Varanasi to Indian Homes</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-spiritual-earth-900 leading-tight">
            The Journey of Divyamrit
          </h1>
          <p className="text-base sm:text-lg text-spiritual-earth-600 font-serif italic">
            "Where ancient Vedic wisdom meets conscious modern living."
          </p>
        </div>

        {/* Cover Photo */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-spiritual-earth-100">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
            alt="Vedic Morning Rituals in Varanasi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Narrative Chapters */}
        <div className="space-y-10 text-sm sm:text-base text-spiritual-earth-800 font-sans leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-spiritual-earth-900">
              1. The Spark in Kashi (2021)
            </h2>
            <p>
              It began during an evening Ganga Aarti at Dashashwamedh Ghat in Varanasi. While watching the magnificent brass multi-tiered lamps rotate against the night sky, we noticed something troubling: the thick, acrid black smoke drifting from commercial incense stands across the pilgrimage city.
            </p>
            <p>
              Upon investigating, we discovered that over 90% of commercial agarbatti and camphor sold in India were coated with industrial charcoal, toxic chemical binders, and crude petroleum-derived wax. Devotees seeking purity in prayer were unknowingly inhaling hazardous pollutants right inside their home temples.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-spiritual-earth-900">
              2. Reviving Vedic Dhoopa Vidhana
            </h2>
            <p>
              We spent eighteen months consulting with traditional Ayurvedic scholars, temple priests (*Pujaris*), and master botanical distillers in Kannauj and Moradabad. We delved into classical texts including the *Sushruta Samhita* and *Kautilya Arthashastra* to rediscover ancient sacred recipes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-spiritual-earth-700">
              <li><strong>Zero Bamboo</strong>: Respecting traditional domestic fire principles and eliminating toxic smoke accelerators.</li>
              <li><strong>Pure Resins</strong>: Sourcing genuine wild Guggal from Rajasthan and Himalayan cedarwood sap.</li>
              <li><strong>Bhimseni Karpuram</strong>: Using 100% naturally crystallized tree camphor that sublimates completely without soot.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-spiritual-earth-900">
              3. The Sacred Flower Miracle
            </h2>
            <p>
              Every morning, tons of sacred marigold and rose garlands offered with devotion in temples were discarded into the holy Ganga. We set up an ethical recycling collective that collects these sacred offerings directly from temple steps.
            </p>
            <p>
              Local rural women artisans carefully separate, wash with natural spring water, sun-dry, and powder the petals. Today, over 120 artisan women earn fair, dignified wages, ensuring that the flowers offered in devotion find new sacred life in your home prayer.
            </p>
          </div>

        </div>

        {/* Quotes Callout */}
        <div className="p-8 rounded-3xl bg-spiritual-gold-50 border border-spiritual-gold-200 text-center space-y-3">
          <p className="font-serif text-xl sm:text-2xl font-bold text-spiritual-gold-950 italic">
            "Our mission is simple: to ensure that when you close your eyes in prayer, every breath connects you directly to divine peace."
          </p>
          <span className="text-xs font-semibold text-spiritual-earth-600 block">
            — Founders, Divyamrit Aromatics
          </span>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link to="/shop">
            <Button variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore Our Sacred Formulations
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};
