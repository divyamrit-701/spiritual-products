import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VisualStory } from './components/VisualStory';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<'dhoop' | 'camphor' | 'both'>('both');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (productType: 'dhoop' | 'camphor' | 'both') => {
    setSelectedProduct(productType);
    scrollToSection('order');
  };

  return (
    <div className="min-h-screen bg-spiritual-bg text-spiritual-earth-900 font-sans selection:bg-spiritual-gold-200 selection:text-spiritual-earth-950">
      {/* 1. Header / Navbar */}
      <Navbar onOrderClick={() => scrollToSection('order')} />

      {/* 2. Hero Section */}
      <Hero 
        onExploreClick={() => scrollToSection('products')} 
        onOrderClick={() => scrollToSection('order')} 
      />

      {/* 3. About the Brand */}
      <About />

      {/* 4. Our Two Products */}
      <Products onSelectProduct={handleSelectProduct} />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Brand / Visual Story */}
      <VisualStory />

      {/* 7. Contact / Direct Ordering */}
      <OrderSection 
        selectedProduct={selectedProduct} 
        onProductChange={setSelectedProduct} 
      />

      {/* 8. Minimalist Footer */}
      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />

      {/* Privacy Policy Modal */}
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </div>
  );
};

export default App;
