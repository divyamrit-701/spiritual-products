import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const NewsletterSection: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address', undefined, 'error');
      return;
    }
    setSubmitted(true);
    showToast('Subscribed! 🎁', 'Use code DIVYAMRIT10 for 10% off your first order.', 'success');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-spiritual-earth-900 via-spiritual-earth-800 to-spiritual-earth-900 text-spiritual-cream relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-spiritual-gold-500/20 text-spiritual-gold-300 text-xs font-semibold border border-spiritual-gold-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Join the Divyamrit Devotee Circle</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-white leading-tight">
          Receive Sacred Wisdom & Special Blessings
        </h2>

        <p className="text-sm sm:text-base text-spiritual-earth-300 max-w-xl mx-auto font-sans leading-relaxed">
          Subscribe to get curated Vedic rituals, festival muhurat guides, and <strong className="text-spiritual-gold-300">flat 10% off</strong> your first sacred purchase.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-spiritual-gold-500/20 border border-spiritual-gold-400/50 flex items-center justify-center gap-2.5 text-sm text-spiritual-gold-200 animate-slide-up">
            <CheckCircle2 className="w-5 h-5 text-spiritual-gold-400 shrink-0" />
            <span>Blessings! Coupon code <strong>DIVYAMRIT10</strong> has been unlocked for your order.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email (e.g. devotee@gmail.com)"
              className="flex-1 px-4 py-3 rounded-full bg-spiritual-earth-800/90 border border-spiritual-earth-700 text-sm text-white placeholder:text-spiritual-earth-400 focus:outline-none focus:border-spiritual-gold-400 font-sans shadow-inner"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-spiritual-gold-600 hover:bg-spiritual-gold-500 text-white font-bold text-sm shadow-md hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              <span>Join Now</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="text-[11px] text-spiritual-earth-400 font-sans">
          🔒 We respect your privacy. No spam. Unsubscribe anytime with one click.
        </div>

      </div>
    </section>
  );
};
