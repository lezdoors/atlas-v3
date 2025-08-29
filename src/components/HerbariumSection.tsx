import React from 'react';
import { cn } from '@/lib/utils';
import HandDrawnElements from './HandDrawnElements';
import BotanicalFrame from './BotanicalFrame';

interface HerbariumSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  botanicalType: 'lavender' | 'eucalyptus' | 'rose' | 'citrus' | 'olive' | 'jasmine';
  className?: string;
  reverse?: boolean;
}

const HerbariumSection: React.FC<HerbariumSectionProps> = ({
  title,
  subtitle,
  description,
  botanicalType,
  className = "",
  reverse = false
}) => {
  return (
    <section className={cn(
      "section-padding relative overflow-hidden",
      reverse ? "bg-background-secondary" : "bg-background",
      className
    )}>
      {/* Background botanical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 opacity-20">
          <HandDrawnElements type={botanicalType} size={200} opacity={0.1} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <HandDrawnElements type={botanicalType} size={150} opacity={0.1} rotation={180} />
        </div>
      </div>

      <div className="container-luxury">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
          reverse && "lg:grid-flow-col-dense"
        )}>
          {/* Botanical illustration */}
          <div className={cn(
            "relative flex justify-center",
            reverse && "lg:col-start-2"
          )}>
            <BotanicalFrame variant="ornate" className="max-w-md">
              <div className="flex justify-center p-8">
                <HandDrawnElements 
                  type="herbarium-branch" 
                  size={280} 
                  opacity={0.8}
                  animate
                  variant="artistic"
                />
              </div>
              
              {/* Scientific name label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 border border-border-subtle rounded px-4 py-2 backdrop-blur-sm">
                  <p className="body-small text-text-secondary text-center">
                    {getBotanicalName(botanicalType)}
                  </p>
                </div>
              </div>
            </BotanicalFrame>
          </div>
          
          {/* Content */}
          <div className={cn(
            "space-y-6",
            reverse && "lg:col-start-1"
          )}>
            {subtitle && (
              <p className="body-small text-accent tracking-wide">
                {subtitle}
              </p>
            )}
            
            <h2 className="heading-section text-text-primary">
              {title}
            </h2>
            
            <div className="space-y-6">
              <p className="body-large text-text-secondary leading-[1.8]">
                {description}
              </p>
            </div>
            
            {/* Botanical details */}
            <div className="mt-8 p-6 bg-background-secondary/50 rounded-luxury border border-border-subtle">
              <h3 className="heading-product text-text-primary mb-4">
                Botanical Properties
              </h3>
              <div className="grid grid-cols-2 gap-4 body-small text-text-secondary">
                <div>
                  <span className="text-text-primary font-medium">Origin:</span>
                  <br />
                  {getBotanicalOrigin(botanicalType)}
                </div>
                <div>
                  <span className="text-text-primary font-medium">Harvest:</span>
                  <br />
                  {getBotanicalHarvest(botanicalType)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vine border */}
      <div className="absolute bottom-0 left-0 right-0">
        <HandDrawnElements 
          type="vine-border" 
          size={400} 
          opacity={0.2}
          className="w-full"
        />
      </div>
    </section>
  );
};

// Helper functions for botanical information
const getBotanicalName = (type: string): string => {
  const names = {
    lavender: 'Lavandula angustifolia',
    eucalyptus: 'Eucalyptus globulus',
    rose: 'Rosa damascena',
    citrus: 'Citrus bergamia',
    olive: 'Olea europaea',
    jasmine: 'Jasminum officinale'
  };
  return names[type as keyof typeof names] || 'Botanical specimen';
};

const getBotanicalOrigin = (type: string): string => {
  const origins = {
    lavender: 'Provence, France',
    eucalyptus: 'Tasmania, Australia',
    rose: 'Damascena Valley',
    citrus: 'Calabria, Italy',
    olive: 'Mediterranean Basin',
    jasmine: 'Himalayas, Asia'
  };
  return origins[type as keyof typeof origins] || 'Unknown origin';
};

const getBotanicalHarvest = (type: string): string => {
  const harvests = {
    lavender: 'Early summer bloom',
    eucalyptus: 'Year-round leaves',
    rose: 'Dawn petals',
    citrus: 'Winter fruit',
    olive: 'Autumn branches',
    jasmine: 'Night flowers'
  };
  return harvests[type as keyof typeof harvests] || 'Seasonal';
};

export default HerbariumSection;