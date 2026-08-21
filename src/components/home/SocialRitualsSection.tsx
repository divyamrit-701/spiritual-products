import React from 'react';
import { Instagram, Sparkles } from 'lucide-react';

const SOCIAL_POSTS = [
  {
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600',
    caption: 'Brahma Muhurta sadhana with pure Mysore Sandalwood dhoop ✨ #Divyamrit #DailyPuja',
    likes: '1.2k'
  },
  {
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=600',
    caption: 'Solid brass Akhand Diya lighting our home mandir for Navratri 🪔 #SacredHome',
    likes: '2.4k'
  },
  {
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=600',
    caption: 'Original Bhimseni camphor crystals burning completely with zero residue 🤍 #PureKarpur',
    likes: '950'
  },
  {
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600',
    caption: 'Upcycled holy temple flowers from Kashi transformed into floral incense 🌸 #EthicalBharat',
    likes: '3.1k'
  },
  {
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    caption: 'Festive Suvarna wooden casket gift box prepared for Griha Pravesh 🎁 #AuspiciousGifts',
    likes: '1.8k'
  },
  {
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    caption: 'Evening meditation sanctuary with sandalwood mist & sacred resins 🧘 #VedicWellness',
    likes: '820'
  }
];

export const SocialRitualsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-spiritual-bg border-t border-spiritual-earth-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5" />
            <span>#DivyamritRituals</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-earth-900">
            Sacred Mandirs & Spiritual Living
          </h2>
          <p className="text-sm text-spiritual-earth-600 font-sans">
            Tag @divyamritindia on Instagram to be featured in our sacred community gallery.
          </p>
        </div>

        {/* 6-Grid Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SOCIAL_POSTS.map((post, idx) => (
            <div
              key={`social-${idx}`}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-spiritual-earth-100 border border-spiritual-earth-200 shadow-xs"
            >
              <img
                src={post.image}
                alt={`Divyamrit Social Ritual ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-spiritual-earth-950/75 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between text-white text-xs">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-spiritual-gold-300" />
                </div>
                <p className="text-[11px] font-sans line-clamp-3 leading-snug">
                  {post.caption}
                </p>
                <span className="text-[10px] font-mono text-spiritual-gold-300">
                  ♥ {post.likes}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
