import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { AnnouncementBar } from './AnnouncementBar';
import { MegaMenu } from './MegaMenu';
import { MobileDrawer } from './MobileDrawer';
import { SearchModal } from './SearchModal';
import { Search, Heart, ShoppingBag, User, Menu, Phone, Sparkles, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlistCount,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsBookingOpen,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaNavItems = [
    { label: 'Living Room', id: 'Living Room' },
    { label: 'Bedroom', id: 'Bedroom' },
    { label: 'Dining Room', id: 'Dining Room' },
    { label: 'Storage', id: 'Storage' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Announcement Bar */}
        <AnnouncementBar />

        {/* Main Header Bar */}
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-subtle border-b border-[#D8CBB9]/60 py-2 sm:py-2.5'
              : 'bg-[#F8F5EF] border-b border-[#EDE7DC] py-2.5 sm:py-3'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Mobile menu trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-1.5 text-[#252523] hover:text-[#A8875B] -ml-1 transition-colors shrink-0"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <a
                href="#"
                className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A8875B] rounded-full"
                aria-label="B7 HOMES — Hyderabad's Finest Bespoke Carpentry"
                title="B7 HOMES"
              >
                <img
                  src="/assets/logo.png"
                  alt="B7 HOMES"
                  className={`object-contain rounded-full transition-all duration-300 group-hover:scale-105 drop-shadow-sm ${
                    isScrolled
                      ? 'h-12 w-12 sm:h-14 sm:w-14 xl:h-16 xl:w-16'
                      : 'h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 xl:h-20 xl:w-20'
                  }`}
                />
              </a>
            </div>

            {/* Center: Desktop Navigation with generous luxury breathing room */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 min-w-0">
              {/* Furniture Categories with Mega Menu Hover */}
              {megaNavItems.map(({ label, id }) => (
                <div
                  key={id}
                  className="relative py-2 group"
                  onMouseEnter={() => setActiveMegaCategory(id)}
                >
                  <a
                    href="#collections"
                    className={`text-[11px] xl:text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1 whitespace-nowrap transition-colors py-1 ${
                      activeMegaCategory === id ? 'text-[#A8875B]' : 'text-[#252523] hover:text-[#A8875B]'
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown className="w-3 h-3 text-[#7A7A73] transition-transform duration-200 group-hover:rotate-180 shrink-0" />
                  </a>
                </div>
              ))}

              <a
                href="#collections"
                className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#252523] hover:text-[#A8875B] whitespace-nowrap transition-colors py-2"
              >
                Furnishings
              </a>

              <a
                href="#craftsmanship"
                className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#252523] hover:text-[#A8875B] whitespace-nowrap transition-colors py-2"
              >
                Craftsmanship
              </a>

              <a
                href="#sofa-clinic"
                className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#A8875B] hover:text-[#49362B] whitespace-nowrap transition-colors py-2 inline-flex items-center gap-1"
              >
                <span>Sofa Clinic</span>
              </a>
            </div>

            {/* Right: Actions (Search, Account, Wishlist, Bag, Consultation) */}
            <div className="flex items-center gap-1 sm:gap-2 xl:gap-3 shrink-0">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#252523] hover:text-[#A8875B] transition-colors rounded-full hover:bg-black/5"
                aria-label="Search catalog"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="p-2 text-[#252523] hover:text-[#A8875B] transition-colors rounded-full hover:bg-black/5 hidden sm:block"
                  aria-label="Account details"
                >
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                {isAccountOpen && (
                  <div
                    onMouseLeave={() => setIsAccountOpen(false)}
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-luxury-lg border border-[#D8CBB9]/60 p-4 text-xs z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="pb-3 border-b border-[#EDE7DC]">
                      <p className="font-semibold text-[#252523] text-sm">B7 Customer Desk</p>
                      <p className="text-[#7A7A73] mt-0.5">Tellapur Unit, Hyderabad</p>
                    </div>
                    <div className="py-2.5 space-y-2">
                      <a
                        href="tel:+917989594733"
                        className="flex items-center gap-2 text-[#49362B] hover:text-[#A8875B] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#A8875B]" />
                        <span>Call +91 79895 94733</span>
                      </a>
                      <a
                        href="https://wa.me/917989594733?text=Hi%20B7%20Homes,%20I%20am%20interested%20in%20custom%20furniture."
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">W</span>
                        <span>WhatsApp Furniture Desk</span>
                      </a>
                    </div>
                    <div className="pt-2 border-t border-[#EDE7DC]">
                      <button
                        onClick={() => {
                          setIsAccountOpen(false);
                          setIsBookingOpen(true);
                        }}
                        className="w-full text-center py-2 bg-[#F8F5EF] text-[#49362B] hover:bg-[#EDE7DC] rounded-lg font-medium transition-colors"
                      >
                        Book Home Consultation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="p-2 text-[#252523] hover:text-rose-600 transition-colors rounded-full hover:bg-black/5 relative"
                aria-label={`Saved designs (${wishlistCount})`}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-[#252523] hover:text-[#A8875B] transition-colors rounded-full hover:bg-black/5 relative"
                aria-label={`Shopping bag (${cartCount} items)`}
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-[#49362B] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Desktop CTA: Book Visit */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="hidden xl:flex items-center gap-1.5 bg-[#49362B] hover:bg-[#35271F] text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 shadow-sm ml-2 whitespace-nowrap shrink-0 active:scale-95"
              >
                <Sparkles className="w-3 h-3 text-[#D8CBB9] shrink-0" />
                <span>Book Visit</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mega Menu Dropdown */}
        {activeMegaCategory && (
          <MegaMenu
            category={activeMegaCategory}
            onClose={() => setActiveMegaCategory(null)}
          />
        )}
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Global Search Modal */}
      <SearchModal />
    </>
  );
};
