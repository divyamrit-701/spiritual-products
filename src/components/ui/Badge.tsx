import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'maroon' | 'tulsi' | 'earth' | 'neutral' | 'sale';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'sm',
  className = ''
}) => {
  const sizes = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs'
  };

  const variants = {
    gold: 'bg-spiritual-gold-100 text-spiritual-gold-900 border border-spiritual-gold-300/80 font-medium',
    maroon: 'bg-spiritual-maroon-50 text-spiritual-maroon-700 border border-spiritual-maroon-100 font-medium',
    tulsi: 'bg-spiritual-tulsi-50 text-spiritual-tulsi-800 border border-spiritual-tulsi-100 font-medium',
    earth: 'bg-spiritual-earth-100 text-spiritual-earth-800 border border-spiritual-earth-200 font-medium',
    neutral: 'bg-gray-100 text-gray-800 border border-gray-200 font-medium',
    sale: 'bg-amber-600 text-white font-semibold shadow-xs'
  };

  return (
    <span className={`inline-flex items-center rounded-full tracking-wide uppercase ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
