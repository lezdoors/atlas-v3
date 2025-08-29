import React from 'react';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getImage } from '@/lib/imageAssets';

const Journal = () => {
  const heroImage = getImage('backgrounds', 'heroFragrance');
  const collectionImage = getImage('backgrounds', 'atlasHeritage');

  const articles = [
    {
      id: 1,
      category: "RITUALS",
      title: "The Ancient Art of Moroccan Perfumery",
      description: "Discover the centuries-old techniques that define our craft",
      readTime: "5 min read",
      image: heroImage?.src || '/src/assets/hero-fragrance.jpg',
      alt: "Moroccan Perfumery Workshop"
    },
    {
      id: 2,
      category: "HERITAGE",
      title: "Journey Through the Atlas Mountains",
      description: "Exploring the source of our finest ingredients",
      readTime: "7 min read",
      image: collectionImage?.src || '/src/assets/collection-hero.jpg',
      alt: "Atlas Mountains Landscape"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4 tracking-luxury">
            The Atlas Journal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stories from our artisans, heritage collections, and the timeless art of fragrance creation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-luxury mb-6">
                <OptimizedImage
                  src={article.image}
                  alt={article.alt}
                  aspectRatio="16/9"
                  className="transition-transform duration-500 group-hover:scale-105"
                  placeholder="skeleton"
                  preloadOnHover={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="space-y-3">
                <span className="text-sm font-medium text-secondary tracking-wider">
                  {article.category}
                </span>
                <h3 className="text-2xl font-playfair font-bold text-foreground group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground">
                  {article.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm text-muted-foreground">
                    {article.readTime}
                  </span>
                  <div className="flex items-center text-sm font-medium text-secondary group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;