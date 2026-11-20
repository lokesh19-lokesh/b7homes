import React, { useState } from 'react';
import { X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    'https://wa.me/917989594733?text=Hi%20B7%20Homes,%20I%20am%20interested%20in%20your%20bespoke%20furniture%20and%20design%20services.';

  return (
    <aside
      aria-label="WhatsApp live chat support"
      className="fixed bottom-5 right-4 xs:bottom-6 xs:right-6 z-50 flex items-center gap-2.5 select-none"
    >
      {/* Floating Tooltip / Invitation Bubble */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 bg-white text-[#252523] px-3.5 py-2 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#EBE4DC] animate-fadeIn transition-all duration-300">
          <div className="flex flex-col">
            <span className="text-[12px] font-semibold text-[#252523] leading-tight">
              Need Help? Chat with us
            </span>
            <span className="text-[10px] text-[#25D366] font-medium flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              Online • Replies instantly
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#8C827A] hover:text-[#252523] p-1 rounded-full transition-colors ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Right Caret Triangle pointing to WhatsApp Icon */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-white drop-shadow-xs" />
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with B7 Homes on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 xs:w-14 xs:h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.60)] hover:scale-108 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        {/* Ambient Ring Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping pointer-events-none group-hover:hidden" />

        {/* WhatsApp Icon (Official SVG) */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 drop-shadow-xs"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.68.74 5.19 2.03 7.34L2 30l6.88-1.99C11.01 29.28 13.43 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.64c-2.3 0-4.45-.64-6.29-1.76l-.45-.27-4.66 1.35 1.37-4.54-.3-.47C4.47 20.08 3.82 18.1 3.82 16c0-6.72 5.46-12.18 12.18-12.18 6.72 0 12.18 5.46 12.18 12.18 0 6.72-5.46 12.18-12.18 12.18zm6.68-9.12c-.37-.18-2.17-1.07-2.51-1.19-.34-.12-.58-.18-.83.18-.24.37-.95 1.19-1.16 1.44-.21.24-.43.27-.8.09-.37-.18-1.55-.57-2.95-1.82-1.09-.97-1.83-2.17-2.04-2.54-.21-.37-.02-.57.16-.75.17-.17.37-.43.55-.64.18-.21.24-.37.37-.61.12-.24.06-.46-.03-.64-.09-.18-.83-1.99-1.13-2.73-.3-.72-.61-.62-.83-.63h-.71c-.24 0-.64.09-.98.46-.34.37-1.29 1.26-1.29 3.07s1.32 3.56 1.5 3.8c.18.24 2.59 3.96 6.28 5.55.88.38 1.56.6 2.1.77.88.28 1.69.24 2.33.15.71-.11 2.17-.89 2.48-1.74.31-.86.31-1.59.21-1.74-.09-.15-.34-.24-.71-.43z" />
        </svg>

        {/* Small Active Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#10B981] border-2 border-white rounded-full z-20 shadow-xs" />
      </a>
    </aside>
  );
};
