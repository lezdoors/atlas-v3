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
import { getImagesByCategory } from '@/lib/imageAssets';

const Index = () => {
  // Preload critical images on component mount
  useEffect(() => {
    const preloadCriticalImages = async () => {
      const productImages = getImagesByCategory('products');
      const backgroundImages = getImagesByCategory('backgrounds');
      
      // Critical images for above-the-fold content
      const criticalImages = [
        productImages.atlasRose?.src,
        backgroundImages.heroFragrance?.src,
        '/src/assets/hero-fragrance.jpg', // Fallback
        '/src/assets/product-sample.jpg'  // Fallback
      ].filter(Boolean) as string[];

      // Preload hero images with high priority
      ImagePreloader.preloadCritical(criticalImages);

      // Preload product images for immediate section with lower priority
      const productImageUrls = Object.values(productImages)
        .map(img => img.src)
        .slice(0, 6); // First 6 products only

      setTimeout(() => {
        ImagePreloader.preloadBatch(productImageUrls, 'low');
      }, 2000); // Delay to not interfere with critical loading
    };

    preloadCriticalImages();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <SectionDivider variant="botanical" />
        
        <SignatureScents />
        
        <SectionDivider variant="ornate" />
        
        <Heritage />
        
        <SectionDivider variant="botanical" />
        
        <HerbariumSection 
          title="The Language of Botanicals"
          subtitle="Our Herbarium"
          description="Each fragrance in our collection begins with a botanical story. From the lavender fields of Provence to the eucalyptus groves of Tasmania, we source the finest natural ingredients to create scents that transport you to their origins."
          botanicalType="lavender"
        />
        
        <SectionDivider variant="line" />
        
        <HerbariumSection 
          title="Artisanal Extraction Methods"
          subtitle="Traditional Techniques"
          description="Using time-honored distillation methods passed down through generations, we carefully extract the essence of each botanical. Our process preserves the delicate compounds that give each ingredient its unique olfactory signature."
          botanicalType="eucalyptus"
          reverse
        />
        
        <SectionDivider variant="ornate" />
        
        <Journal />
        
        <SectionDivider variant="botanical" />
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;