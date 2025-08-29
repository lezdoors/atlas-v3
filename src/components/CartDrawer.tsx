import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HandDrawnGift, HandDrawnTruck, HandDrawnBottle } from './HandDrawnIcons';
import productSample from '@/assets/product-sample.jpg';

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  // Mock cart data - in real app this would come from context/state
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Rose Damascus Serum',
      size: '50ml',
      price: 89,
      quantity: 1,
      image: productSample
    },
    {
      id: '2',
      name: 'Oud Royal Perfume',
      size: '30ml',
      price: 156,
      quantity: 1,
      image: productSample
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 75 ? 0 : 15;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, change: number) => {
    // Implementation would update cart state
    console.log(`Update item ${id} quantity by ${change}`);
  };

  const removeItem = (id: string) => {
    // Implementation would remove item from cart
    console.log(`Remove item ${id}`);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div className="fixed top-0 right-0 h-full w-[420px] bg-background shadow-elevated z-50 animate-slide-in-right flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-playfair font-bold text-2xl text-foreground tracking-luxury">
            Your Selection
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <HandDrawnBottle className="mx-auto mb-4 text-muted-foreground opacity-40" size={48} />
              <p className="text-muted-foreground font-inter">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-moroccan overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-playfair font-medium text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter mb-2">
                      {item.size}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-muted transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1.5 font-inter font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <span className="font-playfair font-semibold text-foreground">
                        ${item.price * item.quantity}
                      </span>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust Elements */}
        <div className="px-6 py-4 bg-muted/30">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <HandDrawnBottle className="text-secondary mb-2" size={20} />
              <p className="text-xs font-inter text-muted-foreground">
                Free samples included
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HandDrawnTruck className="text-secondary mb-2" size={20} />
              <p className="text-xs font-inter text-muted-foreground">
                {subtotal >= 75 ? 'Free shipping' : `$${75 - subtotal} to free shipping`}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HandDrawnGift className="text-secondary mb-2" size={20} />
              <p className="text-xs font-inter text-muted-foreground">
                Gift wrapping available
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="p-6 border-t border-border bg-card">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between font-inter">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="text-foreground">${subtotal}</span>
            </div>
            <div className="flex justify-between font-inter">
              <span className="text-muted-foreground">Shipping:</span>
              <span className="text-foreground">
                {shipping === 0 ? 'Free' : `$${shipping}`}
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between font-playfair font-bold text-lg">
                <span className="text-foreground">Total:</span>
                <span className="text-foreground">${total}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              variant="moroccan-primary" 
              size="lg" 
              className="w-full"
              disabled={cartItems.length === 0}
            >
              SECURE CHECKOUT
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </div>

          {/* Security Badge */}
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground font-inter">
              🔒 Secure checkout • SSL encrypted
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;