import React from 'react';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-foreground tracking-luxury">
              Essence
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
              Fragrances
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
              Collections
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
              Discover
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-luxury font-inter font-medium">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-muted relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary text-secondary-foreground rounded-full text-xs flex items-center justify-center font-medium">
                2
              </span>
              <span className="sr-only">Shopping bag</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;