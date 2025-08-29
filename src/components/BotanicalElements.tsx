import React from 'react';

interface BotanicalProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

// Lavender Sprig - Delicate and elegant
export const LavenderSprig: React.FC<BotanicalProps> = ({ 
  className = "", 
  size = 120, 
  strokeWidth = 1.2 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 120 120" 
    className={className}
    fill="none"
  >
    {/* Main stem */}
    <path 
      d="M60 110 Q62 85 60 60 Q58 35 60 10" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    
    {/* Lavender buds - left side */}
    <circle cx="52" cy="25" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="50" cy="30" r="2.8" fill="currentColor" opacity="0.7" />
    <circle cx="51" cy="35" r="3" fill="currentColor" opacity="0.8" />
    <circle cx="49" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
    
    {/* Lavender buds - right side */}
    <circle cx="68" cy="25" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="70" cy="30" r="2.8" fill="currentColor" opacity="0.7" />
    <circle cx="69" cy="35" r="3" fill="currentColor" opacity="0.8" />
    <circle cx="71" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
    
    {/* Small connecting stems */}
    <path d="M60 25 Q56 25 52 25" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M60 30 Q55 30 50 30" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M60 35 Q55.5 35 51 35" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M60 40 Q54.5 40 49 40" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    
    <path d="M60 25 Q64 25 68 25" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M60 30 Q65 30 70 30" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M60 35 Q64.5 35 69 35" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M60 40 Q65.5 40 71 40" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    
    {/* Lower leaves */}
    <path 
      d="M60 70 Q45 75 50 85 Q55 75 60 70" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="none"
    />
    <path 
      d="M60 70 Q75 75 70 85 Q65 75 60 70" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="none"
    />
  </svg>
);

// Eucalyptus Branch - Flowing and organic
export const EucalyptusBranch: React.FC<BotanicalProps> = ({ 
  className = "", 
  size = 140, 
  strokeWidth = 1.1 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 140 140" 
    className={className}
    fill="none"
  >
    {/* Main curved branch */}
    <path 
      d="M20 120 Q40 100 60 80 Q80 60 100 40 Q110 30 120 20" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    
    {/* Eucalyptus leaves - varying sizes and angles */}
    <ellipse cx="35" cy="105" rx="8" ry="4" fill="currentColor" opacity="0.4" transform="rotate(-25 35 105)" />
    <ellipse cx="45" cy="95" rx="9" ry="4.5" fill="currentColor" opacity="0.5" transform="rotate(-35 45 95)" />
    <ellipse cx="55" cy="85" rx="7" ry="3.5" fill="currentColor" opacity="0.4" transform="rotate(-45 55 85)" />
    <ellipse cx="65" cy="75" rx="8.5" ry="4" fill="currentColor" opacity="0.5" transform="rotate(-55 65 75)" />
    <ellipse cx="75" cy="65" rx="7.5" ry="3.8" fill="currentColor" opacity="0.4" transform="rotate(-65 75 65)" />
    <ellipse cx="85" cy="55" rx="9" ry="4.2" fill="currentColor" opacity="0.5" transform="rotate(-75 85 55)" />
    <ellipse cx="95" cy="45" rx="6.5" ry="3.2" fill="currentColor" opacity="0.4" transform="rotate(-85 95 45)" />
    <ellipse cx="105" cy="35" rx="7" ry="3.5" fill="currentColor" opacity="0.5" transform="rotate(-95 105 35)" />
    
    {/* Secondary smaller leaves */}
    <ellipse cx="50" cy="100" rx="5" ry="2.5" fill="currentColor" opacity="0.3" transform="rotate(-20 50 100)" />
    <ellipse cx="70" cy="80" rx="5.5" ry="2.8" fill="currentColor" opacity="0.3" transform="rotate(-50 70 80)" />
    <ellipse cx="90" cy="60" rx="4.5" ry="2.2" fill="currentColor" opacity="0.3" transform="rotate(-80 90 60)" />
  </svg>
);

// Rose Stem - Elegant and romantic
export const RoseStem: React.FC<BotanicalProps> = ({ 
  className = "", 
  size = 100, 
  strokeWidth = 1.3 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    {/* Main stem */}
    <path 
      d="M50 90 Q48 70 50 50 Q52 30 50 10" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    
    {/* Rose bloom at top */}
    <circle cx="50" cy="10" r="8" stroke="currentColor" strokeWidth={strokeWidth * 0.8} fill="none" />
    <circle cx="50" cy="10" r="5" stroke="currentColor" strokeWidth={strokeWidth * 0.6} fill="none" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" opacity="0.4" />
    
    {/* Rose petals */}
    <path d="M50 10 Q45 5 40 8 Q45 12 50 10" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M50 10 Q55 5 60 8 Q55 12 50 10" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    <path d="M50 10 Q50 5 53 2 Q47 6 50 10" stroke="currentColor" strokeWidth={strokeWidth * 0.7} />
    
    {/* Leaves along stem */}
    <path 
      d="M50 30 Q40 32 35 40 Q40 38 50 35" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    <path 
      d="M50 30 Q60 32 65 40 Q60 38 50 35" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    
    <path 
      d="M50 55 Q42 57 38 65 Q42 63 50 60" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    <path 
      d="M50 55 Q58 57 62 65 Q58 63 50 60" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    
    {/* Thorns */}
    <path d="M48 40 L45 42" stroke="currentColor" strokeWidth={strokeWidth * 0.6} strokeLinecap="round" />
    <path d="M52 65 L55 67" stroke="currentColor" strokeWidth={strokeWidth * 0.6} strokeLinecap="round" />
  </svg>
);

// Citrus Leaves - Fresh and modern
export const CitrusLeaves: React.FC<BotanicalProps> = ({ 
  className = "", 
  size = 110, 
  strokeWidth = 1.2 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 110 110" 
    className={className}
    fill="none"
  >
    {/* Main branch */}
    <path 
      d="M20 90 Q40 70 60 50 Q80 30 100 10" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round"
    />
    
    {/* Citrus leaves - elongated ovals with pointed ends */}
    <path 
      d="M30 80 Q25 75 20 70 Q25 65 30 70 Q35 75 30 80" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.3"
    />
    <path 
      d="M45 65 Q40 60 35 55 Q40 50 45 55 Q50 60 45 65" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.3"
    />
    <path 
      d="M65 45 Q60 40 55 35 Q60 30 65 35 Q70 40 65 45" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.3"
    />
    <path 
      d="M85 25 Q80 20 75 15 Q80 10 85 15 Q90 20 85 25" 
      stroke="currentColor" 
      strokeWidth={strokeWidth * 0.8} 
      fill="currentColor" 
      fillOpacity="0.3"
    />
    
    {/* Leaf veins */}
    <path d="M30 75 Q28 72 25 70" stroke="currentColor" strokeWidth={strokeWidth * 0.5} />
    <path d="M45 60 Q43 57 40 55" stroke="currentColor" strokeWidth={strokeWidth * 0.5} />
    <path d="M65 40 Q63 37 60 35" stroke="currentColor" strokeWidth={strokeWidth * 0.5} />
    <path d="M85 20 Q83 17 80 15" stroke="currentColor" strokeWidth={strokeWidth * 0.5} />
    
    {/* Small buds */}
    <circle cx="40" cy="75" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="60" cy="55" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="80" cy="35" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
);

// Delicate Botanical Divider
export const BotanicalDivider: React.FC<{ className?: string; width?: number }> = ({ 
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
    <circle cx="100" cy="20" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
    
    {/* Flowing lines */}
    <path 
      d="M20 20 Q60 15 97 20" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <path 
      d="M103 20 Q140 15 180 20" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    
    {/* Small leaves */}
    <path d="M70 18 Q68 15 70 12 Q72 15 70 18" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2" />
    <path d="M130 18 Q132 15 130 12 Q128 15 130 18" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2" />
    
    {/* Delicate flourishes */}
    <path d="M90 22 Q95 25 100 22" stroke="currentColor" strokeWidth="0.6" />
    <path d="M100 22 Q105 25 110 22" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);