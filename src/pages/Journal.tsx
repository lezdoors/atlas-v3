import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import lavenderImg from '@/assets/lavender-hero.jpg';
import atlasRoseImg from '@/assets/atlas-rose-hero.jpg';
import neroliImg from '@/assets/neroli-sublime-hero.jpg';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Rose Harvesting in the Dadès Valley',
      excerpt: 'Join us on a journey to the heart of Morocco\'s rose country, where dawn breaks over fields of Rosa damascena...',
      image: atlasRoseImg,
      author: 'Amina Benali',
      date: '2024-03-15',
      category: 'Ingredients'
    },
    {
      id: 2,
      title: 'Neroli: The Golden Blossom of Morocco',
      excerpt: 'Discover the delicate process of extracting precious neroli oil from bitter orange blossoms in the Atlas foothills...',
      image: neroliImg,
      author: 'Youssef Alaoui',
      date: '2024-03-08',
      category: 'Craftsmanship'
    },
    {
      id: 3,
      title: 'Lavender Fields: A Sensory Journey',
      excerpt: 'Experience the purple landscapes of Morocco\'s lavender regions and the ancient distillation techniques...',
      image: lavenderImg,
      author: 'Fatima Zahra',
      date: '2024-02-28',
      category: 'Heritage'
    }
  ];

  const categories = ['All', 'Ingredients', 'Craftsmanship', 'Heritage', 'Sustainability'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <OptimizedImage
          src={lavenderImg}
          alt="Journal - Stories from Morocco"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="max-w-2xl text-white">
              <h1 className="font-playfair text-5xl md:text-6xl mb-6 tracking-luxury">
                Journal
              </h1>
              <p className="font-inter text-lg md:text-xl leading-relaxed text-white/90">
                Stories, insights, and discoveries from the world of Moroccan perfumery and the artisans who craft our fragrances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="font-inter text-sm tracking-wide"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-inter">
                  Featured
                </span>
                <span>{articles[0].category}</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-foreground leading-tight">
                {articles[0].title}
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{articles[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(articles[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              <Button className="mt-6">
                Read Full Article
              </Button>
            </div>
            <div className="relative">
              <OptimizedImage
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl text-foreground mb-4">
              Latest Stories
            </h3>
            <p className="font-inter text-lg text-muted-foreground">
              Explore more insights from our perfumers and the world of Moroccan fragrances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article key={article.id} className="group cursor-pointer bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs rounded-full font-inter">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="font-playfair text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journal;