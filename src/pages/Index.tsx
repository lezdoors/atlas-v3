import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SignatureScents from '@/components/SignatureScents';
import Heritage from '@/components/Heritage';
import HerbariumSection from '@/components/HerbariumSection';
import SectionDivider from '@/components/SectionDivider';
import Journal from '@/components/Journal';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { ImagePreloader } from '@/lib/imagePreloader';

const Index = () => {
  // Preload critical images on component mount
  useEffect(() => {
    const preloadCriticalImages = async () => {
      // Preload hero and above-fold images
      const criticalImages = [
        '/src/assets/hero-fragrance.jpg',
        '/src/assets/product-sample.jpg',
        '/src/assets/collection-hero.jpg'
      ];

      // Preload hero images with high priority
      ImagePreloader.preloadCritical(criticalImages);

      // Preload additional product images with lower priority
      const additionalImages = [
        '/src/assets/atlas-rose-hero.jpg',
        '/src/assets/neroli-sublime-hero.jpg',
        '/src/assets/argan-mystique-hero.jpg'
      ];

      setTimeout(() => {
        ImagePreloader.preloadBatch(additionalImages, 'low');
      }, 2000); // Delay to not interfere with critical loading
    };

    preloadCriticalImages();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <SectionDivider />
        <SignatureScents />
        <SectionDivider />
        <Heritage />
        <SectionDivider />
        <HerbariumSection 
          title="The Herbarium"
          description="A botanical journey through Morocco's sacred gardens"
          botanicalType="rose"
        />
        <SectionDivider />
        <Journal />
        <SectionDivider />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;