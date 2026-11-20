import React from 'react';
import { useShop } from '../../context/ShopContext';
import { products } from '../../data/products';
import { ArrowRight, Sparkles, Shield, Wrench, Ruler } from 'lucide-react';

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
          subtitle: 'Handcrafted luxury seating, statement sectionals & artisanal surfaces',
          count: '34 Designs',
          subcategories: [
            { name: 'L-Shape Sectional Sofas', desc: 'Custom reversible loungers & modular layouts', tag: 'Bestseller' },
            { name: 'Chesterfield & Tuxedo Sofas', desc: 'Deep tufted Italian upholstery & nailhead trim', tag: 'Classic' },
            { name: 'Accent & Lounge Chairs', desc: 'Sculptural seating with brass leg ferrules', tag: '' },
            { name: 'Organic Live-Edge Coffee Tables', desc: 'Natural grain single-slab teak slabs', tag: 'Unique' },
            { name: 'Contemporary TV & Media Consoles', desc: 'Fluted tambour doors with concealed cable bays', tag: '' },
            { name: 'Sofa Cum Beds & Daybeds', desc: 'Space-saving German click-clack frames', tag: 'Smart' },
          ],
          featuredProduct: products.find((p) => p.id === 'royale-velvet-sectional') || products[0],
          craftHighlight: 'Constructed with 40-density high-resilience foam and kiln-dried timber frames.',
          serviceCallout: 'Need custom sectional dimensions for your living room?',
          serviceAction: 'Book Home Measurement',
        };
      case 'Bedroom':
        return {
          title: 'Bedroom Collection',
          subtitle: 'Restful sanctuaries engineered with silent precision & solid hardwoods',
          count: '28 Designs',
          subcategories: [
            { name: 'Hydraulic Storage Cots', desc: 'Effortless German pneumatic gas cylinders', tag: 'Popular' },
            { name: 'Solid Teak Platform Beds', desc: 'Low-profile Japanese & Scandinavian joinery', tag: '' },
            { name: 'Upholstered Designer Headboards', desc: 'Hand-pleated velvet & textured bouclé', tag: 'Bespoke' },
            { name: 'Bedside Nightstands', desc: 'Floating and floor-standing solid wood drawers', tag: '' },
            { name: 'Custom Wardrobes & Walk-ins', desc: 'Full-height floor-to-ceiling timber cabinetry', tag: 'Made to Order' },
            { name: 'Dressers & Vanity Units', desc: 'Hidden organizers and mirror consoles', tag: '' },
          ],
          featuredProduct: products.find((p) => p.id === 'teakwood-hydraulic-bed') || products[1],
          craftHighlight: 'German gas-lift mechanism rated for 150kg lift capacity with 5-year guarantee.',
          serviceCallout: 'Custom mattress fit or under-bed hydraulic storage required?',
          serviceAction: 'Customize Dimensions',
        };
      case 'Dining Room':
        return {
          title: 'Dining Room Collection',
          subtitle: 'Where conversations linger and generations gather around solid timber',
          count: '22 Designs',
          subcategories: [
            { name: '6 & 8-Seater Dining Tables', desc: 'Solid seasoned Teak & Sheesham slabs', tag: 'Heirloom' },
            { name: 'Bespoke Dining Chairs', desc: 'Contoured lumbar support with linen/leather', tag: '' },
            { name: 'Timber Dining Benches', desc: 'Space-efficient solid wood seating', tag: '' },
            { name: 'Bar Cabinets & Credenzas', desc: 'Stemware racks with fluted glass doors', tag: 'Luxury' },
            { name: 'Crockery Almirahs & Buffets', desc: 'Soft-close German hinges & ambient LED bays', tag: '' },
            { name: 'Breakfast Counter Stools', desc: 'Ergonomic high-back solid wood swivel seating', tag: 'New' },
          ],
          featuredProduct: products.find((p) => p.id === 'nizam-heritage-dining-set') || products[2],
          craftHighlight: 'Finished with food-safe natural heat and water-resistant matte sealant.',
          serviceCallout: 'Have a specific 6, 8 or 10-seater space to furnish?',
          serviceAction: 'Request Custom Sizing',
        };
      case 'Storage':
        return {
          title: 'Storage & Credenzas',
          subtitle: 'Architectural fluting and precision concealed fittings with zero hardware clutter',
          count: '19 Designs',
          subcategories: [
            { name: 'Fluted Tambour Credenzas', desc: 'Curved wood tracks with smooth acoustic sliding', tag: 'Signature' },
            { name: 'Geometric Wall Bookshelves', desc: 'Solid 25mm thick timber shelves with zero sag', tag: '' },
            { name: 'Display Consoles & Sideboards', desc: 'Concealed touch-latches & brushed brass inlays', tag: '' },
            { name: 'Shoe Cabinets & Entryway Units', desc: 'Ventilated slatted timber compartments', tag: '' },
            { name: 'Full-Height Built-in Almirahs', desc: 'Custom internal shelves, lockers & tie racks', tag: 'Custom' },
            { name: 'Study Desks & Credenza Combos', desc: 'Integrated cable management & soft drawers', tag: 'Work' },
          ],
          featuredProduct: products.find((p) => p.id === 'tellapur-media-console') || products[3],
          craftHighlight: 'Pre-assembled in Tellapur factory to ensure 100% door alignment and silent gliding.',
          serviceCallout: 'Custom wall dimensions or built-in alcove requirement?',
          serviceAction: 'Book Free Consultation',
        };
      case 'Furnishings':
        return {
          title: 'Home Furnishings & Decor',
          subtitle: 'Artisanal textiles, ambient lighting, and bespoke handcrafted accents',
          count: '45 Pieces',
          subcategories: [
            { name: 'Hand-Woven Artisanal Rugs', desc: 'Natural wool, jute and silk blend flatweaves', tag: 'Artisanal' },
            { name: 'Velvet & Linen Scatter Cushions', desc: 'Feather-down filled with piped borders', tag: '' },
            { name: 'Warm Ambient Accent Lighting', desc: 'Brushed brass floor lamps & wooden sconces', tag: 'Warmth' },
            { name: 'Handcrafted Wall Mirrors', desc: 'Solid teakwood arched and pebble frame mirrors', tag: '' },
            { name: 'Throws & Textile Accents', desc: 'Organic washed cotton & merino wool throws', tag: '' },
            { name: 'Curated Ceramic Decor', desc: 'Studio pottery and sculptural table centerpieces', tag: 'Handmade' },
          ],
          featuredProduct: products.find((p) => p.id === 'velvet-contour-lounge-chair') || products[4],
          craftHighlight: 'Carefully curated to pair with our solid hardwood furniture collections.',
          serviceCallout: 'Need interior styling assistance for your new home?',
          serviceAction: 'Consult Our Stylist',
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
    <>
      {/* Soft Backdrop Dimmer Overlay to focus user's attention on dropdown */}
      <div
        className="fixed inset-0 top-[110px] bg-[#252523]/35 backdrop-blur-[2px] z-30 transition-opacity duration-300 pointer-events-auto"
        onClick={onClose}
      />

      {/* Main Luxury Dropdown Container */}
      <div
        onMouseEnter={(e) => e.stopPropagation()}
        onMouseLeave={onClose}
        className="absolute top-full left-0 w-full bg-[#F8F5EF] border-b border-[#D8CBB9] shadow-[0_25px_50px_-12px_rgba(37,37,35,0.22)] z-40 animate-in fade-in slide-in-from-top-1 duration-200"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-7">
          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {/* Left Section: Collection Title + 2-Column Subcategories (7 Cols) */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col justify-between pr-0 lg:pr-8 lg:border-r border-[#EDE7DC]">
              <div>
                {/* Header row with Collection name and View Catalog link */}
                <div className="flex items-baseline justify-between pb-3 border-b border-[#EDE7DC]">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-serif text-2xl xl:text-3xl text-[#252523] font-light tracking-tight">
                        {data.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#A8875B] bg-[#EDE7DC] px-2 py-0.5 rounded-full">
                        {data.count}
                      </span>
                    </div>
                    <p className="text-xs text-[#7A7A73] mt-1 font-light leading-relaxed">
                      {data.subtitle}
                    </p>
                  </div>
                  <a
                    href="#collections"
                    onClick={onClose}
                    className="text-xs font-semibold uppercase tracking-wider text-[#A8875B] hover:text-[#49362B] flex items-center gap-1.5 transition-colors shrink-0 group/link"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Subcategories Grid: Clean 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-4">
                  {data.subcategories.map((sub, idx) => (
                    <a
                      key={idx}
                      href="#collections"
                      onClick={onClose}
                      className="group/item p-3 rounded-xl hover:bg-[#FFFFFF] border border-transparent hover:border-[#D8CBB9]/80 transition-all duration-200 flex items-start justify-between"
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
                        <p className="text-xs text-[#7A7A73] mt-0.5 leading-relaxed font-light">
                          {sub.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A8875B] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all mt-1 shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-5 pt-3.5 border-t border-[#EDE7DC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#49362B]">
                <span className="flex items-center gap-2 font-medium">
                  <Shield className="w-4 h-4 text-[#A8875B] shrink-0" />
                  <span>{data.craftHighlight}</span>
                </span>
                <button
                  onClick={() => {
                    onClose();
                    setIsBookingOpen(true);
                  }}
                  className="font-semibold text-[#A8875B] hover:text-[#49362B] underline decoration-[#A8875B]/40 hover:decoration-[#49362B] transition-colors flex items-center gap-1.5"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Book Free In-Home Visit &rarr;</span>
                </button>
              </div>
            </div>

            {/* Right Section: Featured Product Showcase Card (5 Cols) */}
            <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8875B] block">
                    Featured Craft Showcase
                  </span>
                  <span className="text-[10px] font-semibold text-[#49362B] uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-[#D8CBB9]/60 shadow-xs">
                    Tellapur Factory
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-white border border-[#D8CBB9]/80 shadow-subtle group/card transition-all duration-300 hover:shadow-luxury">
                  <div className="aspect-[16/10] overflow-hidden relative bg-[#EDE7DC]">
                    <img
                      src={data.featuredProduct.image}
                      alt={data.featuredProduct.name}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-[#252523]/90 text-white text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs">
                      Direct Factory
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif text-lg text-[#252523] leading-snug line-clamp-1 group-hover/card:text-[#A8875B] transition-colors">
                      {data.featuredProduct.name}
                    </h4>
                    <p className="text-xs text-[#7A7A73] mt-0.5 line-clamp-1 font-light">
                      {data.featuredProduct.woodType}
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#EDE7DC]">
                      <div>
                        <span className="font-bold text-base text-[#252523]">
                          {formatPrice(data.featuredProduct.price)}
                        </span>
                        {data.featuredProduct.originalPrice && (
                          <span className="text-xs text-[#7A7A73] line-through ml-2">
                            {formatPrice(data.featuredProduct.originalPrice)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          setQuickViewProduct(data.featuredProduct);
                        }}
                        className="text-xs font-semibold uppercase tracking-wider text-[#A8875B] hover:text-[#49362B] transition-colors flex items-center gap-1 group/btn"
                      >
                        <span>Quick View</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Consultation / Sofa Clinic Callout Bar */}
              <div className="mt-3.5 p-3 bg-white/70 rounded-xl border border-[#D8CBB9]/70 flex items-center justify-between text-xs">
                <span className="text-[#49362B] font-medium flex items-center gap-1.5 line-clamp-1">
                  <Wrench className="w-3.5 h-3.5 text-[#A8875B] shrink-0" />
                  <span>{data.serviceCallout}</span>
                </span>
                <button
                  onClick={() => {
                    onClose();
                    setIsBookingOpen(true);
                  }}
                  className="text-[#A8875B] font-semibold hover:text-[#49362B] hover:underline shrink-0 ml-2"
                >
                  {data.serviceAction} &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
