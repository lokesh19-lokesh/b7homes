import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { SwatchPicker, woodSwatches, fabricSwatches } from '../ui/SwatchPicker';
import { Ruler, Palette, Sparkles, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';

export const BespokeSection: React.FC = () => {
  const { setIsBookingOpen } = useShop();
  const [selectedWood, setSelectedWood] = useState<string>('Seasoned CP Teak');
  const [selectedFabric, setSelectedFabric] = useState<string>('Italian Emerald Suede');

  const activeWood = woodSwatches.find((w) => w.name === selectedWood) || woodSwatches[0];
  const activeFabric = fabricSwatches.find((f) => f.name === selectedFabric) || fabricSwatches[0];

  const bespokeFeatures = [
    {
      icon: Ruler,
      title: 'Custom Dimensions',
      description: 'Furniture tailored to your exact floor plan, ceiling height, and wall clearance down to the millimeter.'
    },
    {
      icon: Palette,
      title: 'Materials & Finishes',
      description: 'Handpick seasoned Teak, Sheesham, or Ashwood paired with over 150+ stain-resistant European upholstery fabrics.'
    },
    {
      icon: Sparkles,
      title: 'Personalised Design',
      description: 'Co-create with our Tellapur master carpenters to match your architecture, aesthetic sensibilities, and lifestyle.'
    }
  ];

  return (
    <section id="bespoke" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B] block">
            The Bespoke Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight">
            Made Around You.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A55] leading-relaxed">
            Your home deserves furniture that fits your space, style and everyday life. Discover the freedom of bespoke design directly from our Hyderabad workshops.
          </p>
        </div>

        {/* 3 Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {bespokeFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F5EF] p-8 rounded-3xl border border-[#EDE7DC] hover:border-[#A8875B]/60 shadow-subtle hover:shadow-luxury transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#A8875B] mb-6 shadow-sm group-hover:bg-[#49362B] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#252523] font-normal mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5A55] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Material & Swatch Explorer Box */}
        <div className="bg-[#F8F5EF] rounded-3xl p-6 sm:p-12 border border-[#D8CBB9]/60 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Swatch Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A8875B]">
              <Sliders className="w-4 h-4" />
              <span>Interactive Swatch Explorer</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#252523] font-normal">
              Touch, Feel & Customize Your Finishes
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A55] leading-relaxed">
              Explore how your chosen timber tone pairs with bespoke Italian upholstery. We bring these physical samples directly to your doorstep during home consultations.
            </p>

            <SwatchPicker
              selectedWood={selectedWood}
              onSelectWood={setSelectedWood}
              selectedFabric={selectedFabric}
              onSelectFabric={setSelectedFabric}
            />

            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#49362B] hover:bg-[#35271F] text-white py-3.5 px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-luxury transition-all"
              >
                <span>Request Swatches at Home</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live Preview Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EDE7DC] shadow-card space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A7A73] block">
              Live Customization Summary
            </span>

            {/* Visual Color Chips */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F5EF] border border-[#EDE7DC]">
              <div
                className="w-14 h-14 rounded-xl shadow-inner border border-black/10 flex items-center justify-center text-white"
                style={{ backgroundColor: activeWood.colorHex }}
              >
                <span className="text-[9px] uppercase font-bold text-center px-1 drop-shadow">Timber</span>
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold text-[#A8875B]">Hardwood</span>
                <h4 className="text-sm font-semibold text-[#252523]">{activeWood.name}</h4>
                <p className="text-[11px] text-[#7A7A73]">{activeWood.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F5EF] border border-[#EDE7DC]">
              <div
                className="w-14 h-14 rounded-xl shadow-inner border border-black/10 flex items-center justify-center text-white"
                style={{ backgroundColor: activeFabric.colorHex }}
              >
                <span className={`text-[9px] uppercase font-bold text-center px-1 drop-shadow ${activeFabric.colorHex === '#EAE1D2' ? 'text-[#252523]' : 'text-white'}`}>
                  Fabric
                </span>
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold text-[#A8875B]">Upholstery</span>
                <h4 className="text-sm font-semibold text-[#252523]">{activeFabric.name}</h4>
                <p className="text-[11px] text-[#7A7A73]">{activeFabric.description}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#EDE7DC] text-xs text-[#5A5A55] space-y-1.5">
              <div className="flex justify-between">
                <span>Production Facility:</span>
                <span className="font-semibold text-[#252523]">Tellapur, Hyderabad</span>
              </div>
              <div className="flex justify-between">
                <span>Cushion Density:</span>
                <span className="font-semibold text-[#252523]">40 Density High-Resilience</span>
              </div>
              <div className="flex justify-between">
                <span>Timber Moisture:</span>
                <span className="font-semibold text-emerald-700">&lt; 10% Kiln-Balanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

