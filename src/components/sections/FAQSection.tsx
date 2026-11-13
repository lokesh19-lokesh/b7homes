import React, { useState } from 'react';
import { faqs } from '../../data/faqs';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8F5EF] relative border-t border-[#EDE7DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B] block">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A55] leading-relaxed">
            Everything you need to know about our bespoke furniture, materials, home visits, and warranties.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#D8CBB9]/60 overflow-hidden shadow-subtle transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-[#F8F5EF]/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#252523] font-normal leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#D8CBB9] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#49362B] text-white border-[#49362B]' : 'bg-[#F8F5EF] text-[#7A7A73]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-[#5A5A55] leading-relaxed border-t border-[#EDE7DC]/70 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] font-semibold text-[#A8875B] uppercase tracking-wider bg-[#F8F5EF] px-2.5 py-1 rounded-md">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EDE7DC]/60 border border-[#D8CBB9] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-[#252523] font-medium">Have a specific design question?</h4>
            <p className="text-xs text-[#5A5A55] mt-0.5">Our Tellapur carpentry specialists are happy to advise on your space.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917989594733"
              className="px-4 py-2.5 bg-[#49362B] text-white rounded-xl text-xs font-semibold tracking-wider hover:bg-[#35271F] transition-colors"
            >
              Call +91 79895 94733
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

