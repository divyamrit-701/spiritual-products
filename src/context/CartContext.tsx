import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductVariant, CartItem, Coupon } from '../types';
import { useToast } from './ToastContext';

export const VALID_COUPONS: Coupon[] = [
  {
    code: 'DIVYAMRIT10',
    discountType: 'percentage',
    discountValue: 10,
    minOrderAmount: 499,
    description: '10% OFF on your first sacred purchase (Min ₹499)'
  },
  {
    code: 'PUJA15',
    discountType: 'percentage',
    discountValue: 15,
    minOrderAmount: 1299,
    description: '15% Festive Blessing Discount on orders above ₹1,299'
  },
  {
    code: 'SHUBH100',
    discountType: 'fixed',
    discountValue: 100,
    minOrderAmount: 799,
    description: 'Flat ₹100 OFF on orders above ₹799'
  },
  {
    code: 'FREESHIP',
    discountType: 'fixed',
    discountValue: 70,
    minOrderAmount: 499,
    description: 'Free Shipping Voucher'
  }
];

export const FREE_SHIPPING_THRESHOLD = 999;
export const STANDARD_SHIPPING_FEE = 70;
export const GIFT_WRAP_FEE = 49;

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  isGiftWrap: boolean;
  toggleGiftWrap: (val?: boolean) => void;
  orderNote: string;
  setOrderNote: (note: string) => void;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  giftWrapFee: number;
  total: number;
  totalCount: number;
  freeShippingRemaining: number;
  freeShippingProgress: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'divyamrit_cart_v1';
const COUPON_STORAGE_KEY = 'divyamrit_coupon_v1';
const GIFT_WRAP_STORAGE_KEY = 'divyamrit_giftwrap_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(() => {
    try {
      const saved = localStorage.getItem(COUPON_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isGiftWrap, setIsGiftWrap] = useState<boolean>(() => {
    try {
      return localStorage.getItem(GIFT_WRAP_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [orderNote, setOrderNote] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Persist coupon
  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(appliedCoupon));
      } else {
        localStorage.removeItem(COUPON_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save coupon', e);
    }
  }, [appliedCoupon]);

  // Persist gift wrap
  useEffect(() => {
    try {
      localStorage.setItem(GIFT_WRAP_STORAGE_KEY, isGiftWrap.toString());
    } catch (e) {
      console.error('Failed to save gift wrap setting', e);
    }
  }, [isGiftWrap]);

  const addToCart = (product: Product, quantity: number = 1, variant?: ProductVariant) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => 
        item.product.id === product.id && 
        ((!variant && !item.selectedVariant) || (item.selectedVariant?.id === variant?.id))
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty
        };
        return updated;
      } else {
        return [...prev, { product, quantity, selectedVariant: variant }];
      }
    });

    const variantLabel = variant ? ` (${variant.name})` : '';
    showToast(
      'Added to Sacred Cart 🪔', 
      `${product.name}${variantLabel} added to your cart`, 
      'success'
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setCartItems((prev) => 
      prev.filter((item) => !(
        item.product.id === productId && 
        ((!variantId && !item.selectedVariant) || (item.selectedVariant?.id === variantId))
      ))
    );
    showToast('Removed from cart', undefined, 'info');
  };

  const updateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          ((!variantId && !item.selectedVariant) || (item.selectedVariant?.id === variantId))
        ) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
    setIsGiftWrap(false);
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.selectedVariant ? item.selectedVariant.price : item.product.price;
    return acc + price * item.quantity;
  }, 0);

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate discount
  let discountAmount = 0;
  if (appliedCoupon && subtotal >= appliedCoupon.minOrderAmount) {
    if (appliedCoupon.discountType === 'percentage') {
      discountAmount = Math.round((subtotal * appliedCoupon.discountValue) / 100);
    } else {
      discountAmount = appliedCoupon.discountValue;
    }
  }

  // Shipping calculation
  const effectiveSubtotal = Math.max(0, subtotal - discountAmount);
  const isFreeShipping = effectiveSubtotal >= FREE_SHIPPING_THRESHOLD || (appliedCoupon?.code === 'FREESHIP' && effectiveSubtotal >= appliedCoupon.minOrderAmount);
  const shippingFee = cartItems.length === 0 ? 0 : (isFreeShipping ? 0 : STANDARD_SHIPPING_FEE);
  const giftWrapFee = isGiftWrap && cartItems.length > 0 ? GIFT_WRAP_FEE : 0;
  const total = Math.max(0, effectiveSubtotal + shippingFee + giftWrapFee);

  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - effectiveSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((effectiveSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    const found = VALID_COUPONS.find((c) => c.code === cleanCode);

    if (!found) {
      return { success: false, message: 'Invalid coupon code. Try DIVYAMRIT10 or PUJA15.' };
    }

    if (subtotal < found.minOrderAmount) {
      return { 
        success: false, 
        message: `Minimum order amount of ₹${found.minOrderAmount} required for coupon ${cleanCode}.` 
      };
    }

    setAppliedCoupon(found);
    showToast('Coupon Applied! ✨', `${found.code} applied successfully.`, 'success');
    return { success: true, message: `Coupon applied: ${found.description}` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', undefined, 'info');
  };

  const toggleGiftWrap = (val?: boolean) => {
    setIsGiftWrap((prev) => (val !== undefined ? val : !prev));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        isGiftWrap,
        toggleGiftWrap,
        orderNote,
        setOrderNote,
        subtotal,
        discountAmount,
        shippingFee,
        giftWrapFee,
        total,
        totalCount,
        freeShippingRemaining,
        freeShippingProgress
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
