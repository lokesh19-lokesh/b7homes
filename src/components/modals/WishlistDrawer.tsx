import React from 'react';
import { useShop } from '../../context/ShopContext';
import { products } from '../../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart, isWishlistOpen, setIsWishlistOpen, setQuickViewProduct } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252523]/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFFFF] shadow-2xl flex flex-col border-l border-[#D8CBB9]/60">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#EDE7DC] flex items-center justify-between bg-[#F8F5EF]/60">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
              <h2 className="font-serif text-2xl font-normal text-[#252523]">Saved Designs</h2>
              <span className="text-xs bg-[#A8875B] text-white px-2 py-0.5 rounded-full font-medium">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-[#7A7A73] hover:text-[#252523] rounded-full hover:bg-white transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#7A7A73]">
                <div className="w-16 h-16 rounded-full bg-[#F8F5EF] flex items-center justify-center mb-4 text-[#A8875B] border border-[#EDE7DC]">
                  <Heart className="w-7 h-7" />
                </div>
                <p className="font-serif text-xl text-[#252523]">No saved pieces yet</p>
                <p className="text-xs text-[#7A7A73] mt-1.5 max-w-xs">
                  Tap the heart icon on any furniture piece to save your favorite bespoke designs here.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-6 px-6 py-2.5 bg-[#49362B] text-white rounded-xl text-xs font-semibold tracking-wider uppercase hover:bg-[#35271F] transition-all"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-[#F8F5EF]/60 rounded-2xl border border-[#EDE7DC] hover:border-[#A8875B]/40 transition-all"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setQuickViewProduct(product);
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-[#EDE7DC] shrink-0 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            setQuickViewProduct(product);
                          }}
                          className="font-serif text-base text-[#252523] truncate leading-tight cursor-pointer hover:text-[#A8875B]"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#7A7A73] hover:text-rose-600 p-1 transition-colors"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#A8875B] mt-0.5 truncate">{product.category}</p>
                      <p className="text-xs font-bold text-[#252523] mt-1">{formatPrice(product.price)}</p>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        toggleWishlist(product.id);
                      }}
                      className="mt-2 w-full py-2 bg-white hover:bg-[#49362B] text-[#49362B] hover:text-white border border-[#D8CBB9] rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

