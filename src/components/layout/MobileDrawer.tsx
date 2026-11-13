import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, ChevronDown, Phone, MapPin, Sparkles, Heart, ShoppingBag, Search, Wrench, Calendar } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { wishlistCount, cartCount, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen, setIsBookingOpen } = useShop();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  const navCategories = [
    {
      name: 'Living Room',
      href: '#collections',
      items: ['L-Shape Sectionals', 'Chesterfield Sofas', 'Accent Chairs', 'Live-Edge Coffee Tables', 'Media Consoles']
    },
    {
      name: 'Bedroom',
      href: '#collections',
      items: ['Hydraulic Storage Beds', 'Solid Teak Cots', 'Custom Wardrobes', 'Nightstands & Dressers']
    },
    {
      name: 'Dining Room',
      href: '#collections',
      items: ['6 & 8-Seater Dining Tables', 'Bespoke Dining Chairs', 'Solid Wood Benches', 'Bar Cabinets']
    },
    {
      name: 'Storage',
      href: '#collections',
      items: ['Fluted Credenzas', 'Bookshelves', 'Display Consoles', 'Shoe Cabinets']
    },
    {
      name: 'Home Furnishings',
      href: '#collections',
      items: ['Artisanal Rugs', 'Velvet Scatter Cushions', 'Warm Accent Lights']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252523]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FFFFFF] shadow-2xl flex flex-col border-r border-[#D8CBB9]/60">
        {/* Header */}
        <div className="p-5 border-b border-[#EDE7DC] flex items-center justify-between bg-[#F8F5EF]/80">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/logo_cropped.png"
              alt="B7 Homes"
              className="w-9 h-9 object-contain rounded-full shadow-inner"
            />
            <div>
              <span className="font-serif text-lg font-bold tracking-widest text-[#252523] block leading-none">
                B7 HOMES
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#A8875B] block mt-0.5">
                Bespoke Carpentry
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7A7A73] hover:text-[#252523] rounded-full hover:bg-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick action bar */}
        <div className="grid grid-cols-3 border-b border-[#EDE7DC] bg-[#F8F5EF]/40 text-center py-2.5 text-xs text-[#49362B]">
          <button
            onClick={() => {
              onClose();
              setIsSearchOpen(true);
            }}
            className="flex flex-col items-center gap-1 border-r border-[#EDE7DC]"
          >
            <Search className="w-4 h-4 text-[#A8875B]" />
            <span>Search</span>
          </button>
          <button
            onClick={() => {
              onClose();
              setIsWishlistOpen(true);
            }}
            className="flex flex-col items-center gap-1 border-r border-[#EDE7DC] relative"
          >
            <Heart className="w-4 h-4 text-[#A8875B]" />
            <span>Wishlist ({wishlistCount})</span>
          </button>
          <button
            onClick={() => {
              onClose();
              setIsCartOpen(true);
            }}
            className="flex flex-col items-center gap-1 relative"
          >
            <ShoppingBag className="w-4 h-4 text-[#A8875B]" />
            <span>Bag ({cartCount})</span>
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <a
            href="#"
            onClick={onClose}
            className="block px-3 py-2.5 text-sm font-semibold text-[#252523] hover:bg-[#F8F5EF] rounded-xl"
          >
            Home
          </a>

          {navCategories.map((cat) => (
            <div key={cat.name} className="border-b border-[#EDE7DC]/60 pb-1">
              <button
                onClick={() => toggleCategory(cat.name)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#252523] hover:bg-[#F8F5EF] rounded-xl transition-colors"
              >
                <span>{cat.name}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#7A7A73] transition-transform duration-200 ${
                    expandedCategory === cat.name ? 'rotate-180 text-[#A8875B]' : ''
                  }`}
                />
              </button>
              {expandedCategory === cat.name && (
                <div className="pl-6 pr-3 py-1 space-y-1 text-xs text-[#5A5A55] bg-[#F8F5EF]/60 rounded-xl mb-2">
                  {cat.items.map((subItem) => (
                    <a
                      key={subItem}
                      href={cat.href}
                      onClick={onClose}
                      className="block py-1.5 hover:text-[#A8875B] transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                  <a
                    href={cat.href}
                    onClick={onClose}
                    className="block py-2 text-[#A8875B] font-semibold tracking-wide border-t border-[#EDE7DC]"
                  >
                    View All {cat.name} &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}

          <a
            href="#bespoke"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#252523] hover:bg-[#F8F5EF] rounded-xl"
          >
            <Sparkles className="w-4 h-4 text-[#A8875B]" />
            <span>Bespoke Furniture</span>
          </a>

          <a
            href="#craftsmanship"
            onClick={onClose}
            className="block px-3 py-2.5 text-sm font-medium text-[#252523] hover:bg-[#F8F5EF] rounded-xl"
          >
            Our Craftsmanship
          </a>

          <a
            href="#sofa-clinic"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#49362B] bg-[#EDE7DC]/50 rounded-xl"
          >
            <Wrench className="w-4 h-4 text-[#A8875B]" />
            <span>The B7 Sofa Clinic</span>
          </a>

          <a
            href="#journal"
            onClick={onClose}
            className="block px-3 py-2.5 text-sm font-medium text-[#252523] hover:bg-[#F8F5EF] rounded-xl"
          >
            Journal & Guides
          </a>

          <a
            href="#faq"
            onClick={onClose}
            className="block px-3 py-2.5 text-sm font-medium text-[#252523] hover:bg-[#F8F5EF] rounded-xl"
          >
            FAQs
          </a>
        </div>

        {/* Drawer Footer with Book Home Visit & Contact */}
        <div className="p-4 border-t border-[#EDE7DC] bg-[#F8F5EF] space-y-3">
          <button
            onClick={() => {
              onClose();
              setIsBookingOpen(true);
            }}
            className="w-full py-2.5 bg-[#49362B] text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Home Visit</span>
          </button>

          <div className="text-center space-y-1 text-xs text-[#5A5A55]">
            <a
              href="tel:+917989594733"
              className="flex items-center justify-center gap-1.5 font-medium text-[#252523] hover:text-[#A8875B]"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8875B]" />
              +91 79895 94733
            </a>
            <p className="text-[10px] text-[#7A7A73]">Tellapur, Hyderabad · Beside SR Pool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

