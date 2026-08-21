import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const ANNOUNCEMENTS = [
  {
    icon: <Truck className="w-3.5 h-3.5 text-spiritual-gold-400" />,
    text: 'Free Express Shipping across India on orders above ₹999',
    cta: 'Shop Now',
    link: '/shop'
  },
  {
    icon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />,
    text: 'Use code DIVYAMRIT10 for 10% OFF your first sacred order',
    cta: 'Copy Code',
    code: 'DIVYAMRIT10'
  },
  {
    icon: <ShieldCheck className="w-3.5 h-3.5 text-spiritual-gold-400" />,
    text: '100% Pure Temple-Grade Bhimseni Camphor • Zero Black Smoke',
    cta: 'Explore Camphor',
    link: '/category/camphor'
  },
  {
    icon: <HeartHandshake className="w-3.5 h-3.5 text-spiritual-gold-400" />,
    text: 'Upcycled Sacred Temple Flowers • Empowering Rural Women Artisans',
    cta: 'Our Story',
    link: '/story'
  }
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[currentIndex];

  return (
    <div className="bg-spiritual-earth-900 text-spiritual-cream text-xs py-2 px-4 border-b border-spiritual-earth-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Sanskrit blessing badge on desktop */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-spiritual-gold-300/90 font-serif tracking-wider">
          <span>ॐ असतो मा सद्गमय</span>
          <span>•</span>
          <span>Purity In Every Breath</span>
        </div>

        {/* Dynamic rotating announcement */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <div key={currentIndex} className="inline-flex items-center gap-2 animate-fade-in truncate">
            {current.icon}
            <span className="font-medium text-white tracking-wide">
              {current.text}
            </span>
            {current.link ? (
              <Link 
                to={current.link} 
                className="underline underline-offset-2 text-spiritual-gold-300 hover:text-white ml-1.5 font-semibold text-[11px] shrink-0"
              >
                {current.cta} &rarr;
              </Link>
            ) : current.code ? (
              <span className="bg-spiritual-gold-500/30 text-spiritual-gold-300 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ml-1">
                {current.code}
              </span>
            ) : null}
          </div>
        </div>

        {/* Currency & Trust guarantee */}
        <div className="hidden md:flex items-center gap-3 text-[11px] text-spiritual-earth-300">
          <span className="flex items-center gap-1 font-sans">
            <span>🇮🇳 INR (₹)</span>
          </span>
          <span>|</span>
          <Link to="/faq" className="hover:text-spiritual-gold-300 transition-colors">
            Help & FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};
