import React, { useState } from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenu from './MegaMenu';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-inter">
        Complimentary samples with any $75+ order using code: ATLAS25
      </div>

      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Search */}
            <div className="flex-1 max-w-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for a scent"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-moroccan bg-background text-foreground placeholder:text-muted-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-2xl font-playfair font-bold text-foreground tracking-luxury">
                PERLE DE L'ATLAS
              </h1>
              <p className="text-xs font-inter text-muted-foreground text-center tracking-wide">
                MARRAKECH
              </p>
            </div>
            
            {/* User & Cart */}
            <div className="flex items-center space-x-4 flex-1 justify-end">
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-muted relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center space-x-12 py-4 border-t border-border">
            <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
              NEW & TRENDING
            </a>
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
                FRAGRANCES
              </button>
              <MegaMenu 
                isOpen={isMegaMenuOpen} 
                onClose={() => setIsMegaMenuOpen(false)} 
              />
            </div>
            <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
              CANDLES & HOME
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
              BATH & BODY
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
              HOME DÉCOR
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
              GIFTS
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
              SERVICES
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide text-sm">
              ABOUT PERLE DE L'ATLAS
            </a>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;