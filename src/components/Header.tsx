import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FragranceMegaMenu } from './FragranceMegaMenu';
import { LuxuryCartDrawer } from './LuxuryCartDrawer';

const Header = () => {
  const [isFragranceMegaMenuOpen, setIsFragranceMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground py-2.5 text-center">
        <p className="font-inter text-xs md:text-sm tracking-wide px-4">
          Complimentary samples with every order • Free shipping over $150
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
              <div className="relative">
                <button
                  onMouseEnter={() => setIsFragranceMegaMenuOpen(true)}
                  onMouseLeave={() => setIsFragranceMegaMenuOpen(false)}
                  className="font-inter text-sm text-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase relative group"
                >
                  Fragrances
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
                <div
                  onMouseEnter={() => setIsFragranceMegaMenuOpen(true)}
                  onMouseLeave={() => setIsFragranceMegaMenuOpen(false)}
                >
                  <FragranceMegaMenu 
                    isOpen={isFragranceMegaMenuOpen} 
                    onClose={() => setIsFragranceMegaMenuOpen(false)} 
                  />
                </div>
              </div>
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
            <div className="fixed inset-0 z-50 bg-background lg:hidden">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="font-playfair text-xl">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 p-6 space-y-8">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search fragrances..."
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-6">
                    <a href="/fragrances/signature-scents" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Signature Scents
                    </a>
                    <a href="/fragrances/limited-editions" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Limited Editions
                    </a>
                    <a href="/fragrances/discovery-sets" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Discovery Sets
                    </a>
                    <a href="#" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Skincare
                    </a>
                    <a href="#" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Collections
                    </a>
                    <a href="#" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Heritage
                    </a>
                    <a href="#" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                      Journal
                    </a>
                  </nav>

                  {/* Botanical Decoration */}
                  <div className="absolute bottom-6 right-6 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary">
                      <path d="M20 50 Q30 30, 50 50 Q70 30, 80 50 Q70 70, 50 50 Q30 70, 20 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </header>

      {/* Cart Drawer */}
      <LuxuryCartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;