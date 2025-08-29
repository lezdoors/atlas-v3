import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { cn } from '@/lib/utils';

export interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  aspectRatio?: 'square' | '4/3' | '3/4' | '16/9' | 'auto';
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  showLightbox?: boolean;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  aspectRatio = '4/3',
  columns = 3,
  gap = 'md',
  showLightbox = true,
  className
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  const openLightbox = (index: number) => {
    if (showLightbox) {
      setLightboxIndex(index);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    
    if (direction === 'prev') {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : images.length - 1);
    } else {
      setLightboxIndex(lightboxIndex < images.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (lightboxIndex === null) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateLightbox('prev');
        break;
      case 'ArrowRight':
        navigateLightbox('next');
        break;
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={cn(
          'grid',
          columnClasses[columns],
          gapClasses[gap],
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'group cursor-pointer transition-transform duration-300',
              showLightbox && 'hover:scale-[1.02]'
            )}
            onClick={() => openLightbox(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              aspectRatio={aspectRatio}
              className="transition-all duration-300 group-hover:shadow-[0_8px_40px_rgba(44,44,44,0.12)]"
            />
            {image.caption && (
              <p className="mt-3 text-sm font-inter text-muted-foreground leading-relaxed">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-primary-foreground hover:text-accent transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-primary-foreground hover:text-accent transition-colors duration-300"
              >
                <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-primary-foreground hover:text-accent transition-colors duration-300"
              >
                <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
              </button>
            </>
          )}

          {/* Main Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Caption */}
            {images[lightboxIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-primary-foreground p-4">
                <p className="text-center font-inter text-sm leading-relaxed">
                  {images[lightboxIndex].caption}
                </p>
              </div>
            )}
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary/60 text-primary-foreground px-4 py-2 rounded-full">
              <span className="font-inter text-sm">
                {lightboxIndex + 1} / {images.length}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;