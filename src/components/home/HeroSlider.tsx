import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Flame, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

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
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();

  const dhoopProduct = PRODUCTS.find((p) => p.slug === 'divyamrit-4-in-1-premium-mix-fragrance-dhoop-sticks-pack-of-2') || PRODUCTS[0];
  const camphorProduct = PRODUCTS.find((p) => p.slug === 'divyamrit-bhimseni-kapoor-pure-crystals-100g') || PRODUCTS[1];

  const slides = [
    {
      id: 'slide-brand',
      bgImage: '/images/hero_slide_1.jpg',
      badge: 'Authentic Indian Spiritual Brand',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'Pure Fragrance.\nTimeless Tradition.',
      subtitle: 'Thoughtfully crafted spiritual essentials for your everyday rituals and sacred sanctuary. Formulated in accordance with ancient Vedic principles.',
      primaryBtnText: 'Explore Collection',
      primaryAction: () => {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      secondaryBtnText: 'View Dhoop Sticks',
      secondaryAction: () => navigate(`/products/${dhoopProduct.slug}`),
      highlights: ['4-in-1 Sacred Fragrance', 'Pure Crystal Bhimseni Kapoor', 'Pan-India Delivery']
    },
    {
      id: 'slide-dhoop',
      bgImage: '/images/hero_slide_2.jpg',
      badge: 'Pack of 2 Boxes (400g Total)',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'Divyamrit 4-in-1\nPremium Dhoop Sticks',
      subtitle: 'Featuring Rose, Mogra, Loban & Guggal fragrances for a rich and divine pooja experience. 200g × 2 Boxes (400g Total Quantity).',
      primaryBtnText: 'View Product Details',
      primaryAction: () => navigate(`/products/${dhoopProduct.slug}`),
      secondaryBtnText: 'Add to Cart (₹398)',
      secondaryAction: () => {
        addToCart(dhoopProduct);
        setIsCartOpen(true);
      },
      highlights: ['Rose, Mogra, Loban & Guggal', '200g × 2 Boxes (400g Total)', '₹398 (MRP incl. all taxes)']
    },
    {
      id: 'slide-camphor',
      bgImage: '/images/hero_slide_3.jpg',
      badge: 'Pure Crystal Form • 100g Pack',
      badgeIcon: <Flame className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'Divyamrit Bhimseni Kapoor\nPure Crystals | 100g',
      subtitle: 'Specially packed for pooja, aarti, havan and daily spiritual rituals. Clean-burning crystals add a traditional and fragrant touch to your devotional space.',
      primaryBtnText: 'View Product Details',
      primaryAction: () => navigate(`/products/${camphorProduct.slug}`),
      secondaryBtnText: 'Add to Cart (₹259)',
      secondaryAction: () => {
        addToCart(camphorProduct);
        setIsCartOpen(true);
      },
      highlights: ['Pure Crystal Form', 'Suitable for Daily Aarti & Havan', '₹259 (Save 8% OFF)']
    },
    {
      id: 'slide-combo',
      bgImage: '/images/hero_slide_4.jpg',
      badge: 'Complete Sacred Pooja Set',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-spiritual-gold-400" />,
      title: 'Sacred Sadhana\nDaily Worship Essentials',
      subtitle: 'Combine Divyamrit 4-in-1 Dhoop Sticks (400g) with Pure Bhimseni Kapoor Crystals (100g) for your daily pooja and spiritual sanctuary.',
      primaryBtnText: 'Explore Sacred Offerings',
      primaryAction: () => {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      secondaryBtnText: 'View All Products',
      secondaryAction: () => navigate('/shop'),
      highlights: ['4-in-1 Dhoop Sticks (400g)', 'Bhimseni Kapoor (100g)', 'Express Fast Shipping']
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
