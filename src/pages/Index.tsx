import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import NewArrivals from '@/components/NewArrivals';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <NewArrivals />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
