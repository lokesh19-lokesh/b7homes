import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  image?: string;
  isPromo?: boolean;
  promoTitle?: string;
  href: string;
}

const categoryItems: CategoryItem[] = [
  // Row 1 (8 items)
  {
    id: 'new',
    name: 'Latest Arrivals',
    isPromo: true,
    promoTitle: 'New',
    href: '#products',
  },
  {
    id: 'sofas',
    name: 'Sofas',
    image: '/assets/categories/sofas.jpg',
    href: '#collections',
  },
  {
    id: 'sofa-cum-beds',
    name: 'Sofa Cum Beds',
    image: '/assets/categories/sofa-cum-beds.jpg',
    href: '#collections',
  },
  {
    id: 'coffee-tables',
    name: 'Coffee Tables',
    image: '/assets/categories/coffee-tables.jpg',
    href: '#collections',
  },
  {
    id: 'beds',
    name: 'Beds',
    image: '/assets/categories/beds.jpg',
    href: '#collections',
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    image: '/assets/categories/wardrobes.jpg',
    href: '#collections',
  },
  {
    id: 'tv-units',
    name: 'TV Units',
    image: '/assets/categories/tv-units.jpg',
    href: '#collections',
  },
  {
    id: 'recliners',
    name: 'Recliners',
    image: '/assets/categories/recliners.jpg',
    href: '#collections',
  },

  // Row 2 (8 items)
  {
    id: 'dining-sets',
    name: 'Dining Sets',
    image: '/assets/categories/dining-sets.jpg',
    href: '#collections',
  },
  {
    id: 'lounge-chairs',
    name: 'Lounge Chairs',
    image: '/assets/categories/lounge-chairs.jpg',
    href: '#collections',
  },
  {
    id: 'shoe-racks',
    name: 'Shoe Racks',
    image: '/assets/categories/shoe-racks.jpg',
    href: '#collections',
  },
  {
    id: 'bookshelves',
    name: 'Bookshelves',
    image: '/assets/categories/bookshelves.jpg',
    href: '#collections',
  },
  {
    id: 'study-tables',
    name: 'Study Tables',
    image: '/assets/categories/study-tables.jpg',
    href: '#collections',
  },
  {
    id: 'chest-of-drawers',
    name: 'Chest of Drawers',
    image: '/assets/categories/chest-of-drawers.jpg',
    href: '#collections',
  },
  {
    id: 'sideboards',
    name: 'Sideboards',
    image: '/assets/categories/sideboards.jpg',
    href: '#collections',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    image: '/assets/categories/mattresses.jpg',
    href: '#collections',
  },
];

export const ShopByCategorySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const cleanId = targetId.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Shop by Category"
      className="w-full bg-[#FFFFFF] py-7 sm:py-10 border-b border-[#EDE7DC]/70 select-none"
    >
      <div className="max-w-[1440px] min-[1366px]:max-w-[97%] 2xl:max-w-[1720px] 3xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 min-[1366px]:px-5 2xl:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#252523] tracking-tight font-sans">
              Shop by Category
            </h2>
          </div>

          {/* Mobile/Tablet Swipe Hint & Arrows */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <span className="text-[10px] text-[#8C827A] mr-1 hidden xs:inline">Swipe to explore</span>
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll categories left"
              className="w-7 h-7 rounded-full border border-[#D8CBB9] bg-white text-[#252523] hover:bg-[#F8F5EF] flex items-center justify-center transition-colors active:scale-95 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll categories right"
              className="w-7 h-7 rounded-full border border-[#D8CBB9] bg-white text-[#252523] hover:bg-[#F8F5EF] flex items-center justify-center transition-colors active:scale-95 shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Grid Container:
            - Mobile (< lg): 2-row smooth horizontal swipe carousel
            - Desktop (>= lg): Exact 8-column x 2-row grid matching the reference design */}
        <div
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col auto-cols-[102px] xs:auto-cols-[116px] sm:auto-cols-[130px] lg:grid-cols-8 lg:grid-rows-2 lg:grid-flow-row lg:auto-cols-auto gap-3 sm:gap-4 xl:gap-5 overflow-x-auto lg:overflow-visible scrollbar-none snap-x snap-mandatory py-1 px-0.5"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {categoryItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToAnchor(e, item.href)}
              className="group flex flex-col items-center text-center snap-start focus:outline-none"
            >
              {/* Rounded Squircle Tile */}
              {item.isPromo ? (
                // First "New" Promotional Tile (Burgundy / Plum gradient matching reference)
                <div className="w-full aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#85334E] via-[#70283E] to-[#4F1929] shadow-[0_4px_14px_rgba(112,40,62,0.30)] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group-hover:shadow-[0_6px_20px_rgba(112,40,62,0.45)] group-hover:-translate-y-1 active:scale-95">
                  <span className="font-bold text-white text-2xl xs:text-3xl sm:text-3.5xl tracking-tight select-none">
                    {item.promoTitle}
                  </span>
                </div>
              ) : (
                // Standard Category Tile with Soft Warm Blush/Ivory Squircle Container
                <div className="w-full aspect-square rounded-2xl sm:rounded-3xl bg-[#FAF5F2] border border-[#F2EAE4] shadow-[0_2px_8px_rgba(37,37,35,0.03)] flex items-center justify-center p-2 xs:p-2.5 sm:p-3.5 transition-all duration-300 group-hover:bg-[#F5ECE6] group-hover:border-[#D8CBB9] group-hover:shadow-md group-hover:-translate-y-1 active:scale-95 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-108"
                  />
                </div>
              )}

              {/* Category Label Underneath */}
              <span className="block w-full text-center font-medium text-[11px] xs:text-xs sm:text-[13px] text-[#252523] group-hover:text-[#A8875B] transition-colors mt-2 leading-tight truncate px-0.5">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
