import React from 'react';
import { useShop } from '../../context/ShopContext';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUp, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsBookingOpen } = useShop();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#252523] text-[#EDE7DC] pt-16 sm:pt-20 pb-12 border-t border-[#35271F] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#3A3A37]">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 border border-[#A8875B]/60 shadow-inner flex items-center justify-center">
                <img
                  src="/assets/logo_cropped.png"
                  alt="B7 Homes Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#F8F5EF] block leading-none">
                  B7 HOMES
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#A8875B] block font-medium mt-1">
                  Hyderabad's Finest Bespoke Carpentry
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D8CBB9] leading-relaxed max-w-sm">
              Thoughtfully crafted furniture for beautiful living spaces. Designed, engineered and manufactured directly in our Hyderabad workshops from seasoned solid hardwoods and high-resilience cushioning.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#D8CBB9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A8875B] shrink-0 mt-0.5" />
                <span>Beside SR Indoor Swimming Pool, Shirdi Homes, Tellapur, Hyderabad, Telangana 502034</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A8875B] shrink-0" />
                <a href="tel:+917989594733" className="hover:text-white transition-colors font-mono">
                  +91 79895 94733
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A8875B] shrink-0" />
                <a href="mailto:contact@b7homes.in" className="hover:text-white transition-colors">
                  contact@b7homes.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>Workshop Hours: 9:30 AM – 7:30 PM (All 7 Days)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#35271F] hover:bg-[#A8875B] flex items-center justify-center text-[#EDE7DC] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#35271F] hover:bg-[#A8875B] flex items-center justify-center text-[#EDE7DC] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/917989594733"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#35271F] hover:bg-emerald-600 flex items-center justify-center text-[#EDE7DC] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#A8875B]">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CBB9]">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Living Room Sofas
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  L-Shape Sectionals
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Hydraulic King Beds
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Solid Teak Dining Sets
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Fluted Media Consoles
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Bespoke Wardrobes
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Home Furnishings
                </a>
              </li>
            </ul>
          </div>

          {/* About & Craft Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#A8875B]">
              Bespoke & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CBB9]">
              <li>
                <a href="#bespoke" className="hover:text-white transition-colors">
                  Made Around You (Custom Dimensions)
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-white transition-colors">
                  Our Tellapur Craftsmanship Story
                </a>
              </li>
              <li>
                <a href="#sofa-clinic" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#A8875B]">✦</span> The B7 Sofa Clinic (Restoration)
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="text-left hover:text-white transition-colors text-[#A8875B] font-medium"
                >
                  Book a Home Measurement Visit
                </button>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">
                  Timber & Interior Journal
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Homes & Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#A8875B]">
              Assurance & Service
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CBB9]">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A8875B]" />
                <span>3-Year Structural Timber Warranty</span>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <span className="text-[#D8CBB9]">White-Glove Hyderabad Assembly</span>
              </li>
              <li>
                <span className="text-[#D8CBB9]">Zero Middleman Factory Pricing</span>
              </li>
              <li>
                <span className="text-[#D8CBB9]">100% Termite Treated Timber</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-2.5 bg-[#A8875B] hover:bg-[#8E6F45] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
              >
                Schedule Free Home Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7A73]">
          <p>© {new Date().getFullYear()} B7 HOMES. All rights reserved. Handcrafted in Hyderabad, India.</p>

          <div className="flex items-center gap-3 text-[11px] text-[#A8875B]">
            <span>UPI</span>
            <span>•</span>
            <span>Visa</span>
            <span>•</span>
            <span>Mastercard</span>
            <span>•</span>
            <span>NetBanking</span>
            <span>•</span>
            <span>Direct NEFT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
