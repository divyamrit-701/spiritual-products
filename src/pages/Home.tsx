import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { BestSellersSection } from '../components/home/BestSellersSection';
import { BrandStorySection } from '../components/home/BrandStorySection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { PortfolioPreviewSection } from '../components/home/PortfolioPreviewSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { SocialRitualsSection } from '../components/home/SocialRitualsSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Product } from '../types';

export const Home: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-spiritual-bg">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Category Cards */}
      <CategorySection />

      {/* 3. Best Sellers Carousel */}
      <BestSellersSection onQuickView={(p) => setQuickViewProduct(p)} />

      {/* 4. Brand Philosophy & Artisan Heritage */}
      <BrandStorySection />

      {/* 5. Why Choose Us (6 Pillars) */}
      <WhyChooseUsSection />

      {/* 6. Product Portfolio / Catalogue Preview */}
      <PortfolioPreviewSection onQuickView={(p) => setQuickViewProduct(p)} />

      {/* 7. Customer Testimonials */}
      <TestimonialsSection />

      {/* 8. Instagram & Social Rituals Gallery */}
      <SocialRitualsSection />

      {/* 9. Newsletter Subscription */}
      <NewsletterSection />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
