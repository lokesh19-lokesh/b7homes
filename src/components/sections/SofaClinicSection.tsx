import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Wrench, Sparkles, CheckCircle2, ArrowRight, RefreshCw, ShieldCheck, Truck } from 'lucide-react';

export const SofaClinicSection: React.FC = () => {
  const { setIsBookingOpen } = useShop();
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  const restorationPillars = [
    {
      title: 'Complete Framework Renovation',
      desc: 'Total timber joint re-gluing, internal mortise reinforcement, and termite re-treatment of legacy frames.'
    },
    {
      title: '40-Density HR Foam Upgrade',
      desc: 'Complete removal of collapsed old foam and replacement with premium 40-density high-resilience foam.'
    },
    {
      title: 'Italian Upholstery Re-stitching',
      desc: 'Over 150+ stain-resistant velvets, Italian suedes, textured bouclés, and genuine leather selections.'
    },
    {
      title: 'Doorstep Pickup & White-Glove Return',
      desc: 'Free transit pickup from your Hyderabad residence, factory rejuvenation, and safe return installation.'
    }
  ];

  return (
    <section id="sofa-clinic" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-[#EDE7DC] text-[#A8875B]">
              <Wrench className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B]">
              The B7 Sofa Clinic · Restoration Division
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight leading-tight">
            Give Your Furniture <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#49362B]">a New Life.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A5A55] leading-relaxed">
            Thoughtful furniture restoration, professional upholstery and expert repair to bring your favourite furniture back to life. Handled with master precision in our Tellapur factory workshop.
          </p>
        </div>

        {/* Grid: Interactive Before / After + 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Interactive Before & After Visual (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg aspect-[16/10] bg-[#252523] border border-[#D8CBB9]/60">
              {viewMode === 'after' ? (
                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80"
                  alt="Restored Luxury Sofa by B7 Sofa Clinic"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80"
                  alt="Sofa undergoing restoration in workshop"
                  className="w-full h-full object-cover transition-opacity duration-500 filter sepia-[0.3]"
                />
              )}

              {/* Status Pill on Image */}
              <div className="absolute top-4 left-4 bg-[#252523]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white border border-white/20 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${viewMode === 'after' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <span>{viewMode === 'after' ? 'AFTER: Restored with 40D Foam & Velvet' : 'BEFORE: Stripped to Core Timber Frame'}</span>
              </div>

              {/* Toggle Buttons Floating at Bottom */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-luxury flex items-center gap-1 border border-[#D8CBB9]/60">
                <button
                  type="button"
                  onClick={() => setViewMode('before')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    viewMode === 'before'
                      ? 'bg-[#49362B] text-white shadow-sm'
                      : 'text-[#5A5A55] hover:text-[#252523]'
                  }`}
                >
                  Before Frame
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('after')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    viewMode === 'after'
                      ? 'bg-[#A8875B] text-white shadow-sm'
                      : 'text-[#5A5A55] hover:text-[#252523]'
                  }`}
                >
                  Restored Result
                </button>
              </div>
            </div>

            {/* Quick Caption */}
            <div className="flex items-center justify-between text-xs text-[#7A7A73] px-2">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-[#A8875B]" />
                Toggle between Before & Restored states above
              </span>
              <span className="text-[#49362B] font-medium">Over 1,200+ Sofas Restored in Hyderabad</span>
            </div>
          </div>

          {/* 4 Pillars List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {restorationPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#F8F5EF] border border-[#EDE7DC] hover:border-[#A8875B]/60 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 text-[#A8875B] shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#252523] font-medium leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#5A5A55] mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto bg-[#49362B] hover:bg-[#35271F] text-white py-3.5 px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-luxury transition-all"
              >
                <span>Request Sofa Clinic Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

