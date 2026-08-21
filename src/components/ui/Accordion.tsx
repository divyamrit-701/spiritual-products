import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  id?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  children,
  defaultOpen = false,
  icon
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-spiritual-earth-200/80 last:border-0 transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 text-left flex items-center justify-between gap-4 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-spiritual-gold-600 shrink-0">{icon}</span>}
          <div>
            <span className="font-serif text-base sm:text-lg font-medium text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors block">
              {title}
            </span>
            {subtitle && (
              <span className="text-xs text-spiritual-earth-500 font-sans block mt-0.5">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-spiritual-earth-50 group-hover:bg-spiritual-gold-100/60 text-spiritual-earth-700 transition-transform duration-200 shrink-0 ${
          isOpen ? 'rotate-180 bg-spiritual-gold-100 text-spiritual-gold-800' : ''
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="pb-5 pt-1 text-sm text-spiritual-earth-700 leading-relaxed font-sans animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`divide-y divide-spiritual-earth-200/60 ${className}`}>
      {children}
    </div>
  );
};
