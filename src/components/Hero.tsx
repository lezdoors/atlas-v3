import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fragrance.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20">
        {/* Left Content - Typography focused */}
        <div className="order-2 lg:order-1 space-y-8">
          {/* Subtle botanical decoration */}
          <div className="w-16 h-px bg-muted-foreground/20 mb-8"></div>
          
          <div className="space-y-6">
            <h1 className="font-playfair text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-foreground font-light tracking-tight">
              Perle de 
              <span className="block italic">l'Atlas</span>
            </h1>
            
            <p className="font-inter text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md">
              Handcrafted fragrances born from the ancient wisdom of Moroccan artisans
            </p>
          </div>
          
          <div className="pt-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-inter font-medium tracking-wide px-8 py-4 rounded-none"
            >
              Discover Collection
            </Button>
          </div>
        </div>

        {/* Right Content - Product Hero */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Subtle background botanical element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full text-muted-foreground">
                <path d="M20,50 Q40,20 60,50 Q80,80 100,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="30" cy="40" r="2" fill="currentColor" opacity="0.3" />
                <circle cx="70" cy="60" r="1.5" fill="currentColor" opacity="0.3" />
              </svg>
            </div>
            
            {/* Product Image with luxury shadow */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Perle de l'Atlas Signature Fragrance"
                className="w-80 lg:w-96 h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(44,44,44,0.1)]"
              />
            </div>
            
            {/* Floating accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5">
              <svg viewBox="0 0 100 100" className="w-full h-full text-muted-foreground">
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M35,50 Q50,35 65,50 Q50,65 35,50" fill="currentColor" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;