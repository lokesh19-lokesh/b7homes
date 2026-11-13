import React from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const isWishlisted = isInWishlist(product.id);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#D8CBB9]/40 hover:border-[#A8875B]/60 shadow-subtle hover:shadow-luxury transition-all duration-500 flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-[#EDE7DC]/30">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span className="bg-[#252523] text-[#F8F5EF] text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
              Bestseller
            </span>
          )}
          {product.discountBadge && (
            <span className="bg-[#A8875B] text-white text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {product.discountBadge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full transition-all duration-300 z-10 ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 shadow-md scale-110'
              : 'bg-white/90 text-[#252523] hover:text-rose-600 hover:bg-white shadow-sm'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 transition-transform ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-[#252523]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/95 hover:bg-white text-[#252523] text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-full flex items-center gap-2 shadow-luxury backdrop-blur-sm"
          >
            <Eye className="w-3.5 h-3.5 text-[#A8875B]" />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#A8875B]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-[#49362B] font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-[#7A7A73] text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-lg sm:text-xl font-normal text-[#252523] group-hover:text-[#49362B] cursor-pointer transition-colors leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-[#5A5A55] mt-1 line-clamp-1 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Wood Specification Pill */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#49362B] bg-[#F8F5EF] px-2.5 py-1 rounded-md border border-[#D8CBB9]/40 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8875B]" />
            <span className="font-medium truncate max-w-[200px]">{product.woodType.split('&')[0]}</span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-5 pt-3.5 border-t border-[#EDE7DC] flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#252523] tracking-tight">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#7A7A73] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-medium block">
              Free Hyderabad Setup
            </span>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="bg-[#EDE7DC] hover:bg-[#49362B] text-[#49362B] hover:text-[#FFFFFF] p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 shrink-0 shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

