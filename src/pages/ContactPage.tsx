import React, { useState } from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Clock
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useToast } from '../context/ToastContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  
  const [inquiryType, setInquiryType] = useState('Order & Product Assistance');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('Please fill all required fields', undefined, 'error');
      return;
    }

    setSubmitted(true);
    showToast('Inquiry Received 🙏', 'Our Temple Concierge team will respond within 4 business hours.', 'success');
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Devotee Concierge & Support</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-spiritual-earth-900">
            Reach Out to Divyamrit
          </h1>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Have questions about pure Bhimseni camphor, custom festival gift hampers, temple bulk orders, or existing shipments? We are here to serve.
          </p>
        </div>

        {/* Main Grid: Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-spiritual-earth-200 shadow-spiritual space-y-6">
              <h3 className="font-serif text-xl font-bold text-spiritual-earth-900">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-spiritual-earth-800">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-spiritual-earth-900">Customer Helpline & WhatsApp</strong>
                    <p className="text-spiritual-earth-600 font-mono">+91 98200 12345 / +91 98200 67890</p>
                    <span className="text-[11px] text-spiritual-earth-500">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-spiritual-earth-900">Devotee Care Email</strong>
                    <p className="text-spiritual-earth-600">care@divyamrit.com</p>
                    <p className="text-spiritual-earth-600 text-xs">For bulk orders: bulk@divyamrit.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-spiritual-earth-900">Sanctum Headquarters & Workshop</strong>
                    <p className="text-spiritual-earth-600 leading-relaxed">
                      Divyamrit Aromatics Pvt. Ltd.<br />
                      Sanctum House, Dashashwamedh Ghat Road,<br />
                      Varanasi, Uttar Pradesh – 221001, Bharat
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick CTA */}
              <div className="pt-2 border-t border-spiritual-earth-100">
                <a 
                  href="https://wa.me/919820012345" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Concierge on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Corporate & Temple Trusts */}
            <div className="bg-spiritual-gold-50/80 p-6 rounded-3xl border border-spiritual-gold-200 space-y-2">
              <div className="flex items-center gap-2 text-spiritual-gold-800 font-serif font-bold text-base">
                <Building2 className="w-5 h-5" />
                <span>Bulk Gifting & Temple Trusts</span>
              </div>
              <p className="text-xs text-spiritual-earth-700 leading-relaxed font-sans">
                We provide custom engraved wooden caskets, personalized deity blessing notes, and wholesale prices for Diwali corporate gifts, weddings, and Mandir Samitis.
              </p>
            </div>

          </div>

          {/* Right Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-spiritual-earth-200 shadow-spiritual">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-slide-up">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-spiritual-earth-900">
                  Pranam & Thank You!
                </h3>
                <p className="text-xs sm:text-sm text-spiritual-earth-600 max-w-md mx-auto leading-relaxed">
                  Your message has been received with devotion. Our representative will contact you via email or phone within 4 business hours.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="sm"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-spiritual-earth-900 pb-2 border-b border-spiritual-earth-100">
                  Send Us a Devotional Message
                </h3>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1.5">
                    What can we assist you with? *
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white font-medium text-spiritual-earth-900 focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 cursor-pointer"
                  >
                    <option value="Order & Product Assistance">Order & Product Assistance</option>
                    <option value="Corporate / Festive Gifting (Diwali / Weddings)">Corporate / Festive Gifting (Diwali / Weddings)</option>
                    <option value="Temple Trust & Ashram Bulk Supply">Temple Trust & Ashram Bulk Supply</option>
                    <option value="Bhimseni Camphor Purity & Testing Query">Bhimseni Camphor Purity & Testing Query</option>
                    <option value="Artisan Program & Sourcing">Artisan Program & Sourcing</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
                      Your Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Radhika Iyer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="+91 98234 56789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="radhika.iyer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
                    Your Message / Requirement Details *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us about the products you are interested in, quantity required, or your specific query..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 leading-relaxed font-sans"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  fullWidth
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Send Sacred Inquiry
                </Button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
