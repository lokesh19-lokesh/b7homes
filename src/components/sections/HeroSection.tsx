import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface HeroSlide {
  id: string;
  categoryTag: string;
  eyebrow: string;
  headlinePrefix: string;
  headlineAccent: string;
  headlineSuffix?: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  badges: string[];
  image: string;
  imageAlt: string;
}

const slides: HeroSlide[] = [
  {
    id: 'living',
    categoryTag: '01 / LIVING ROOM',
    eyebrow: 'BESPOKE FURNITURE · CRAFTED WITH PURPOSE',
    headlinePrefix: 'Furniture That Makes',
    headlineAccent: 'Your House',
    headlineSuffix: 'Feel Like Home.',
    description:
      'Discover thoughtfully crafted furniture, timeless materials and bespoke designs created around the way you live. Handcrafted in our Tellapur workshops from seasoned solid hardwoods.',
    primaryCta: 'Explore Furniture',
    primaryHref: '#collections',
    secondaryCta: 'Book a Home Visit',
    badges: ['100% Seasoned Hardwood', '3-Year Structural Warranty', 'Free Hyderabad Setup'],
    image: '/assets/hero/hero-slide-1.jpg',
    imageAlt: 'B7 Homes bespoke luxury living room with solid hardwood coffee table and neutral sectional sofa',
  },
  {
    id: 'bedroom',
    categoryTag: '02 / BEDROOM',
    eyebrow: 'SOLID WOOD BEDROOM SUITES · MADE TO ORDER',
    headlinePrefix: 'Serene Sanctuaries Crafted for',
    headlineAccent: 'Restful Living.',
    description:
      'Hydraulic storage beds, floating nightstands and custom armoires engineered with kiln-dried teakwood, fluted timber detailing, and whisper-quiet German hardware.',
    primaryCta: 'Explore Bedroom',
    primaryHref: '#collections',
    secondaryCta: 'Custom Cot Sizing',
    badges: ['German Hydraulic Lifts', 'Termite-Proof Seasoned Teak', 'Custom Mattress Fit'],
    image: '/assets/hero/hero-slide-3.jpg',
    imageAlt: 'Luxury upholstered master cot and fluted wood headboard bedroom suite by B7 Homes',
  },
  {
    id: 'dining',
    categoryTag: '03 / DINING ROOM',
    eyebrow: 'HEIRLOOM DINING SUITES · SOLID TIMBER',
    headlinePrefix: 'Where Every Family Gathering Feels',
    headlineAccent: 'Extraordinary.',
    description:
      'Sculptural solid wood dining tables and bespoke upholstered chairs built to endure laughter, shared feasts, and generations of cherished family memories.',
    primaryCta: 'Explore Dining',
    primaryHref: '#collections',
    secondaryCta: 'Custom Seater Options',
    badges: ['Handcrafted Joinery', 'Food-Grade Matt Sealant', 'Custom 6, 8 & 10 Seaters'],
    image: '/assets/hero/hero-slide-2.jpg',
    imageAlt: 'Handcrafted solid wood dining table with tailored luxury dining chairs by B7 Homes',
  },
  {
    id: 'sofa-clinic',
    categoryTag: '04 / SOFA CLINIC',
    eyebrow: 'THE B7 SOFA CLINIC · RESTORATION & CARE',
    headlinePrefix: 'Give Your Cherished Furniture a',
    headlineAccent: 'Second Life.',
    description:
      'Specialist frame re-engineering, premium fabric replacement, and 40-density high-resilience foam upgrades executed with master craftsmanship directly in Hyderabad.',
    primaryCta: 'Explore Restoration',
    primaryHref: '#sofa-clinic',
    secondaryCta: 'Get Restoration Quote',
    badges: ['Doorstep Pickup & Delivery', '500+ Premium Fabrics', 'Structural Frame Rebuilding'],
    image: '/assets/hero/hero-slide-4.jpg',
    imageAlt: 'Master furniture restoration and bespoke chair upholstery by The B7 Sofa Clinic',
  },
];

const SLIDE_DURATION = 6500; // 6.5 seconds per slide

export const HeroSection: React.FC = () => {
  const { setIsBookingOpen } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Touch gesture support for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Timer & progress bar effect
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left -> next slide
      nextSlide();
    } else if (distance < -50) {
      // Swiped right -> prev slide
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const cleanId = targetId.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const active = slides[currentSlide];

  return (
    <section
      aria-label="B7 Homes Featured Collections Slider"
      className="relative min-h-[640px] sm:min-h-[700px] lg:h-[calc(100vh-130px)] lg:min-h-[720px] lg:max-h-[850px] flex items-center overflow-hidden bg-[#252523] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Crossfade and Subtle Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className={`w-full h-full object-cover object-center filter brightness-[0.74] contrast-[1.04] transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Editorial Gradients: darker on left for clear typography contrast, warm ambience across base */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#252523]/95 via-[#252523]/75 to-transparent lg:w-3/4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252523] via-transparent to-black/35" />
            </div>
          );
        })}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6">
          {/* Eyebrow & Category Index */}
          <div
            key={`eyebrow-${currentSlide}`}
            className="flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-[#A8875B]" />
            <p className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase text-[#D8CBB9] flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A8875B] shrink-0" />
              <span>{active.eyebrow}</span>
            </p>
          </div>

          {/* Large Editorial Headline */}
          <h1
            key={`headline-${currentSlide}`}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#FFFFFF] tracking-tight leading-[1.12] animate-in fade-in slide-in-from-bottom-3 duration-500"
          >
            {active.headlinePrefix}{' '}
            <span className="italic font-normal text-[#EDE7DC]">
              {active.headlineAccent}
            </span>
            {active.headlineSuffix && ` ${active.headlineSuffix}`}
          </h1>

          {/* Editorial Description */}
          <p
            key={`desc-${currentSlide}`}
            className="text-xs sm:text-base lg:text-lg text-[#D8CBB9] font-light leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {active.description}
          </p>

          {/* CTA Buttons */}
          <div
            key={`cta-${currentSlide}`}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Primary CTA */}
            <a
              href={active.primaryHref}
              onClick={(e) => scrollToAnchor(e, active.primaryHref)}
              className="bg-[#A8875B] hover:bg-[#8E6F45] text-white py-3.5 sm:py-4 px-7 sm:px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-3 shadow-luxury transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>{active.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-[#EDE7DC] hover:text-white border border-[#EDE7DC]/30 py-3.5 sm:py-4 px-7 sm:px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 active:scale-95"
            >
              <span>{active.secondaryCta}</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div
            key={`badges-${currentSlide}`}
            className="pt-4 sm:pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-7 text-[11px] sm:text-xs text-[#EDE7DC]/80 animate-in fade-in duration-700"
          >
            {active.badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8875B]" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls: Unified Horizontal Luxury Toolbar */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-2 sm:gap-3">
        {/* Next / Prev Navigation Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-[#A8875B] text-white/80 hover:text-white border border-white/20 hover:border-[#A8875B] backdrop-blur-md flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-[#A8875B] text-white/80 hover:text-white border border-white/20 hover:border-[#A8875B] backdrop-blur-md flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Slide Selector Indicators with Animated Progress Line */}
        <div className="flex items-center gap-1 sm:gap-1.5 bg-black/45 backdrop-blur-md border border-white/15 p-1 sm:p-1.5 rounded-full shadow-lg">
          {slides.map((slide, index) => {
            const isCurrent = index === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.id}`}
                className={`relative px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-1.5 overflow-hidden ${
                  isCurrent
                    ? 'text-white bg-[#A8875B]'
                    : 'text-[#D8CBB9]/70 hover:text-[#EDE7DC] hover:bg-white/10'
                }`}
              >
                <span>0{index + 1}</span>
                <span className="hidden md:inline capitalize text-[10px]">
                  {slide.id === 'sofa-clinic' ? 'Restoration' : slide.id}
                </span>

                {/* Active Slide Progress Indicator */}
                {isCurrent && !isPaused && (
                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden xl:flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer">
        <a
          href="#collections"
          onClick={(e) => scrollToAnchor(e, '#collections')}
          className="flex flex-col items-center gap-1.5 group"
        >
          <span className="text-[9px] uppercase tracking-widest font-medium text-[#D8CBB9]/60 group-hover:text-[#D8CBB9]">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#A8875B] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
