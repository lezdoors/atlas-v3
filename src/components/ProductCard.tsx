import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import HandDrawnElements from './HandDrawnElements';


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
  // Map product images to the new HD images
  const getProductImage = () => {
    if (image) return image;
    
    const imageMap: { [key: string]: string } = {
      'Atlas Rose': '/lovable-uploads/4dc12531-fd9f-4f1d-8fa3-b98940991529.png',
      'Neroli Sublime': '/lovable-uploads/89035e52-743d-4dc4-9906-c9971cc9f755.png',
      'Argan Mystique': '/lovable-uploads/6555d9b8-8e4f-4254-bd4a-6f377627125f.png',
      'Cedar Dreams': '/lovable-uploads/822029b6-119e-40b4-920c-7a398e0fa004.png',
      'Jasmine Royale': '/lovable-uploads/df92ee8c-5046-4a4a-9abe-a822b285b977.png',
      'Rose Damascena': '/lovable-uploads/554790ac-4ecb-477a-a077-e2d542af256e.png',
    };
    return imageMap[name] || '/lovable-uploads/4dc12531-fd9f-4f1d-8fa3-b98940991529.png';
  };

  return (
    <div className="group relative bg-card overflow-hidden scale-on-hover image-hover-effect luxury-card">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={getProductImage()}
          alt={`${name} - ${category} bottle`}
          aspectRatio="3/4"
          fallbackSrc="/lovable-uploads/4dc12531-fd9f-4f1d-8fa3-b98940991529.png"
          className="transition-transform duration-700 group-hover:scale-105 object-cover"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
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
      <div className="pt-4 pb-3 px-1">
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
