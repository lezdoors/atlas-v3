import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const megaMenuData = {
    fragrances: [
      { name: 'Signature Scents', href: '#' },
      { name: 'Limited Editions', href: '#' },
      { name: 'Discovery Sets', href: '#' }
    ],
    skincare: [
      { name: 'Face Serums', href: '#' },
      { name: 'Cleansing Oils', href: '#' },
      { name: 'Moisturizers', href: '#' }
    ],
    bathBody: [
      { name: 'Body Oils', href: '#' },
      { name: 'Handmade Soaps', href: '#' },
      { name: 'Salt Scrubs', href: '#' }
    ],
    collections: [
      { name: 'Atlas Heritage', href: '#' },
      { name: 'Seasonal Edit', href: '#' },
      { name: 'Artisan Series', href: '#' }
    ],
    gifts: [
      { name: 'Discovery Kits', href: '#' },
      { name: 'Gift Cards', href: '#' },
      { name: 'Sample Sets', href: '#' }
    ],
    featured: [
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Coming Soon', href: '#' }
    ]
  };

  const featuredProducts = [
    { name: 'Rose Damascus', price: '$89', image: '/api/placeholder/120/120' },
    { name: 'Oud Royal', price: '$156', image: '/api/placeholder/120/120' },
    { name: 'Atlas Bloom', price: '$112', image: '/api/placeholder/120/120' }
  ];

  return (
    <div className="relative">
      {/* Shop Button */}
      <Button
        variant="luxury-minimal"
        onMouseEnter={() => setIsOpen(true)}
        className="font-inter font-medium text-foreground hover:text-secondary hand-drawn-underline"
      >
        SHOP
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-6xl z-50 bg-background shadow-premium border-t border-border animate-fade-in"
          onMouseLeave={() => setIsOpen(false)}
          style={{ marginTop: '1rem' }}
        >
          <div className="grid grid-cols-6 gap-8 p-12">
            {/* Fragrances */}
            <div>
              <h3 className="font-playfair font-bold text-lg text-foreground mb-4 tracking-luxury">
                FRAGRANCES
              </h3>
              <ul className="space-y-3">
                {megaMenuData.fragrances.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-smooth text-sm font-inter hand-drawn-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skincare */}
            <div>
              <h3 className="font-playfair font-bold text-lg text-foreground mb-4 tracking-luxury">
                SKINCARE
              </h3>
              <ul className="space-y-3">
                {megaMenuData.skincare.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-smooth text-sm font-inter hand-drawn-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bath & Body */}
            <div>
              <h3 className="font-playfair font-bold text-lg text-foreground mb-4 tracking-luxury">
                BATH & BODY
              </h3>
              <ul className="space-y-3">
                {megaMenuData.bathBody.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-smooth text-sm font-inter hand-drawn-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h3 className="font-playfair font-bold text-lg text-foreground mb-4 tracking-luxury">
                COLLECTIONS
              </h3>
              <ul className="space-y-3">
                {megaMenuData.collections.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-smooth text-sm font-inter hand-drawn-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gifts & Sets */}
            <div>
              <h3 className="font-playfair font-bold text-lg text-foreground mb-4 tracking-luxury">
                GIFTS & SETS
              </h3>
              <ul className="space-y-3">
                {megaMenuData.gifts.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-smooth text-sm font-inter hand-drawn-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured */}
            <div>
              <h3 className="font-playfair font-bold text-lg text-foreground mb-4 tracking-luxury">
                FEATURED
              </h3>
              <ul className="space-y-3">
                {megaMenuData.featured.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-smooth text-sm font-inter hand-drawn-underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="border-t border-border bg-muted/20 p-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-playfair font-bold text-xl text-foreground mb-2 tracking-luxury">
                  Signature Collection
                </h4>
                <p className="text-muted-foreground font-inter">
                  Discover our most beloved fragrances
                </p>
              </div>
              <div className="flex space-x-6">
                {featuredProducts.map((product) => (
                  <div key={product.name} className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-muted rounded-luxury mb-2 overflow-hidden">
                      <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-xs text-secondary font-playfair">
                          {product.name.slice(0, 2)}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-inter text-foreground group-hover:text-secondary transition-smooth">
                      {product.name}
                    </p>
                    <p className="text-xs font-inter text-muted-foreground">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lifestyle Banner */}
          <div className="border-t border-border p-8 bg-gradient-to-r from-secondary/5 to-accent/5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-playfair font-bold text-xl text-foreground mb-2 tracking-luxury">
                  Crafted in Morocco
                </h4>
                <p className="text-muted-foreground font-inter mb-4">
                  Discover the artisan tradition behind every bottle
                </p>
                <Button variant="moroccan-outline" size="sm">
                  Learn Our Story
                </Button>
              </div>
              <div className="w-32 h-20 bg-muted rounded-luxury flex items-center justify-center">
                <span className="text-secondary font-playfair text-sm">Artisan</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default MegaMenu;