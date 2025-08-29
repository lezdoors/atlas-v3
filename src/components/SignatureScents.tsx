import React from 'react';
import { Button } from '@/components/ui/button';
import { HandDrawnDivider, HandDrawnOliveBranch } from './HandDrawnIcons';
import ProductCard from './ProductCard';

const SignatureScents = () => {
  const products = [
    { name: 'Rose Damascus', price: 89, scentFamily: 'Floral', isNew: true },
    { name: 'Oud Royal', price: 156, scentFamily: 'Oriental' },
    { name: 'Atlas Bloom', price: 112, scentFamily: 'Fresh', isNew: true },
    { name: 'Desert Rose', price: 134, scentFamily: 'Woody' }
  ];

  return (
    <section className="py-30 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <HandDrawnOliveBranch className="absolute top-20 left-10 text-secondary" size={200} />
        <HandDrawnOliveBranch className="absolute bottom-20 right-10 text-secondary rotate-180" size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display md:text-hero font-playfair font-bold text-foreground mb-6 tracking-luxury">
            SIGNATURE SCENTS
          </h2>
          <div className="flex justify-center mb-6">
            <HandDrawnDivider className="text-secondary opacity-60" width={300} />
          </div>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Each fragrance tells a story of tradition, crafted with ingredients sourced from Morocco's most treasured landscapes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="moroccan-outline" size="xl" className="uppercase tracking-luxury">
            View All Fragrances
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureScents;