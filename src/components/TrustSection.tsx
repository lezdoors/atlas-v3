import React from 'react';
import { HandDrawnGift, HandDrawnPackage, HandDrawnSparkles, HandDrawnLeaf } from '@/components/HandDrawnIcons';

const TrustSection = () => {
  const trustElements = [
    {
      icon: HandDrawnGift,
      title: 'Free Samples',
      description: 'With every purchase',
      detail: 'Discover new scents with complimentary samples included in every order'
    },
    {
      icon: HandDrawnPackage,
      title: 'Free Shipping',
      description: 'Orders over $75',
      detail: 'Complimentary shipping to your doorstep with sustainable packaging'
    },
    {
      icon: HandDrawnSparkles,
      title: 'Gift Wrapping',
      description: 'Available upon request',
      detail: 'Elegant presentation for every special occasion'
    },
    {
      icon: HandDrawnLeaf,
      title: 'Organic Ingredients',
      description: 'Certified sourcing',
      detail: 'Ethically sourced from Morocco\'s finest organic producers'
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4 tracking-luxury">
            AT YOUR SERVICE
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            Every detail considered, every promise kept
          </p>
        </div>

        {/* Trust Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustElements.map((element, index) => (
            <div key={index} className="text-center group">
              {/* Hand-drawn Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-background border-2 border-secondary/20 group-hover:border-secondary/40 transition-smooth">
                  <element.icon className="w-8 h-8 text-secondary" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-playfair font-bold text-foreground tracking-luxury">
                  {element.title}
                </h3>
                <p className="text-sm font-inter font-medium text-secondary tracking-wide-luxury uppercase">
                  {element.description}
                </p>
                <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                  {element.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Messaging */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm font-inter text-muted-foreground">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Artisan-made in Morocco
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Small-batch luxury
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Heritage meets modernity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;