import React from 'react';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
      {/* Top banner */}
      <div className="bg-foreground text-background py-2 text-center text-sm font-inter">
        FREE SHIPPING ON ORDERS OVER $150
      </div>
      
      <header className="bg-background border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
                Shop
              </a>
              <a href="#" className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
                Our Story
              </a>
            </nav>
            
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-foreground tracking-luxury">
                PERLE DE L'ATLAS
              </h1>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
                  Journal
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Shopping bag</span>
                </Button>
                <button className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;