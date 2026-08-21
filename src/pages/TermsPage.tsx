import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-spiritual-gold-100 text-spiritual-gold-900 text-xs font-semibold border border-spiritual-gold-300">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-spiritual-earth-900">
            Terms & Conditions of Sale
          </h1>
          <p className="text-xs sm:text-sm text-spiritual-earth-600 font-mono">
            Governing the use of Divyamrit.com and purchase of sacred products
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-10 shadow-spiritual space-y-6 text-xs sm:text-sm text-spiritual-earth-800 font-sans leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and purchasing from Divyamrit, you agree to abide by the terms set forth herein. These terms are governed under the applicable laws of the Republic of India, subject to the jurisdiction of the courts in Varanasi, Uttar Pradesh.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">2. Product Authenticity & Natural Variations</h2>
            <p>
              Our products are handcrafted using genuine natural ingredients such as wild resins, upcycled temple flower petals, and hand-crystallized Bhimseni camphor. Because they contain zero artificial colors or synthetic chemical stabilizers, slight natural color variations or crystallization textures between harvests are a hallmark of authentic botanical purity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">3. Pricing & Taxes</h2>
            <p>
              All prices displayed on the website are in Indian Rupees (INR ₹) and are inclusive of applicable Goods and Services Tax (GST).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">4. Usage & Devotional Fire Safety</h2>
            <p>
              Purchasers acknowledge that burning dhoop, camphor, and oil lamps involves open sacred fire. Users agree to adhere to all safety guidelines provided on packaging, including burning only in heat-safe holders, away from flammable materials and out of reach of unattended children.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">5. Intellectual Property</h2>
            <p>
              All brand emblems, formulations, photographic lookbooks, product names, and written Vedic guides are the intellectual property of Divyamrit Aromatics Pvt. Ltd.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
