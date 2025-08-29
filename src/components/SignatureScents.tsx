import React from 'react';
import { Button } from '@/components/ui/button';
import { HandDrawnOlive, HandDrawnDivider } from '@/components/HandDrawnIcons';

const SignatureScents = () => {
  const scents = [
    {
      id: 1,
      name: 'Rose Damascus',
      family: 'Floral',
      price: 'From $89',
      image: '/api/placeholder/300/400',
      description: 'Crafted with rose petals from the Dadès Valley',
      notes: ['Bulgarian Rose', 'Atlas Cedar', 'White Musk']
    },
    {
      id: 2,
      name: 'Oud Royal',
      family: 'Oriental', 
      price: 'From $156',
      image: '/api/placeholder/300/400',
      description: 'Distilled using traditional Moroccan methods',
      notes: ['Royal Oud', 'Saffron', 'Ambergris']
    },
    {
      id: 3,
      name: 'Atlas Bloom',
      family: 'Fresh',
      price: 'From $112',
      image: '/api/placeholder/300/400',
      description: 'Notes of wild mint from the High Atlas',
      notes: ['Atlas Mint', 'Bergamot', 'Cedar']
    },
    {
      id: 4,
      name: 'Desert Rose',
      family: 'Woody',
      price: 'From $134',
      image: '/api/placeholder/300/400',
      description: 'Inspired by Saharan sunsets',
      notes: ['Desert Rose', 'Sandalwood', 'Amber']
    }
  ];

  return (
    <section className="py-32 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-30" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <HandDrawnDivider className="text-secondary" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6 tracking-luxury">
            SIGNATURE SCENTS
          </h2>
          
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each fragrance tells a story of tradition, crafted with ingredients sourced from Morocco's most treasured landscapes
          </p>
          
          <div className="flex justify-center mt-6">
            <HandDrawnOlive className="text-accent" />
          </div>
        </div>

        {/* Scents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {scents.map((scent) => (
            <div key={scent.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-luxury mb-6 bg-muted/30">
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-32 bg-secondary/20 rounded-luxury mx-auto mb-4 flex items-center justify-center">
                      <span className="font-playfair text-2xl text-secondary font-bold">
                        {scent.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button variant="moroccan-outline" size="sm">
                    Quick Shop
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center space-y-3">
                <div className="space-y-2">
                  <h3 className="text-2xl font-playfair font-bold text-foreground tracking-luxury group-hover:text-secondary transition-smooth">
                    {scent.name}
                  </h3>
                  <p className="text-sm font-inter font-medium text-secondary tracking-wide-luxury uppercase">
                    {scent.family}
                  </p>
                  <p className="text-lg font-inter font-semibold text-foreground">
                    {scent.price}
                  </p>
                </div>
                
                <p className="text-sm font-inter text-muted-foreground italic">
                  {scent.description}
                </p>
                
                {/* Fragrance Notes */}
                <div className="pt-2">
                  <div className="flex flex-wrap justify-center gap-1">
                    {scent.notes.map((note, index) => (
                      <span key={index} className="text-xs font-inter text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="moroccan-outline" size="lg" className="font-playfair tracking-wide-luxury">
            EXPLORE ALL FRAGRANCES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureScents;