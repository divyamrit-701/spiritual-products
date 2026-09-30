import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';

interface HeroSliderProps {
  onExploreClick: () => void;
  onDhoopClick: () => void;
  onCamphorClick: () => void;
  onComboClick: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onExploreClick,
  onDhoopClick,
  onCamphorClick,
  onComboClick
}) => {
  const slides = [
    {
      id: 'slide-brand',
      bgImage: '/images/hero_slide_1.jpg',
      badge: 'Authentic Indian Spiritual Brand',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'Pure Fragrance.\nTimeless Tradition.',
      subtitle: 'Thoughtfully crafted spiritual essentials for your everyday rituals and sacred sanctuary. Formulated in accordance with ancient Vedic principles.',
      primaryBtnText: 'Explore Collection',
      primaryAction: onExploreClick,
      secondaryBtnText: 'Order Sacred Duo',
      secondaryAction: onComboClick,
      highlights: ['100% Charcoal Free', 'Zero Black Soot', 'Pan-India Delivery']
    },
    {
      id: 'slide-dhoop',
      bgImage: '/images/hero_slide_2.jpg',
      badge: 'Flagship Formulation • 0% Charcoal',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'Pure Bambooless\nMysore Sandalwood Dhoop',
      subtitle: 'Slow-burning natural dhoop sticks made with aged sandalwood powder and wild desert Guggal resin. Soft white smoke with 45–50 minutes burn time.',
      primaryBtnText: 'Explore Dhoop Sticks',
      primaryAction: onDhoopClick,
      secondaryBtnText: 'Shop Pack (₹349)',
      secondaryAction: onDhoopClick,
      highlights: ['100% Bamboo-Free', 'Pure Sandalwood & Guggal', 'Ceramic Stand Included']
    },
    {
      id: 'slide-camphor',
      bgImage: '/images/hero_slide_3.jpg',
      badge: 'Sacred Temple Camphor • 100% Organic',
      badgeIcon: <Flame className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'Pure Crystalline\nBhimseni Kapoor',
      subtitle: 'Naturally extracted organic pine crystals burning with a serene golden-blue flame, leaving zero black soot residue on idols or temple ceilings.',
      primaryBtnText: 'Explore Bhimseni Camphor',
      primaryAction: onCamphorClick,
      secondaryBtnText: 'Shop Jar (₹449)',
      secondaryAction: onCamphorClick,
      highlights: ['0.00% Black Residue', 'Crisp Botanical Vapors', 'Airtight 250g Jar']
    },
    {
      id: 'slide-combo',
      bgImage: '/images/hero_slide_4.jpg',
      badge: 'Complete Worship Kit • Best Value',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'The Sacred Sadhana\nDaily Worship Duo',
      subtitle: 'Everything needed for your daily morning meditation and evening Aarti. 40 Bambooless Dhoop Sticks + 250g Pure Bhimseni Camphor Jar with Free Express Shipping.',
      primaryBtnText: 'Order Sacred Duo (₹749)',
      primaryAction: onComboClick,
      secondaryBtnText: 'View All Products',
      secondaryAction: onExploreClick,
      highlights: ['Save ₹149 on Set', 'Free Express Air Shipping', 'Ceramic Burner Included']
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      id="home"
      className="relative w-full overflow-hidden bg-spiritual-earth-950 min-h-[580px] lg:min-h-[660px] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
          />

          {/* Luxury Spiritual Gradient Overlays for High Contrast & Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-spiritual-earth-950/95 via-spiritual-earth-950/75 to-spiritual-earth-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950/90 via-transparent to-spiritual-earth-950/40" />
        </div>
      ))}

      {/* Main Slide Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-spiritual-gold-400/40 text-spiritual-gold-300 text-xs font-semibold tracking-wider uppercase shadow-xs">
            {slides[current].badgeIcon}
            <span>{slides[current].badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight whitespace-pre-line drop-shadow-md">
            {slides[current].title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-spiritual-earth-200 font-sans leading-relaxed font-light drop-shadow-sm max-w-xl">
            {slides[current].subtitle}
          </p>

          {/* Highlight Points */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-spiritual-earth-300 font-medium pt-1">
            {slides[current].highlights.map((h, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-spiritual-earth-900/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-spiritual-earth-700/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-spiritual-gold-400" />
                <span>{h}</span>
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
            <button
              onClick={slides[current].primaryAction}
              className="px-7 py-3.5 rounded-full bg-spiritual-gold-500 hover:bg-spiritual-gold-400 text-spiritual-earth-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{slides[current].primaryBtnText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={slides[current].secondaryAction}
              className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold text-xs sm:text-sm tracking-wide transition-all active:scale-95 text-center"
            >
              {slides[current].secondaryBtnText}
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-spiritual-gold-600/80 text-white backdrop-blur-md border border-white/10 transition-all opacity-75 hover:opacity-100 focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-spiritual-gold-600/80 text-white backdrop-blur-md border border-white/10 transition-all opacity-75 hover:opacity-100 focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current 
                ? 'w-8 bg-spiritual-gold-400' 
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
