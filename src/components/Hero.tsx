import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fragrance.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Soul of Morocco - Hands with Atlas mountain sand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-background mb-8 tracking-luxury animate-fade-in">
          The Soul of Morocco
        </h1>
        
        <Button 
          variant="moroccan-primary" 
          size="lg" 
          className="animate-slide-up"
        >
          DISCOVER THE COLLECTION
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-luxury-float">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-background/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;