import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4 tracking-luxury">
              Essence
            </h3>
            <p className="text-primary-foreground/80 font-inter leading-relaxed mb-6">
              Discover the art of luxury fragrance. Each scent in our collection tells a unique story, crafted with the finest ingredients from around the world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 tracking-luxury">
              Shop
            </h4>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  All Fragrances
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Limited Edition
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 tracking-luxury">
              Support
            </h4>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 tracking-luxury">
              Company
            </h4>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 font-inter text-sm mb-4 md:mb-0">
              © 2024 Essence Fragrances. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm font-inter">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
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