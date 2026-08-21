import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home, Search, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] bg-spiritual-bg flex items-center justify-center py-16 px-4">
      <div className="max-w-md mx-auto text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-spiritual-earth-200 shadow-spiritual">
        <div className="w-20 h-20 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 flex items-center justify-center mx-auto text-3xl font-serif font-bold">
          🪔
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-spiritual-gold-700 uppercase tracking-widest">
            404 • Page Not Found
          </span>
          <h1 className="font-serif text-3xl font-bold text-spiritual-earth-900">
            Sacred Path Not Found
          </h1>
          <p className="text-xs sm:text-sm text-spiritual-earth-600 font-sans leading-relaxed">
            The sanctum page you are looking for might have been moved or is under divine preparation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link to="/">
            <Button variant="gold" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Return Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="secondary" size="md" leftIcon={<Search className="w-4 h-4" />}>
              Browse All Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
