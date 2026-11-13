import React, { useEffect, useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowDown, ArrowRight, Sparkles, Shield, MapPin } from 'lucide-react';
import gsap from 'gsap';

export const HeroSection: React.FC = () => {
  const { setIsBookingOpen } = useShop();
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Subtle parallax on scroll
      const handleScroll = () => {
        if (imageRef.current) {
          const scrollY = window.scrollY;
          if (scrollY < 900) {
            imageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToCollections = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[720px] lg:min-h-[820px] lg:max-h-[900px] flex items-center overflow-hidden bg-[#252523]"
    >
      {/* Background Lifestyle Image with warm luxury grading */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85"
          alt="Contemporary Indian Luxury Living Room with Bespoke Furniture by B7 Homes"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.03]"
        />
        {/* Editorial Gradients: darker on left for readability, warm amber tint on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#252523]/95 via-[#252523]/70 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252523] via-transparent to-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex items-center gap-2">
            <span className="w-5 sm:w-8 h-[1px] bg-[#A8875B]" />
            <p className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase text-[#D8CBB9] flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A8875B]" />
              <span>BESPOKE FURNITURE · CRAFTED WITH PURPOSE</span>
            </p>
          </div>

          {/* Large Editorial Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light text-[#FFFFFF] tracking-tight leading-[1.15]"
          >
            Furniture That Makes <br />
            <span className="italic font-normal text-[#EDE7DC]">Your House</span> Feel Like Home.
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="text-xs sm:text-base lg:text-lg text-[#D8CBB9] font-light leading-relaxed max-w-xl"
          >
            Discover thoughtfully crafted furniture, timeless materials and bespoke designs created around the way you live. Handcrafted in our Tellapur workshops from seasoned solid hardwoods.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
          >
            {/* Primary CTA */}
            <a
              href="#collections"
              onClick={scrollToCollections}
              className="bg-[#A8875B] hover:bg-[#8E6F45] text-white py-3.5 sm:py-4 px-7 sm:px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-3 shadow-luxury transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>Explore Furniture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-[#EDE7DC] hover:text-white border border-[#EDE7DC]/30 py-3.5 sm:py-4 px-7 sm:px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300"
            >
              <span>Book a Home Visit</span>
            </button>
          </div>

          {/* Quality Trust Badges */}
          <div
            ref={badgesRef}
            className="pt-4 sm:pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-[#EDE7DC]/80"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8875B]" />
              <span className="font-medium">100% Seasoned Hardwood</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8875B]" />
              <span className="font-medium">3-Year Structural Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8875B]" />
              <span className="font-medium">Free Hyderabad Setup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
        <a href="#collections" onClick={scrollToCollections} className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-[#A8875B] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

