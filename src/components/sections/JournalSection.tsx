import React from 'react';
import { useShop } from '../../context/ShopContext';
import { articles } from '../../data/articles';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const { setActiveArticle } = useShop();

  return (
    <section id="journal" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B] block mb-2">
              The B7 Journal & Design Notes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#252523] font-light tracking-tight">
              Interiors That Inspire.
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A55] mt-2 leading-relaxed">
              Curated perspectives on woodworking mastery, timeless living room aesthetics, and interior longevity.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#A8875B] uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Tellapur Editorial Desk</span>
          </div>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer flex flex-col justify-between bg-[#F8F5EF]/60 rounded-3xl overflow-hidden border border-[#EDE7DC] hover:border-[#A8875B]/60 shadow-subtle hover:shadow-luxury transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-[#EDE7DC]">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#A8875B] font-semibold uppercase tracking-wider">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1 text-[#7A7A73] normal-case font-normal">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#252523] font-normal leading-snug group-hover:text-[#49362B] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A5A55] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More link */}
              <div className="p-6 sm:p-7 pt-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49362B] group-hover:text-[#A8875B] transition-colors border-t border-[#EDE7DC] mt-4">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

