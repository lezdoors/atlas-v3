import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import HandDrawnElements from './HandDrawnElements';
import { getImage, getFallbackImage } from '@/lib/imageAssets';

const Hero = () => {
  // Get hero background image from assets
  const heroBackground = getImage('backgrounds', 'heroFragrance');
  const heroProduct = getImage('products', 'atlasRose');
  
  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden">
      {/* Background Botanical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 opacity-5">
          <HandDrawnElements type="eucalyptus" size={200} opacity={0.3} rotation={-15} />
        </div>
        <div className="absolute bottom-20 right-12 opacity-5">
          <HandDrawnElements type="olive" size={180} opacity={0.3} rotation={25} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-3">
          <HandDrawnElements type="jasmine" size={120} opacity={0.2} rotation={45} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20 relative z-10">
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

          {/* Decorative botanical element */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-10">
            <HandDrawnElements type="rose" size={100} opacity={0.4} animate={true} />
          </div>
        </div>

        {/* Right Content - Product Hero */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Subtle background botanical element */}
            <div className="absolute -top-8 -left-8 opacity-5">
              <HandDrawnElements type="citrus" size={140} opacity={0.3} rotation={-20} />
            </div>
            
            {/* Product Image with luxury shadow */}
            <div className="relative w-80 lg:w-96">
              <OptimizedImage
                src={heroProduct?.src || '/src/assets/hero-fragrance.jpg'}
                alt={heroProduct?.alt || "Perle de l'Atlas Signature Fragrance"}
                aspectRatio="auto"
                priority={true}
                className="filter drop-shadow-[0_20px_40px_rgba(44,44,44,0.1)]"
                fallbackSrc={getFallbackImage('products')}
                placeholder="blur"
                enableWebP={true}
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>
            
            {/* Floating accent element */}
            <div className="absolute -bottom-4 -right-4 opacity-10">
              <HandDrawnElements type="lavender" size={80} opacity={0.5} animate={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
