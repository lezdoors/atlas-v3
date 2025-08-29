import React, { useState } from 'react';
import { X, Plus, Minus, Gift, Package, Sparkles, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const CartDrawer = ({ trigger }: { trigger: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Rose Damascus Serum',
      size: '50ml',
      price: 89,
      quantity: 1,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Oud Royal Perfume',
      size: '30ml', 
      price: 156,
      quantity: 1,
      image: '/api/placeholder/80/80'
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isEligibleForFreeShipping = subtotal >= 75;
  
  const trustElements = [
    {
      icon: Gift,
      text: 'Free samples included',
      color: 'text-secondary'
    },
    {
      icon: Package,
      text: 'Free shipping over $75',
      color: isEligibleForFreeShipping ? 'text-accent' : 'text-muted-foreground'
    },
    {
      icon: Sparkles,
      text: 'Gift wrapping available',
      color: 'text-secondary'
    }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      
      <SheetContent side="right" className="w-[400px] sm:w-[450px] p-0 bg-background border-l border-border">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="font-playfair text-xl text-foreground tracking-luxury">
            Your Selection
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground font-inter mb-4">Your cart is empty</p>
                <Button variant="moroccan-outline">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 group">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-muted rounded-luxury overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-xs text-secondary font-playfair">
                        {item.name.slice(0, 2)}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-inter font-medium text-foreground truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.size} • ${item.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2 space-x-2">
                      <Button
                        variant="minimal"
                        size="icon-sm"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-8 w-8 border border-border hover:border-secondary"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center text-sm font-inter">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="minimal"
                        size="icon-sm"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-8 w-8 border border-border hover:border-secondary"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-inter font-medium text-foreground">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* Trust Elements */}
            {cartItems.length > 0 && (
              <div className="space-y-3 pt-6 border-t border-border">
                {trustElements.map((element, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <element.icon className={`h-4 w-4 ${element.color}`} />
                    <span className="text-sm font-inter text-muted-foreground">
                      {element.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-border p-6 space-y-4 bg-muted/20">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-inter">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm font-inter">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {isEligibleForFreeShipping ? 'Free' : '$8.50'}
                  </span>
                </div>
                {!isEligibleForFreeShipping && (
                  <p className="text-xs text-secondary">
                    Add ${(75 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>

              <div className="border-t border-border pt-3">
                <div className="flex justify-between font-inter font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">
                    ${isEligibleForFreeShipping ? subtotal : subtotal + 8.50}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button 
                  variant="moroccan-primary" 
                  size="lg" 
                  className="w-full font-playfair tracking-wide-luxury"
                >
                  SECURE CHECKOUT
                </Button>
                <Button 
                  variant="luxury-minimal" 
                  size="lg" 
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;