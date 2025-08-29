import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-fragrance.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-moroccan-cream">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="In the shade of Atlas Mountains"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-playfair font-normal text-background mb-8 tracking-luxury animate-fade-in">
          In the shade of Atlas Mountains
        </h1>
        
        <p className="text-lg md:text-xl text-background/90 font-inter mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          High up in the scorching heat of a Moroccan landscape, 
          a fig tree fills the twinkling air, growing wild under the ancient sky
        </p>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="moroccan-outline" 
            size="lg" 
            className="border-2 border-background text-background hover:bg-background hover:text-primary font-poppins font-medium tracking-wide uppercase px-8"
          >
            Discover the Scent
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;