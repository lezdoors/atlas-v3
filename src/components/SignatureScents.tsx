import React from 'react';
import { Button } from '@/components/ui/button';
import HandDrawnElements, { BotanicalDivider } from './HandDrawnElements';
import ProductCard from './ProductCard';
import { getImagesByCategory } from '@/lib/imageAssets';

const SignatureScents = () => {
  // Get product images from assets
  const productImages = getImagesByCategory('products');

  const products = [
    {
      name: "Atlas Rose",
      price: "From $185",
      image: productImages.atlasRose?.src,
      category: "Eau de Parfum",
      description: "Damask rose petals kissed by mountain air"
    },
    {
      name: "Amber Oud",
      price: "From $220",
      image: productImages.amberOud?.src,
      category: "Parfum",
      description: "Rich amber with precious oud wood"
    },
    {
      name: "Fig & Cassis",
      price: "From $165",
      image: productImages.figCassis?.src,
      category: "Eau de Toilette",
      description: "Mediterranean fig with blackcurrant notes"
    },
    {
      name: "Neroli Garden",
      price: "From $195",
      image: productImages.neroliGarden?.src,
      category: "Eau de Parfum",
      description: "Orange blossom in full bloom"
    },
    {
      name: "Santal Mystique",
      price: "From $240",
      image: productImages.santalMystique?.src,
      category: "Parfum",
      description: "Creamy sandalwood with spiced incense"
    },
    {
      name: "Cedrat Lumière",
      price: "From $155",
      image: productImages.cedratLumiere?.src,
      category: "Eau Fraîche",
      description: "Luminous citron with fresh herbs"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
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
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="heading-section mb-6">
            Signature Scents
          </h2>
          <p className="body-large max-w-2xl mx-auto leading-[1.8]">
            Each fragrance tells a story of Morocco's rich botanical heritage, 
            carefully crafted to transport you to the souks of Marrakech and the gardens of the Atlas Mountains.
          </p>
        </div>

        {/* Products Grid - 8 Column System */}
        <div className="grid-luxury-8 mb-16 lg:mb-20">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center">
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