export interface Product {
  id: string;
  name: string;
  category: 'Living Room' | 'Bedroom' | 'Dining Room' | 'Storage' | 'Home Furnishings';
  subtitle: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  dimensions: string;
  woodType: string;
  fabricOptions: string[];
  inStock: boolean;
  isBestseller?: boolean;
  description: string;
  highlights: string[];
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  count: string;
  image: string;
  href: string;
  description: string;
  popularItems: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  verified: boolean;
  date: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  paragraphs: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWood: string;
  selectedFabric?: string;
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'info' | 'cart' | 'wishlist';
  title: string;
  message: string;
}
