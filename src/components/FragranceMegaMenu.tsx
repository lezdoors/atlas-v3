import React from 'react';
import OptimizedImage from './ui/OptimizedImage';
import atlasRoseImg from '@/assets/atlas-rose-product.jpg';

interface FragranceMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FragranceMegaMenu: React.FC<FragranceMegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuCategories = {
    'Signature Scents': [
      { name: 'Atlas Rose', href: '/fragrances/signature-scents' },
      { name: 'Neroli Sublime', href: '/fragrances/signature-scents' },
      { name: 'Argan Mystique', href: '/fragrances/signature-scents' },
      { name: 'Cedar Dreams', href: '/fragrances/signature-scents' },
      { name: 'Jasmine Royale', href: '/fragrances/signature-scents' },
      { name: 'View All', href: '/fragrances/signature-scents' }
    ],
    'Limited Editions': [
      { name: 'Midnight Garden', href: '/fragrances/limited-editions' },
      { name: 'Desert Mirage', href: '/fragrances/limited-editions' },
      { name: 'Ocean Breeze', href: '/fragrances/limited-editions' },
      { name: 'Golden Hour', href: '/fragrances/limited-editions' },
      { name: 'View All', href: '/fragrances/limited-editions' }
    ],
    'Discovery Sets': [
      { name: 'The Essential Collection', href: '/fragrances/discovery-sets' },
      { name: 'Floral Journey', href: '/fragrances/discovery-sets' },
      { name: 'Woody Exploration', href: '/fragrances/discovery-sets' },
      { name: 'Citrus Escape', href: '/fragrances/discovery-sets' },
      { name: 'View All', href: '/fragrances/discovery-sets' }
    ],
    'Collections': [
      { name: 'Heritage Line', href: '/collections/heritage' },
      { name: 'Modern Classics', href: '/collections/modern' },
      { name: 'Artisan Series', href: '/collections/artisan' },
      { name: 'Botanical Garden', href: '/collections/botanical' },
      { name: 'View All Collections', href: '/collections' }
    ]
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Mega Menu */}
      <div className="absolute top-full left-0 right-0 z-50 animate-slide-down">
        <div className="bg-background/98 backdrop-blur-md border-b shadow-elegant">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* Categories Columns */}
              {Object.entries(menuCategories).map(([category, items]) => (
                <div key={category} className="space-y-4 min-w-0">
                  <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground whitespace-nowrap">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={index}>
                        <a 
                          href={item.href} 
                          className="block text-sm text-foreground hover:text-primary transition-colors duration-200 relative group whitespace-nowrap"
                        >
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Featured Product Column */}
              <div className="space-y-4 md:col-span-2 lg:col-span-1 md:pl-8 md:border-l border-border">
                <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Featured Product
                </h3>
                
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-muted/20 p-6 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                    <OptimizedImage
                      src={atlasRoseImg}
                      alt="Atlas Rose - Signature Fragrance"
                      className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Botanical Frame Accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 opacity-30">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      Atlas Rose
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Our signature scent, crafted with Moroccan rose petals
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      $165
                    </p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="pt-4 border-t border-border">
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-primary hover:underline">
                      View All Fragrances →
                    </a>
                    <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      Fragrance Quiz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};