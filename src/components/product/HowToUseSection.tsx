import React from 'react';
import { Product } from '../../types';
import { Flame, ShieldAlert, Sparkles, Sun, CheckCircle2 } from 'lucide-react';

interface HowToUseSectionProps {
  product: Product;
}

export const HowToUseSection: React.FC<HowToUseSectionProps> = ({ product }) => {
  const { howToUse } = product;

  return (
    <div className="space-y-6">
      
      {/* Sacred Ritual Context */}
      <div className="bg-spiritual-gold-50/80 border border-spiritual-gold-200/70 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-full bg-spiritual-gold-200 text-spiritual-gold-800 flex items-center justify-center shrink-0">
          <Sun className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif text-sm sm:text-base font-bold text-spiritual-earth-900">
            Auspicious Timing & Ritual Setting
          </h4>
          <p className="text-xs sm:text-sm text-spiritual-earth-700 mt-1 leading-relaxed">
            {howToUse.idealRitual}
          </p>
        </div>
      </div>

      {/* Step by step guide */}
      <div>
        <h4 className="font-serif text-base font-bold text-spiritual-earth-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-spiritual-gold-600" />
          <span>Step-by-Step Sacred Application</span>
        </h4>
        <div className="space-y-3">
          {howToUse.steps.map((step, idx) => (
            <div 
              key={`step-${idx}`}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-spiritual-earth-200/70 shadow-xs"
            >
              <span className="w-6 h-6 rounded-full bg-spiritual-earth-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-spiritual-earth-800 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Notice Banner */}
      <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <h5 className="font-bold text-xs sm:text-sm text-amber-950 uppercase tracking-wide">
            Devotional Safety Instructions
          </h5>
          <p className="text-xs text-amber-800 mt-1 leading-relaxed">
            {howToUse.safetyWarning}
          </p>
        </div>
      </div>

    </div>
  );
};
