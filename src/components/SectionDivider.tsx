import React from 'react';
import { cn } from '@/lib/utils';
import HandDrawnElements from './HandDrawnElements';

interface SectionDividerProps {
  variant?: 'line' | 'botanical' | 'ornate';
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'botanical',
  className = ""
}) => {
  if (variant === 'line') {
    return (
      <div className={cn("section-divider", className)} />
    );
  }

  if (variant === 'ornate') {
    return (
      <div className={cn("botanical-divider", className)}>
        <div className="flex items-center w-full max-w-2xl mx-auto">
          {/* Left line */}
          <div className="flex-1 h-px bg-border-subtle" />
          
          {/* Central botanical element */}
          <div className="mx-8">
            <HandDrawnElements 
              type="corner-flourish" 
              size={60} 
              opacity={0.4}
              className="transform rotate-45"
            />
          </div>
          
          {/* Right line */}
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
      </div>
    );
  }

  // Default botanical variant
  return (
    <div className={cn("botanical-divider", className)}>
      <div className="flex justify-center">
        <HandDrawnElements 
          type="vine-border" 
          size={400} 
          opacity={0.3}
          className="max-w-full"
        />
      </div>
    </div>
  );
};

export default SectionDivider;