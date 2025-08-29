import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Minus, Star, Heart, Share2, Truck, Shield, Award, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BotanicalFrame from '@/components/BotanicalFrame';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useParams } from 'react-router-dom';
import atlasRoseHero from '@/assets/atlas-rose-hero.jpg';
import neroliSublimeHero from '@/assets/neroli-sublime-hero.jpg';
import arganMystiqueHero from '@/assets/argan-mystique-hero.jpg';

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock product data - in real app this would be fetched based on productId
  const product = {
    id: 'atlas-rose',
    name: 'Atlas Rose',
    category: 'EAU DE PARFUM',
    description: 'A sublime interpretation of the legendary Damask rose, hand-picked from the foothills of the Atlas Mountains where morning dew kisses each petal with crystalline purity.',
    story: 'In the heart of Morocco, where ancient trade routes once carried precious cargo across continents, grows the most exquisite rose known to perfumery. Our master perfumers journey to these sacred gardens each spring, selecting only the most perfect blooms harvested at dawn when their essence is most concentrated.',
    images: [atlasRoseHero, neroliSublimeHero, arganMystiqueHero],
    sizes: [
      { size: '30ml', price: 145, originalPrice: null },
      { size: '50ml', price: 185, originalPrice: 215 },
      { size: '100ml', price: 285, originalPrice: null }
    ],
    notes: {
      top: ['Bulgarian Rose', 'Pink Pepper', 'Bergamot'],
      heart: ['Damask Rose', 'Peony', 'Jasmine Sambac'],
      base: ['White Musk', 'Sandalwood', 'Amber']
    },
    rating: 4.8,
    reviews: 127,
    inStock: true,
    benefits: [
      { icon: Award, text: 'Award-winning fragrance' },
      { icon: Leaf, text: 'Sustainably sourced ingredients' },
      { icon: Shield, text: '30-day return guarantee' },
      { icon: Truck, text: 'Free shipping over $150' }
    ]
  };

  const selectedSizeData = product.sizes.find(s => s.size === selectedSize);
  const totalPrice = (selectedSizeData?.price || 0) * quantity;

  const relatedProducts = [
    { id: 'neroli-sublime', name: 'Neroli Sublime', price: 165, image: neroliSublimeHero },
    { id: 'jasmine-royale', name: 'Jasmine Royale', price: 175, image: atlasRoseHero },
    { id: 'argan-mystique', name: 'Argan Mystique', price: 220, image: arganMystiqueHero }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="border-b border-border/30 py-4">
        <div className="container-luxury">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/fragrances/signature-scents" className="hover:text-primary transition-colors">Signature Scents</a>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
            
            {/* Image Gallery - 70% width */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Main Image */}
              <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted/10">
                  <OptimizedImage
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Image Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery - Mobile Hidden */}
              <div className="hidden lg:grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info - 30% width */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Basic Info */}
              <div className="space-y-4">
                <div className="text-xs text-muted-foreground uppercase tracking-widest">
                  {product.category}
                </div>
                <h1 className="font-playfair text-4xl lg:text-5xl text-foreground">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Fragrance Notes */}
              <BotanicalFrame variant="decorative" className="p-6">
                <h3 className="text-lg font-medium mb-4">Fragrance Notes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">TOP NOTES</h4>
                    <p className="text-sm">{product.notes.top.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">HEART NOTES</h4>
                    <p className="text-sm">{product.notes.heart.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">BASE NOTES</h4>
                    <p className="text-sm">{product.notes.base.join(', ')}</p>
                  </div>
                </div>
              </BotanicalFrame>

              {/* Size Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size.size)}
                      className={`p-3 border rounded-lg text-center transition-colors ${
                        selectedSize === size.size
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-sm font-medium">{size.size}</div>
                      <div className="text-xs text-muted-foreground">
                        ${size.price}
                        {size.originalPrice && (
                          <span className="line-through ml-1">${size.originalPrice}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Price */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Quantity</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="text-2xl font-semibold text-foreground">
                  ${totalPrice}
                  {selectedSizeData?.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through ml-2">
                      ${selectedSizeData.originalPrice * quantity}
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3">
                <button className="w-full luxury-button py-4 text-lg">
                  Add to Cart
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 border border-border hover:bg-muted transition-colors py-3 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Wishlist
                  </button>
                  <button className="flex-1 border border-border hover:bg-muted transition-colors py-3 rounded-lg flex items-center justify-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-6 border-t border-border">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Story */}
      <section className="section-padding bg-muted/20">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <BotanicalFrame variant="ornate">
              <div className="p-12">
                <h2 className="font-playfair text-3xl lg:text-4xl mb-6">
                  The Story of {product.name}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.story}
                </p>
              </div>
            </BotanicalFrame>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection variant="product" />

      {/* Related Products */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl mb-4">
              You Might Also Like
            </h2>
            <p className="text-muted-foreground">
              Discover other fragrances in our signature collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group luxury-card">
                <div className="aspect-square overflow-hidden bg-muted/10 mb-4">
                  <OptimizedImage
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-muted-foreground">From ${relatedProduct.price}</p>
                  <button className="text-primary hover:underline text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;