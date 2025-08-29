import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Gift, Truck, Shield } from 'lucide-react';
import OptimizedImage from './ui/OptimizedImage';
import atlasRoseImg from '@/assets/atlas-rose-product.jpg';
import neroliSublimeImg from '@/assets/neroli-sublime-product.jpg';

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

interface LuxuryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LuxuryCartDrawer: React.FC<LuxuryCartDrawerProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Atlas Rose',
      size: '50ml',
      price: 165,
      quantity: 1,
      image: atlasRoseImg
    },
    {
      id: '2',
      name: 'Neroli Sublime',
      size: '30ml',
      price: 125,
      quantity: 2,
      image: neroliSublimeImg
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 150 ? 0 : 15;
  const total = subtotal + shipping;
  const shippingProgress = Math.min((subtotal / 150) * 100, 100);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-medium text-foreground">Your Selection</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          {subtotal < 150 && (
            <div className="p-6 bg-muted/30">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Free shipping progress</span>
                  <span className="text-foreground">${subtotal.toFixed(2)} / $150</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Add ${(150 - subtotal).toFixed(2)} more for free shipping
                </p>
              </div>
            </div>
          )}

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Gift className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-4">Discover our signature fragrances</p>
                <button 
                  onClick={onClose}
                  className="text-primary hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative">
                      <OptimizedImage
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.size}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-destructive/10 rounded"
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trust Elements & Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              
              {/* Trust Elements */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2 text-xs">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Free shipping over $150</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Complimentary samples</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">30-day returns</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Gift wrapping</span>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-2 py-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Secure Checkout
                </button>
                <button 
                  onClick={onClose}
                  className="w-full text-center text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};