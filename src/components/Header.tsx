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
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <div 
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <button className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide">
                  SHOP
                </button>
                <MegaMenu 
                  isOpen={isMegaMenuOpen} 
                  onClose={() => setIsMegaMenuOpen(false)} 
                />
              </div>
              <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide">
                OUR STORY
              </a>
            </nav>
            
            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-3xl font-playfair font-bold text-foreground tracking-luxury">
                PERLE DE L'ATLAS
              </h1>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-12">
                <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide">
                  JOURNAL
                </a>
                <a href="#" className="text-foreground hover:text-secondary transition-smooth font-poppins font-medium tracking-wide">
                  ABOUT
                </a>
              </nav>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Search className="h-5 w-5" />
                </Button>
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
                    2
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;