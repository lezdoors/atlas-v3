import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SignatureScents from '@/components/SignatureScents';
import TrustSection from '@/components/TrustSection';
import HeritageStory from '@/components/HeritageStory';
import AtlasJournal from '@/components/AtlasJournal';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <main>
        <Hero />
        <SignatureScents />
        <TrustSection />
        <HeritageStory />
        <AtlasJournal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
