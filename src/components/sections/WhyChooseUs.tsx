import React from 'react';
import { Compass, Sparkles, ShieldCheck, Truck, Factory, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Compass,
      title: 'Bespoke Craftsmanship',
      desc: 'Designed around your exact preferences, room measurements, and lifestyle rather than mass-produced compromises.'
    },
    {
      icon: Sparkles,
      title: 'Premium Materials',
      desc: '100% seasoned solid Teakwood, Indian Sheesham, 40-density high-resilience foam, and European hardware.'
    },
    {
      icon: Factory,
      title: 'Factory-Direct Value',
      desc: 'Manufactured in our own Tellapur & Cherlapally workshops, eliminating 30-40% luxury showroom and middleman margins.'
    },
    {
      icon: Truck,
      title: 'White-Glove Delivery',
      desc: 'Complimentary room placement, expert leveling, and professional installation by our trained crew across Hyderabad.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FFFFFF] relative border-t border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B] block">
            The B7 Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight">
            Why Choose B7 Homes
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A55] leading-relaxed">
            The reliability of integrated manufacturing meets the luxury of bespoke architectural carpentry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F5EF] p-8 rounded-3xl border border-[#EDE7DC] hover:border-[#A8875B]/60 shadow-subtle hover:shadow-luxury transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#A8875B] mb-6 shadow-sm group-hover:bg-[#49362B] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#252523] font-normal mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5A55] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDE7DC] flex items-center gap-1.5 text-[11px] font-semibold text-[#A8875B] uppercase tracking-wider">
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

