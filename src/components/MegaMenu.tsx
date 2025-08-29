import React from 'react';
import { Button } from '@/components/ui/button';
import { HandDrawnOliveBranch } from './HandDrawnIcons';
import productSample from '@/assets/product-sample.jpg';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const categories = {
    fragrances: [
      { name: 'Signature Scents', href: '#' },
      { name: 'Limited Editions', href: '#' },
      { name: 'Discovery Sets', href: '#' },
      { name: 'Travel Sizes', href: '#' },
      { name: 'Custom Blends', href: '#' }
    ],
    skincare: [
      { name: 'Face Serums', href: '#' },
      { name: 'Cleansing Oils', href: '#' },
      { name: 'Moisturizers', href: '#' },
      { name: 'Face Masks', href: '#' },
      { name: 'Eye Care', href: '#' }
    ],
    bathBody: [
      { name: 'Body Oils', href: '#' },
      { name: 'Handmade Soaps', href: '#' },
      { name: 'Salt Scrubs', href: '#' },
      { name: 'Body Butters', href: '#' },
      { name: 'Bath Salts', href: '#' }
    ],
    collections: [
      { name: 'Atlas Heritage', href: '#' },
      { name: 'Seasonal Edits', href: '#' },
      { name: 'Artisan Series', href: '#' },
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' }
    ]
  };

  const featuredProducts = [
    { name: 'Rose Damascus', price: 89, image: productSample },
    { name: 'Oud Royal', price: 156, image: productSample },
    { name: 'Atlas Bloom', price: 112, image: productSample }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Mega Menu */}
      <div className="absolute top-full left-0 right-0 bg-background border-t border-border shadow-elevated z-50 animate-slide-down">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-5 gap-12">
            
            {/* FRAGRANCES */}
            <div>
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6 tracking-luxury">
                FRAGRANCES
              </h3>
              <ul className="space-y-3">
                {categories.fragrances.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-colors font-inter relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SKINCARE */}
            <div>
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6 tracking-luxury">
                SKINCARE
              </h3>
              <ul className="space-y-3">
                {categories.skincare.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-colors font-inter relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* BATH & BODY */}
            <div>
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6 tracking-luxury">
                BATH & BODY
              </h3>
              <ul className="space-y-3">
                {categories.bathBody.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-colors font-inter relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLLECTIONS */}
            <div>
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6 tracking-luxury">
                COLLECTIONS
              </h3>
              <ul className="space-y-3">
                {categories.collections.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-secondary transition-colors font-inter relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* FEATURED VISUAL */}
            <div className="bg-card rounded-moroccan p-6 shadow-subtle">
              <h3 className="font-playfair font-bold text-lg text-foreground mb-4 tracking-luxury">
                Featured Products
              </h3>
              
              <div className="space-y-4">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-3 group cursor-pointer">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <p className="font-playfair font-medium text-foreground group-hover:text-secondary transition-colors">
                        {product.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-inter">
                        From ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="bg-gradient-moroccan rounded-lg p-4 text-center">
                  <p className="text-moroccan-cream font-playfair font-medium mb-2">
                    Crafted in Morocco
                  </p>
                  <p className="text-moroccan-cream/80 text-sm font-inter">
                    Authentic artisan tradition
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-8">
            <HandDrawnOliveBranch className="text-secondary opacity-40" size={120} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;