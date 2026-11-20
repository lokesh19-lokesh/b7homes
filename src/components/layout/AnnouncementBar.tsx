import React from 'react';
import { Sparkles, Phone, MapPin, Shield } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#252523] text-[#EDE7DC] text-[11px] py-2 px-4 sm:px-6 lg:px-8 border-b border-[#35271F] font-sans">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        {/* Left Highlight (visible on wide screens) */}
        <div className="hidden xl:flex items-center gap-3 text-[#D8CBB9] whitespace-nowrap shrink-0">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#A8875B]" />
            Tellapur Workshop, Hyderabad
          </span>
          <span className="text-[#5A5A55]">|</span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-[#A8875B]" />
            3-Year Warranty
          </span>
        </div>

        {/* Center Highlights: Clean, single line, no wrapping */}
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4 text-center font-medium tracking-wide whitespace-nowrap overflow-hidden text-[10px] sm:text-[11px]">
          <span className="flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-3 h-3 text-[#A8875B]" />
            <span>Bespoke Furniture</span>
          </span>
          <span className="text-[#5A5A55]">•</span>
          <span className="shrink-0">Made to Order</span>
          <span className="text-[#5A5A55] hidden sm:inline">•</span>
          <span className="hidden sm:inline shrink-0">Premium Craftsmanship</span>
          <span className="text-[#5A5A55] hidden lg:inline">•</span>
          <span className="text-[#A8875B] font-semibold hidden lg:inline shrink-0">Hyderabad Free White-Glove Setup</span>
        </div>

        {/* Right Phone Call */}
        <div className="hidden lg:flex items-center gap-2 text-[#D8CBB9] whitespace-nowrap shrink-0">
          <Phone className="w-3 h-3 text-[#A8875B]" />
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
