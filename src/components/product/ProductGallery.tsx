import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Flame, Check } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const currentImage = images[selectedImageIndex] || images[0];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      
      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[520px] pb-2 md:pb-0 scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={`thumb-${idx}`}
              type="button"
              onClick={() => setSelectedImageIndex(idx)}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-spiritual-bg ${
                selectedImageIndex === idx
                  ? 'border-spiritual-gold-600 shadow-md ring-2 ring-spiritual-gold-300/50'
                  : 'border-spiritual-earth-200/80 hover:border-spiritual-earth-400 opacity-80 hover:opacity-100'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img 
                src={img} 
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center" 
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image with Hover Zoom Container */}
      <div className="flex-1 space-y-4">
        <div 
          className="relative aspect-square w-full rounded-3xl overflow-hidden bg-spiritual-bg border border-spiritual-earth-200 shadow-spiritual cursor-crosshair group"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={currentImage}
            alt={productName}
            className={`w-full h-full object-cover object-center transition-transform duration-200 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                  }
                : undefined
            }
          />

          {/* Hover hint */}
          <div className="absolute bottom-3 right-3 bg-spiritual-earth-900/80 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
            Hover to zoom
          </div>
        </div>

        {/* Purity Guarantee Badges below image */}
        <div className="grid grid-cols-3 gap-2 bg-spiritual-earth-50/70 p-3 rounded-2xl border border-spiritual-earth-200/70 text-center">
          <div className="flex flex-col items-center justify-center p-1.5">
            <Sparkles className="w-4 h-4 text-spiritual-gold-600 mb-1" />
            <span className="text-[11px] font-semibold text-spiritual-earth-900">100% Natural</span>
            <span className="text-[10px] text-spiritual-earth-500">Zero Chemicals</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 border-x border-spiritual-earth-200">
            <Flame className="w-4 h-4 text-spiritual-gold-600 mb-1" />
            <span className="text-[11px] font-semibold text-spiritual-earth-900">Charcoal Free</span>
            <span className="text-[10px] text-spiritual-earth-500">Pure White Smoke</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5">
            <ShieldCheck className="w-4 h-4 text-spiritual-gold-600 mb-1" />
            <span className="text-[11px] font-semibold text-spiritual-earth-900">Temple Grade</span>
            <span className="text-[10px] text-spiritual-earth-500">Vedic Authentic</span>
          </div>
        </div>

      </div>

    </div>
  );
};
