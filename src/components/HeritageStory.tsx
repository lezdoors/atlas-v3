import React from 'react';
import { Button } from '@/components/ui/button';
import { HandDrawnAtlasMountains } from '@/components/HandDrawnIcons';
import heritageImage from '@/assets/collection-hero.jpg';

const HeritageStory = () => {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Large Artisan Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-luxury">
              <img 
                src={heritageImage}
                alt="Moroccan artisan crafting traditional perfumes in atlas mountains workshop"
                className="w-full h-[700px] object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Hand-drawn mountains decoration */}
            <div className="absolute -bottom-8 -right-8 opacity-30">
              <HandDrawnAtlasMountains className="text-secondary w-48 h-12" />
            </div>
          </div>
          
          {/* Heritage Content */}
          <div className="lg:pl-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6 tracking-luxury">
                  ROOTED IN HERITAGE
                </h2>
                
                <div className="w-16 h-0.5 bg-secondary mb-8"></div>
              </div>

              <div className="space-y-6 text-lg font-inter text-muted-foreground leading-relaxed">
                <p>
                  Born from the ancient traditions of Morocco, <strong className="text-foreground font-semibold">Atlas Perle</strong> celebrates 
                  the timeless artistry of fragrance-making that has flourished in our homeland for over a millennium.
                </p>
                
                <p>
                  We source the finest ingredients from the <em className="text-secondary">Atlas Mountains</em>, working exclusively 
                  with local artisans who have perfected their craft through generations. From the rose petals of Dadès Valley 
                  to the precious oud of the High Atlas, every element tells a story.
                </p>
                
                <p>
                  Each creation is a testament to our commitment to <strong className="text-foreground font-semibold">authentic craftsmanship</strong> 
                  and the rich cultural heritage that defines our identity. This is not merely perfume—it is liquid poetry, 
                  distilled wisdom, the soul of Morocco captured in crystal.
                </p>
              </div>

              {/* Heritage Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-secondary mb-2">1000+</div>
                  <div className="text-sm font-inter text-muted-foreground tracking-wide-luxury uppercase">Years of Tradition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm font-inter text-muted-foreground tracking-wide-luxury uppercase">Master Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-secondary mb-2">12</div>
                  <div className="text-sm font-inter text-muted-foreground tracking-wide-luxury uppercase">Signature Scents</div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="moroccan-outline" size="lg" className="font-playfair tracking-wide-luxury">
                  DISCOVER OUR STORY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageStory;