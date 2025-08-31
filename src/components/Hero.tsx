import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import HandDrawnElements from './HandDrawnElements';
import BotanicalFrame from './BotanicalFrame';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


const Hero = () => {
  const heroRef = useScrollAnimation();
  // Use valid image paths - these are available in assets
  const heroProduct = '/src/assets/atlas-rose-product.jpg';
  
  return (
    <section 
      ref={heroRef}
      className="h-[70vh] lg:h-[80vh] bg-background flex items-center relative overflow-hidden pt-8 lg:pt-12 fade-in-up"
    >
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

      <div className="container-luxury grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-4 lg:py-8 relative z-10">
        {/* Left Content - Typography focused */}
        <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
          {/* Subtle botanical decoration */}
          <div className="w-16 h-px bg-muted-foreground/20 mb-8"></div>
          
          <div className="space-y-6">
            <h1 className="heading-hero text-center lg:text-left">
              The Soul of 
              <span className="block italic">Morocco</span>
            </h1>
            
            <p className="body-large max-w-lg mx-auto lg:mx-0 text-center lg:text-left leading-[1.65]">
              Small-batch perfumes crafted with ancestral methods and modern refinement.
            </p>
          </div>
          
          <div className="pt-6 text-center lg:text-left">
            <Button 
              variant="outline" 
              size="lg"
              className="luxury-button border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-inter font-medium tracking-wide px-8 py-4 rounded-none min-h-[48px]"
              onClick={() => window.location.href = '/shop'}
            >
              Discover the Collection
            </Button>
          </div>

          {/* Decorative botanical element */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-10">
            <HandDrawnElements type="rose" size={100} opacity={0.4} animate={true} />
          </div>
        </div>

        {/* Right Content - Product Hero with Botanical Frame */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative max-w-lg image-hover-effect">
            {/* Botanical frame around product */}
            <BotanicalFrame variant="ornate" className="bg-background-secondary/20 backdrop-blur-sm">
              <div className="relative w-80 lg:w-96">
                <OptimizedImage
                  src={heroProduct}
                  alt="Perle de l'Atlas Signature Fragrance"
                  aspectRatio="auto"
                  priority={true}
                  className="filter drop-shadow-[0_20px_40px_rgba(44,44,44,0.1)] rounded-lg"
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
