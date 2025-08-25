import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const products = [
    {
      name: "Golden Argan Oil",
      price: 48.00,
      scentFamily: "Natural"
    },
    {
      name: "Rose Damascus Serum",
      price: 62.00,
      scentFamily: "Floral"
    },
    {
      name: "Atlas Clay Mask",
      price: 38.00,
      scentFamily: "Earth"
    },
    {
      name: "Oud Royal Perfume",
      price: 125.00,
      scentFamily: "Oriental"
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('products-container');
    if (container) {
      container.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('products-container');
    if (container) {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4 tracking-luxury">
            Signature Scents
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Each fragrance tells a story of tradition, crafted with the finest ingredients from the Atlas Mountains
          </p>
        </div>
        

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;