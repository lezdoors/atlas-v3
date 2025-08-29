import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

// CUSTOM HAND-DRAWN SVG ICONS - ORGANIC & IMPERFECT
export const HandDrawnTruck: React.FC<IconProps> = ({ 
  className = "", 
  size = 24, 
  strokeWidth = 1.5 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M3.2 16.8c0 0.5 0.5 1 1 1h1.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5h6c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5h1.5c0.5 0 1-0.4 1-1v-3.6c0-0.3-0.1-0.6-0.3-0.8l-2.1-2.1c-0.2-0.2-0.5-0.3-0.8-0.3H16v-2.8c0-0.6-0.4-1-1-1H4.2c-0.6 0-1 0.4-1 1v8.1z" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{
        strokeDasharray: "200",
        strokeDashoffset: "200",
        animation: "draw-line 2s ease-out forwards"
      }}
    />
    <circle 
      cx="8" 
      cy="18" 
      r="1.5" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      fill="none"
    />
    <circle 
      cx="19" 
      cy="18" 
      r="1.5" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      fill="none"
    />
    <path 
      d="M16 8.2h2.5l1.8 1.8v3.2" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
  </svg>
);

export const HandDrawnBottle: React.FC<IconProps> = ({ 
  className = "", 
  size = 24, 
  strokeWidth = 1.5 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M9.1 6.2V4.8c0-0.8 0.6-1.4 1.4-1.4h2.9c0.8 0 1.4 0.6 1.4 1.4v1.4" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    <path 
      d="M8.8 6.8c-0.2 0.3-0.3 0.7-0.3 1.1v11.3c0 1.2 1 2.2 2.2 2.2h2.7c1.2 0 2.2-1 2.2-2.2V7.9c0-0.4-0.1-0.8-0.3-1.1l-0.9-1.2c-0.2-0.3-0.6-0.5-1-0.5h-3.8c-0.4 0-0.8 0.2-1 0.5L8.8 6.8z" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{
        strokeDasharray: "250",
        strokeDashoffset: "250",
        animation: "draw-line 2.5s ease-out forwards"
      }}
    />
    <ellipse 
      cx="12" 
      cy="15" 
      rx="2.1" 
      ry="3.2" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8}
      fill="currentColor" 
      fillOpacity="0.1"
    />
  </svg>
);

export const HandDrawnGift: React.FC<IconProps> = ({ 
  className = "", 
  size = 24, 
  strokeWidth = 1.5 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect 
      x="3.8" 
      y="9.2" 
      width="16.4" 
      height="10.6" 
      rx="1.2" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    <path 
      d="M12 9.2v10.6" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    <rect 
      x="4.6" 
      y="6.8" 
      width="14.8" 
      height="2.4" 
      rx="0.6" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
    />
    <path 
      d="M8.4 6.8c0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
      fill="none"
    />
    <path 
      d="M15.6 6.8c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const HandDrawnLeaf: React.FC<IconProps> = ({ 
  className = "", 
  size = 24, 
  strokeWidth = 1.5 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12.2 21.8c-0.8-1.2-1.4-2.6-1.8-4.1-0.6-2.3-0.5-4.8 0.3-7.1 0.8-2.3 2.2-4.4 4.1-6.1 1.9-1.7 4.2-2.9 6.8-3.5-0.6 2.6-1.8 4.9-3.5 6.8-1.7 1.9-3.8 3.3-6.1 4.1-2.3 0.8-4.8 0.9-7.1 0.3-1.5-0.4-2.9-1-4.1-1.8" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.05"
      style={{
        strokeDasharray: "300",
        strokeDashoffset: "300",
        animation: "draw-line 3s ease-out forwards"
      }}
    />
    <path 
      d="M12.2 21.8c1.8-2.1 3.2-4.6 4.1-7.3" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      strokeLinecap="round"
    />
    <path 
      d="M12.2 21.8c2.4-1.5 4.5-3.5 6.1-5.9" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.6} 
      strokeLinecap="round"
    />
  </svg>
);

export const HandDrawnHands: React.FC<IconProps> = ({ 
  className = "", 
  size = 24, 
  strokeWidth = 1.5 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M6.2 14.8c-0.8 0.5-1.4 1.4-1.6 2.4-0.2 1.1 0.1 2.2 0.8 3.1 0.7 0.9 1.7 1.5 2.9 1.7 1.1 0.2 2.3-0.1 3.2-0.8l3.8-3.2" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M17.8 9.2c0.8-0.5 1.4-1.4 1.6-2.4 0.2-1.1-0.1-2.2-0.8-3.1-0.7-0.9-1.7-1.5-2.9-1.7-1.1-0.2-2.3 0.1-3.2 0.8l-3.8 3.2" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <ellipse 
      cx="12" 
      cy="12" 
      rx="2.8" 
      ry="1.4" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      fill="currentColor"
      fillOpacity="0.1"
    />
  </svg>
);

export const HandDrawnOliveBranch: React.FC<IconProps> = ({ 
  className = "", 
  size = 48, 
  strokeWidth = 1.2 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    className={className}
  >
    <path 
      d="M8.2 39.8c2.1-2.4 4.8-4.2 7.8-5.3 3-1.1 6.2-1.4 9.4-0.9 3.2 0.5 6.3 1.8 8.9 3.8 2.6 2 4.6 4.6 5.8 7.6" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{
        strokeDasharray: "400",
        strokeDashoffset: "400",
        animation: "draw-line 4s ease-out forwards"
      }}
    />
    {/* Organic olive leaves */}
    <ellipse cx="14" cy="32" rx="2.5" ry="1.2" transform="rotate(-25 14 32)" fill="currentColor" fillOpacity="0.3" />
    <ellipse cx="20" cy="28" rx="2.8" ry="1.5" transform="rotate(-30 20 28)" fill="currentColor" fillOpacity="0.3" />
    <ellipse cx="26" cy="25" rx="2.2" ry="1.1" transform="rotate(-35 26 25)" fill="currentColor" fillOpacity="0.3" />
    <ellipse cx="32" cy="23" rx="2.6" ry="1.3" transform="rotate(-40 32 23)" fill="currentColor" fillOpacity="0.3" />
    <ellipse cx="38" cy="22" rx="2.4" ry="1.2" transform="rotate(-45 38 22)" fill="currentColor" fillOpacity="0.3" />
    
    {/* Left side leaves */}
    <ellipse cx="12" cy="35" rx="2.1" ry="1" transform="rotate(-15 12 35)" fill="currentColor" fillOpacity="0.25" />
    <ellipse cx="18" cy="31" rx="2.3" ry="1.1" transform="rotate(-20 18 31)" fill="currentColor" fillOpacity="0.25" />
    <ellipse cx="24" cy="28" rx="2" ry="0.9" transform="rotate(-25 24 28)" fill="currentColor" fillOpacity="0.25" />
    <ellipse cx="30" cy="26" rx="2.2" ry="1" transform="rotate(-30 30 26)" fill="currentColor" fillOpacity="0.25" />
    <ellipse cx="36" cy="25" rx="2.1" ry="1" transform="rotate(-35 36 25)" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

export const HandDrawnMountain: React.FC<IconProps> = ({ 
  className = "", 
  size = 120, 
  strokeWidth = 1 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 120 60" 
    fill="none" 
    className={className}
  >
    <path 
      d="M2 58c8-12 18-22 30-28 12-6 25-8 38-6 13 2 25 8 35 16 10 8 17 18 22 30" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
      style={{
        strokeDasharray: "500",
        strokeDashoffset: "500",
        animation: "draw-line 5s ease-out forwards"
      }}
    />
    <path 
      d="M15 58c6-8 14-15 23-20 9-5 19-7 29-6 10 1 19 5 27 11 8 6 14 14 18 23" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
      opacity="0.7"
    />
    <path 
      d="M30 58c4-5 9-9 15-12 6-3 13-4 20-3 7 1 13 4 18 8 5 4 9 9 12 15" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.6} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
      opacity="0.5"
    />
  </svg>
);

export const HandDrawnArrow: React.FC<IconProps> = ({ 
  className = "", 
  size = 24, 
  strokeWidth = 1.5 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M7.2 17.8c1.6-1.8 3.8-3.1 6.2-3.8 2.4-0.7 5-0.8 7.5-0.2" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{
        strokeDasharray: "100",
        strokeDashoffset: "100",
        animation: "draw-line 1.5s ease-out forwards"
      }}
    />
    <path 
      d="M17.8 11.2l2.4 2.6-2.6 2.4" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Decorative divider component
export const HandDrawnDivider: React.FC<{ 
  className?: string; 
  width?: number; 
  height?: number 
}> = ({ 
  className = "", 
  width = 200, 
  height = 24 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox={`0 0 ${width} ${height}`} 
    fill="none" 
    className={className}
  >
    <path 
      d={`M10 ${height/2}c${width*0.1} -4 ${width*0.3} 4 ${width*0.4} 0s${width*0.2} -4 ${width*0.4} 0`}
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
      style={{
        strokeDasharray: "300",
        strokeDashoffset: "300",
        animation: "draw-line 3s ease-out forwards"
      }}
    />
    <circle 
      cx={width/2} 
      cy={height/2} 
      r="2" 
      fill="currentColor" 
      fillOpacity="0.6"
    />
  </svg>
);