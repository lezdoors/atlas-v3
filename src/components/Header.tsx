import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenu from './MegaMenu';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center">
        <p className="font-inter text-sm tracking-wide">
          Complimentary samples with every order • Free shipping on orders over $150
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Top Row - Search, Logo, Icons */}
          <div className="flex items-center justify-between py-6">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              )}
            </button>

            {/* Search Icon - Hidden on mobile */}
            <div className="hidden lg:flex">
              <button className="p-2 hover:bg-muted/50 rounded-none transition-colors duration-300">
                <Search className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 lg:flex-none text-center">
              <h1 className="font-playfair text-2xl lg:text-3xl text-foreground font-normal tracking-luxury">
                Perle de l'Atlas
              </h1>
            </div>

            {/* User & Cart Icons */}
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-muted/50 rounded-none transition-colors duration-300">
                <User className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-muted/50 rounded-none transition-colors duration-300 relative"
              >
                <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-inter">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:block border-t border-border/30">
            <div className="flex items-center justify-center space-x-12 py-4">
              <button
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase relative group"
              >
                Fragrances
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
              <a
                href="#"
                className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase relative group"
              >
                Skincare
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase relative group"
              >
                Collections
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase relative group"
              >
                Heritage
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase relative group"
              >
                Journal
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border/30 py-6">
              <div className="flex flex-col space-y-4">
                <a href="#" className="font-inter text-sm text-foreground tracking-wide uppercase">
                  Fragrances
                </a>
                <a href="#" className="font-inter text-sm text-foreground tracking-wide uppercase">
                  Skincare
                </a>
                <a href="#" className="font-inter text-sm text-foreground tracking-wide uppercase">
                  Collections
                </a>
                <a href="#" className="font-inter text-sm text-foreground tracking-wide uppercase">
                  Heritage
                </a>
                <a href="#" className="font-inter text-sm text-foreground tracking-wide uppercase">
                  Journal
                </a>
                <div className="pt-4 border-t border-border/30">
                  <button className="w-full flex items-center justify-center space-x-2 p-2">
                    <Search className="w-4 h-4 text-foreground" />
                    <span className="font-inter text-sm text-foreground">Search</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mega Menu */}
        {isMegaMenuOpen && (
          <div
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;