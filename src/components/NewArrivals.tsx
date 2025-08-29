import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const products = [
    {
      name: "Golden Argan Oil",
      price: "From $48",
      scentFamily: "Natural",
      image: "/src/assets/product-sample.jpg",
      category: "Body Oil",
      description: "Pure Moroccan argan oil for radiant skin"
    },
    {
      name: "Rose Damascus Serum",
      price: "From $62",
      scentFamily: "Floral",
      image: "/src/assets/product-sample.jpg",
      category: "Face Serum",
      description: "Luxurious rose serum for luminous complexion"
    },
    {
      name: "Atlas Clay Mask",
      price: "From $38",
      scentFamily: "Earth",
      image: "/src/assets/product-sample.jpg",
      category: "Face Mask",
      description: "Purifying clay from the Atlas Mountains"
    },
    {
      name: "Oud Royal Perfume",
      price: "From $125",
      scentFamily: "Oriental",
      image: "/src/assets/product-sample.jpg",
      category: "Parfum",
      description: "Precious oud with royal sophistication"
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
            <ProductCard 
              key={index} 
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;