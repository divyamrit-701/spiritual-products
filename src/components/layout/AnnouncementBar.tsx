import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, ShieldCheck, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
  const announcements = [
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400 shrink-0" />,
      text: 'Pure & Authentic Spiritual Essentials for Sacred Daily Rituals',
      linkText: 'Explore Collection',
      linkUrl: '#products'
    },
    {
      icon: <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
      text: 'Free Express Air Shipping across all India on Orders over ₹749',
      linkText: 'Shop Sacred Duo',
      linkUrl: '#products'
    },
    {
      icon: <Tag className="w-3.5 h-3.5 text-spiritual-gold-300 shrink-0" />,
      text: 'Special Blessing: Get 10% Extra Off on your First Order — Code: DIVYAMRIT10',
      linkText: 'Apply Code',
      linkUrl: '#products'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const current = announcements[currentIndex];

  const handleScrollTo = (idWithHash: string) => {
    const id = idWithHash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-spiritual-earth-950 text-white text-[11px] sm:text-xs py-2 px-4 border-b border-spiritual-earth-800 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center font-sans tracking-wide">
        <div className="flex items-center gap-2 transition-opacity duration-300">
          {current.icon}
          <span className="text-spiritual-earth-200 font-medium">
            {current.text}
          </span>
          <span className="hidden sm:inline text-spiritual-earth-600">•</span>
          <button
            onClick={() => handleScrollTo(current.linkUrl)}
            className="hidden sm:inline font-bold text-spiritual-gold-400 hover:text-spiritual-gold-300 underline underline-offset-2 transition-colors cursor-pointer"
          >
            {current.linkText} &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
