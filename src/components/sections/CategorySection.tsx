import React from 'react';
import { categories } from '../../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategorySection: React.FC = () => {
  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B] block mb-2">
              Bespoke Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight leading-tight">
              Explore Our Collections
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A55] mt-2 leading-relaxed">
              Thoughtfully designed furniture for every corner of your home.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#products"
              className="text-xs font-semibold uppercase tracking-widest text-[#49362B] hover:text-[#A8875B] flex items-center gap-1.5 transition-colors border-b border-[#49362B]/30 pb-0.5 hover:border-[#A8875B]"
            >
              <span>View All 85+ Bespoke Designs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Editorial Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* First Two Cards: 6 cols each (Living Room & Bedroom) */}
          {categories.slice(0, 2).map((cat) => (
            <div
              key={cat.id}
              className="md:col-span-6 group relative rounded-3xl overflow-hidden aspect-[16/11] bg-[#EDE7DC] shadow-subtle hover:shadow-luxury-lg transition-all duration-500 flex flex-col justify-end p-6 sm:p-10"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252523]/90 via-[#252523]/40 to-transparent transition-opacity group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-[#F8F5EF] space-y-2 transform transition-transform duration-300">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D8CBB9] block">
                  {cat.count}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-tight">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#EDE7DC]/90 line-clamp-2 leading-relaxed max-w-md">
                  {cat.description}
                </p>

                <div className="pt-3">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8CBB9] group-hover:text-white transition-colors border-b border-white/30 pb-0.5"
                  >
                    <span>Discover Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Next Three Cards: 4 cols each (Dining Room, Storage, Home Furnishings) */}
          {categories.slice(2, 5).map((cat) => (
            <div
              key={cat.id}
              className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/5] bg-[#EDE7DC] shadow-subtle hover:shadow-luxury-lg transition-all duration-500 flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252523]/90 via-[#252523]/40 to-transparent transition-opacity group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-[#F8F5EF] space-y-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D8CBB9] block">
                  {cat.count}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-tight">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#EDE7DC]/85 line-clamp-2 leading-relaxed">
                  {cat.subtitle}
                </p>

                <div className="pt-2">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D8CBB9] group-hover:text-white transition-colors border-b border-white/30 pb-0.5"
                  >
                    <span>Discover Collection</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

