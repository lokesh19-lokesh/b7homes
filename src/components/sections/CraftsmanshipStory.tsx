import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Sparkles, Hammer, Layers, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export const CraftsmanshipStory: React.FC = () => {
  const { setIsBookingOpen } = useShop();

  const craftSteps = [
    {
      num: '01',
      title: 'Timber Selection & Kiln Seasoning',
      desc: 'Only Grade-A Teakwood, Indian Sheesham, and North American White Ash with moisture balanced below 10% to eliminate warping in Hyderabad summers.'
    },
    {
      num: '02',
      title: 'Mortise & Tenon Precision Joinery',
      desc: 'Traditional wood-to-wood interlocking joints that eliminate structural creaking, outperforming mass-market flat-pack screws and staples.'
    },
    {
      num: '03',
      title: '40-Density HR Cushioning & Springs',
      desc: 'Virgin high-resilience foam paired with pocket coil suspension to deliver enduring bounce back with zero body impression or sagging.'
    },
    {
      num: '04',
      title: 'Multi-Coat Hand Polishing & Wax',
      desc: 'Five stages of progressive sanding followed by natural food-safe oils and matte polyurethane topcoats to highlight organic grain figure.'
    }
  ];

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#A8875B]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B]">
              Manufacturing Story & Heritage
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight leading-tight">
            Craftsmanship You Can Feel.
          </h2>

          <p className="text-sm sm:text-base text-[#5A5A55] leading-relaxed">
            Every detail matters. From carefully selected timber to precise joinery and final finishing, our craftsmanship is at the heart of every piece. Built directly in our integrated woodworking units in Tellapur and Cherlapally, Hyderabad.
          </p>
        </div>

        {/* Asymmetrical Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Images: Asymmetrical collage (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-7 rounded-3xl overflow-hidden shadow-luxury aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80"
                alt="Master carpenter hand-planing solid timber in Hyderabad workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-5 space-y-4 flex flex-col justify-between">
              <div className="rounded-3xl overflow-hidden shadow-card aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80"
                  alt="Precision mortise and tenon wood joinery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="Fine hand polishing and wood finishing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right: The 4 Steps (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl text-[#252523] font-normal">
              The Anatomy of B7 Furniture
            </h3>
            <div className="space-y-4">
              {craftSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 rounded-2xl bg-white border border-[#EDE7DC] shadow-subtle hover:border-[#A8875B]/60 transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-[#A8875B]">{step.num}</span>
                    <h4 className="font-serif text-lg text-[#252523] font-medium leading-snug">{step.title}</h4>
                  </div>
                  <p className="text-xs text-[#5A5A55] mt-1 pl-7 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#49362B] hover:bg-[#35271F] text-white py-3.5 px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-luxury transition-all"
              >
                <span>Visit Our Tellapur Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Verified Brand Numbers Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#FFFFFF] rounded-3xl border border-[#D8CBB9]/60 shadow-subtle text-center">
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-normal text-[#49362B] block">7+</span>
            <span className="text-xs text-[#7A7A73] uppercase tracking-wider font-medium mt-1 block">Years of Carpentry Mastery</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-normal text-[#49362B] block">10,000+</span>
            <span className="text-xs text-[#7A7A73] uppercase tracking-wider font-medium mt-1 block">Custom Pieces Handcrafted</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-normal text-[#49362B] block">40 Density</span>
            <span className="text-xs text-[#7A7A73] uppercase tracking-wider font-medium mt-1 block">High-Resilience HR Foam</span>
          </div>
          <div>
            <span className="font-serif text-3xl sm:text-4xl font-normal text-[#49362B] block">3 Years</span>
            <span className="text-xs text-[#7A7A73] uppercase tracking-wider font-medium mt-1 block">Structural Timber Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

