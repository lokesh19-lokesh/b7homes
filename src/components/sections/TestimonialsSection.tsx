import React, { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B] block">
            Customer Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight">
            Stories From Our Homes.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A55] leading-relaxed">
            Real feedback from homeowners and interior enthusiasts across Hyderabad.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFFFFF] rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-14 border border-[#D8CBB9]/60 shadow-luxury-lg relative transition-all duration-500">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-[#EDE7DC] pointer-events-none">
              <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-semibold text-[#49362B] ml-2">
                  5.0 Verified Purchase
                </span>
              </div>

              {/* Review Text */}
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#252523] font-normal leading-relaxed italic">
                "{current.review}"
              </p>

              {/* Author & Product */}
              <div className="pt-6 border-t border-[#EDE7DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {current.avatar && (
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#A8875B]/30"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif text-lg font-bold text-[#252523]">
                        {current.name}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-xs text-[#7A7A73]">
                      {current.location} · {current.date}
                    </p>
                  </div>
                </div>

                <div className="bg-[#F8F5EF] px-4 py-2 rounded-xl border border-[#EDE7DC] text-xs text-[#49362B] self-start sm:self-auto">
                  <span className="text-[#7A7A73] block text-[10px] uppercase font-semibold">Craft Selected</span>
                  <span className="font-medium">{current.product}</span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#EDE7DC]">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#49362B]' : 'w-2 bg-[#D8CBB9] hover:bg-[#A8875B]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-[#D8CBB9] text-[#252523] hover:bg-[#F8F5EF] hover:border-[#A8875B] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-[#D8CBB9] text-[#252523] hover:bg-[#F8F5EF] hover:border-[#A8875B] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

