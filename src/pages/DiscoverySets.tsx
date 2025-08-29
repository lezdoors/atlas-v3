import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BotanicalFrame from '@/components/BotanicalFrame';
import { Gift, Star, Users, Sparkles } from 'lucide-react';
import discoverySetsImg from '@/assets/discovery-sets-hero.jpg';
import atlasRoseImg from '@/assets/atlas-rose-product.jpg';

const DiscoverySets = () => {
  const discoverySets = [
    {
      id: 1,
      name: 'The Essential Collection',
      description: 'Our five signature scents in 5ml travel sizes',
      price: 95,
      originalPrice: 125,
      image: discoverySetsImg,
      includes: ['Atlas Rose', 'Neroli Sublime', 'Argan Mystique', 'Jasmine Royale', 'Cedar Dreams'],
      bestseller: true
    },
    {
      id: 2,
      name: 'Floral Journey',
      description: 'A garden of precious flowers in perfect harmony',
      price: 75,
      originalPrice: null,
      image: atlasRoseImg,
      includes: ['Atlas Rose', 'Jasmine Royale', 'White Tea Blossom', 'Peony Dreams'],
      bestseller: false
    },
    {
      id: 3,
      name: 'Woody Exploration',
      description: 'Deep, rich woods from ancient forests',
      price: 85,
      originalPrice: null,
      image: discoverySetsImg,
      includes: ['Cedar Dreams', 'Argan Mystique', 'Sandalwood Whisper', 'Vetiver Soul'],
      bestseller: false
    },
    {
      id: 4,
      name: 'Limited Edition Discoveries',
      description: 'Rare fragrances in exclusive miniatures',
      price: 165,
      originalPrice: 200,
      image: atlasRoseImg,
      includes: ['Midnight Garden', 'Desert Mirage', 'Golden Hour', 'Ocean Breeze'],
      bestseller: false
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: 'Perfect for Gifting',
      description: 'Elegant packaging with hand-written notes'
    },
    {
      icon: Star,
      title: 'Value Savings',
      description: 'Save up to 40% compared to full sizes'
    },
    {
      icon: Users,
      title: 'Expert Curation',
      description: 'Thoughtfully selected by our perfumers'
    },
    {
      icon: Sparkles,
      title: 'Travel Ready',
      description: 'TSA-friendly sizes for any journey'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="border-b border-border/30 py-4">
        <div className="container-luxury">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/fragrances" className="hover:text-primary transition-colors">Fragrances</a>
            <span>/</span>
            <span className="text-foreground">Discovery Sets</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={discoverySetsImg}
            alt="Discovery Sets Collection"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-amber-900/60" />
        </div>
        
        <div className="relative z-10 container-luxury text-center text-white">
          <BotanicalFrame variant="ornate" className="max-w-4xl mx-auto">
            <div className="p-12">
              <div className="flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 mr-2 text-emerald-400" />
                <span className="text-sm uppercase tracking-widest text-emerald-200">Curated Collections</span>
                <Gift className="w-6 h-6 ml-2 text-emerald-400" />
              </div>
              <h1 className="font-playfair text-5xl lg:text-6xl mb-6">
                Discovery Sets
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                Embark on a sensory journey through our carefully curated fragrance collections. 
                Each discovery set tells a unique story, offering you the perfect way to explore 
                our world of luxury fragrances.
              </p>
              <div className="inline-flex items-center space-x-4">
                <span className="text-sm uppercase tracking-widest">Expertly Curated</span>
                <span className="w-px h-6 bg-white/30" />
                <span className="text-sm uppercase tracking-widest">Perfect for Gifts</span>
              </div>
            </div>
          </BotanicalFrame>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl mb-6">
              Why Choose Discovery Sets?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our discovery sets offer the perfect introduction to luxury fragrance, 
              whether for yourself or as an unforgettable gift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Sets Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {discoverySets.map((set) => (
              <div key={set.id} className="group luxury-card relative">
                
                {set.bestseller && (
                  <div className="absolute top-6 left-6 z-10 bg-primary text-primary-foreground px-4 py-2 text-sm uppercase tracking-wider rounded-full">
                    Bestseller
                  </div>
                )}
                
                <div className="relative overflow-hidden bg-muted/10 aspect-[4/3] mb-6">
                  <OptimizedImage
                    src={set.image}
                    alt={set.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {set.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {set.description}
                    </p>
                  </div>

                  {/* Included Fragrances */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-2 uppercase tracking-wider">Includes:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {set.includes.map((fragrance, index) => (
                        <span key={index} className="text-sm text-muted-foreground">
                          • {fragrance}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div>
                      <p className="text-xl font-semibold text-foreground">
                        ${set.price}
                      </p>
                      {set.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">
                          ${set.originalPrice}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button className="px-6 py-2 border border-border hover:bg-muted transition-colors text-sm font-medium">
                        Learn More
                      </button>
                      <button className="luxury-button text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-luxury text-center">
          <BotanicalFrame variant="decorative" className="max-w-3xl mx-auto">
            <div className="p-12">
              <h2 className="font-playfair text-3xl lg:text-4xl mb-6">
                Create Your Own Discovery Set
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Can't decide which set is perfect? Create a personalized discovery set 
                with our fragrance consultation service. Our experts will curate 
                a selection based on your preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="luxury-button">
                  Start Consultation
                </button>
                <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                  View All Fragrances
                </button>
              </div>
            </div>
          </BotanicalFrame>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiscoverySets;