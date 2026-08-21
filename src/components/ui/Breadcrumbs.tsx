import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-1.5 text-xs text-spiritual-earth-600 ${className}`} aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="inline-flex items-center gap-1 hover:text-spiritual-gold-700 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={`crumb-${index}`}>
            <ChevronRight className="w-3 h-3 text-spiritual-earth-400 shrink-0" />
            {isLast || !item.to ? (
              <span className="font-medium text-spiritual-earth-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.to} 
                className="hover:text-spiritual-gold-700 transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
