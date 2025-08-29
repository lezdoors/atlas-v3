import React from 'react';
import { cn } from '@/lib/utils';

interface HandDrawnElementProps {
  type: 'lavender' | 'eucalyptus' | 'rose' | 'citrus' | 'olive' | 'jasmine' | 'botanical-frame' | 'corner-flourish' | 'vine-border' | 'herbarium-branch';
  size?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
  rotation?: number;
  variant?: 'delicate' | 'bold' | 'artistic';
}

const HandDrawnElements: React.FC<HandDrawnElementProps> = ({
  type,
  size = 120,
  opacity = 0.3,
  className,
  animate = false,
  rotation = 0,
  variant = 'delicate'
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

      case 'botanical-frame':
        return (
          <svg
            viewBox="0 0 300 400"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Frame border */}
            <rect x="20" y="20" width="260" height="360" stroke={strokeColor} strokeWidth="1.5" fill="none" rx="8" />
            
            {/* Corner botanical elements */}
            <g>
              {/* Top left corner */}
              <path d="M20 60 Q30 50 40 60 Q50 70 60 60 Q70 50 80 60" stroke={strokeColor} strokeWidth="1.2" />
              <path d="M20 80 Q35 75 50 80" stroke={strokeColor} strokeWidth="1" />
              <circle cx="45" cy="65" r="2" fill={strokeColor} opacity="0.4" />
              <ellipse cx="35" cy="75" rx="8" ry="3" fill={strokeColor} opacity="0.3" transform="rotate(-20 35 75)" />
              
              {/* Top right corner */}
              <path d="M280 60 Q270 50 260 60 Q250 70 240 60 Q230 50 220 60" stroke={strokeColor} strokeWidth="1.2" />
              <path d="M280 80 Q265 75 250 80" stroke={strokeColor} strokeWidth="1" />
              <circle cx="255" cy="65" r="2" fill={strokeColor} opacity="0.4" />
              <ellipse cx="265" cy="75" rx="8" ry="3" fill={strokeColor} opacity="0.3" transform="rotate(20 265 75)" />
              
              {/* Bottom left corner */}
              <path d="M20 340 Q30 350 40 340 Q50 330 60 340 Q70 350 80 340" stroke={strokeColor} strokeWidth="1.2" />
              <path d="M20 320 Q35 325 50 320" stroke={strokeColor} strokeWidth="1" />
              <circle cx="45" cy="335" r="2" fill={strokeColor} opacity="0.4" />
              <ellipse cx="35" cy="325" rx="8" ry="3" fill={strokeColor} opacity="0.3" transform="rotate(20 35 325)" />
              
              {/* Bottom right corner */}
              <path d="M280 340 Q270 350 260 340 Q250 330 240 340 Q230 350 220 340" stroke={strokeColor} strokeWidth="1.2" />
              <path d="M280 320 Q265 325 250 320" stroke={strokeColor} strokeWidth="1" />
              <circle cx="255" cy="335" r="2" fill={strokeColor} opacity="0.4" />
              <ellipse cx="265" cy="325" rx="8" ry="3" fill={strokeColor} opacity="0.3" transform="rotate(-20 265 325)" />
            </g>
            
            {/* Side botanical elements */}
            <g>
              {/* Left side */}
              <path d="M10 150 Q20 145 30 150 Q20 155 10 150" stroke={strokeColor} strokeWidth="1" fill={strokeColor} fillOpacity="0.2" />
              <path d="M10 200 Q20 195 30 200 Q20 205 10 200" stroke={strokeColor} strokeWidth="1" fill={strokeColor} fillOpacity="0.2" />
              <path d="M10 250 Q20 245 30 250 Q20 255 10 250" stroke={strokeColor} strokeWidth="1" fill={strokeColor} fillOpacity="0.2" />
              
              {/* Right side */}
              <path d="M290 150 Q280 145 270 150 Q280 155 290 150" stroke={strokeColor} strokeWidth="1" fill={strokeColor} fillOpacity="0.2" />
              <path d="M290 200 Q280 195 270 200 Q280 205 290 200" stroke={strokeColor} strokeWidth="1" fill={strokeColor} fillOpacity="0.2" />
              <path d="M290 250 Q280 245 270 250 Q280 255 290 250" stroke={strokeColor} strokeWidth="1" fill={strokeColor} fillOpacity="0.2" />
            </g>
          </svg>
        );

      case 'corner-flourish':
        return (
          <svg
            viewBox="0 0 80 80"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main flourish curves */}
            <path d="M10 70 Q20 60 30 50 Q40 40 50 30 Q60 20 70 10" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 60 Q25 50 40 40" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 70 Q35 60 50 50" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Decorative leaves */}
            <ellipse cx="25" cy="55" rx="6" ry="2.5" fill={strokeColor} opacity="0.3" transform="rotate(-45 25 55)" />
            <ellipse cx="40" cy="40" rx="7" ry="3" fill={strokeColor} opacity="0.4" transform="rotate(-45 40 40)" />
            <ellipse cx="55" cy="25" rx="5" ry="2" fill={strokeColor} opacity="0.3" transform="rotate(-45 55 25)" />
            
            {/* Small buds */}
            <circle cx="30" cy="50" r="1.5" fill={strokeColor} opacity="0.6" />
            <circle cx="45" cy="35" r="1.5" fill={strokeColor} opacity="0.6" />
            <circle cx="60" cy="20" r="1.5" fill={strokeColor} opacity="0.6" />
            
            {/* Delicate tendrils */}
            <path d="M35 45 Q40 42 45 45" stroke={strokeColor} strokeWidth="0.8" />
            <path d="M50 30 Q55 27 60 30" stroke={strokeColor} strokeWidth="0.8" />
          </svg>
        );

      case 'vine-border':
        return (
          <svg
            viewBox="0 0 400 60"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main vine */}
            <path d="M20 30 Q80 20 140 30 Q200 40 260 30 Q320 20 380 30" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Leaves along the vine */}
            <ellipse cx="60" cy="25" rx="8" ry="3" fill={strokeColor} opacity="0.4" transform="rotate(-15 60 25)" />
            <ellipse cx="120" cy="35" rx="9" ry="3.5" fill={strokeColor} opacity="0.4" transform="rotate(15 120 35)" />
            <ellipse cx="180" cy="25" rx="7" ry="3" fill={strokeColor} opacity="0.4" transform="rotate(-10 180 25)" />
            <ellipse cx="240" cy="35" rx="8" ry="3.5" fill={strokeColor} opacity="0.4" transform="rotate(20 240 35)" />
            <ellipse cx="300" cy="25" rx="7.5" ry="3" fill={strokeColor} opacity="0.4" transform="rotate(-12 300 25)" />
            <ellipse cx="340" cy="35" rx="6" ry="2.5" fill={strokeColor} opacity="0.4" transform="rotate(18 340 35)" />
            
            {/* Small flowers */}
            <g>
              <circle cx="90" cy="30" r="2" stroke={strokeColor} strokeWidth="1" fill="none" />
              <circle cx="90" cy="30" r="1" fill={strokeColor} opacity="0.5" />
            </g>
            <g>
              <circle cx="210" cy="30" r="2" stroke={strokeColor} strokeWidth="1" fill="none" />
              <circle cx="210" cy="30" r="1" fill={strokeColor} opacity="0.5" />
            </g>
            <g>
              <circle cx="270" cy="30" r="2" stroke={strokeColor} strokeWidth="1" fill="none" />
              <circle cx="270" cy="30" r="1" fill={strokeColor} opacity="0.5" />
            </g>
            
            {/* Tendrils */}
            <path d="M100 28 Q105 25 110 28" stroke={strokeColor} strokeWidth="0.8" />
            <path d="M160 32 Q165 35 170 32" stroke={strokeColor} strokeWidth="0.8" />
            <path d="M220 28 Q225 25 230 28" stroke={strokeColor} strokeWidth="0.8" />
          </svg>
        );

      case 'herbarium-branch':
        return (
          <svg
            viewBox="0 0 200 300"
            className={baseClasses}
            style={svgStyle}
            fill="none"
          >
            {/* Main botanical specimen branch */}
            <path d="M100 280 Q95 250 100 220 Q105 190 100 160 Q95 130 100 100 Q105 70 100 40 Q95 20 100 10" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            
            {/* Secondary branches */}
            <path d="M100 200 Q120 190 140 200" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 180 Q80 170 60 180" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 140 Q125 130 150 140" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 120 Q75 110 50 120" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 80 Q115 70 130 80" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 60 Q85 50 70 60" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Detailed leaves with scientific accuracy */}
            <g>
              {/* Right side leaves */}
              <path d="M140 200 Q150 195 160 200 Q155 210 145 205 Q140 200 140 200" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
              <path d="M145 197 L155 202" stroke={strokeColor} strokeWidth="0.6" />
              <path d="M145 202 L155 197" stroke={strokeColor} strokeWidth="0.6" />
              
              <path d="M150 140 Q165 135 180 140 Q175 155 160 150 Q150 140 150 140" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
              <path d="M155 137 L170 145" stroke={strokeColor} strokeWidth="0.6" />
              <path d="M155 145 L170 137" stroke={strokeColor} strokeWidth="0.6" />
              
              <path d="M130 80 Q140 75 150 80 Q145 90 135 85 Q130 80 130 80" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
              <path d="M135 77 L145 82" stroke={strokeColor} strokeWidth="0.6" />
              <path d="M135 82 L145 77" stroke={strokeColor} strokeWidth="0.6" />
            </g>
            
            <g>
              {/* Left side leaves */}
              <path d="M60 180 Q50 175 40 180 Q45 190 55 185 Q60 180 60 180" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
              <path d="M55 177 L45 182" stroke={strokeColor} strokeWidth="0.6" />
              <path d="M55 182 L45 177" stroke={strokeColor} strokeWidth="0.6" />
              
              <path d="M50 120 Q35 115 20 120 Q25 135 40 130 Q50 120 50 120" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
              <path d="M45 117 L30 125" stroke={strokeColor} strokeWidth="0.6" />
              <path d="M45 125 L30 117" stroke={strokeColor} strokeWidth="0.6" />
              
              <path d="M70 60 Q60 55 50 60 Q55 70 65 65 Q70 60 70 60" stroke={strokeColor} strokeWidth="1.2" fill={strokeColor} fillOpacity="0.2" />
              <path d="M65 57 L55 62" stroke={strokeColor} strokeWidth="0.6" />
              <path d="M65 62 L55 57" stroke={strokeColor} strokeWidth="0.6" />
            </g>
            
            {/* Botanical details - seeds/berries */}
            <circle cx="125" cy="160" r="2.5" fill={strokeColor} opacity="0.6" />
            <circle cx="135" cy="165" r="2" fill={strokeColor} opacity="0.5" />
            <circle cx="75" cy="140" r="2.5" fill={strokeColor} opacity="0.6" />
            <circle cx="65" cy="135" r="2" fill={strokeColor} opacity="0.5" />
            
            {/* Root system */}
            <path d="M100 280 Q90 290 80 300" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
            <path d="M100 280 Q110 290 120 300" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
            <path d="M100 280 Q100 290 100 300" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
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