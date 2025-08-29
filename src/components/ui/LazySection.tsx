import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'scale' | 'none';
  delay?: number;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className,
  animation = 'fade',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, delay, hasAnimated]);

  const animationClasses = {
    fade: isVisible ? 'opacity-100' : 'opacity-0',
    'slide-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'slide-down': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
    scale: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    none: ''
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-out',
        animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
};

export default LazySection;