import React from 'react';
import { Button } from '@/components/ui/button';
import HandDrawnElements from '@/components/HandDrawnElements';

const Footer = () => {
  return (
    <footer className="relative" style={{ backgroundColor: '#2C2C2C' }}>
      {/* Botanical Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <HandDrawnElements type="botanical-frame" className="w-24 h-6 text-white/30" />
      </div>
      
      <div className="container-luxury pt-20">
        {/* Newsletter Section */}
        <div className="pb-20 border-b border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl lg:text-4xl mb-6 text-white tracking-tight">
              Stay Connected
            </h3>
            <p className="font-inter text-white/70 text-lg leading-relaxed mb-10">
              Be the first to discover new fragrances, exclusive collections, and artisan stories from Morocco.
            </p>
            
            {/* Premium Newsletter Form */}
            <div className="flex flex-col gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="luxury-input w-full h-12 md:h-14 px-4 md:px-6 bg-white/5 border border-white/20 text-white placeholder-white/50 font-inter text-sm rounded-none focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-500 backdrop-blur-sm"
              />
              <Button
                variant="outline"
                size="lg"
                className="w-full h-12 md:h-14 px-6 md:px-8 border-white/20 text-white hover:bg-white hover:text-[#2C2C2C] transition-all duration-500 font-inter text-sm tracking-wider uppercase rounded-none luxury-button"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Four-Column Layout */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Shop Column */}
          <div>
            <h4 className="font-playfair text-xl mb-8 text-white tracking-tight">
              Shop
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Signature Fragrances
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Limited Editions
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Gift Collections
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Travel Sizes
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Home Fragrance
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-playfair text-xl mb-8 text-white tracking-tight">
              Support
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-playfair text-xl mb-8 text-white tracking-tight">
              Company
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Artisan Craftsmanship
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Atlas Journal
                </a>
              </li>
              <li>
                <a href="#" className="luxury-link text-white/70 hover:text-white transition-all duration-300 font-inter text-sm leading-relaxed">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-playfair text-xl mb-8 text-white tracking-tight">
              Connect
            </h4>
            <p className="text-white/70 font-inter text-sm leading-relaxed mb-8">
              Follow our journey and discover the artistry behind each fragrance.
            </p>
            
            {/* Refined Social Icons */}
            <div className="flex space-x-6 mb-8">
              <a 
                href="#" 
                className="luxury-social text-white/60 hover:text-white transition-all duration-500 group"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="#" 
                className="luxury-social text-white/60 hover:text-white transition-all duration-500 group"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="luxury-social text-white/60 hover:text-white transition-all duration-500 group"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>

            <div className="text-white/50 font-inter text-xs leading-relaxed">
              <p>Handcrafted in Morocco</p>
              <p className="mt-1">with passion & heritage</p>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-white/10 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-white/40 font-inter text-xs mb-6 lg:mb-0 leading-relaxed tracking-wide">
              © 2024 Perle de l'Atlas. Handcrafted in Morocco with love.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-8 text-xs font-inter tracking-wide">
              <a href="#" className="luxury-legal text-white/40 hover:text-white/70 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="luxury-legal text-white/40 hover:text-white/70 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="luxury-legal text-white/40 hover:text-white/70 transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="luxury-legal text-white/40 hover:text-white/70 transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;