import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import collectionHero from '@/assets/collection-hero.jpg';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Signature Collection",
      description: "Timeless fragrances that define elegance",
      image: collectionHero,
      featured: true
    },
    {
      id: 2,
      title: "Limited Edition",
      description: "Exclusive scents for the distinguished",
      image: collectionHero,
      featured: false
    },
    {
      id: 3,
      title: "Artisan Series",
      description: "Handcrafted perfumes by master perfumers",
      image: collectionHero,
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 tracking-luxury">
            Curated Collections
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated collections, each telling a unique olfactory story
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={collection.id}
              className={`group cursor-pointer border-0 shadow-luxury hover:shadow-gold transition-all duration-500 overflow-hidden ${
                collection.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      collection.featured ? 'h-96' : 'h-80'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary-foreground mb-3 tracking-luxury">
                      {collection.title}
                    </h3>
                    <p className="text-primary-foreground/90 font-inter mb-6 leading-relaxed">
                      {collection.description}
                    </p>
                    <Button 
                      variant="moroccan-outline" 
                      size="lg"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;