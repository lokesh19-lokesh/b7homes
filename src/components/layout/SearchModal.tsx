import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { products } from '../../data/products';
import { Search, X, Star, ArrowRight, Tag } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useShop();
  const [searchTerm, setSearchTerm] = useState('');

  const popularSearches = ['Teak Dining', 'L-Shape Sofa', 'Hydraulic Bed', 'Sofa Clinic', 'Media Console', 'Chesterfield'];

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.woodType.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-[#252523]/70 backdrop-blur-sm"
        onClick={() => {
          setIsSearchOpen(false);
          setSearchTerm('');
        }}
      />

      <div className="relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl shadow-luxury-lg max-w-2xl w-full overflow-hidden border border-[#D8CBB9]/60 z-10 flex flex-col">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EDE7DC] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#A8875B] shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search bespoke sofas, hydraulic beds, solid teak dining..."
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base text-[#252523] placeholder-[#7A7A73] outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#7A7A73] hover:text-[#252523] p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setSearchTerm('');
            }}
            className="p-1.5 text-[#7A7A73] hover:text-[#252523] rounded-full hover:bg-[#F8F5EF]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-[#F8F5EF]/60 border-b border-[#EDE7DC] flex items-center gap-2 overflow-x-auto">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7A73] shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3 text-[#A8875B]" /> Popular:
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="text-xs bg-white hover:bg-[#EDE7DC] text-[#49362B] px-2.5 py-1 rounded-full border border-[#D8CBB9]/60 shrink-0 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-5">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-8 text-[#7A7A73]">
              <p className="text-xs uppercase tracking-widest text-[#A8875B]">B7 Homes Furniture Catalog</p>
              <p className="text-sm mt-1 text-[#252523]">Type keyword above to explore custom solid wood designs</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-[#7A7A73]">
              <p className="font-serif text-lg text-[#252523]">No designs matched "{searchTerm}"</p>
              <p className="text-xs mt-1">We can custom-build any design to your specifications!</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-[#7A7A73] font-medium px-1">
                Found {filteredProducts.length} handcrafted {filteredProducts.length === 1 ? 'piece' : 'pieces'}:
              </p>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchTerm('');
                    setQuickViewProduct(product);
                  }}
                  className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#F8F5EF] cursor-pointer transition-colors border border-transparent hover:border-[#EDE7DC] group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-lg object-cover border border-[#EDE7DC] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-[#A8875B] uppercase tracking-wider">
                        {product.category}
                      </span>
                      <div className="flex items-center text-[10px] text-amber-500 font-medium">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" />
                        {product.rating}
                      </div>
                    </div>
                    <h4 className="font-serif text-base text-[#252523] group-hover:text-[#A8875B] truncate transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#7A7A73] truncate">{product.woodType}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-sm text-[#252523] block">{formatPrice(product.price)}</span>
                    <span className="text-[10px] text-[#A8875B] flex items-center gap-0.5 justify-end">
                      Quick View <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

