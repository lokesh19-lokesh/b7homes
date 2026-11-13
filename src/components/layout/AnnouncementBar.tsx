import React from 'react';
import { Sparkles, Phone, MapPin, Shield } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#252523] text-[#EDE7DC] text-[11px] sm:text-xs py-2 px-4 border-b border-[#35271F] font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Highlight */}
        <div className="hidden lg:flex items-center gap-4 text-[#D8CBB9]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#A8875B]" />
            Tellapur Factory Workshop, Hyderabad
          </span>
          <span className="text-[#5A5A55]">|</span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#A8875B]" />
            3-Year Structural Warranty
          </span>
        </div>

        {/* Mobile Highlight */}
        <div className="sm:hidden flex-1 flex items-center justify-center gap-1.5 text-center text-[10px] font-medium tracking-wide">
          <Sparkles className="w-3 h-3 text-[#A8875B] shrink-0" />
          <span>Bespoke Furniture</span>
          <span className="text-[#5A5A55]">•</span>
          <span className="text-[#A8875B] font-semibold">Free Hyderabad Setup</span>
        </div>

        {/* Desktop Highlights */}
        <div className="hidden sm:flex flex-1 items-center justify-center gap-3 sm:gap-6 text-center font-medium tracking-wide text-xs">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#A8875B]" />
            <span>Bespoke Furniture</span>
          </span>
          <span className="text-[#5A5A55]">•</span>
          <span>Made to Order</span>
          <span className="text-[#5A5A55]">•</span>
          <span>Premium Craftsmanship</span>
          <span className="text-[#5A5A55]">•</span>
          <span className="text-[#A8875B] font-semibold">Hyderabad Free White-Glove Delivery</span>
        </div>

        {/* Right Phone Call */}
        <div className="hidden md:flex items-center gap-2 text-[#D8CBB9] shrink-0">
          <Phone className="w-3.5 h-3.5 text-[#A8875B]" />
          <a
            href="tel:+917989594733"
            className="hover:text-white transition-colors tracking-wider font-mono text-[11px]"
          >
            +91 79895 94733
          </a>
        </div>
      </div>
    </div>
  );
};

