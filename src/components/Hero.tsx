import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import HandDrawnElements from './HandDrawnElements';
import BotanicalFrame from './BotanicalFrame';
import { getImage, getFallbackImage } from '@/lib/imageAssets';

const Hero = () => {
  // Get hero background image from assets
  const heroBackground = getImage('backgrounds', 'heroFragrance');
  const heroProduct = getImage('products', 'atlasRose');
  
  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden">
      {/* Background Botanical Elements - Enhanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large prominent botanical illustrations */}
        <div className="absolute top-0 left-0 opacity-30">
          <HandDrawnElements type="herbarium-branch" size={350} opacity={0.4} rotation={-10} variant="artistic" />
        </div>
        <div className="absolute top-20 right-0 opacity-25">
          <HandDrawnElements type="eucalyptus" size={400} opacity={0.3} rotation={15} variant="bold" />
        </div>
        <div className="absolute bottom-0 left-1/3 opacity-20">
          <HandDrawnElements type="vine-border" size={600} opacity={0.3} />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-15">
          <HandDrawnElements type="olive" size={200} opacity={0.25} rotation={-25} variant="artistic" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20 relative z-10">
        {/* Left Content - Typography focused */}
        <div className="order-2 lg:order-1 space-y-8">
          {/* Subtle botanical decoration */}
          <div className="w-16 h-px bg-muted-foreground/20 mb-8"></div>
          
          <div className="space-y-6">
            <h1 className="heading-hero">
              Perle de 
              <span className="block italic">l'Atlas</span>
            </h1>
            
            <p className="body-large max-w-md">
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

        {/* Right Content - Product Hero with Botanical Frame */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative max-w-lg">
            {/* Botanical frame around product */}
            <BotanicalFrame variant="ornate" className="bg-background-secondary/20 backdrop-blur-sm">
              <div className="relative w-80 lg:w-96 transform hover:scale-105 transition-transform duration-700">
                <OptimizedImage
                  src={heroProduct?.src || '/src/assets/hero-fragrance.jpg'}
                  alt={heroProduct?.alt || "Perle de l'Atlas Signature Fragrance"}
                  aspectRatio="auto"
                  priority={true}
                  className="filter drop-shadow-[0_20px_40px_rgba(44,44,44,0.1)] rounded-lg"
                  fallbackSrc={getFallbackImage('products')}
                  placeholder="blur"
                  enableWebP={true}
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </BotanicalFrame>
            
            {/* Large floating botanical elements */}
            <div className="absolute -top-16 -left-16 opacity-50">
              <HandDrawnElements type="rose" size={140} animate variant="artistic" />
            </div>
            <div className="absolute -bottom-12 -right-12 opacity-60">
              <HandDrawnElements type="jasmine" size={120} animate rotation={25} variant="bold" />
            </div>
            <div className="absolute top-1/4 -left-20 opacity-40">
              <HandDrawnElements type="lavender" size={160} animate rotation={-30} variant="artistic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
