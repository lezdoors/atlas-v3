import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SignatureScents from '@/components/SignatureScents';
import Heritage from '@/components/Heritage';
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