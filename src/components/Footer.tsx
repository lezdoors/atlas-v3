import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-primary-foreground/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl lg:text-4xl mb-4 tracking-luxury">
              Stay Connected
            </h3>
            <p className="font-inter text-primary-foreground/80 leading-[1.6] mb-8">
              Be the first to discover new fragrances, exclusive collections, and artisan stories from Morocco.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 font-inter text-sm focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 font-inter tracking-wide px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl mb-6 tracking-luxury">
              Perle de l'Atlas
            </h3>
            <p className="text-primary-foreground/70 font-inter leading-[1.6] mb-8 text-sm">
              Handcrafted luxury fragrances born from the ancient wisdom of Moroccan artisans. Each scent tells a story of heritage, passion, and timeless elegance.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-playfair text-lg mb-6 tracking-luxury">
              Discover
            </h4>
            <ul className="space-y-4 font-inter text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Signature Fragrances
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Limited Editions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Gift Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Travel Sizes
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Skincare
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-playfair text-lg mb-6 tracking-luxury">
              Support
            </h4>
            <ul className="space-y-4 font-inter text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-playfair text-lg mb-6 tracking-luxury">
              Heritage
            </h4>
            <ul className="space-y-4 font-inter text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Artisan Craftsmanship
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Atlas Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 leading-[1.6]">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/50 font-inter text-sm mb-4 md:mb-0 leading-[1.6]">
              © 2024 Perle de l'Atlas. Handcrafted in Morocco with love.
            </p>
            
            <div className="flex space-x-8 text-sm font-inter">
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors duration-300 leading-[1.6]">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors duration-300 leading-[1.6]">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors duration-300 leading-[1.6]">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;