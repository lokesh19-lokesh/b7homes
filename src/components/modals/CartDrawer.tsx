import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount, isCartOpen, setIsCartOpen, addToast } = useShop();
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCheckout = () => {
    setShowCheckoutSuccess(true);
    addToast('Bespoke Order Inquiry Created', 'Our Tellapur master carpentry desk will contact you within 2 hours.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252523]/60 backdrop-blur-sm transition-opacity"
        onClick={() => {
          setIsCartOpen(false);
          setShowCheckoutSuccess(false);
        }}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFFFF] shadow-2xl flex flex-col border-l border-[#D8CBB9]/60">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#EDE7DC] flex items-center justify-between bg-[#F8F5EF]/60">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#A8875B]" />
              <h2 className="font-serif text-2xl font-normal text-[#252523]">Shopping Bag</h2>
              <span className="text-xs bg-[#49362B] text-white px-2 py-0.5 rounded-full font-medium">
                {cartCount}
              </span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setShowCheckoutSuccess(false);
              }}
              className="p-2 text-[#7A7A73] hover:text-[#252523] rounded-full hover:bg-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Checkout Success View */}
          {showCheckoutSuccess ? (
            <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#252523] font-normal">Bespoke Inquiry Initiated</h3>
              <p className="text-xs text-[#5A5A55] mt-2 max-w-xs leading-relaxed">
                Thank you for selecting B7 Homes. Your custom furniture specifications have been sent to our Tellapur workshop team.
              </p>
              <div className="my-6 p-4 bg-[#F8F5EF] rounded-xl border border-[#EDE7DC] text-left w-full text-xs space-y-2 text-[#49362B]">
                <div className="flex justify-between">
                  <span className="text-[#7A7A73]">Inquiry ID:</span>
                  <span className="font-mono font-bold">B7-HYD-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7A73]">Direct Desk:</span>
                  <span className="font-medium">+91 79895 94733</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7A73]">Workshop:</span>
                  <span className="font-medium">Tellapur, Hyderabad</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowCheckoutSuccess(false);
                  setIsCartOpen(false);
                }}
                className="w-full py-3 bg-[#49362B] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#35271F] transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Tier Banner */}
              <div className="bg-[#EDE7DC]/70 px-5 py-2.5 text-xs text-[#49362B] flex items-center gap-2 border-b border-[#D8CBB9]/40">
                <Truck className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>
                  <strong>Complimentary White-Glove Setup</strong> included across all Hyderabad localities.
                </span>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#7A7A73]">
                    <div className="w-16 h-16 rounded-full bg-[#F8F5EF] flex items-center justify-center mb-4 text-[#A8875B] border border-[#EDE7DC]">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <p className="font-serif text-xl text-[#252523]">Your bag is currently empty</p>
                    <p className="text-xs text-[#7A7A73] mt-1.5 max-w-xs">
                      Discover our handcrafted solid wood sectionals, beds, and bespoke dining pieces.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 px-6 py-2.5 bg-[#49362B] text-white rounded-xl text-xs font-semibold tracking-wider uppercase hover:bg-[#35271F] transition-all"
                    >
                      Explore Furniture
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.product.id + item.selectedWood + (item.selectedFabric || '')}
                      className="flex gap-4 p-3.5 bg-[#F8F5EF]/60 rounded-2xl border border-[#EDE7DC] transition-all"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-[#EDE7DC] shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-serif text-base text-[#252523] truncate leading-tight">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-[#7A7A73] hover:text-rose-600 p-1 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Custom specs */}
                          <p className="text-[11px] text-[#A8875B] mt-0.5 truncate">
                            {item.selectedWood}
                          </p>
                          {item.selectedFabric && (
                            <p className="text-[11px] text-[#5A5A55] truncate">
                              Fabric: {item.selectedFabric}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EDE7DC]/70">
                          {/* Quantity */}
                          <div className="flex items-center border border-[#D8CBB9] rounded-lg bg-white p-0.5 text-xs">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center hover:bg-[#F8F5EF] rounded text-[#252523]"
                            >
                              -
                            </button>
                            <span className="w-7 text-center font-medium text-[#252523]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center hover:bg-[#F8F5EF] rounded text-[#252523]"
                            >
                              +
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <span className="font-bold text-sm text-[#252523]">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {cart.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-[#EDE7DC] bg-[#F8F5EF] space-y-4">
                  <div className="space-y-1.5 text-xs text-[#5A5A55]">
                    <div className="flex justify-between">
                      <span>Bespoke Furniture Subtotal</span>
                      <span className="font-medium text-[#252523]">{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-emerald-700">
                      <span>White-Glove Delivery & Room Assembly</span>
                      <span className="font-medium uppercase tracking-wider">Free (Hyderabad)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Custom Crafting Time</span>
                      <span className="text-[#49362B]">14 - 18 Days</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#D8CBB9] text-base font-bold text-[#252523]">
                      <span className="font-serif">Estimated Total</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 bg-[#49362B] hover:bg-[#35271F] text-white rounded-xl text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-luxury transition-all duration-300"
                  >
                    <span>Proceed with Bespoke Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-[#7A7A73]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#A8875B]" /> 3-Year Warranty
                    </span>
                    <span>•</span>
                    <span>100% Seasoned Hardwood</span>
                    <span>•</span>
                    <span>Zero Advance Surprise</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

