import React from 'react';
import { useShop } from '../../context/ShopContext';
import { products } from '../../data/products';
import { ArrowRight, Sparkles, Shield, Wrench } from 'lucide-react';

interface MegaMenuProps {
  category: string;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ category, onClose }) => {
  const { setQuickViewProduct, setIsBookingOpen } = useShop();

  const getMenuData = () => {
    switch (category) {
      case 'Living Room':
        return {
          title: 'Living Room Collection',
          subtitle: 'Handcrafted luxury seating & artisanal surfaces',
          subcategories: [
            { name: 'L-Shape Sectional Sofas', desc: 'Custom reversible loungers & modular layouts', tag: 'Bestseller' },
            { name: 'Chesterfield & Tuxedo Sofas', desc: 'Deep tufted Italian upholstery', tag: 'Classic' },
            { name: 'Accent & Lounge Chairs', desc: 'Sculptural seating with brass leg ferrules', tag: '' },
            { name: 'Organic Live-Edge Coffee Tables', desc: 'Natural grain single-slab teak slabs', tag: 'Unique' },
            { name: 'Contemporary TV & Media Consoles', desc: 'Fluted tambour doors with cable bays', tag: '' },
            { name: 'Sofa Cum Beds & Daybeds', desc: 'Space-saving German click-clack frames', tag: 'Smart' },
          ],
          featuredProduct: products.find((p) => p.id === 'royale-velvet-sectional') || products[0],
          craftHighlight: 'Constructed with 40-density high-resilience foam and kiln-dried timber frames.'
        };
      case 'Bedroom':
        return {
          title: 'Bedroom Collection',
          subtitle: 'Restful sanctuaries engineered with silent precision',
          subcategories: [
            { name: 'Hydraulic Storage Cots', desc: 'Effortless German pneumatic gas cylinders', tag: 'Popular' },
            { name: 'Solid Teak Platform Beds', desc: 'Low-profile Japanese & Scandinavian joinery', tag: '' },
            { name: 'Upholstered Designer Headboards', desc: 'Hand-pleated velvet & textured bouclé', tag: 'Bespoke' },
            { name: 'Bedside Nightstands', desc: 'Floating and floor standing solid wood drawers', tag: '' },
            { name: 'Custom Wardrobes & Walk-ins', desc: 'Full-height floor-to-ceiling cabinetry', tag: 'Made to Order' },
            { name: 'Dressers & Vanity Units', desc: 'Hidden organizers and mirror consoles', tag: '' },
          ],
          featuredProduct: products.find((p) => p.id === 'teakwood-hydraulic-bed') || products[1],
          craftHighlight: 'German gas-lift mechanism rated for 150kg lift capacity with 5-year guarantee.'
        };
      case 'Dining Room':
        return {
          title: 'Dining Room Collection',
          subtitle: 'Where conversations and generations gather',
          subcategories: [
            { name: '6 & 8-Seater Dining Tables', desc: 'Solid seasoned Teak & Sheesham slabs', tag: 'Heirloom' },
            { name: 'Bespoke Dining Chairs', desc: 'Contoured lumbar support with linen/leather', tag: '' },
            { name: 'Timber Dining Benches', desc: 'Space-efficient solid wood seating', tag: '' },
            { name: 'Bar Cabinets & Credenzas', desc: 'Stemware racks with fluted glass doors', tag: 'Luxury' },
            { name: 'Crockery Almirahs & Buffets', desc: 'Soft-close German hinges & ambient LED bays', tag: '' },
          ],
          featuredProduct: products.find((p) => p.id === 'nizam-heritage-dining-set') || products[2],
          craftHighlight: 'Finished with food-safe natural heat and water-resistant matte sealant.'
        };
      case 'Storage':
        return {
          title: 'Storage & Credenzas',
          subtitle: 'Architectural fluting and precision concealed fittings',
          subcategories: [
            { name: 'Fluted Tambour Credenzas', desc: 'Curved wood tracks with zero hardware clutter', tag: 'Signature' },
            { name: 'Geometric Wall Bookshelves', desc: 'Solid 25mm thick timber shelves with zero sag', tag: '' },
            { name: 'Display Consoles & Sideboards', desc: 'Concealed touch-latches & brass inlays', tag: '' },
            { name: 'Shoe Cabinets & Entryway Units', desc: 'Ventilated slatted timber compartments', tag: '' },
          ],
          featuredProduct: products.find((p) => p.id === 'tellapur-media-console') || products[3],
          craftHighlight: 'Pre-assembled in factory to ensure 100% door alignment and silent gliding.'
        };
      default:
        return null;
    }
  };

  const data = getMenuData();
  if (!data) return null;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#FFFFFF] border-b border-[#D8CBB9]/60 shadow-luxury-lg z-40 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">
        {/* Subcategories Column (8 cols) */}
        <div className="col-span-8 pr-6 border-r border-[#EDE7DC]">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <h3 className="font-serif text-2xl text-[#252523] font-normal">{data.title}</h3>
              <p className="text-xs text-[#5A5A55] mt-0.5">{data.subtitle}</p>
            </div>
            <a
              href="#collections"
              onClick={onClose}
              className="text-xs font-semibold uppercase tracking-wider text-[#A8875B] hover:text-[#49362B] flex items-center gap-1 transition-colors"
            >
              View Full Catalog <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {data.subcategories.map((sub, idx) => (
              <a
                key={idx}
                href="#collections"
                onClick={onClose}
                className="group/item p-3.5 rounded-xl hover:bg-[#F8F5EF] border border-transparent hover:border-[#EDE7DC] transition-all flex items-start justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#252523] group-hover/item:text-[#A8875B] transition-colors">
                      {sub.name}
                    </span>
                    {sub.tag && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-[#EDE7DC] text-[#49362B] px-1.5 py-0.5 rounded">
                        {sub.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#7A7A73] mt-1 leading-relaxed">{sub.desc}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#A8875B] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all mt-1" />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#EDE7DC] flex items-center justify-between text-xs text-[#49362B]">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#A8875B]" />
              {data.craftHighlight}
            </span>
            <button
              onClick={() => {
                onClose();
                setIsBookingOpen(true);
              }}
              className="font-semibold text-[#A8875B] hover:text-[#49362B] underline decoration-[#A8875B]/40 transition-colors"
            >
              Book Home Measurement Visit &rarr;
            </button>
          </div>
        </div>

        {/* Featured Product Column (4 cols) */}
        <div className="col-span-4 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8875B] block mb-2">
              Featured Craft Showcase
            </span>
            <div className="rounded-2xl overflow-hidden bg-[#F8F5EF] border border-[#EDE7DC] shadow-subtle group/card">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={data.featuredProduct.image}
                  alt={data.featuredProduct.name}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-2.5 right-2.5 bg-[#252523] text-white text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full">
                  Direct Factory
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-serif text-lg text-[#252523] leading-snug line-clamp-1">
                  {data.featuredProduct.name}
                </h4>
                <p className="text-xs text-[#7A7A73] mt-0.5 line-clamp-1">
                  {data.featuredProduct.woodType}
                </p>
                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#EDE7DC]">
                  <span className="font-bold text-sm text-[#252523]">
                    {formatPrice(data.featuredProduct.price)}
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      setQuickViewProduct(data.featuredProduct);
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#A8875B] hover:text-[#49362B] transition-colors"
                  >
                    Quick View &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Sofa Clinic callout in menu */}
          <div className="mt-4 p-3 bg-[#EDE7DC]/50 rounded-xl border border-[#D8CBB9]/60 flex items-center justify-between text-xs">
            <span className="text-[#49362B] font-medium flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#A8875B]" />
              Need to restore existing furniture?
            </span>
            <a
              href="#sofa-clinic"
              onClick={onClose}
              className="text-[#A8875B] font-semibold hover:underline"
            >
              Sofa Clinic &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

