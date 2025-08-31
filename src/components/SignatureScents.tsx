import React from 'react';
import { Button } from '@/components/ui/button';
import HandDrawnElements, { BotanicalDivider } from './HandDrawnElements';
import ProductCard from './ProductCard';

const SignatureScents = () => {
  const products = [
    {
      name: "Atlas Rose",
      price: "From $185",
      image: '/src/assets/atlas-rose-product.jpg',
      category: "Eau de Parfum",
      description: "Damask rose petals kissed by mountain air"
    },
    {
      name: "Argan Mystique",
      price: "From $220",
      image: '/src/assets/argan-mystique-product.jpg',
      category: "Parfum",
      description: "Rich argan with precious amber"
    },
    {
      name: "Neroli Sublime",
      price: "From $195",
      image: '/src/assets/neroli-sublime-product.jpg',
      category: "Eau de Parfum",
      description: "Orange blossom in full bloom"
    },
    {
      name: "Atlas Rose",
      price: "From $185",
      image: '/src/assets/atlas-rose-product.jpg',
      category: "Eau de Parfum",
      description: "Damask rose petals kissed by mountain air"
    },
    {
      name: "Argan Mystique",
      price: "From $240",
      image: '/src/assets/argan-mystique-product.jpg',
      category: "Parfum",
      description: "Creamy argan with spiced incense"
    },
    {
      name: "Neroli Sublime",
      price: "From $195",
      image: '/src/assets/neroli-sublime-product.jpg',
      category: "Eau Fraîche",
      description: "Luminous citron with fresh herbs"
    }
  ];

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background botanical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 opacity-20">
          <HandDrawnElements type="eucalyptus" size={200} animate />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <HandDrawnElements type="olive" size={180} animate rotation={25} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-15">
          <HandDrawnElements type="jasmine" size={120} animate rotation={45} />
        </div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair mb-3 lg:mb-4 text-foreground leading-tight">
            Signature Scents
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each fragrance tells a story of Morocco's rich botanical heritage, 
            carefully crafted to transport you to the souks of Marrakech and the gardens of the Atlas Mountains.
          </p>
        </div>

        {/* Products Grid - Mobile: Horizontal Scroll, Desktop: Grid */}
        <div className="mb-8 lg:mb-12">
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden relative">
            {/* Gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            {/* Swipe indicator */}
            <div className="text-xs text-muted-foreground mb-3 text-center">← Swipe to explore →</div>
            
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
              {products.map((product, index) => (
                <div key={index} className="flex-none w-64 snap-start">
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
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

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 nav-link px-12 py-4 rounded-none"
          >
            Explore Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureScents;