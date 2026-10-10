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

  const heightClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16'
  };

  return (
    <Link 
      to="/" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-flex items-center group focus:outline-none"
    >
      <img
        src={isLight ? '/images/logo-light.png' : '/images/logo.png'}
        alt="Divyamrit - Pavitrata Har Pooja Ki"
        className={`${heightClasses[size]} w-auto object-contain transition-transform group-hover:scale-[1.02]`}
      />
    </Link>
  );
};
