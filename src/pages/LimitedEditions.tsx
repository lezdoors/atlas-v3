import React, { useState } from 'react';
import { ChevronDown, Filter, Grid, List, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BotanicalFrame from '@/components/BotanicalFrame';
import limitedEditionsBg from '@/assets/limited-editions-hero.jpg';
import atlasRoseImg from '@/assets/atlas-rose-product.jpg';
import neroliSublimeImg from '@/assets/neroli-sublime-product.jpg';
import arganMystiqueImg from '@/assets/argan-mystique-product.jpg';

const LimitedEditions = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [availability, setAvailability] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Midnight Garden',
      category: 'PARFUM',
      description: 'Rare night-blooming cereus with black truffle',
      price: 320,
      originalPrice: 280,
      image: arganMystiqueImg,
      stock: 12,
      isExclusive: true,
      releaseDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Desert Mirage',
      category: 'EAU DE PARFUM',
      description: 'Saharan winds with precious ambergris',
      price: 285,
      originalPrice: null,
      image: atlasRoseImg,
      stock: 8,
      isExclusive: true,
      releaseDate: '2024-02-20'
    },
    {
      id: 3,
      name: 'Ocean Breeze',
      category: 'EAU DE PARFUM',
      description: 'Atlantic sea salt with driftwood essence',
      price: 195,
      originalPrice: null,
      image: neroliSublimeImg,
      stock: 0,
      isExclusive: false,
      releaseDate: '2023-12-10'
    },
    {
      id: 4,
      name: 'Golden Hour',
      category: 'PARFUM',
      description: 'Liquid amber with Moroccan honey',
      price: 365,
      originalPrice: null,
      image: arganMystiqueImg,
      stock: 5,
      isExclusive: true,
      releaseDate: '2024-03-01'
    },
    {
      id: 5,
      name: 'Winter Solstice',
      category: 'EAU DE PARFUM',
      description: 'Pine resin with crystalline musk',
      price: 225,
      originalPrice: null,
      image: atlasRoseImg,
      stock: 15,
      isExclusive: false,
      releaseDate: '2023-11-21'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (availability === 'in-stock' && product.stock === 0) return false;
    if (availability === 'exclusive' && !product.isExclusive) return false;
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'stock': return b.stock - a.stock;
      default: return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
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
            <span className="text-foreground">Limited Editions</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={limitedEditionsBg}
            alt="Limited Editions Collection"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-amber-900/60" />
        </div>
        
        <div className="relative z-10 container-luxury text-center text-white">
          <BotanicalFrame variant="ornate" className="max-w-4xl mx-auto">
            <div className="p-12">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 mr-2 text-amber-400" />
                <span className="text-sm uppercase tracking-widest text-amber-200">Exclusive Collection</span>
                <Star className="w-6 h-6 ml-2 text-amber-400" />
              </div>
              <h1 className="font-playfair text-5xl lg:text-6xl mb-6">
                Limited Editions
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                Rare and extraordinary fragrances crafted in small batches using the world's 
                most precious ingredients. Each bottle is individually numbered and represents 
                a moment of olfactory artistry that will never be repeated.
              </p>
              <div className="inline-flex items-center space-x-4">
                <span className="text-sm uppercase tracking-widest">5 Exclusive Fragrances</span>
                <span className="w-px h-6 bg-white/30" />
                <span className="text-sm uppercase tracking-widest">Limited Quantities</span>
              </div>
            </div>
          </BotanicalFrame>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border/30 py-6 bg-gradient-to-r from-purple-50/50 to-amber-50/50">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
              
              {/* Availability Filter */}
              <div className="relative">
                <select 
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">All Items</option>
                  <option value="in-stock">In Stock</option>
                  <option value="exclusive">Exclusive Only</option>
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
                  <option value="newest">Release Date</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="stock">Availability</option>
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
              <div key={product.id} className={`group luxury-card relative ${viewType === 'list' ? 'flex gap-8' : ''}`}>
                
                {/* Exclusive Badge */}
                {product.isExclusive && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-amber-600 text-white px-3 py-1 text-xs uppercase tracking-wider rounded-full">
                    Exclusive
                  </div>
                )}

                {/* Stock Warning */}
                {product.stock > 0 && product.stock <= 10 && (
                  <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white px-3 py-1 text-xs uppercase tracking-wider rounded-full">
                    Only {product.stock} left
                  </div>
                )}

                {/* Out of Stock */}
                {product.stock === 0 && (
                  <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 text-xs uppercase tracking-wider rounded-full">
                    Sold Out
                  </div>
                )}
                
                <div className={`relative overflow-hidden bg-muted/10 ${viewType === 'list' ? 'w-64 h-64 flex-shrink-0' : 'aspect-square'}`}>
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${product.stock === 0 ? 'grayscale' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        ${product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </p>
                      )}
                    </div>
                    <button 
                      className={`text-sm font-medium ${product.stock === 0 ? 'text-muted-foreground cursor-not-allowed' : 'text-primary hover:underline'}`}
                      disabled={product.stock === 0}
                    >
                      {product.stock === 0 ? 'Notify When Available' : 'View Details'}
                    </button>
                  </div>
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

export default LimitedEditions;