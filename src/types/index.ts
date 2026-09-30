export type ProductCategory = 
  | 'dhoop-sticks'
  | 'camphor'
  | 'combo-packs'
  | 'pooja-essentials'
  | 'all';

export interface ProductVariant {
  id: string;
  name: string; // e.g., '200g × 2 Boxes (400g Total)', '100g × 1 Box'
  price: number;
  mrp: number;
  stock?: number;
  sku?: string;
  inStock?: boolean;
}

export interface FragranceProfile {
  topNotes?: string[];
  heartNotes?: string[];
  baseNotes?: string[];
  intensity?: string;
  aura?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  userCity: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  helpfulCount?: number;
}

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  slug: string;
  category: ProductCategory | string;
  categoryName: string;
  shortDescription: string;
  description: string;
  price: number;
  mrp: number;
  discountPercentage?: number;
  images: string[];
  fragrance?: string;
  fragranceProfile?: FragranceProfile;
  ingredients?: string[];
  packSize: string;
  netQuantity?: string;
  eachBox?: string;
  suitableFor?: string;
  keyFeatures?: string[];
  productDetails?: Record<string, string>;
  burnTime?: string;
  stock?: number;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  reviews?: ProductReview[];
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  organic?: boolean;
  charcoalFree?: boolean;
  bambooFree?: boolean;
  naturalResins?: boolean;
  variants?: ProductVariant[];
  howToUse?: string[] | {
    steps: string[];
    safetyWarning?: string;
    idealRitual?: string;
  };
  specifications?: Record<string, string>;
  benefits?: string[];
  tags?: string[];
  frequentlyBoughtTogetherIds?: string[];
}

export interface CategoryInfo {
  id: ProductCategory | string;
  slug: string;
  name: string;
  hindiName?: string;
  tagline?: string;
  description: string;
  image: string;
  itemCount: number;
  featuredFragrance?: string;
  featuredFragrances?: string[];
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bannerImage?: string;
  productIds: string[];
  occasion?: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderAmount: number;
  description: string;
}

export interface Address {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  addressType: 'Home' | 'Office' | 'Mandir / Ashram';
  isDefault?: boolean;
}

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  variantName?: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  couponCode?: string;
  shippingFee: number;
  giftWrapFee: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: 'Razorpay (UPI / Cards / NetBanking)' | 'Cash on Delivery (COD)';
  paymentStatus: 'Paid' | 'Pending COD Verification';
  orderStatus: 'Order Placed' | 'Packed & Ritual Blessed' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
  trackingNumber: string;
  deliveryPartner: string;
  specialInstructions?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  relatedProductIds?: string[];
}

export interface FAQItem {
  id: string;
  category?: 'Purity & Ingredients' | 'Usage & Safety' | 'Orders & Shipping' | 'Bulk & Corporate' | 'Returns & Payments' | string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  author?: string;
  name?: string;
  location?: string;
  city?: string;
  state?: string;
  rating: number;
  title?: string;
  comment: string;
  productBought?: string;
  productUsed?: string;
  avatar?: string;
  date: string;
  verified?: boolean;
  verifiedBuyer?: boolean;
}
