import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const products = [
    {
      name: "Velvet Noir",
      price: 225,
      scentFamily: "Oriental Woody",
      isNew: true
    },
    {
      name: "Golden Amber",
      price: 195,
      originalPrice: 245,
      scentFamily: "Amber Floral",
      onSale: true
    },
    {
      name: "Ocean Breeze",
      price: 175,
      scentFamily: "Fresh Aquatic",
      isNew: true
    },
    {
      name: "Midnight Rose",
      price: 185,
      scentFamily: "Floral Oriental",
      isNew: true
    },
    {
      name: "Sandalwood Dreams",
      price: 205,
      scentFamily: "Woody Spicy"
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
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4 tracking-luxury">
              New Arrivals
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Fresh additions to our luxury collection
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="minimal"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="minimal"
              size="icon"
              onClick={scrollRight}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div
            id="products-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div key={index} className="flex-none w-80">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="luxury" size="lg">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;