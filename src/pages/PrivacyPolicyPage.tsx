import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ShieldCheck, Lock } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-spiritual-gold-100 text-spiritual-gold-900 text-xs font-semibold border border-spiritual-gold-300">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-spiritual-earth-900">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-spiritual-earth-600 font-mono">
            Last Updated: August 2026 • Compliant with Information Technology Act (India)
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-spiritual-earth-200 p-6 sm:p-10 shadow-spiritual space-y-6 text-xs sm:text-sm text-spiritual-earth-800 font-sans leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">1. Information We Collect</h2>
            <p>
              When you purchase from Divyamrit (Divyamrit Aromatics Pvt. Ltd.), we collect information necessary to fulfill your orders, such as your full name, shipping address, PIN code, email address, and mobile phone number for delivery updates and OTP verification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">2. Payment Security</h2>
            <p>
              We do not store credit card numbers, CVVs, or NetBanking login passwords on our servers. All financial transactions are securely processed through Razorpay's RBI-regulated, 256-bit SSL encrypted PCI-DSS Level 1 compliant payment gateway.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1 text-spiritual-earth-700">
              <li>Processing and dispatching your devotional products via trusted courier partners.</li>
              <li>Sending live delivery tracking alerts via SMS, WhatsApp, and Email.</li>
              <li>Providing customer support regarding product usage or ritual inquiries.</li>
              <li>Sending optional newsletter updates (which you can opt out of with 1 click anytime).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">4. No Data Selling Pledge</h2>
            <p>
              We honor your privacy as sacred. We will never sell, rent, or trade your personal information or contact details to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-spiritual-earth-900">5. Contact Our Data Grievance Officer</h2>
            <p>
              If you have any questions regarding your data privacy, please contact our Grievance Officer at: <strong className="text-spiritual-earth-900">privacy@divyamrit.com</strong>, Sanctum House, Dashashwamedh Ghat Road, Varanasi 221001.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
