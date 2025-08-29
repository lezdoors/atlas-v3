import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenu from '@/components/MegaMenu';
import CartDrawer from '@/components/CartDrawer';

const Header = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-foreground text-background py-2 text-center text-sm font-inter tracking-wide-luxury">
        FREE SHIPPING ON ORDERS OVER $75 • COMPLIMENTARY SAMPLES WITH EVERY ORDER
      </div>
      
      <header className="bg-background border-b border-border/50 sticky top-0 z-40 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <MegaMenu />
              <a href="#" className="text-foreground hover:text-secondary transition-smooth font-inter font-medium hand-drawn-underline tracking-wide-luxury">
                OUR STORY
              </a>
            </nav>
            
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground tracking-luxury">
                PERLE DE L'ATLAS
              </h1>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-12">
                <a href="#" className="text-foreground hover:text-secondary transition-smooth font-inter font-medium hand-drawn-underline tracking-wide-luxury">
                  JOURNAL
                </a>
                <a href="#" className="text-foreground hover:text-secondary transition-smooth font-inter font-medium hand-drawn-underline tracking-wide-luxury">
                  ABOUT
                </a>
              </nav>
              
              <div className="flex items-center space-x-4">
                <Button variant="luxury-minimal" size="icon" className="hover:bg-muted/50">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                
                <Button variant="luxury-minimal" size="icon" className="hover:bg-muted/50">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
                
                <CartDrawer 
                  trigger={
                    <Button variant="luxury-minimal" size="icon" className="hover:bg-muted/50 relative">
                      <ShoppingBag className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary text-secondary-foreground rounded-full text-xs flex items-center justify-center font-inter font-medium">
                        2
                      </span>
                      <span className="sr-only">Shopping cart</span>
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;