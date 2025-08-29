import React from 'react';
import { cn } from '@/lib/utils';
import HandDrawnElements from './HandDrawnElements';

interface BotanicalFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'minimal' | 'decorative' | 'ornate';
  showCorners?: boolean;
}

const BotanicalFrame: React.FC<BotanicalFrameProps> = ({
  children,
  className = "",
  variant = 'decorative',
  showCorners = true
}) => {
  const getFrameStyles = () => {
    switch (variant) {
      case 'minimal':
        return 'border border-border-subtle rounded-lg p-8';
      case 'decorative':
        return 'relative border border-border-subtle rounded-luxury p-12 bg-background-secondary/30';
      case 'ornate':
        return 'relative border-2 border-border-subtle rounded-luxury p-16 bg-background-secondary/50 shadow-luxury';
      default:
        return 'relative border border-border-subtle rounded-luxury p-12';
    }
  };

  return (
    <div className={cn(getFrameStyles(), className)}>
      {/* Corner flourishes */}
      {showCorners && variant !== 'minimal' && (
        <>
          {/* Top left corner */}
          <div className="absolute -top-2 -left-2">
            <HandDrawnElements 
              type="corner-flourish" 
              size={60} 
              opacity={0.4}
              animate
            />
          </div>
          
          {/* Top right corner */}
          <div className="absolute -top-2 -right-2 transform rotate-90">
            <HandDrawnElements 
              type="corner-flourish" 
              size={60} 
              opacity={0.4}
              animate
            />
          </div>
          
          {/* Bottom left corner */}
          <div className="absolute -bottom-2 -left-2 transform rotate-[-90deg]">
            <HandDrawnElements 
              type="corner-flourish" 
              size={60} 
              opacity={0.4}
              animate
            />
          </div>
          
          {/* Bottom right corner */}
          <div className="absolute -bottom-2 -right-2 transform rotate-180">
            <HandDrawnElements 
              type="corner-flourish" 
              size={60} 
              opacity={0.4}
              animate
            />
          </div>
        </>
      )}
      
      {/* Side botanical elements for ornate variant */}
      {variant === 'ornate' && (
        <>
          {/* Left side */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <HandDrawnElements 
              type="eucalyptus" 
              size={80} 
              opacity={0.3}
              rotation={90}
              animate
            />
          </div>
          
          {/* Right side */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
            <HandDrawnElements 
              type="olive" 
              size={80} 
              opacity={0.3}
              rotation={-90}
              animate
            />
          </div>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BotanicalFrame;