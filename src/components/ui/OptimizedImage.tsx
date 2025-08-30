import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'square' | '4/3' | '3/4' | '16/9' | 'auto';
  priority?: boolean;
  fallbackSrc?: string;
  placeholder?: 'blur' | 'shimmer' | 'skeleton' | 'none';
  sizes?: string;
  quality?: number;
  className?: string;
  preloadOnHover?: boolean;
  enableWebP?: boolean;
}

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({
    src,
    alt,
    aspectRatio = 'auto',
    priority = false,
    fallbackSrc = '/src/assets/atlas-rose-product.jpg',
    placeholder = 'skeleton',
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality = 85,
    className,
    preloadOnHover = false,
    enableWebP = true,
    ...props
  }, ref) => {
    const [isLoading, setIsLoading] = useState(!priority);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const [isHovered, setIsHovered] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const preloadLinkRef = useRef<HTMLLinkElement | null>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
      if (!priority && imgRef.current) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observerRef.current?.disconnect();
            }
          },
          {
            threshold: 0.1,
            rootMargin: '100px', // Increased for better UX
          }
        );

        observerRef.current.observe(imgRef.current);
      }

      return () => observerRef.current?.disconnect();
    }, [priority]);

    // Preload on hover functionality
    useEffect(() => {
      if (preloadOnHover && isHovered && !isInView) {
        if (!preloadLinkRef.current) {
          preloadLinkRef.current = document.createElement('link');
          preloadLinkRef.current.rel = 'preload';
          preloadLinkRef.current.as = 'image';
          preloadLinkRef.current.href = imageSrc;
          document.head.appendChild(preloadLinkRef.current);
        }
      }

      return () => {
        if (preloadLinkRef.current) {
          document.head.removeChild(preloadLinkRef.current);
          preloadLinkRef.current = null;
        }
      };
    }, [isHovered, isInView, preloadOnHover]);

    // Generate responsive srcSet for different screen densities and formats
    const generateSrcSet = (baseSrc: string): string => {
      if (baseSrc.endsWith('.svg')) return '';
      
      const densities = [1, 2];
      const baseUrl = baseSrc.replace(/\.[^.]+$/, '');
      const extension = baseSrc.split('.').pop() || 'jpg';
      
      const srcSetEntries = densities.map(density => 
        `${baseUrl}${density > 1 ? `_${density}x` : ''}.${extension} ${density}x`
      );

      // Add WebP support if enabled
      if (enableWebP && extension !== 'svg') {
        const webpEntries = densities.map(density => 
          `${baseUrl}${density > 1 ? `_${density}x` : ''}.webp ${density}x`
        );
        return [...webpEntries, ...srcSetEntries].join(', ');
      }
      
      return srcSetEntries.join(', ');
    };

    // Aspect ratio classes
    const aspectRatioClasses = {
      square: 'aspect-square',
      '4/3': 'aspect-[4/3]',
      '3/4': 'aspect-[3/4]',
      '16/9': 'aspect-video',
      auto: ''
    };

    // Skeleton placeholder component
    const SkeletonPlaceholder = () => (
      <div className="absolute inset-0 bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent animate-[shimmer_2s_infinite] transform -skew-x-12" />
        {/* Product bottle silhouette for product images */}
        {src.includes('product') && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-24 bg-muted/30 rounded-t-full animate-pulse" />
          </div>
        )}
      </div>
    );

    // Blur placeholder component
    const BlurPlaceholder = () => (
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 backdrop-blur-sm" />
    );

    // Shimmer placeholder component
    const ShimmerPlaceholder = () => (
      <div className="absolute inset-0 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent animate-[shimmer_2s_infinite] transform -skew-x-12" />
      </div>
    );

    // Placeholder content based on type
    const PlaceholderContent = () => {
      if (placeholder === 'none') return null;

      switch (placeholder) {
        case 'blur': return <BlurPlaceholder />;
        case 'shimmer': return <ShimmerPlaceholder />;
        case 'skeleton': return <SkeletonPlaceholder />;
        default: return <SkeletonPlaceholder />;
      }
    };

    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const imageSrc = hasError ? fallbackSrc : src;
    const showImage = isInView || priority;

    return (
      <div
        ref={imgRef}
        className={cn(
          'relative overflow-hidden bg-muted/10 transition-all duration-500',
          aspectRatioClasses[aspectRatio],
          'rounded-none shadow-[0_2px_12px_rgba(44,44,44,0.06)]',
          'hover:shadow-[0_6px_30px_rgba(44,44,44,0.12)]',
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Loading placeholder */}
        {(isLoading || !showImage) && <PlaceholderContent />}

        {/* Main image */}
        {showImage && (
          <picture>
            {/* WebP source for modern browsers */}
            {enableWebP && !src.endsWith('.svg') && (
              <source
                srcSet={generateSrcSet(src.replace(/\.[^.]+$/, '.webp'))}
                type="image/webp"
                sizes={sizes}
              />
            )}
            
            {/* Fallback JPEG/PNG source */}
            <img
              ref={ref}
              src={imageSrc}
              alt={alt}
              srcSet={generateSrcSet(imageSrc)}
              sizes={sizes}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : 'auto'}
              onLoad={handleLoad}
              onError={handleError}
              className={cn(
                'w-full h-full object-cover transition-all duration-700',
                isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100',
                hasError && 'grayscale filter contrast-75'
              )}
              {...props}
            />
          </picture>
        )}

        {/* Error state overlay */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/40">
            <div className="text-center p-4">
              <svg
                className="w-8 h-8 text-muted-foreground mx-auto mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary/30">
                  <path d="M20 50 Q30 30, 50 50 Q70 30, 80 50 Q70 70, 50 50 Q30 70, 20 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="50" cy="50" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Loading indicator for priority images */}
        {priority && isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-accent rounded-full animate-spin" />
          </div>
        )}

        {/* Performance indicator for dev mode */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-1 right-1 opacity-50">
            <div className={cn(
              "w-2 h-2 rounded-full",
              priority ? "bg-green-400" : "bg-blue-400",
              hasError && "bg-red-400"
            )} title={priority ? "Priority" : hasError ? "Error" : "Lazy"} />
          </div>
        )}
      </div>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;