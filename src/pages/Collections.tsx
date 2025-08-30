import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import collectionHeroImg from '@/assets/collection-hero.jpg';
import atlasRoseImg from '@/assets/atlas-rose-product.jpg';
import neroliSublimeImg from '@/assets/neroli-sublime-product.jpg';
import arganMystiqueImg from '@/assets/argan-mystique-product.jpg';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: 'Heritage Line',
      description: 'Traditional Moroccan essences preserved through generations',
      image: atlasRoseImg,
      productCount: 8,
      href: '/collections/heritage'
    },
    {
      id: 2,
      name: 'Modern Classics',
      description: 'Contemporary interpretations of timeless fragrances',
      image: neroliSublimeImg,
      productCount: 12,
      href: '/collections/modern'
    },
    {
      id: 3,
      name: 'Artisan Series',
      description: 'Limited editions crafted by master perfumers',
      image: arganMystiqueImg,
      productCount: 6,
      href: '/collections/artisan'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <OptimizedImage
          src={collectionHeroImg}
          alt="Perle de l'Atlas Collections"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="max-w-2xl text-white">
              <h1 className="font-playfair text-4xl md:text-6xl mb-6 tracking-luxury">
                Collections
              </h1>
              <p className="font-inter text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                Discover our curated fragrance collections, each telling a unique story of Moroccan artistry and modern perfumery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-4">
              Our Collections
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Each collection represents a different facet of our olfactory journey through Morocco's rich aromatic heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <OptimizedImage
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-playfair text-2xl text-foreground group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    {collection.productCount} fragrances
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Explore Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;