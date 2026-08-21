import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Flame, 
  Hammer, 
  PackageCheck, 
  Truck 
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Authentic Temple Formulations',
      description: 'Recipes formulated strictly in accordance with ancient Agamic and Ayurvedic Dhoopa Vidhana scriptures.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-spiritual-gold-600" />,
      title: '100% Pure Bhimseni Camphor',
      description: 'Zero petrochemical wax, zero synthetic scents. Sublimates completely leaving zero black residue or soot.'
    },
    {
      icon: <Flame className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Charcoal & Bamboo Free',
      description: '100% bamboo-free dhoop sticks producing gentle, velvety white smoke that never irritates sensitive throats.'
    },
    {
      icon: <Hammer className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Traditional Craftsmanship',
      description: 'Hand-rolled by skilled generational artisan families in Varanasi, Moradabad, Pushkar, and Kannauj.'
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'UV-Protected Secure Packaging',
      description: 'Airtight tin containers and rigid wooden caskets preserving fresh natural essential oils for up to 24 months.'
    },
    {
      icon: <Truck className="w-6 h-6 text-spiritual-gold-600" />,
      title: 'Express Pan-India Delivery',
      description: 'Dispatched within 24 hours with real-time tracking across 28,000+ Indian postal codes. Free above ₹999.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-spiritual-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Divyamrit Promise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Why Discerning Devotees Choose Us
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            We hold ourselves to the highest standards of devotional sanctity, raw ingredient purity, and customer trust.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={`why-${idx}`}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-spiritual-earth-200/80 shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 transform hover:-translate-y-1 space-y-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-spiritual-gold-50 group-hover:bg-spiritual-gold-100 flex items-center justify-center transition-colors border border-spiritual-gold-200/60">
                {f.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-spiritual-earth-600 leading-relaxed font-sans">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
