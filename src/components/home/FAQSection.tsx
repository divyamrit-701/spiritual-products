import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare } from 'lucide-react';
import { FAQS } from '../../data/faqs';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((curr) => (curr === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-spiritual-bg border-b border-spiritual-earth-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Devotee Assistance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Clear answers regarding product purity, burning guidelines, storage, and pan-India express shipping.
          </p>
        </div>

        {/* Accordion List */}
        <div className="bg-white rounded-3xl border border-spiritual-earth-200/90 shadow-spiritual overflow-hidden divide-y divide-spiritual-earth-100">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={faq.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-spiritual-gold-50/40 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-spiritual-earth-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-spiritual-bg border border-spiritual-earth-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-spiritual-gold-100 text-spiritual-gold-800' : 'text-spiritual-earth-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-spiritual-earth-700 font-sans leading-relaxed animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Devotee Desk Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-spiritual-gold-50/80 border border-spiritual-gold-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-spiritual-earth-900">
              Have a specific ritual or order question?
            </h4>
            <p className="text-xs text-spiritual-earth-600 font-sans mt-0.5">
              Our devotee concierge desk in Varanasi is available from 9 AM to 7 PM IST.
            </p>
          </div>

          <a
            href="https://wa.me/919820012345?text=Hello%20Divyamrit%2C%20I%20have%20a%20question%20regarding%20my%20puja%20essentials."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
