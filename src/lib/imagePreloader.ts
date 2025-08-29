import React from 'react';

/**
 * Image preloading utilities for performance optimization
 */

export class ImagePreloader {
  private static preloadedImages = new Set<string>();
  
  /**
   * Preload a single image
   */
  static async preload(src: string, priority: 'high' | 'low' = 'low'): Promise<void> {
    if (this.preloadedImages.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      
      // Set fetchpriority for modern browsers
      if ('fetchPriority' in img) {
        (img as any).fetchPriority = priority;
      }
      
      img.onload = () => {
        this.preloadedImages.add(src);
        resolve();
      };
      
      img.onerror = reject;
      img.src = src;
    });
  }

  /**
   * Preload multiple images
   */
  static async preloadBatch(sources: string[], priority: 'high' | 'low' = 'low'): Promise<void[]> {
    const promises = sources.map(src => this.preload(src, priority));
    return Promise.all(promises);
  }

  /**
   * Preload critical images (hero, above-the-fold)
   */
  static preloadCritical(sources: string[]): void {
    sources.forEach(src => {
      if (!this.preloadedImages.has(src)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
        this.preloadedImages.add(src);
      }
    });
  }

  /**
   * Generate responsive image sources for preloading
   */
  static generateResponsiveSources(baseSrc: string): string[] {
    if (baseSrc.endsWith('.svg')) return [baseSrc];
    
    const baseUrl = baseSrc.replace(/\.[^.]+$/, '');
    const extension = baseSrc.split('.').pop() || 'jpg';
    
    return [
      `${baseUrl}.webp`,
      `${baseUrl}_2x.webp`,
      `${baseUrl}.${extension}`,
      `${baseUrl}_2x.${extension}`
    ];
  }
}

/**
 * Hook for preloading images on component mount
 */
export const useImagePreloader = (sources: string[], enabled = true) => {
  React.useEffect(() => {
    if (!enabled || sources.length === 0) return;

    const preloadImages = async () => {
      try {
        await ImagePreloader.preloadBatch(sources, 'low');
      } catch (error) {
        console.warn('Failed to preload some images:', error);
      }
    };

    // Delay preloading to not interfere with critical resources
    const timer = setTimeout(preloadImages, 1000);
    
    return () => clearTimeout(timer);
  }, [sources, enabled]);
};

export default ImagePreloader;