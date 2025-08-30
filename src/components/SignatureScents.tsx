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
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden"
             style={{ background: 'var(--gradient-desert)' }}>
      {/* Moroccan Geometric Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `linear-gradient(30deg, transparent 40%, hsl(var(--moroccan-gold)) 40%, hsl(var(--moroccan-gold)) 42%, transparent 42%),
                                linear-gradient(-30deg, transparent 40%, hsl(var(--moroccan-amber)) 40%, hsl(var(--moroccan-amber)) 42%, transparent 42%)`,
               backgroundSize: '120px 120px'
             }}>
        </div>
        
        {/* Enhanced botanical elements */}
        <div className="absolute top-16 left-8 opacity-[0.08]">
          <HandDrawnElements type="eucalyptus" size={250} animate rotation={-15} variant="artistic" />
        </div>
        <div className="absolute bottom-16 right-8 opacity-[0.06]">
          <HandDrawnElements type="olive" size={220} animate rotation={35} variant="bold" />
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-[0.04]">
          <HandDrawnElements type="jasmine" size={180} animate rotation={-25} variant="artistic" />
        </div>
      </div>

      <div className="container-luxury relative z-10">
        {/* Moroccan Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Moroccan ornamental header */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-moroccan-gold to-moroccan-amber"></div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-moroccan-gold"></div>
              <div className="w-1 h-1 rounded-full bg-moroccan-amber mt-0.5"></div>
              <div className="w-2 h-2 rounded-full bg-moroccan-gold"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-moroccan-gold to-moroccan-amber"></div>
          </div>
          
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[-0.01em] mb-8"
              style={{ color: 'hsl(var(--text-primary))' }}>
            <span style={{ color: 'hsl(var(--moroccan-gold))' }}>Signature</span> Scents
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="font-inter text-lg md:text-xl leading-[1.7]" 
               style={{ color: 'hsl(var(--text-secondary))' }}>
              Each fragrance tells a story of Morocco's rich botanical heritage, 
              carefully crafted to transport you to the souks of Marrakech and the gardens of the Atlas Mountains.
            </p>
          </div>
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
          
          {/* Desktop Grid - Moroccan Luxury Layout */}
          <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <div key={index} 
                   className="group transform transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in"
                   style={{ 
                     animationDelay: `${index * 150}ms`,
                     filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.08))'
                   }}>
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

        {/* Moroccan Call to Action */}
        <div className="text-center mt-20 lg:mt-24">
          {/* Decorative flourish */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-moroccan-gold"></div>
            <div className="w-3 h-3 rotate-45 border border-moroccan-gold"></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-moroccan-gold"></div>
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="luxury-button border-2 font-inter font-medium tracking-[0.05em] uppercase text-sm px-12 py-5 rounded-none min-h-[56px] relative overflow-hidden group"
            style={{ 
              borderColor: 'hsl(var(--moroccan-gold))', 
              color: 'hsl(var(--moroccan-gold))',
              background: 'transparent'
            }}
          >
            <span className="relative z-10">Explore Full Collection</span>
            <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                 style={{ background: 'hsl(var(--moroccan-gold))' }}></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureScents;