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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Botanical Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-10 opacity-5">
          <HandDrawnElements type="eucalyptus" size={180} opacity={0.3} rotation={-15} />
        </div>
        <div className="absolute bottom-32 -right-16 opacity-5">
          <HandDrawnElements type="citrus" size={160} opacity={0.3} rotation={45} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-4">
          <HandDrawnElements type="olive" size={140} opacity={0.25} rotation={-30} />
        </div>
        <div className="absolute bottom-20 left-1/3 opacity-4">
          <HandDrawnElements type="jasmine" size={100} opacity={0.3} rotation={60} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BotanicalDivider className="text-muted-foreground" width={160} />
          </div>
          
          <h2 className="heading-section mb-6">
            Signature Scents
          </h2>
          
          <p className="body-large max-w-2xl mx-auto">
            Each fragrance tells a story of Moroccan heritage, crafted with rare botanicals 
            and traditional artisan techniques passed down through generations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
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
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300 font-inter font-medium tracking-wide px-10 py-4 rounded-none"
          >
            Explore Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureScents;