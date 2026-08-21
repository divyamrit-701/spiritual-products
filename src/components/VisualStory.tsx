import React from 'react';

export const VisualStory: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-spiritual-earth-950 text-white">
      {/* Background Wide Photography */}
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600"
        alt="Serene Indian spiritual mandir setting with glowing flame and dhoop smoke"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-spiritual-earth-950 via-spiritual-earth-950/60 to-spiritual-earth-950/80" />

      {/* Centered Overlay Statement */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs sm:text-sm font-serif italic text-spiritual-gold-300 tracking-widest block uppercase">
          ॐ शांतिः शांतिः शांतिः
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          "Small rituals. Meaningful moments."
        </h2>
        <p className="text-xs sm:text-base text-spiritual-earth-200 font-sans max-w-lg mx-auto font-light leading-relaxed">
          Taking just two moments every day to light pure camphor and sacred dhoop clears the mind and fills your home with serenity.
        </p>
      </div>
    </section>
  );
};
