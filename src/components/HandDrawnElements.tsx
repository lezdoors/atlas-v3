import React from 'react';
import { cn } from '@/lib/utils';

interface HandDrawnElementProps {
  type: 'lavender' | 'eucalyptus' | 'rose' | 'citrus' | 'olive' | 'jasmine';
  size?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
  rotation?: number;
}

const HandDrawnElements: React.FC<HandDrawnElementProps> = ({
  type,
  size = 120,
  opacity = 0.3,
  className,
  animate = false,
  rotation = 0
}) => {
  const baseClasses = cn(
    'transition-all duration-700 ease-out',
    animate && 'hover:opacity-100 hover:scale-105',
    className
  );

  const svgStyle = {
    width: size,
    height: size,
    opacity,
    transform: `rotate(${rotation}deg)`,
  };

  const strokeColor = '#2C2C2C'; // Charcoal color

  const renderSVG = () => {
    switch (type) {
      case 'lavender':
        return (
          <svg
            viewBox="0 0 120 120"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main stem */}
            <path
              d="M60 110 Q62 85 60 60 Q58 35 60 10"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              className={animate ? "animate-draw-line" : ""}
            />
            
            {/* Lavender buds - left side */}
            <circle cx="52" cy="25" r="2.5" fill={strokeColor} opacity="0.6" />
            <circle cx="50" cy="30" r="2.8" fill={strokeColor} opacity="0.7" />
            <circle cx="51" cy="35" r="3" fill={strokeColor} opacity="0.8" />
            <circle cx="49" cy="40" r="2.5" fill={strokeColor} opacity="0.6" />
            
            {/* Lavender buds - right side */}
            <circle cx="68" cy="25" r="2.5" fill={strokeColor} opacity="0.6" />
            <circle cx="70" cy="30" r="2.8" fill={strokeColor} opacity="0.7" />
            <circle cx="69" cy="35" r="3" fill={strokeColor} opacity="0.8" />
            <circle cx="71" cy="40" r="2.5" fill={strokeColor} opacity="0.6" />
            
            {/* Small connecting stems */}
            <path d="M60 25 Q56 25 52 25" stroke={strokeColor} strokeWidth="1" />
            <path d="M60 30 Q55 30 50 30" stroke={strokeColor} strokeWidth="1" />
            <path d="M60 35 Q55.5 35 51 35" stroke={strokeColor} strokeWidth="1" />
            <path d="M60 40 Q54.5 40 49 40" stroke={strokeColor} strokeWidth="1" />
            <path d="M60 25 Q64 25 68 25" stroke={strokeColor} strokeWidth="1" />
            <path d="M60 30 Q65 30 70 30" stroke={strokeColor} strokeWidth="1" />
            <path d="M60 35 Q64.5 35 69 35" stroke={strokeColor} strokeWidth="1" />
            <path d="M60 40 Q65.5 40 71 40" stroke={strokeColor} strokeWidth="1" />
          </svg>
        );

      case 'eucalyptus':
        return (
          <svg
            viewBox="0 0 140 140"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main curved branch */}
            <path
              d="M20 120 Q40 100 60 80 Q80 60 100 40 Q110 30 120 20"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              className={animate ? "animate-draw-line" : ""}
            />
            
            {/* Eucalyptus leaves - varying sizes */}
            <ellipse cx="35" cy="105" rx="8" ry="4" fill={strokeColor} opacity="0.4" transform="rotate(-25 35 105)" />
            <ellipse cx="45" cy="95" rx="9" ry="4.5" fill={strokeColor} opacity="0.5" transform="rotate(-35 45 95)" />
            <ellipse cx="55" cy="85" rx="7" ry="3.5" fill={strokeColor} opacity="0.4" transform="rotate(-45 55 85)" />
            <ellipse cx="65" cy="75" rx="8.5" ry="4" fill={strokeColor} opacity="0.5" transform="rotate(-55 65 75)" />
            <ellipse cx="75" cy="65" rx="7.5" ry="3.8" fill={strokeColor} opacity="0.4" transform="rotate(-65 75 65)" />
            <ellipse cx="85" cy="55" rx="9" ry="4.2" fill={strokeColor} opacity="0.5" transform="rotate(-75 85 55)" />
            <ellipse cx="95" cy="45" rx="6.5" ry="3.2" fill={strokeColor} opacity="0.4" transform="rotate(-85 95 45)" />
            <ellipse cx="105" cy="35" rx="7" ry="3.5" fill={strokeColor} opacity="0.5" transform="rotate(-95 105 35)" />
          </svg>
        );

      case 'rose':
        return (
          <svg
            viewBox="0 0 100 100"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main stem */}
            <path
              d="M50 90 Q48 70 50 50 Q52 30 50 10"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Rose bloom */}
            <circle cx="50" cy="10" r="8" stroke={strokeColor} strokeWidth="1.2" />
            <circle cx="50" cy="10" r="5" stroke={strokeColor} strokeWidth="1" />
            <circle cx="50" cy="10" r="2.5" fill={strokeColor} opacity="0.4" />
            
            {/* Rose petals */}
            <path d="M50 10 Q45 5 40 8 Q45 12 50 10" stroke={strokeColor} strokeWidth="1" />
            <path d="M50 10 Q55 5 60 8 Q55 12 50 10" stroke={strokeColor} strokeWidth="1" />
            <path d="M50 10 Q50 5 53 2 Q47 6 50 10" stroke={strokeColor} strokeWidth="1" />
            
            {/* Leaves */}
            <path d="M50 30 Q40 32 35 40 Q40 38 50 35" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
            <path d="M50 30 Q60 32 65 40 Q60 38 50 35" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
            <path d="M50 55 Q42 57 38 65 Q42 63 50 60" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
            <path d="M50 55 Q58 57 62 65 Q58 63 50 60" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
            
            {/* Thorns */}
            <path d="M48 40 L45 42" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
            <path d="M52 65 L55 67" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
          </svg>
        );

      case 'citrus':
        return (
          <svg
            viewBox="0 0 110 110"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main branch */}
            <path
              d="M20 90 Q40 70 60 50 Q80 30 100 10"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Citrus leaves */}
            <path d="M30 80 Q25 75 20 70 Q25 65 30 70 Q35 75 30 80" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.3" />
            <path d="M45 65 Q40 60 35 55 Q40 50 45 55 Q50 60 45 65" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.3" />
            <path d="M65 45 Q60 40 55 35 Q60 30 65 35 Q70 40 65 45" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.3" />
            <path d="M85 25 Q80 20 75 15 Q80 10 85 15 Q90 20 85 25" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.3" />
            
            {/* Leaf veins */}
            <path d="M30 75 Q28 72 25 70" stroke={strokeColor} strokeWidth="0.8" />
            <path d="M45 60 Q43 57 40 55" stroke={strokeColor} strokeWidth="0.8" />
            <path d="M65 40 Q63 37 60 35" stroke={strokeColor} strokeWidth="0.8" />
            <path d="M85 20 Q83 17 80 15" stroke={strokeColor} strokeWidth="0.8" />
            
            {/* Small buds */}
            <circle cx="40" cy="75" r="1.5" fill={strokeColor} opacity="0.6" />
            <circle cx="60" cy="55" r="1.5" fill={strokeColor} opacity="0.6" />
            <circle cx="80" cy="35" r="1.5" fill={strokeColor} opacity="0.6" />
          </svg>
        );

      case 'olive':
        return (
          <svg
            viewBox="0 0 130 130"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main branch */}
            <path
              d="M20 110 Q35 90 50 70 Q65 50 80 30 Q95 20 110 10"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Olive leaves - elongated */}
            <ellipse cx="30" cy="100" rx="12" ry="3" fill={strokeColor} opacity="0.4" transform="rotate(-20 30 100)" />
            <ellipse cx="40" cy="85" rx="14" ry="3.5" fill={strokeColor} opacity="0.5" transform="rotate(-30 40 85)" />
            <ellipse cx="55" cy="70" rx="13" ry="3.2" fill={strokeColor} opacity="0.4" transform="rotate(-40 55 70)" />
            <ellipse cx="70" cy="55" rx="15" ry="3.8" fill={strokeColor} opacity="0.5" transform="rotate(-50 70 55)" />
            <ellipse cx="85" cy="40" rx="12" ry="3" fill={strokeColor} opacity="0.4" transform="rotate(-60 85 40)" />
            <ellipse cx="100" cy="25" rx="13" ry="3.5" fill={strokeColor} opacity="0.5" transform="rotate(-70 100 25)" />
            
            {/* Small olives */}
            <ellipse cx="35" cy="95" rx="2" ry="3" fill={strokeColor} opacity="0.6" transform="rotate(-20 35 95)" />
            <ellipse cx="60" cy="65" rx="2.5" ry="3.5" fill={strokeColor} opacity="0.7" transform="rotate(-40 60 65)" />
            <ellipse cx="90" cy="35" rx="2" ry="3" fill={strokeColor} opacity="0.6" transform="rotate(-60 90 35)" />
          </svg>
        );

      case 'jasmine':
        return (
          <svg
            viewBox="0 0 100 100"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main vine */}
            <path
              d="M10 90 Q30 70 50 60 Q70 50 90 30"
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            
            {/* Jasmine flowers - small star shapes */}
            <g>
              <path d="M25 80 L28 77 L31 80 L28 83 Z" stroke={strokeColor} strokeWidth="0.8" fill={strokeColor} fillOpacity="0.3" />
              <path d="M28 77 L31 74 L34 77 L31 80 Z" stroke={strokeColor} strokeWidth="0.8" fill={strokeColor} fillOpacity="0.3" />
              <circle cx="28" cy="80" r="1" fill={strokeColor} opacity="0.5" />
            </g>
            
            <g>
              <path d="M45 65 L48 62 L51 65 L48 68 Z" stroke={strokeColor} strokeWidth="0.8" fill={strokeColor} fillOpacity="0.3" />
              <path d="M48 62 L51 59 L54 62 L51 65 Z" stroke={strokeColor} strokeWidth="0.8" fill={strokeColor} fillOpacity="0.3" />
              <circle cx="48" cy="65" r="1" fill={strokeColor} opacity="0.5" />
            </g>
            
            <g>
              <path d="M70 45 L73 42 L76 45 L73 48 Z" stroke={strokeColor} strokeWidth="0.8" fill={strokeColor} fillOpacity="0.3" />
              <path d="M73 42 L76 39 L79 42 L76 45 Z" stroke={strokeColor} strokeWidth="0.8" fill={strokeColor} fillOpacity="0.3" />
              <circle cx="73" cy="45" r="1" fill={strokeColor} opacity="0.5" />
            </g>
            
            {/* Small leaves */}
            <ellipse cx="35" cy="75" rx="6" ry="2" fill={strokeColor} opacity="0.3" transform="rotate(-30 35 75)" />
            <ellipse cx="55" cy="58" rx="5" ry="1.8" fill={strokeColor} opacity="0.3" transform="rotate(-40 55 58)" />
            <ellipse cx="75" cy="40" rx="6" ry="2" fill={strokeColor} opacity="0.3" transform="rotate(-50 75 40)" />
          </svg>
        );

      default:
        return null;
    }
  };

  return renderSVG();
};

// Decorative divider component
interface BotanicalDividerProps {
  className?: string;
  width?: number;
}

export const BotanicalDivider: React.FC<BotanicalDividerProps> = ({ 
  className = "", 
  width = 200 
}) => (
  <svg 
    width={width} 
    height="40" 
    viewBox="0 0 200 40" 
    className={className}
    fill="none"
  >
    {/* Central element */}
    <circle cx="100" cy="20" r="3" stroke="#2C2C2C" strokeWidth="1" fill="#2C2C2C" fillOpacity="0.3" />
    
    {/* Flowing lines */}
    <path 
      d="M20 20 Q60 15 97 20" 
      stroke="#2C2C2C" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <path 
      d="M103 20 Q140 15 180 20" 
      stroke="#2C2C2C" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    
    {/* Small leaves */}
    <path d="M70 18 Q68 15 70 12 Q72 15 70 18" stroke="#2C2C2C" strokeWidth="0.8" fill="#2C2C2C" fillOpacity="0.2" />
    <path d="M130 18 Q132 15 130 12 Q128 15 130 18" stroke="#2C2C2C" strokeWidth="0.8" fill="#2C2C2C" fillOpacity="0.2" />
    
    {/* Delicate flourishes */}
    <path d="M90 22 Q95 25 100 22" stroke="#2C2C2C" strokeWidth="0.6" />
    <path d="M100 22 Q105 25 110 22" stroke="#2C2C2C" strokeWidth="0.6" />
  </svg>
);

export default HandDrawnElements;