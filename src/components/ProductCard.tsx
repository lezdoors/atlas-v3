import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import productSample from '@/assets/product-sample.jpg';

interface ProductCardProps {
  name?: string;
  price?: number;
  originalPrice?: number;
  scentFamily?: string;
  isNew?: boolean;
  onSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name = "Midnight Rose",
  price = 185,
  originalPrice,
  scentFamily = "Floral Oriental",
  isNew = false,
  onSale = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group cursor-pointer border-0 shadow-luxury hover:shadow-gold transition-all duration-500 bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-luxury">
          <img
            src={productSample}
            alt={name}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-playfair font-medium rounded-full">
                New
              </span>
            )}
            {onSale && (
              <span className="bg-destructive text-destructive-foreground px-3 py-1 text-xs font-playfair font-medium rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-background hover:scale-110"
          >
            <Heart
              className={`w-5 h-5 transition-colors duration-300 ${
                isLiked ? 'fill-destructive text-destructive' : 'text-foreground'
              }`}
            />
          </button>

          {/* Quick Shop Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button variant="moroccan-primary" size="lg" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Quick Shop
              </Button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-muted-foreground font-inter tracking-wide uppercase">
              {scentFamily}
            </span>
          </div>
          
          <h3 className="text-lg font-playfair font-medium text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
            {name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-playfair font-semibold text-foreground">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through font-inter">
                  ${originalPrice}
                </span>
              )}
            </div>
            
            <Button variant="moroccan-ghost" size="sm">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;