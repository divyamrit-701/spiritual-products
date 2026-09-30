import React, { useState } from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { DhoopFeatureSection } from '../components/home/DhoopFeatureSection';
import { CamphorFeatureSection } from '../components/home/CamphorFeatureSection';
import { ExploreCategoriesSection } from '../components/home/ExploreCategoriesSection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { BlogSection } from '../components/home/BlogSection';
import { FAQSection } from '../components/home/FAQSection';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (catId: string) => {
    if (catId === 'dhoop-sticks') {
      scrollTo('dhoop-feature');
    } else if (catId === 'camphor') {
      scrollTo('camphor-feature');
    } else {
      scrollTo('products');
    }
  };

  const handleProductClick = (product: Product) => {
    navigate(`/products/${product.slug}`);
  };

  const handlePostClick = (postSlug: string) => {
    navigate(`/blog/${postSlug}`);
  };

  return (
    <div className="space-y-0">
      
      {/* 3. HERO / SLIDER */}
      <HeroSlider
        onExploreClick={() => scrollTo('products')}
        onDhoopClick={() => scrollTo('dhoop-feature')}
        onCamphorClick={() => scrollTo('camphor-feature')}
        onComboClick={() => scrollTo('products')}
      />

      {/* 4. DHOOP STICKS FEATURE SECTION */}
      <DhoopFeatureSection
        onExploreClick={() => scrollTo('products')}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* 5. BHIMSENI CAMPHOR (KAPOOR) FEATURE SECTION */}
      <CamphorFeatureSection
        onExploreClick={() => scrollTo('products')}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* 6. EXPLORE OUR PRODUCTS / COLLECTIONS */}
      <ExploreCategoriesSection
        onCategoryClick={handleCategoryClick}
      />

      {/* 7. FEATURED PRODUCTS / BESTSELLERS */}
      <FeaturedProductsSection
        onQuickView={(p) => setQuickViewProduct(p)}
        onProductClick={handleProductClick}
      />

      {/* 8. WHY CHOOSE DIVYAMRIT */}
      <WhyChooseUsSection />

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. BLOG */}
      <BlogSection
        onPostClick={handlePostClick}
      />

      {/* 11. FAQ */}
      <FAQSection />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
};
