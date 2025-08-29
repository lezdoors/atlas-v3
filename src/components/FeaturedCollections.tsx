import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import HandDrawnElements, { BotanicalDivider } from './HandDrawnElements';
import { getImage, getImagesByCategory, getFallbackImage } from '@/lib/imageAssets';

const FeaturedCollections = () => {
  // Get images from assets
  const backgroundImages = getImagesByCategory('backgrounds');
  const productImages = getImagesByCategory('products');
  
  const collections = [
    {
      id: 1,
      title: "Atlas Heritage",
      subtitle: "Traditional Fragrances",
      description: "Discover scents inspired by ancient Moroccan traditions, crafted with rare ingredients from the Atlas Mountains.",
      image: backgroundImages.atlasHeritage?.src || '/src/assets/collection-hero.jpg',
      alt: backgroundImages.atlasHeritage?.alt || "Atlas Heritage Collection",
      cta: "Explore Heritage"
    },
    {
      id: 2,
      title: "Royal Oud Collection",
      subtitle: "Luxury Oriental Scents",
      description: "Experience the depth and richness of precious oud wood, blended with exotic spices and rare florals.",
      image: productImages.amberOud?.src || '/src/assets/collection-hero.jpg',
      alt: productImages.amberOud?.alt || "Royal Oud Collection",
      cta: "Discover Oud"
    },
    {
      id: 3,
      title: "Garden of Roses",
      subtitle: "Floral Elegance",
      description: "Delicate rose compositions celebrating the beauty of Moroccan gardens and the art of floral perfumery.",
      image: productImages.atlasRose?.src || '/src/assets/collection-hero.jpg',
      alt: productImages.atlasRose?.alt || "Garden of Roses Collection",
      cta: "Smell the Roses"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Botanical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 opacity-4">
          <HandDrawnElements type="eucalyptus" size={220} opacity={0.2} rotation={-10} />
        </div>
        <div className="absolute bottom-16 right-16 opacity-4">
          <HandDrawnElements type="olive" size={180} opacity={0.2} rotation={30} />
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-3">
          <HandDrawnElements type="jasmine" size={140} opacity={0.15} rotation={-25} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BotanicalDivider className="text-muted-foreground opacity-60" width={200} />
          </div>
          
          <h2 className="heading-section mb-6">
            Signature Collections
          </h2>
          
          <p className="body-large max-w-2xl mx-auto">
            Three distinct olfactory journeys, each telling the story of Morocco's 
            rich heritage through the art of fine fragrance.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-16">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage
                    src={collection.image}
                    alt={collection.alt}
                    aspectRatio="4/3"
                    className="transition-transform duration-700 hover:scale-105"
                    fallbackSrc={getFallbackImage('backgrounds')}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="skeleton"
                    preloadOnHover={true}
                    enableWebP={true}
                  />
                </div>
                
                {/* Floating botanical element */}
                <div className={`absolute ${index % 2 === 0 ? '-top-4 -right-4' : '-top-4 -left-4'} opacity-20`}>
                  <HandDrawnElements 
                    type={index === 0 ? 'rose' : index === 1 ? 'eucalyptus' : 'lavender'} 
                    size={100} 
                    opacity={0.5}
                    animate={true}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-3">
                  <p className="body-small">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-playfair text-3xl lg:text-4xl text-foreground font-light tracking-tight">
                    {collection.title}
                  </h3>
                </div>
                
                <p className="body-large">
                  {collection.description}
                </p>
                
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-inter font-medium tracking-wide px-8 py-4 rounded-none"
                  >
                    {collection.cta}
                  </Button>
                </div>

                {/* Decorative element */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
                  <HandDrawnElements 
                    type="citrus" 
                    size={80} 
                    opacity={0.4} 
                    rotation={index * 15}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="mb-8">
            <HandDrawnElements type="jasmine" size={60} opacity={0.4} className="mx-auto" />
          </div>
          
          <h3 className="font-playfair text-2xl text-foreground mb-4 tracking-tight">
            Discover Your Signature Scent
          </h3>
          
          <p className="font-inter text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Take our fragrance quiz to find the perfect scent that matches your personality and style.
          </p>
          
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-inter font-medium tracking-wide px-10 py-4 rounded-none"
          >
            Take Fragrance Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;