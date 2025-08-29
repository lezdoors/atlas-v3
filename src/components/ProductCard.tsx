import React from 'react';
import { LavenderSprig } from './BotanicalElements';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category?: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category = "Eau de Parfum",
  description = "Handcrafted with Moroccan botanicals"
}) => {
  return (
    <div className="group relative bg-background overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted/10">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Botanical Overlay - appears on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          <LavenderSprig size={60} strokeWidth={1} className="text-foreground" />
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Product Information */}
      <div className="pt-6 pb-4 px-1">
        {/* Category */}
        <p className="font-inter text-xs text-muted-foreground uppercase tracking-wider mb-2">
          {category}
        </p>
        
        {/* Product Name */}
        <h3 className="font-playfair text-xl text-foreground mb-2 leading-tight">
          {name}
        </h3>
        
        {/* Description */}
        <p className="font-inter text-sm text-muted-foreground mb-3 leading-relaxed">
          {description}
        </p>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <span className="font-inter text-lg text-foreground font-medium">
            {price}
          </span>
          
          <button className="font-inter text-sm text-amber-700 hover:text-amber-600 transition-colors duration-300 relative group/link">
            View Details
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-700 transition-all duration-300 group-hover/link:w-full"></span>
          </button>
        </div>
      </div>
      
      {/* Subtle shadow */}
      <div className="absolute inset-0 -z-10 bg-background shadow-[0_4px_20px_rgba(44,44,44,0.04)] group-hover:shadow-[0_8px_40px_rgba(44,44,44,0.08)] transition-shadow duration-500"></div>
    </div>
  );
};

export default ProductCard;