import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showTagline = true 
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3.5xl'
  };

  return (
    <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
      {/* Sacred Diya & Radiant Aura Monogram SVG */}
      <div className={`relative flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${iconSizes[size]} ${
        isLight ? 'bg-spiritual-gold-400/20 text-spiritual-gold-300' : 'bg-spiritual-gold-50 text-spiritual-gold-600 border border-spiritual-gold-200/60 shadow-sm'
      }`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6 h-5/6">
          {/* Radiant Aura rays */}
          <circle cx="20" cy="18" r="14" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
          {/* Sacred Lotus Base / Diya Bowl */}
          <path 
            d="M8 22C8 28 13.5 32 20 32C26.5 32 32 28 32 22H8Z" 
            fill="currentColor" 
            opacity={isLight ? "0.9" : "0.85"}
          />
          {/* Diya Base Stand */}
          <path d="M16 32H24V34H16V32Z" fill="currentColor" opacity="0.9" />
          {/* Sacred Flame (Agni Jyot) */}
          <path 
            d="M20 7C20 7 24 13 24 17C24 19.2 22.2 21 20 21C17.8 21 16 19.2 16 17C16 13 20 7 20 7Z" 
            fill={isLight ? "#FFB84D" : "#D97706"}
          />
          {/* Inner Flame Glow */}
          <path 
            d="M20 12C20 12 22 15 22 17.5C22 18.6 21.1 19.5 20 19.5C18.9 19.5 18 18.6 18 17.5C18 15 20 12 20 12Z" 
            fill="#FEF08A"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif tracking-wide font-bold transition-colors ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-spiritual-earth-900 group-hover:text-spiritual-gold-700'
          }`}>
            Divyamrit
          </span>
          <span className="text-spiritual-gold-500 text-xs transform -translate-y-1 font-serif">🪔</span>
        </div>
        {showTagline && (
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
            isLight ? 'text-spiritual-gold-200/80' : 'text-spiritual-earth-600'
          }`}>
            Vedic Aromatics & Pure Puja
          </span>
        )}
      </div>
    </Link>
  );
};
