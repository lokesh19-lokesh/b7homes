import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { addToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubscribed(true);
    addToast(
      'Welcome to B7 HOMES Journal',
      'You are now subscribed to our bespoke furniture updates and design guides.',
      'success'
    );
  };

  return (
    <section className="py-20 bg-[#252523] text-[#EDE7DC] relative overflow-hidden w-full max-w-full border-t border-[#35271F]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A8875B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="flex items-center justify-center gap-2">
          <span className="w-6 h-[1px] bg-[#A8875B]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#A8875B]">
            B7 Editorial Dispatch
          </span>
          <span className="w-6 h-[1px] bg-[#A8875B]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
          Make Room for <span className="italic font-normal text-[#D8CBB9]">Better Living.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#D8CBB9] max-w-xl mx-auto leading-relaxed font-light">
          Explore furniture inspiration, timber care guides, new bespoke collection releases, and exclusive invitations from B7 HOMES.
        </p>

        {isSubscribed ? (
          <div className="bg-[#35271F] border border-[#A8875B]/40 max-w-md mx-auto p-6 rounded-2xl flex items-center justify-center gap-3 text-emerald-400">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div className="text-left text-xs sm:text-sm text-white">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-[#D8CBB9] text-xs">Look out for our interior notes in your inbox.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-2">
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 focus-within:border-[#A8875B] transition-colors">
              <div className="flex items-center gap-2.5 px-3 py-2 w-full sm:w-auto flex-1">
                <Mail className="w-4 h-4 text-[#D8CBB9] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  className="bg-transparent text-xs sm:text-sm text-white placeholder-[#D8CBB9]/60 outline-none w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#A8875B] hover:bg-[#8E6F45] text-white py-3 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-luxury shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
            <p className="text-[11px] text-[#7A7A73] pt-1">
              We respect your privacy. No spam, ever. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

