import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle2, Info, Heart, ShoppingBag, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full px-4 pointer-events-none">
      {toasts.map((toast) => {
        const getIcon = () => {
          switch (toast.type) {
            case 'cart':
              return <ShoppingBag className="w-5 h-5 text-[#A8875B] shrink-0" />;
            case 'wishlist':
              return <Heart className="w-5 h-5 text-rose-600 fill-rose-600 shrink-0" />;
            case 'info':
              return <Info className="w-5 h-5 text-[#49362B] shrink-0" />;
            default:
              return <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
          }
        };

        return (
          <div
            key={toast.id}
            className="pointer-events-auto bg-[#FFFFFF] border border-[#D8CBB9]/60 shadow-luxury-lg rounded-xl p-4 flex items-start gap-3 transform transition-all duration-300 animate-in slide-in-from-bottom-5"
          >
            <div className="mt-0.5">{getIcon()}</div>
            <div className="flex-1 pr-2">
              <h4 className="text-sm font-semibold text-[#252523] tracking-wide">{toast.title}</h4>
              <p className="text-xs text-[#5A5A55] mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#7A7A73] hover:text-[#252523] p-1 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

