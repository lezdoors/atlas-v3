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
      className="min-h-[70vh] lg:min-h-[80vh] relative overflow-hidden fade-in-up"
      style={{
        background: 'var(--gradient-luxury)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Moroccan Luxury Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--moroccan-gold)) 2px, transparent 2px),
                                radial-gradient(circle at 75% 75%, hsl(var(--moroccan-amber)) 1px, transparent 1px)`,
               backgroundSize: '60px 60px, 40px 40px'
             }}>
        </div>
        
        {/* Enhanced botanical elements with Moroccan positioning */}
        <div className="absolute top-0 left-0 opacity-[0.08]">
          <HandDrawnElements type="herbarium-branch" size={400} opacity={0.6} rotation={-15} variant="artistic" />
        </div>
        <div className="absolute top-1/4 right-0 opacity-[0.06]">
          <HandDrawnElements type="eucalyptus" size={450} opacity={0.5} rotation={25} variant="bold" />
        </div>
        <div className="absolute bottom-0 left-1/4 opacity-[0.05]">
          <HandDrawnElements type="vine-border" size={700} opacity={0.4} rotation={5} />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-[0.04]">
          <HandDrawnElements type="olive" size={300} opacity={0.3} rotation={-35} variant="artistic" />
        </div>
      </div>

      <div className="container-luxury grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-16 relative z-10">
        {/* Left Content - Moroccan Luxury Typography */}
        <div className="order-2 lg:order-1 space-y-8 lg:space-y-12">
          {/* Moroccan decorative line */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-moroccan-gold to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-moroccan-gold opacity-60"></div>
            <div className="w-12 h-px bg-gradient-to-r from-moroccan-gold to-transparent"></div>
          </div>
          
          <div className="space-y-8">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.95] tracking-[-0.02em] text-center lg:text-left"
                style={{ color: 'hsl(var(--text-primary))' }}>
              The Soul of 
              <span className="block italic font-normal" style={{ color: 'hsl(var(--moroccan-gold))' }}>Morocco</span>
            </h1>
            
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="font-inter text-lg md:text-xl leading-[1.7] text-center lg:text-left" 
                 style={{ color: 'hsl(var(--text-secondary))' }}>
                Small-batch perfumes crafted with ancestral methods and modern refinement.
              </p>
            </div>
          </div>
          
          <div className="pt-6 text-center lg:text-left">
            <Button 
              variant="outline" 
              size="lg"
              className="luxury-button border-2 font-inter font-medium tracking-[0.05em] uppercase text-sm px-10 py-4 rounded-none min-h-[52px] relative overflow-hidden group"
              style={{ 
                borderColor: 'hsl(var(--moroccan-gold))', 
                color: 'hsl(var(--moroccan-gold))',
                background: 'transparent'
              }}
              onClick={() => window.location.href = '/shop'}
            >
              <span className="relative z-10">Discover the Collection</span>
              <div className="absolute inset-0 bg-moroccan-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                   style={{ background: 'hsl(var(--moroccan-gold))' }}></div>
            </Button>
          </div>

          {/* Moroccan corner flourish */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
            <HandDrawnElements type="rose" size={80} opacity={0.6} animate={true} variant="artistic" />
          </div>
        </div>

        {/* Right Content - Luxury Product Showcase */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative group">
            {/* Luxury backdrop with Moroccan shadow */}
            <div className="absolute inset-0 rounded-2xl transform rotate-3 scale-95 opacity-20"
                 style={{ 
                   background: 'var(--gradient-moroccan)',
                   filter: 'blur(20px)'
                 }}></div>
            
            {/* Enhanced botanical frame */}
            <BotanicalFrame variant="ornate" className="relative z-10">
              <div className="relative w-72 lg:w-80 xl:w-96 p-8">
                <OptimizedImage
                  src="/lovable-uploads/4dc12531-fd9f-4f1d-8fa3-b98940991529.png"
                  alt="Perle de l'Atlas Signature Fragrance"
                  aspectRatio="auto"
                  priority={true}
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                  style={{ 
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))',
                    borderRadius: '12px'
                  }}
                  placeholder="blur"
                  enableWebP={true}
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
                />
                
                {/* Luxury reflection effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none"></div>
              </div>
            </BotanicalFrame>
            
            {/* Floating Moroccan elements */}
            <div className="absolute -top-12 -left-12 opacity-30 animate-pulse">
              <HandDrawnElements type="rose" size={100} animate variant="artistic" rotation={-15} />
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-40">
              <HandDrawnElements type="jasmine" size={90} animate rotation={35} variant="bold" />
            </div>
            <div className="absolute top-1/3 -left-16 opacity-25 hidden xl:block">
              <HandDrawnElements type="lavender" size={120} animate rotation={-45} variant="artistic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
