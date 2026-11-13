import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { woodSwatches, fabricSwatches } from '../ui/SwatchPicker';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck, Ruler, Check, Calendar } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist, setIsBookingOpen } = useShop();
  
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedWood, setSelectedWood] = useState<string>('Seasoned CP Teak');
  const [selectedFabric, setSelectedFabric] = useState<string>('Italian Emerald Suede');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedImage(quickViewProduct.image);
      setQuantity(1);
      if (quickViewProduct.fabricOptions.length > 0) {
        setSelectedFabric(quickViewProduct.fabricOptions[0]);
      }
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isWishlisted = isInWishlist(quickViewProduct.id);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedWood, selectedFabric);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252523]/70 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl shadow-luxury-lg max-w-4xl w-full overflow-hidden border border-[#D8CBB9]/60 z-10 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#252523] shadow-sm hover:shadow transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EDE7DC]/30 border border-[#EDE7DC]">
              <img
                src={selectedImage || quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnail list */}
            {quickViewProduct.gallery && quickViewProduct.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {quickViewProduct.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImage === img ? 'border-[#A8875B] ring-2 ring-[#A8875B]/30' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust highlights */}
            <div className="bg-[#F8F5EF] p-4 rounded-xl border border-[#D8CBB9]/40 space-y-2 text-xs text-[#49362B]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>3-Year Direct Manufacturer Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>Complimentary White-Glove Assembly across Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>Custom Dimensions Available on Request</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Selectors */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B]">
                  {quickViewProduct.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#49362B] font-medium bg-[#F8F5EF] px-2.5 py-1 rounded-full border border-[#D8CBB9]/30">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{quickViewProduct.rating}</span>
                  <span className="text-[#7A7A73]">({quickViewProduct.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-serif text-2xl sm:text-3xl text-[#252523] mt-2 font-normal leading-tight">
                {quickViewProduct.name}
              </h2>
              <p className="text-sm text-[#5A5A55] mt-1.5 leading-relaxed">
                {quickViewProduct.subtitle}
              </p>

              {/* Pricing */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#252523]">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-base text-[#7A7A73] line-through">
                    {formatPrice(quickViewProduct.originalPrice)}
                  </span>
                )}
                {quickViewProduct.discountBadge && (
                  <span className="bg-[#A8875B] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {quickViewProduct.discountBadge}
                  </span>
                )}
              </div>

              {/* Dimensions */}
              <div className="mt-4 text-xs text-[#5A5A55] bg-[#F8F5EF]/60 p-3 rounded-lg border border-[#EDE7DC]">
                <strong className="text-[#252523] font-medium">Standard Dimensions: </strong>
                {quickViewProduct.dimensions}
              </div>

              {/* Wood Finishes */}
              <div className="mt-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#252523]">
                    Timber & Polish Selection:
                  </span>
                  <span className="text-xs text-[#A8875B] font-medium">{selectedWood}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {woodSwatches.map((w) => (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setSelectedWood(w.name)}
                      className={`flex items-center gap-2 p-2 rounded-xl border text-left text-xs transition-all ${
                        selectedWood === w.name
                          ? 'border-[#A8875B] bg-[#F8F5EF] ring-2 ring-[#A8875B]/20 font-medium'
                          : 'border-[#EDE7DC] hover:border-[#A8875B]/40'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md shrink-0" style={{ backgroundColor: w.colorHex }} />
                      <span className="truncate">{w.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric Selection */}
              {quickViewProduct.fabricOptions.length > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#252523]">
                      Upholstery Swatch:
                    </span>
                    <span className="text-xs text-[#A8875B] font-medium">{selectedFabric}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.fabricOptions.map((fabric) => (
                      <button
                        key={fabric}
                        type="button"
                        onClick={() => setSelectedFabric(fabric)}
                        className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                          selectedFabric === fabric
                            ? 'border-[#49362B] bg-[#49362B] text-white font-medium shadow-sm'
                            : 'border-[#D8CBB9] bg-white text-[#252523] hover:border-[#A8875B]'
                        }`}
                      >
                        {fabric}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions: Quantity, Add to Cart, Wishlist */}
            <div className="space-y-3 pt-4 border-t border-[#EDE7DC]">
              <div className="flex items-center gap-4">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#D8CBB9] rounded-xl bg-[#F8F5EF] p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#252523] hover:bg-white text-base transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-semibold text-[#252523]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#252523] hover:bg-white text-base transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#49362B] hover:bg-[#35271F] text-white py-3 px-6 rounded-xl font-medium tracking-wider text-sm flex items-center justify-center gap-2 shadow-luxury transition-all duration-300 active:scale-[0.98]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Bag</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded-xl border transition-all ${
                    isWishlisted
                      ? 'border-rose-300 bg-rose-50 text-rose-600'
                      : 'border-[#D8CBB9] text-[#252523] hover:bg-[#F8F5EF]'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
                </button>
              </div>

              {/* Consultation Link */}
              <button
                type="button"
                onClick={() => {
                  setQuickViewProduct(null);
                  setIsBookingOpen(true);
                }}
                className="w-full text-center text-xs text-[#A8875B] hover:text-[#49362B] font-medium py-1.5 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Want custom dimensions? Request a Home Consultation in Hyderabad</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

