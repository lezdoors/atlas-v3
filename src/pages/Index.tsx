import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SignatureScents from '@/components/SignatureScents';
import Heritage from '@/components/Heritage';
import Journal from '@/components/Journal';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SignatureScents />
        <Heritage />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
