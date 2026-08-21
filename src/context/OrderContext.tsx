import React, { createContext, useContext, useState, useEffect } from 'react';
import { Order, Address } from '../types';

interface OrderContextType {
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'id' | 'orderNumber' | 'date' | 'trackingNumber' | 'deliveryPartner'>) => Promise<Order>;
  getOrderById: (orderId: string) => Order | undefined;
  savedAddresses: Address[];
  saveAddress: (address: Address) => void;
  deleteAddress: (index: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const ORDERS_STORAGE_KEY = 'divyamrit_orders_v1';
const ADDRESSES_STORAGE_KEY = 'divyamrit_addresses_v1';

const INITIAL_SAMPLE_ADDRESS: Address = {
  fullName: 'Ananya Deshpande',
  phone: '+91 98234 56789',
  email: 'ananya.deshpande@example.com',
  addressLine1: 'Flat 402, Shiv Shanti Residency, FC Road',
  addressLine2: 'Near Gokhale Monument, Shivaji Nagar',
  city: 'Pune',
  state: 'Maharashtra',
  pincode: '411004',
  addressType: 'Home',
  isDefault: true
};

const INITIAL_SAMPLE_ORDER: Order = {
  id: 'ord-divya-9823',
  orderNumber: 'DA-2026-89241',
  date: '2026-08-18',
  items: [
    {
      id: 'ord-item-1',
      productId: 'prod-dhoop-01',
      name: 'Mysore Sandalwood Bambooless Dhoop Sticks',
      variantName: '40 Sticks (Standard Pack)',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
      price: 349,
      quantity: 2
    },
    {
      id: 'ord-item-2',
      productId: 'prod-camphor-01',
      name: '100% Pure Bhimseni Camphor Flakes',
      variantName: '250g Jar (Most Popular)',
      image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
      price: 449,
      quantity: 1
    }
  ],
  subtotal: 1147,
  discount: 115,
  couponCode: 'DIVYAMRIT10',
  shippingFee: 0,
  giftWrapFee: 0,
  total: 1032,
  shippingAddress: INITIAL_SAMPLE_ADDRESS,
  paymentMethod: 'Razorpay (UPI / Cards / NetBanking)',
  paymentStatus: 'Paid',
  orderStatus: 'In Transit',
  estimatedDelivery: 'Tomorrow by 4:00 PM',
  trackingNumber: 'BLUEDART-EXP-99238472',
  deliveryPartner: 'BlueDart Express Premium Air'
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [INITIAL_SAMPLE_ORDER];
    } catch {
      return [INITIAL_SAMPLE_ORDER];
    }
  });

  const [savedAddresses, setSavedAddresses] = useState<Address[]>(() => {
    try {
      const saved = localStorage.getItem(ADDRESSES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [INITIAL_SAMPLE_ADDRESS];
    } catch {
      return [INITIAL_SAMPLE_ADDRESS];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders', e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem(ADDRESSES_STORAGE_KEY, JSON.stringify(savedAddresses));
    } catch (e) {
      console.error('Failed to save addresses', e);
    }
  }, [savedAddresses]);

  const createOrder = async (
    orderData: Omit<Order, 'id' | 'orderNumber' | 'date' | 'trackingNumber' | 'deliveryPartner'>
  ): Promise<Order> => {
    // Generate order ID and tracking
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `ord-${Date.now().toString(36)}`;
    const orderNumber = `DA-${new Date().getFullYear()}-${randomNum}`;
    const today = new Date().toISOString().split('T')[0];
    const trackingNumber = `BD-${Math.floor(10000000 + Math.random() * 90000000)}`;

    const newOrder: Order = {
      ...orderData,
      id: orderId,
      orderNumber,
      date: today,
      trackingNumber,
      deliveryPartner: 'BlueDart Express Surface & Air'
    };

    setOrders((prev) => [newOrder, ...prev]);

    // Save address if not already present
    if (orderData.shippingAddress) {
      saveAddress(orderData.shippingAddress);
    }

    return newOrder;
  };

  const getOrderById = (orderId: string) => {
    return orders.find((o) => o.id === orderId || o.orderNumber === orderId);
  };

  const saveAddress = (address: Address) => {
    setSavedAddresses((prev) => {
      const exists = prev.some(
        (a) =>
          a.addressLine1.toLowerCase() === address.addressLine1.toLowerCase() &&
          a.pincode === address.pincode
      );
      if (exists) return prev;
      return [address, ...prev];
    });
  };

  const deleteAddress = (index: number) => {
    setSavedAddresses((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
        savedAddresses,
        saveAddress,
        deleteAddress
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
