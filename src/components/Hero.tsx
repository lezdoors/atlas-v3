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
          alt="Luxury fragrance collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary-foreground mb-6 tracking-luxury animate-fade-in">
          Discover Your
          <span className="block text-secondary">Perfect Scent</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-inter max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Curated collection of luxury fragrances crafted with the finest ingredients from around the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="luxury" size="lg" className="min-w-[200px]">
            Explore Collection
          </Button>
          <Button variant="luxury-outline" size="lg" className="min-w-[200px]">
            Discover Your Scent
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-luxury-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;