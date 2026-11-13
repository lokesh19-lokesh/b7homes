import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ToastNotification, JournalArticle } from '../types';
import { products } from '../data/products';

interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedWood?: string, selectedFabric?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  activeArticle: JournalArticle | null;
  setActiveArticle: (article: JournalArticle | null) => void;

  toasts: ToastNotification[];
  addToast: (title: string, message: string, type?: ToastNotification['type']) => void;
  removeToast: (id: string) => void;

  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize cart with 1 default luxury item for instant delightful demonstration
  const [cart, setCart] = useState<CartItem[]>(() => [
    {
      product: products[0], // Royale Velvet L-Shape
      quantity: 1,
      selectedWood: 'Kiln-Dried CP Teak & Hardwood Frame',
      selectedFabric: 'Italian Emerald Suede'
    }
  ]);

  const [wishlist, setWishlist] = useState<string[]>(() => [
    'teakwood-hydraulic-bed',
    'nizam-heritage-dining-set'
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const addToast = (title: string, message: string, type: ToastNotification['type'] = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product: Product, quantity = 1, selectedWood?: string, selectedFabric?: string) => {
    const wood = selectedWood || product.woodType;
    const fabric = selectedFabric || (product.fabricOptions.length > 0 ? product.fabricOptions[0] : undefined);

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedWood === wood && item.selectedFabric === fabric
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, quantity, selectedWood: wood, selectedFabric: fabric }];
      }
    });

    addToast(
      'Added to Shopping Bag',
      `${product.name} (${quantity}) was added with your custom finishes.`,
      'cart'
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('Item Removed', 'The item was removed from your bag.', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast('Removed from Wishlist', `${product?.name || 'Item'} removed from saved designs.`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        addToast('Saved to Wishlist', `${product?.name || 'Item'} saved to your bespoke wishlist.`, 'wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        setQuickViewProduct,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        activeArticle,
        setActiveArticle,
        toasts,
        addToast,
        removeToast,
        isBookingOpen,
        setIsBookingOpen,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

