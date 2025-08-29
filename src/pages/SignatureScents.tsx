import React, { useState } from 'react';
import { ChevronDown, Filter, Grid, List } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BotanicalFrame from '@/components/BotanicalFrame';
import signatureScentsBg from '@/assets/lavender-hero.jpg';
import atlasRoseImg from '@/assets/atlas-rose-hero.jpg';
import neroliSublimeImg from '@/assets/neroli-sublime-hero.jpg';
import arganMystiqueImg from '@/assets/argan-mystique-hero.jpg';

const SignatureScents = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');
  const [scentFamily, setScentFamily] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Atlas Rose',
      category: 'EAU DE PARFUM',
      description: 'Damask rose petals kissed by mountain air',
      price: 185,
      image: atlasRoseImg,
      scent: 'floral',
      isNew: true
    },
    {
      id: 2,
      name: 'Neroli Sublime',
      category: 'EAU DE PARFUM',
      description: 'Mediterranean neroli with bergamot essence',
      price: 165,
      image: neroliSublimeImg,
      scent: 'citrus',
      isNew: false
    },
    {
      id: 3,
      name: 'Argan Mystique',
      category: 'PARFUM',
      description: 'Precious argan oil with oud and amber',
      price: 220,
      image: arganMystiqueImg,
      scent: 'woody',
      isNew: false
    },
    {
      id: 4,
      name: 'Jasmine Royale',
      category: 'EAU DE PARFUM',
      description: 'Night-blooming jasmine with white tea',
      price: 175,
      image: neroliSublimeImg,
      scent: 'floral',
      isNew: true
    },
    {
      id: 5,
      name: 'Cedar Dreams',
      category: 'EAU DE TOILETTE',
      description: 'Atlas cedar with vetiver and moss',
      price: 145,
      image: arganMystiqueImg,
      scent: 'woody',
      isNew: false
    },
    {
      id: 6,
      name: 'Oud Eternal',
      category: 'PARFUM',
      description: 'Rare agarwood with rose and saffron',
      price: 285,
      image: neroliSublimeImg,
      scent: 'oriental',
      isNew: false
    }
  ];

  const filteredProducts = products.filter(product => {
    if (scentFamily !== 'all' && product.scent !== scentFamily) return false;
    if (priceRange === 'under-150' && product.price >= 150) return false;
    if (priceRange === '150-200' && (product.price < 150 || product.price > 200)) return false;
    if (priceRange === 'over-200' && product.price <= 200) return false;
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return b.id - a.id; // newest first
    }
  });

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
            <span className="text-foreground">Signature Scents</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={signatureScentsBg}
            alt="Signature Scents Collection"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 container-luxury text-center text-white">
          <BotanicalFrame variant="ornate" className="max-w-4xl mx-auto">
            <div className="p-12">
              <h1 className="font-playfair text-5xl lg:text-6xl mb-6">
                Signature Scents
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                Our timeless collection of essential fragrances, each one a masterpiece 
                crafted from the finest ingredients sourced from the Atlas Mountains. 
                These are the scents that define our heritage and embody the spirit of Morocco.
              </p>
              <div className="inline-flex items-center space-x-4">
                <span className="text-sm uppercase tracking-widest">6 Unique Fragrances</span>
                <span className="w-px h-6 bg-white/30" />
                <span className="text-sm uppercase tracking-widest">Heritage Collection</span>
              </div>
            </div>
          </BotanicalFrame>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border/30 py-6 bg-muted/20">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
              
              {/* Scent Family Filter */}
              <div className="relative">
                <select 
                  value={scentFamily}
                  onChange={(e) => setScentFamily(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">All Scents</option>
                  <option value="floral">Floral</option>
                  <option value="citrus">Citrus</option>
                  <option value="woody">Woody</option>
                  <option value="oriental">Oriental</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">All Prices</option>
                  <option value="under-150">Under $150</option>
                  <option value="150-200">$150 - $200</option>
                  <option value="over-200">Over $200</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Sort and View */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>

              <div className="flex border border-border rounded-lg">
                <button
                  onClick={() => setViewType('grid')}
                  className={`p-2 ${viewType === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewType('list')}
                  className={`p-2 ${viewType === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className={viewType === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12' 
            : 'space-y-8'
          }>
            {filteredProducts.map((product) => (
              <div key={product.id} className={`group luxury-card ${viewType === 'list' ? 'flex gap-8' : ''}`}>
                <div className={`relative overflow-hidden bg-muted/10 ${viewType === 'list' ? 'w-64 h-64 flex-shrink-0' : 'aspect-square'}`}>
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider">
                      New
                    </div>
                  )}
                </div>
                
                <div className={`space-y-3 ${viewType === 'list' ? 'flex-1 py-4' : 'p-6'}`}>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-lg font-semibold text-foreground">
                      From ${product.price}
                    </p>
                    <button className="text-primary hover:underline text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Set CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury text-center">
          <BotanicalFrame variant="decorative" className="max-w-3xl mx-auto">
            <div className="p-12">
              <h2 className="font-playfair text-3xl lg:text-4xl mb-6">
                Can't Decide?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience our complete Signature Scents collection with our curated discovery set. 
                Perfect for finding your perfect scent or as an elegant gift.
              </p>
              <button className="luxury-button">
                Shop Discovery Set
              </button>
            </div>
          </BotanicalFrame>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignatureScents;