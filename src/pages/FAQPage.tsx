import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Accordion, AccordionItem } from '../components/ui/Accordion';
import { HelpCircle, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    'all',
    'Purity & Ingredients',
    'Usage & Safety',
    'Orders & Shipping',
    'Bulk & Corporate',
    'Returns & Payments'
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Help & FAQs' }]} />

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-spiritual-gold-100 text-spiritual-gold-900 text-xs font-semibold border border-spiritual-gold-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-spiritual-earth-900">
            How Can We Assist Your Sadhana?
          </h1>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans max-w-xl mx-auto">
            Find answers regarding product purity, zero black smoke camphor, bamboo-free dhoop, burning safety, and pan-India express shipping.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="w-4 h-4 text-spiritual-earth-400 absolute left-4 top-7" />
            <input 
              type="text"
              placeholder="Search FAQs (e.g. Bhimseni camphor, shipping, COD)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-full border border-spiritual-earth-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-spiritual-gold-400"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-spiritual-earth-900 text-white shadow-xs'
                  : 'bg-white text-spiritual-earth-700 hover:bg-spiritual-gold-50 border border-spiritual-earth-200'
              }`}
            >
              {cat === 'all' ? 'All Questions' : cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-10 shadow-spiritual">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 space-y-2">
              <p className="text-sm font-semibold text-spiritual-earth-800">
                No matching answers found for "{searchQuery}"
              </p>
              <p className="text-xs text-spiritual-earth-500">
                Please contact our concierge team directly through the <Link to="/contact" className="text-spiritual-gold-700 underline font-semibold">Contact Page</Link>.
              </p>
            </div>
          ) : (
            <Accordion>
              {filteredFaqs.map((faq, idx) => (
                <AccordionItem
                  key={faq.id}
                  title={faq.question}
                  subtitle={<span className="text-spiritual-gold-700 font-medium">{faq.category}</span>}
                  defaultOpen={idx === 0}
                >
                  <p className="text-xs sm:text-sm text-spiritual-earth-700 leading-relaxed font-sans pt-1">
                    {faq.answer}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Help Banner */}
        <div className="p-6 rounded-3xl bg-spiritual-gold-50/80 border border-spiritual-gold-200 text-center space-y-2">
          <h4 className="font-serif text-lg font-bold text-spiritual-earth-900">
            Still Have Questions?
          </h4>
          <p className="text-xs text-spiritual-earth-600">
            Our devotional support team in Varanasi is available from 9 AM to 7 PM IST.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-spiritual-gold-800 underline underline-offset-2 hover:text-spiritual-gold-900"
            >
              <span>Contact Concierge Desk &rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
