import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export const EditorialBanner: React.FC = () => {
  const { setIsBookingOpen } = useShop();

  const scrollToCollections = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#252523] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-luxury-lg text-[#EDE7DC] grid grid-cols-1 lg:grid-cols-12 border border-[#3A3A37]">
          {/* Visual Showcase (approx 60% / 7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[560px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80"
              alt="Bespoke Solid Teak Furniture and Luxury Living Room by B7 Homes"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#252523] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#252523]" />
            
            {/* Floating Editorial Badge */}
            <div className="absolute bottom-6 left-6 bg-[#252523]/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs space-y-1">
              <span className="text-[#A8875B] font-semibold tracking-wider uppercase block text-[10px]">
                Tellapur Master Series
              </span>
              <p className="font-serif text-sm text-white">Kiln-Dried Hardwood & Brass Detailing</p>
            </div>
          </div>

          {/* Editorial Content (approx 40% / 5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#A8875B]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B]">
                  Editorial Feature
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.15]">
                Designed for Living. <br />
                <span className="italic font-normal text-[#D8CBB9]">Crafted to Last.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D8CBB9] leading-relaxed">
                Bring home thoughtfully designed furniture that combines beautiful craftsmanship with everyday comfort. Every piece is precision engineered with traditional joinery, moisture-balanced timber, and high-resilience foam to endure generations of living.
              </p>

              {/* Craft Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#A8875B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#A8875B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white tracking-wide">Seasoned Nagpur Teak & Sheesham</h4>
                    <p className="text-xs text-[#EDE7DC]/70 mt-0.5">Kiln-dried timber treated for Hyderabad weather resistance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#A8875B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#A8875B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white tracking-wide">3-Year Structural Warranty</h4>
                    <p className="text-xs text-[#EDE7DC]/70 mt-0.5">Comprehensive peace of mind directly from the manufacturer.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#A8875B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#A8875B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white tracking-wide">Factory-Direct Savings Up to 40%</h4>
                    <p className="text-xs text-[#EDE7DC]/70 mt-0.5">No retail dealer commissions, middleman cuts, or luxury showroom markup.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={scrollToCollections}
                className="bg-[#A8875B] hover:bg-[#8E6F45] text-white py-3.5 px-7 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-luxury group"
              >
                <span>Discover Our Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-transparent hover:bg-white/10 text-[#EDE7DC] border border-white/20 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-widest text-center transition-colors"
              >
                Book Home Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

