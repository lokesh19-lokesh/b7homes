import React, { useState } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Storage'];

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B] block">
            Hyderabad Handcrafted Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight">
            Customer Favourites
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A55] leading-relaxed">
            Explore our most loved furniture pieces, made to order with organic hardwoods and master joinery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="w-full flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none max-w-full px-1">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-[#49362B] text-white shadow-luxury'
                    : 'bg-[#F8F5EF] text-[#5A5A55] hover:text-[#252523] hover:bg-[#EDE7DC] border border-[#D8CBB9]/40'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Product Grid (4 columns on desktop, 2 on tablet/mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Furniture CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setActiveFilter('All')}
            className="inline-flex items-center gap-3 bg-[#F8F5EF] hover:bg-[#49362B] text-[#49362B] hover:text-white border border-[#D8CBB9] py-4 px-8 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-luxury group"
          >
            <span>View All Furniture ({products.length} Designs)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-[11px] text-[#7A7A73] mt-3">
            Every piece is customizable in dimensions, wood polishes and 150+ upholstery fabrics.
          </p>
        </div>
      </div>
    </section>
  );
};

