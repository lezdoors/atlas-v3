import React from 'react';
import { Button } from '@/components/ui/button';
import heritageImage from '@/assets/collection-hero.jpg';

const Heritage = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/d72ea138-9b0d-49c1-81b7-c5b06670eb33.png"
              alt="Atlas Perle Heritage - Traditional Moroccan craftsmanship"
              className="w-full h-[600px] object-cover rounded-luxury"
            />
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 tracking-luxury">
              Rooted in Heritage
            </h2>
            <div className="space-y-8 text-text-secondary body-large leading-[1.8]">
              <p>
                Born from the ancient traditions of Morocco, Atlas Perle celebrates the timeless art of fragrance-making. Each creation is a testament to our commitment to authentic craftsmanship and the rich cultural heritage of our homeland.
              </p>
              <p>
                We source the finest ingredients from the Atlas Mountains, working with local artisans who have perfected their craft through generations. Every bottle tells a story of tradition, luxury, and uncompromising quality.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="moroccan-outline" size="lg">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;