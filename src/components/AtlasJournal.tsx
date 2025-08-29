import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HandDrawnDivider } from '@/components/HandDrawnIcons';
import journalImage1 from '@/assets/hero-fragrance.jpg';
import journalImage2 from '@/assets/product-sample.jpg';

const AtlasJournal = () => {
  const articles = [
    {
      id: 1,
      category: "RITUALS",
      title: "The Ancient Art of Moroccan Perfumery",
      description: "Discover the centuries-old techniques that define our craft, from distillation methods passed down through generations to the sacred rituals of scent creation.",
      readTime: "5 min read",
      image: journalImage1,
      date: "March 15, 2024"
    },
    {
      id: 2,
      category: "HERITAGE",
      title: "Journey Through the Atlas Mountains",
      description: "Follow our expedition to source the finest ingredients, from the rose gardens of Dadès Valley to the cedar forests of the High Atlas.",
      readTime: "7 min read",
      image: journalImage2,
      date: "March 10, 2024"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <HandDrawnDivider className="text-secondary" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6 tracking-luxury">
            THE ATLAS JOURNAL
          </h2>
          
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stories from our artisans, heritage collections, and the timeless art of fragrance creation
          </p>
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              {/* Article Image */}
              <div className="relative overflow-hidden rounded-luxury mb-8">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover transition-smooth group-hover:scale-105"
                />
                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-background/90 backdrop-blur-sm text-secondary font-inter font-medium text-sm px-4 py-2 rounded-full tracking-wide-luxury">
                    {article.category}
                  </span>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              {/* Article Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm font-inter text-muted-foreground">
                  <time>{article.date}</time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-3xl font-playfair font-bold text-foreground group-hover:text-secondary transition-smooth tracking-luxury leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex items-center pt-4 group-hover:translate-x-2 transition-smooth">
                  <span className="text-secondary font-inter font-medium tracking-wide-luxury uppercase text-sm mr-3">
                    Read Article
                  </span>
                  <ArrowRight className="h-4 w-4 text-secondary" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center mt-16">
          <Button variant="moroccan-outline" size="lg" className="font-playfair tracking-wide-luxury">
            VIEW ALL ARTICLES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AtlasJournal;