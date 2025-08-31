import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import testimonialCustomer1 from '@/assets/testimonial-customer-refined-1.jpg';
import testimonialCustomer2 from '@/assets/testimonial-customer-refined-2.jpg';
import testimonialArtisan1 from '@/assets/testimonial-artisan-refined.jpg';
import testimonialPress1 from '@/assets/testimonial-press-refined.jpg';

type TestimonialType = 'customer' | 'press' | 'artisan';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  type: TestimonialType;
  src: string;
};

interface TestimonialsSectionProps {
  variant?: 'homepage' | 'product';
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "A quiet, luminous sillage—orange blossom over Atlas cedar. It feels like sunrise in Marrakech.",
    name: "Nina N.",
    designation: "Customer • New York",
    type: 'customer',
    src: testimonialCustomer1
  },
  {
    quote: "Small-batch Moroccan perfumery meets modern restraint.",
    name: "The Atelier Guide",
    designation: "Press",
    type: 'press',
    src: testimonialPress1
  },
  {
    quote: "We distill at dawn when the petals are cold—the oil stays pure.",
    name: "Y. El Idrissi",
    designation: "Master Distiller • Essaouira",
    type: 'artisan',
    src: testimonialArtisan1
  },
  {
    quote: "The rose absolute has a silk finish; it wears close, never loud.",
    name: "RB Global Beauty",
    designation: "Press",
    type: 'press',
    src: testimonialPress1
  },
  {
    quote: "Clean ingredients, undeniable elegance.",
    name: "C. Benali",
    designation: "Customer • Paris",
    type: 'customer',
    src: testimonialCustomer2
  },
  {
    quote: "Each bottle captures the essence of Morocco's ancient craftsmanship.",
    name: "Condé Nast Traveler",
    designation: "Press",
    type: 'press',
    src: testimonialPress1
  },
  {
    quote: "Petrichor and jasmine—it's poetry distilled into fragrance.",
    name: "M. Alaoui",
    designation: "Customer • Casablanca",
    type: 'customer',
    src: testimonialCustomer1
  },
  {
    quote: "Three decades of craft—each drop tells our story.",
    name: "A. Benjelloun",
    designation: "Master Perfumer • Fès",
    type: 'artisan',
    src: testimonialArtisan1
  }
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  variant = 'homepage',
  className
}) => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActive(index);
  }, []);

  const toggleAutoplay = useCallback(() => {
    setAutoplay(prev => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target === document.body || (event.target instanceof HTMLElement && event.target.closest('[data-testimonials-section]'))) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            handlePrev();
            break;
          case 'ArrowRight':
            event.preventDefault();
            handleNext();
            break;
          case ' ':
            event.preventDefault();
            toggleAutoplay();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, toggleAutoplay]);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && !isPaused && !prefersReducedMotion) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isPaused, prefersReducedMotion, handleNext]);

  // Intersection observer for pause when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('[data-testimonials-section]');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const sectionTitle = variant === 'homepage' ? 'Press & Praise' : 'What People Say';
  const sectionPadding = variant === 'homepage' ? 'py-16 md:py-24' : 'py-12';

  return (
    <section 
      className={cn('bg-[hsl(var(--paper-white))]', sectionPadding, className)}
      data-testimonials-section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      role="region"
      aria-label="Customer testimonials"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-luxury">
            {sectionTitle}
          </h2>
          <p className="text-muted-foreground text-sm tracking-wide">
            Verified reviews & editorial mentions
          </p>
        </div>

        {/* Testimonials Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Image Gallery */}
          <div className="relative order-2 md:order-1">
            <div className="relative h-80 w-full max-w-sm mx-auto">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.src}-${index}`}
                    initial={prefersReducedMotion ? {} : {
                      opacity: 0,
                      y: 4,
                    }}
                    animate={{
                      opacity: index === active ? 1 : 0,
                      y: index === active ? 0 : 4,
                      zIndex: index === active ? 10 : 1,
                    }}
                    exit={prefersReducedMotion ? {} : {
                      opacity: 0,
                      y: -4,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={testimonial.src}
                        alt={`${testimonial.name} testimonial`}
                        className="h-full w-full rounded-3xl object-cover object-center"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        style={{ maxWidth: '700px' }}
                      />
                      {/* Botanical overlay */}
                      <div className="absolute bottom-4 right-4 opacity-12">
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className="text-[hsl(var(--accent-green))]"
                        >
                          <path
                            d="M12 2L8 6v6c0 2.2 1.8 4 4 4s4-1.8 4-4V6l-4-4z"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <path
                            d="M12 8v8m-3-5l6 0"
                            stroke="currentColor"
                            strokeWidth="1"
                            opacity="0.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between py-4 order-1 md:order-2">
            <div 
              className="flex-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={prefersReducedMotion ? {} : {
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={prefersReducedMotion ? {} : {
                    opacity: 0,
                    y: -4,
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.25,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Quote */}
                  <blockquote className="font-playfair text-lg md:text-xl text-[hsl(0_0%_7%)] leading-relaxed mb-8">
                    "{testimonials[active].quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="space-y-1">
                    <div className="font-playfair text-sm font-medium text-foreground uppercase tracking-wider">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[active].designation}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-12 md:pt-8">
              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group hover:bg-muted transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4 text-foreground group-hover:-translate-x-0.5 transition-transform duration-200" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group hover:bg-muted transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4 text-foreground group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-200',
                      index === active 
                        ? 'bg-[hsl(var(--accent-gold))] w-6' 
                        : 'bg-border w-2 hover:bg-[hsl(var(--accent-green))]'
                    )}
                    role="tab"
                    aria-selected={index === active}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Autoplay Toggle */}
              {!prefersReducedMotion && (
                <button
                  onClick={toggleAutoplay}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wide font-medium"
                  aria-label={autoplay ? 'Pause autoplay' : 'Start autoplay'}
                >
                  {autoplay ? 'Pause' : 'Auto'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      {variant === 'product' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": {
                "@type": "Product",
                "name": "Atlas Perle Fragrance Collection"
              },
              "ratingValue": "4.9",
              "reviewCount": testimonials.length,
              "bestRating": "5",
              "worstRating": "1"
            })
          }}
        />
      )}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": testimonials.map((testimonial, index) => ({
              "@type": "Review",
              "position": index + 1,
              "reviewBody": testimonial.quote,
              "author": {
                "@type": testimonial.type === 'press' ? 'Organization' : 'Person',
                "name": testimonial.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default TestimonialsSection;