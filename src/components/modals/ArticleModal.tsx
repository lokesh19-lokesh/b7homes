import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Clock, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { activeArticle, setActiveArticle, addToast } = useShop();

  if (!activeArticle) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Article Link Copied', 'Link has been copied to your clipboard.', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      <div
        className="fixed inset-0 bg-[#252523]/70 backdrop-blur-sm"
        onClick={() => setActiveArticle(null)}
      />

      <div className="relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl shadow-luxury-lg max-w-3xl w-full overflow-hidden border border-[#D8CBB9]/60 z-10 max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="p-4 sm:p-6 border-b border-[#EDE7DC] flex items-center justify-between bg-[#F8F5EF]/60">
          <button
            onClick={() => setActiveArticle(null)}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#49362B] hover:text-[#A8875B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-[#7A7A73] hover:text-[#252523] rounded-full hover:bg-white transition-colors"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveArticle(null)}
              className="p-2 text-[#7A7A73] hover:text-[#252523] rounded-full hover:bg-white transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A8875B] bg-[#F8F5EF] px-3 py-1 rounded-full border border-[#D8CBB9]/40">
              {activeArticle.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl text-[#252523] font-normal leading-tight">
              {activeArticle.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A7A73] pt-2 border-b border-[#EDE7DC] pb-4">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#A8875B]" />
                {activeArticle.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {activeArticle.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {activeArticle.readTime}
              </span>
            </div>
          </div>

          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-card">
            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-base sm:text-lg font-serif italic text-[#49362B] bg-[#F8F5EF] p-5 rounded-xl border-l-4 border-[#A8875B]">
            "{activeArticle.excerpt}"
          </p>

          <div className="space-y-4 text-sm sm:text-base text-[#3A3A37] leading-relaxed">
            {activeArticle.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#EDE7DC] flex justify-between items-center text-xs text-[#7A7A73]">
            <span>Published by B7 HOMES Editorial</span>
            <span>Tellapur · Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

