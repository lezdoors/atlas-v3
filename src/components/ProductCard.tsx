import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import HandDrawnElements from './HandDrawnElements';
import { getImage, getFallbackImage } from '@/lib/imageAssets';

interface ProductCardProps {
  name: string;
  price: string;
  image?: string;
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
  // Use provided image or try to get from assets, fallback to placeholder
  const productImage = image || '/src/assets/product-sample.jpg';
  const fallbackImage = getFallbackImage('products');

  return (
    <div className="group relative bg-card overflow-hidden scale-on-hover image-hover-effect luxury-card">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={productImage}
          alt={`${name} - ${category}`}
          aspectRatio="3/4"
          fallbackSrc={fallbackImage}
          className="transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="skeleton"
          preloadOnHover={true}
          enableWebP={true}
        />
        
        {/* Botanical Overlay - appears on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
          <HandDrawnElements 
            type="lavender" 
            size={60} 
            opacity={0.6}
            animate={true}
          />
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Product Information */}
      <div className="pt-6 pb-4 px-1">
        {/* Category */}
        <p className="body-small mb-2">
          {category}
        </p>
        
        {/* Product Name */}
        <h3 className="heading-product mb-2 leading-tight">
          {name}
        </h3>
        
        {/* Description */}
        <p className="font-inter text-sm text-muted-foreground mb-3 leading-relaxed">
          {description}
        </p>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <span className="font-inter text-base text-foreground font-medium tracking-wide">
            {price}
          </span>
          
          <button className="luxury-link font-inter text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide">
            View Details
          </button>
        </div>
      </div>
      
      {/* Subtle shadow */}
      <div className="absolute inset-0 -z-10 bg-card shadow-[0_2px_12px_rgba(44,44,44,0.06)] group-hover:shadow-[0_6px_30px_rgba(44,44,44,0.12)] transition-shadow duration-500"></div>
    </div>
  );
};

export default ProductCard;
