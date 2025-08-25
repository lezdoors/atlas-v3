import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-accent">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-accent-foreground mb-6 tracking-luxury">
          Stay in the Know
        </h2>
        
        <p className="text-xl text-accent-foreground/80 font-inter mb-8 max-w-2xl mx-auto leading-relaxed">
          Be the first to discover new fragrances, exclusive collections, and receive special offers crafted just for you.
        </p>
        
        <div className="bg-background/95 backdrop-blur-sm rounded-luxury p-8 shadow-luxury">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 border-border bg-background font-inter"
              required
            />
            <Button 
              type="submit" 
              variant="luxury" 
              size="lg"
              className="sm:w-auto w-full"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground font-inter mt-4">
            Join over 10,000 fragrance enthusiasts. Unsubscribe anytime.
          </p>
        </div>

        {/* Special Offer */}
        <div className="mt-8 inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-inter font-medium">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          Get 15% off your first order when you subscribe
        </div>
      </div>
    </section>
  );
};

export default Newsletter;