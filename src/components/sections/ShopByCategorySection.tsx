import React, { useRef, useState } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Columns2,
} from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  isPromo?: boolean;
  promoTitle?: string;
  icon: React.ReactNode;
  href: string;
}

// 16 Categories matching reference exactly
const row1Categories: CategoryItem[] = [
  {
    id: 'new',
    name: 'Latest Arrivals',
    isPromo: true,
    promoTitle: 'New',
    icon: (
      <div className="relative flex items-center justify-center w-full h-full">
        <span className="font-serif font-bold text-white text-2xl xs:text-3xl sm:text-3.5xl tracking-tight select-none drop-shadow-sm">
          New
        </span>
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5D77F] absolute -top-1 -right-2 sm:-right-3 animate-twinkle" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none rounded-2xl sm:rounded-3xl" />
      </div>
    ),
    href: '#products',
  },
  {
    id: 'sofas',
    name: 'Sofas',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110 animate-icon-float"
      >
        {/* Sofa Back Cushions */}
        <rect x="7" y="14" width="16" height="15" rx="3" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        <rect x="25" y="14" width="16" height="15" rx="3" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        {/* Tufting Details */}
        <circle cx="15" cy="21" r="1" fill="#A8875B" />
        <circle cx="33" cy="21" r="1" fill="#A8875B" />
        {/* Seat Bench */}
        <rect x="5" y="26" width="38" height="9" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#EDE4DA" />
        {/* Rolled Armrests */}
        <rect x="3" y="21" width="5.5" height="14" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        <rect x="39.5" y="21" width="5.5" height="14" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        {/* Wooden Tapered Legs */}
        <path d="M8 35L6 42" stroke="#A8875B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M40 35L42 42" stroke="#A8875B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 35V42" stroke="#A8875B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'sofa-cum-beds',
    name: 'Sofa Cum Beds',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Upper Backrest Frame */}
        <rect x="6" y="11" width="36" height="11" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        <line x1="18" y1="12" x2="18" y2="21" stroke="#A8875B" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="30" y1="12" x2="30" y2="21" stroke="#A8875B" strokeWidth="1.5" strokeDasharray="2 2" />
        {/* Pull-out Bed Extension */}
        <rect x="4" y="22" width="40" height="14" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#EDE4DA" />
        {/* Foldout Seam */}
        <line x1="4" y1="29" x2="44" y2="29" stroke="currentColor" strokeWidth="1.8" />
        {/* Transform / Mechanism Indicator Arrows */}
        <path d="M21 25.5L24 23L27 25.5" stroke="#A8875B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        {/* Heavy-duty Caster / Sturdy Base Legs */}
        <rect x="8" y="36" width="4" height="5" rx="1" fill="#A8875B" />
        <rect x="36" y="36" width="4" height="5" rx="1" fill="#A8875B" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'coffee-tables',
    name: 'Coffee Tables',
    icon: (
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
        >
          {/* Steaming Coffee Cup on Table */}
          <path d="M23 11H29V14C29 15.6569 27.6569 17 26 17C24.3431 17 23 15.6569 23 14V11Z" fill="#A8875B" />
          <path d="M29 12.5H31C31.5 12.5 32 13 32 13.5C32 14 31.5 14.5 31 14.5H29" stroke="#A8875B" strokeWidth="1.2" />
          {/* Rising Steam Wisps */}
          <path d="M25 6C24.5 7.5 26 8.5 25.5 10" stroke="#A8875B" strokeWidth="1.5" strokeLinecap="round" className="animate-steam-1" />
          <path d="M27.5 5C27 6.5 28.5 7.5 28 9" stroke="#A8875B" strokeWidth="1.5" strokeLinecap="round" className="animate-steam-2" />
          {/* Solid Organic Wood Tabletop */}
          <ellipse cx="24" cy="22" rx="19" ry="7" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
          {/* Lower Shelf / Stretcher */}
          <ellipse cx="24" cy="28" rx="14" ry="4.5" stroke="#A8875B" strokeWidth="1.5" strokeDasharray="3 2" fill="#EDE4DA" />
          {/* Mid-century Angled Legs */}
          <path d="M10 25L8 39" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M38 25L40 39" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M24 29V41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Brass Ferrule Caps */}
          <path d="M8.5 36L8 39" stroke="#A8875B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M39.5 36L40 39" stroke="#A8875B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    href: '#collections',
  },
  {
    id: 'beds',
    name: 'Beds',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110 animate-icon-float"
      >
        {/* Arched Rattan / Teak Headboard */}
        <path d="M7 26V11C7 9.89543 7.89543 9 9 9H39C40.1046 9 41 9.89543 41 11V26" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        {/* Headboard Rattan Slat Details */}
        <line x1="13" y1="12" x2="13" y2="22" stroke="#A8875B" strokeWidth="1.4" opacity="0.8" />
        <line x1="18" y1="12" x2="18" y2="22" stroke="#A8875B" strokeWidth="1.4" opacity="0.8" />
        <line x1="24" y1="12" x2="24" y2="22" stroke="#A8875B" strokeWidth="1.4" opacity="0.8" />
        <line x1="30" y1="12" x2="30" y2="22" stroke="#A8875B" strokeWidth="1.4" opacity="0.8" />
        <line x1="35" y1="12" x2="35" y2="22" stroke="#A8875B" strokeWidth="1.4" opacity="0.8" />
        {/* Pillows */}
        <rect x="10" y="19" width="12" height="6.5" rx="2" stroke="currentColor" strokeWidth="1.8" fill="#FFFFFF" />
        <rect x="26" y="19" width="12" height="6.5" rx="2" stroke="currentColor" strokeWidth="1.8" fill="#FFFFFF" />
        {/* Mattress & Bed Base */}
        <rect x="5" y="26" width="38" height="9" rx="2" stroke="currentColor" strokeWidth="2.2" fill="#EDE4DA" />
        {/* Folded Luxury Duvet Runner */}
        <path d="M27 26H43V35H27V26Z" fill="#A8875B" opacity="0.35" />
        {/* Turned Solid Wood Legs */}
        <rect x="7" y="35" width="4" height="6" rx="1.5" fill="#49362B" />
        <rect x="37" y="35" width="4" height="6" rx="1.5" fill="#49362B" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Wardrobe Outer Frame */}
        <rect x="10" y="6" width="28" height="34" rx="2" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        {/* Center Door Split */}
        <line x1="24" y1="6" x2="24" y2="40" stroke="currentColor" strokeWidth="2" />
        {/* Cane Rattan Panels on Doors (like reference) */}
        <rect x="13" y="10" width="8" height="25" rx="1.5" stroke="#A8875B" strokeWidth="1.4" fill="#EDE4DA" opacity="0.7" />
        <rect x="27" y="10" width="8" height="25" rx="1.5" stroke="#A8875B" strokeWidth="1.4" fill="#EDE4DA" opacity="0.7" />
        {/* Slender Vertical Brass Handles */}
        <line x1="22" y1="21" x2="22" y2="26" stroke="#49362B" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="26" y1="21" x2="26" y2="26" stroke="#49362B" strokeWidth="2.2" strokeLinecap="round" />
        {/* Solid Wooden Feet */}
        <path d="M13 40V43" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M35 40V43" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'tv-units',
    name: 'TV Units',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Flat Screen Display */}
        <rect x="10" y="8" width="28" height="17" rx="1.5" stroke="currentColor" strokeWidth="2.2" fill="#252523" />
        {/* Screen Ambient Glass Sheen */}
        <path d="M12 10L24 23H12V10Z" fill="white" opacity="0.12" />
        {/* TV Stand Riser */}
        <line x1="24" y1="25" x2="24" y2="28" stroke="currentColor" strokeWidth="2.2" />
        <line x1="20" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Low Entertainment Credenza Base */}
        <rect x="5" y="28" width="38" height="11" rx="2" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        {/* Fluted Drawers & Open Media Bay */}
        <line x1="16" y1="28" x2="16" y2="39" stroke="currentColor" strokeWidth="1.8" />
        <line x1="32" y1="28" x2="32" y2="39" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="10.5" cy="33.5" r="1" fill="#A8875B" />
        <circle cx="37.5" cy="33.5" r="1" fill="#A8875B" />
        <rect x="19" y="32" width="10" height="3" rx="0.8" fill="#EDE4DA" />
        {/* Feet */}
        <path d="M8 39V42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M40 39V42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'recliners',
    name: 'Recliners',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:-rotate-3 group-hover:scale-110"
      >
        {/* Recliner Headrest / Wingback */}
        <rect x="14" y="8" width="20" height="9" rx="3.5" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        {/* Deep Padded Backrest */}
        <rect x="13" y="17" width="22" height="13" rx="3" stroke="currentColor" strokeWidth="2.2" fill="#EDE4DA" />
        <line x1="18" y1="20" x2="18" y2="27" stroke="#A8875B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="20" x2="30" y2="27" stroke="#A8875B" strokeWidth="1.5" strokeLinecap="round" />
        {/* Padded Rolled Armrests */}
        <rect x="8" y="21" width="6" height="13" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        <rect x="34" y="21" width="6" height="13" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        {/* Deep Seat Bench */}
        <rect x="12" y="27" width="24" height="7" rx="2" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        {/* Recline Lever Accent */}
        <circle cx="39" cy="27" r="1.2" fill="#A8875B" />
        {/* Extended Footrest Swivel Base */}
        <path d="M14 36L11 41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M34 36L37 41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 41H30" stroke="#A8875B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
];

const row2Categories: CategoryItem[] = [
  {
    id: 'dining-sets',
    name: 'Dining Sets',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Centerpiece Flower Vase */}
        <path d="M23 13C23 11.5 24 10.5 24 10.5C24 10.5 25 11.5 25 13H23Z" fill="#A8875B" />
        <circle cx="24" cy="9" r="1.5" fill="#A8875B" />
        {/* Left Dining Chair */}
        <path d="M7 23V14C7 13 8 12 9 12H11V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="5" y="23" width="8" height="3" rx="1" fill="#EDE4DA" stroke="currentColor" strokeWidth="1.8" />
        <line x1="7" y1="26" x2="6" y2="39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="26" x2="12" y2="39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Dining Table */}
        <rect x="12" y="16" width="24" height="5" rx="1.5" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        <line x1="15" y1="21" x2="14" y2="39" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="33" y1="21" x2="34" y2="39" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* Right Dining Chair */}
        <path d="M41 23V14C41 13 40 12 39 12H37V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="35" y="23" width="8" height="3" rx="1" fill="#EDE4DA" stroke="currentColor" strokeWidth="1.8" />
        <line x1="41" y1="26" x2="42" y2="39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="26" x2="36" y2="39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'lounge-chairs',
    name: 'Lounge Chairs',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 animate-sway"
      >
        {/* Mid-century Teak Z-Arm Frame */}
        <path d="M12 16L18 27H35" stroke="#A8875B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Deep Angled Back Cushion */}
        <rect x="14" y="11" width="10" height="19" rx="3" transform="rotate(-18 14 11)" stroke="currentColor" strokeWidth="2.2" fill="#5A6B5C" />
        {/* Thick Seat Cushion */}
        <rect x="17" y="24" width="20" height="7" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="#435245" />
        {/* Splayed Solid Hardwood Legs */}
        <line x1="19" y1="31" x2="14" y2="41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="33" y1="31" x2="38" y2="41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Brass Cap Accents */}
        <line x1="14.5" y1="39" x2="14" y2="41" stroke="#A8875B" strokeWidth="3" strokeLinecap="round" />
        <line x1="37.5" y1="39" x2="38" y2="41" stroke="#A8875B" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'shoe-racks',
    name: 'Shoe Racks',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Cabinet Outer Frame */}
        <rect x="9" y="8" width="30" height="28" rx="2" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        {/* Center Partition */}
        <line x1="24" y1="8" x2="24" y2="36" stroke="currentColor" strokeWidth="2" />
        {/* Chevron / Herringbone Carved Door Accents */}
        <path d="M12 16L18 20L12 24" stroke="#A8875B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 24L18 28L12 32" stroke="#A8875B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 16L30 20L36 24" stroke="#A8875B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 24L30 28L36 32" stroke="#A8875B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Minimalist Brass Knobs */}
        <circle cx="21" cy="22" r="1.2" fill="#49362B" />
        <circle cx="27" cy="22" r="1.2" fill="#49362B" />
        {/* Brass Hairpin Leg Stand */}
        <path d="M13 36L11 42H16" stroke="#A8875B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 36L37 42H32" stroke="#A8875B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'bookshelves',
    name: 'Bookshelves',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Open Architecture Outer Shelf Unit */}
        <rect x="9" y="7" width="30" height="32" rx="2" stroke="currentColor" strokeWidth="2.2" fill="#FAF5F2" />
        {/* Horizontal Shelves */}
        <line x1="9" y1="18" x2="39" y2="18" stroke="currentColor" strokeWidth="2" />
        <line x1="9" y1="29" x2="39" y2="29" stroke="currentColor" strokeWidth="2" />
        {/* Asymmetric Offset Dividers */}
        <line x1="22" y1="7" x2="22" y2="18" stroke="currentColor" strokeWidth="1.8" />
        <line x1="27" y1="18" x2="27" y2="29" stroke="currentColor" strokeWidth="1.8" />
        {/* Books on Top Shelf */}
        <rect x="12" y="10" width="3" height="8" rx="0.5" fill="#49362B" />
        <rect x="15.5" y="11" width="3" height="7" rx="0.5" fill="#A8875B" />
        {/* Decorative Ceramic Planter on Middle Shelf */}
        <circle cx="15" cy="25" r="2.5" fill="#EDE4DA" stroke="currentColor" strokeWidth="1.2" />
        <path d="M15 22C14 20 16 19 15 17" stroke="#A8875B" strokeWidth="1.4" strokeLinecap="round" />
        {/* Leaning Book on Bottom Shelf */}
        <rect x="31" y="21" width="3" height="8" rx="0.5" fill="#A8875B" />
        <path d="M12 36L15 30H18L15 36H12Z" fill="#49362B" />
        {/* Legs */}
        <path d="M12 39V42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M36 39V42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'study-tables',
    name: 'Study Tables',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Laptop on Desktop */}
        <path d="M13 13H21V19H13Z" fill="#49362B" rx="1" />
        <line x1="11" y1="19" x2="23" y2="19" stroke="#A8875B" strokeWidth="1.5" strokeLinecap="round" />
        {/* Desktop Surface */}
        <rect x="6" y="19" width="36" height="4.5" rx="1" stroke="currentColor" strokeWidth="2.2" fill="#F8F3EE" />
        {/* Left Open Leg */}
        <line x1="10" y1="23.5" x2="10" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Right Drawer Pedestal (3 Drawers) */}
        <rect x="26" y="23.5" width="15" height="16.5" rx="1" stroke="currentColor" strokeWidth="2" fill="#EDE4DA" />
        <line x1="26" y1="29" x2="41" y2="29" stroke="currentColor" strokeWidth="1.6" />
        <line x1="26" y1="34.5" x2="41" y2="34.5" stroke="currentColor" strokeWidth="1.6" />
        {/* Drawer Pulls */}
        <line x1="32" y1="26.5" x2="35" y2="26.5" stroke="#A8875B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="32" y1="31.8" x2="35" y2="31.8" stroke="#A8875B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="32" y1="37.2" x2="35" y2="37.2" stroke="#A8875B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'chest-of-drawers',
    name: 'Chest of Drawers',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Beveled Top Surface */}
        <path d="M6 10H42L40 14H8L6 10Z" stroke="currentColor" strokeWidth="2" fill="#F8F3EE" />
        {/* Dresser Body */}
        <rect x="8" y="14" width="32" height="23" rx="1.5" stroke="currentColor" strokeWidth="2.2" fill="#EDE4DA" />
        {/* 3 Drawer Tiers */}
        <line x1="8" y1="21.5" x2="40" y2="21.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="8" y1="29" x2="40" y2="29" stroke="currentColor" strokeWidth="1.8" />
        {/* Brass Drop Handles (2 per drawer) */}
        <circle cx="16" cy="18" r="1.2" fill="#A8875B" />
        <circle cx="32" cy="18" r="1.2" fill="#A8875B" />
        <circle cx="16" cy="25.5" r="1.2" fill="#A8875B" />
        <circle cx="32" cy="25.5" r="1.2" fill="#A8875B" />
        <circle cx="16" cy="33" r="1.2" fill="#A8875B" />
        <circle cx="32" cy="33" r="1.2" fill="#A8875B" />
        {/* Spindle Turned Legs */}
        <path d="M12 37L10 42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M36 37L38 42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'sideboards',
    name: 'Sideboards',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110"
      >
        {/* Rounded Modern Buffet Body */}
        <rect x="6" y="13" width="36" height="22" rx="4" stroke="currentColor" strokeWidth="2.2" fill="#252523" />
        {/* 2 Arched Inlaid Doors (matching reference) */}
        <path d="M10 31V19C10 16.5 12 15 15 15C18 15 20 16.5 20 19V31H10Z" stroke="#A8875B" strokeWidth="1.6" fill="#F8F3EE" />
        <path d="M28 31V19C28 16.5 30 15 33 15C36 15 38 16.5 38 19V31H28Z" stroke="#A8875B" strokeWidth="1.6" fill="#F8F3EE" />
        {/* Brass Knob Pairs */}
        <circle cx="22" cy="24" r="1.2" fill="#A8875B" />
        <circle cx="26" cy="24" r="1.2" fill="#A8875B" />
        {/* Slender Minimalist Steel Legs */}
        <line x1="12" y1="35" x2="12" y2="41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="36" y1="35" x2="36" y2="41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    href: '#collections',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-[#49362B] group-hover:text-[#A8875B] transition-all duration-300 group-hover:scale-110 animate-icon-float"
      >
        {/* 3D Isometric Euro-Top Mattress Top */}
        <path d="M24 8L41 16L24 24L7 16L24 8Z" stroke="currentColor" strokeWidth="2.2" fill="#FFFFFF" strokeLinejoin="round" />
        {/* Diamond Tufting Stitches */}
        <path d="M19 14L24 16.5L29 14" stroke="#A8875B" strokeWidth="1.4" fill="none" />
        <path d="M15 16L24 20L33 16" stroke="#A8875B" strokeWidth="1.4" fill="none" />
        <circle cx="24" cy="16.5" r="1" fill="#A8875B" />
        <circle cx="19" cy="14" r="0.8" fill="#A8875B" />
        <circle cx="29" cy="14" r="0.8" fill="#A8875B" />
        {/* Euro-top Pillow Edge */}
        <path d="M7 16V20L24 28L41 20V16" stroke="currentColor" strokeWidth="1.8" fill="#FAF5F2" strokeLinejoin="round" />
        {/* Core Pocket Spring Foundation */}
        <path d="M7 20V29L24 37L41 29V20" stroke="currentColor" strokeWidth="2.2" fill="#EDE4DA" strokeLinejoin="round" />
        {/* Breathable Border Vent Stitching */}
        <line x1="15" y1="24.5" x2="15" y2="31" stroke="#A8875B" strokeWidth="1.4" strokeDasharray="1.5 1.5" />
        <line x1="33" y1="24.5" x2="33" y2="31" stroke="#A8875B" strokeWidth="1.4" strokeDasharray="1.5 1.5" />
      </svg>
    ),
    href: '#collections',
  },
];

// All 16 items combined for desktop & grid views
const allCategories = [...row1Categories, ...row2Categories];

// Paired 8 columns for mobile swipe carousel so Row 1 stays on top, Row 2 on bottom
const pairedColumns = row1Categories.map((topItem, index) => ({
  top: topItem,
  bottom: row2Categories[index],
}));

export const ShopByCategorySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // View mode for mobile screens: 'grid' (4x4) or 'scroll' (2-row swipe)
  const [mobileView, setMobileView] = useState<'grid' | 'scroll'>('grid');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
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

  const renderCard = (item: CategoryItem) => (
    <a
      key={item.id}
      href={item.href}
      onClick={(e) => scrollToAnchor(e, item.href)}
      className="group flex flex-col items-center text-center select-none focus:outline-none w-full"
    >
      {/* Rounded Squircle Container */}
      {item.isPromo ? (
        // "New" Promotional Tile
        <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#85334E] via-[#70283E] to-[#4F1929] shadow-[0_4px_14px_rgba(112,40,62,0.22)] flex items-center justify-center p-2.5 xs:p-3 sm:p-4 transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(112,40,62,0.38)] group-hover:-translate-y-1 active:scale-95 overflow-hidden">
          {item.icon}
        </div>
      ) : (
        // Category Card with Warm Ivory/Blush Squircle Container & Luxury Animated Icon
        <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl bg-[#FAF5F2] border border-[#F2EAE4] shadow-[0_2px_8px_rgba(73,54,43,0.04)] flex items-center justify-center p-2.5 xs:p-3 sm:p-4 transition-all duration-300 group-hover:bg-[#F6ECE4] group-hover:border-[#D8CBB9] group-hover:shadow-[0_8px_20px_rgba(73,54,43,0.10)] group-hover:-translate-y-1 active:scale-95 overflow-hidden">
          {/* Subtle light sweep reflection on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover-sheen pointer-events-none" />
          {item.icon}
        </div>
      )}

      {/* Category Name Label */}
      <span className="block w-full text-center font-medium text-[11px] xs:text-xs sm:text-[13px] text-[#252523] group-hover:text-[#A8875B] transition-colors mt-1.5 xs:mt-2 sm:mt-2.5 leading-snug line-clamp-1 px-0.5">
        {item.name}
      </span>
    </a>
  );

  return (
    <section
      aria-label="Shop by Category"
      className="w-full bg-[#FFFFFF] py-6 sm:py-8 lg:py-10 border-b border-[#EDE7DC]/70 select-none"
    >
      <div className="max-w-[1440px] min-[1366px]:max-w-[97%] 2xl:max-w-[1720px] 3xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 min-[1366px]:px-5 2xl:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-baseline gap-2.5">
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#252523] tracking-tight font-sans">
              Shop by Category
            </h2>
            <span className="hidden sm:inline-block text-xs text-[#8C827A] font-medium tracking-wide">
              16 Handcrafted Collections
            </span>
          </div>

          {/* Controls:
              - Mobile: View Switcher (Grid vs Swipe) + Arrow Navigation
              - Desktop: Subtle info tag */}
          <div className="flex items-center gap-2">
            {/* Mobile View Toggle (Grid 4x4 vs Swipe 2-row) */}
            <div className="flex items-center bg-[#F8F5EF] p-0.5 rounded-lg border border-[#EDE7DC] lg:hidden">
              <button
                type="button"
                onClick={() => setMobileView('grid')}
                className={`p-1.5 rounded-md transition-all ${
                  mobileView === 'grid'
                    ? 'bg-white text-[#49362B] shadow-xs'
                    : 'text-[#8C827A] hover:text-[#252523]'
                }`}
                title="Grid View (All 16 categories)"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileView('scroll')}
                className={`p-1.5 rounded-md transition-all ${
                  mobileView === 'scroll'
                    ? 'bg-white text-[#49362B] shadow-xs'
                    : 'text-[#8C827A] hover:text-[#252523]'
                }`}
                title="Scroll View (Swipe carousel)"
                aria-label="Scroll View"
              >
                <Columns2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Swipe Arrows (active in scroll mode) */}
            {mobileView === 'scroll' && (
              <div className="flex items-center gap-1 lg:hidden">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  aria-label="Scroll left"
                  className="w-7 h-7 rounded-full border border-[#D8CBB9] bg-white text-[#252523] hover:bg-[#F8F5EF] flex items-center justify-center transition-colors active:scale-95 shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  aria-label="Scroll right"
                  className="w-7 h-7 rounded-full border border-[#D8CBB9] bg-white text-[#252523] hover:bg-[#F8F5EF] flex items-center justify-center transition-colors active:scale-95 shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (>= lg): Exact 8 Columns x 2 Rows                 */}
        {/* ============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-8 lg:gap-4 xl:gap-5.5 2xl:gap-6">
          {allCategories.map(renderCard)}
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< lg):                                            */}
        {/* Mode A: Clean 4x4 Grid (Default)                               */}
        {/* Mode B: 2-Row Smooth Horizontal Swipe Carousel                 */}
        {/* ============================================================== */}
        <div className="lg:hidden">
          {mobileView === 'grid' ? (
            /* Mode A: 4 Columns x 4 Rows (all 16 visible, zero side-scrolling) */
            <div className="grid grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4">
              {allCategories.map(renderCard)}
            </div>
          ) : (
            /* Mode B: 2-Row Horizontal Swipe Carousel (8 columns of 2 stacked items) */
            <div
              ref={scrollRef}
              className="flex gap-2.5 xs:gap-3 sm:gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-1 px-0.5"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {pairedColumns.map((col, idx) => (
                <div
                  key={`col-${idx}`}
                  className="flex flex-col gap-2.5 xs:gap-3 sm:gap-4 shrink-0 w-[84px] xs:w-[96px] sm:w-[114px] snap-start"
                >
                  {renderCard(col.top)}
                  {renderCard(col.bottom)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
