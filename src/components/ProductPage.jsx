import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ChevronRight, CreditCard, ShieldCheck, Trash2 } from 'lucide-react';

const TreasuryCheckout = () => {
  const [step, setStep] = useState(1); // 1: Review, 2: Shipping, 3: Payment

  const items = [
    { id: 1, name: "Astral Bloom Ring", price: 4200, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400" },
    { id: 2, name: "Ethereal Pendant", price: 1250, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400" }
  ];

  return (
    <div className="bg-[#0a0806] text-[#fdfaf7] min-h-screen py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* --- LEFT: STEP-BY-STEP FLOW --- */}
        <div className="lg:col-span-7 space-y-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] opacity-40">
            <span className={step >= 1 ? "text-[#d4af37] opacity-100" : ""}>Review</span>
            <ChevronRight size={12} />
            <span className={step >= 2 ? "text-[#d4af37] opacity-100" : ""}>Shipping</span>
            <ChevronRight size={12} />
            <span className={step >= 3 ? "text-[#d4af37] opacity-100" : ""}>Payment</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="review"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20 }}
                className="space-y-10"
              >
                <h2 className="text-5xl font-serif italic">Your Selection</h2>
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-8 border-b border-white/5 pb-8 group">
                      <div className="w-32 h-40 bg-[#16120f] overflow-hidden">
                        <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-2xl font-serif italic">{item.name}</h4>
                          <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1 font-bold">In Stock • Ready to Ship</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="text-xl font-light opacity-80">${item.price.toLocaleString()}</p>
                          <button className="text-[9px] uppercase tracking-widest opacity-30 hover:opacity-100 hover:text-red-400 transition-all flex items-center gap-2">
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="shipping"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-10"
              >
                <h2 className="text-5xl font-serif italic">Delivery Details</h2>
                <div className="grid grid-cols-2 gap-6">
                  {['First Name', 'Last Name', 'Email', 'Phone'].map(label => (
                    <div key={label} className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest opacity-40">{label}</label>
                      <input className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#d4af37] transition-colors" />
                    </div>
                  ))}
                  <div className="col-span-2 space-y-2">
                    <label className="text-[9px] uppercase tracking-widest opacity-40">Full Address</label>
                    <input className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#d4af37] transition-colors" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-10">
            <button 
              onClick={() => setStep(step < 3 ? step + 1 : 3)}
              className="px-16 py-5 bg-[#d4af37] text-black font-serif italic text-xl flex items-center gap-4 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all"
            >
              {step === 3 ? "Complete Purchase" : "Proceed to Next Step"} <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* --- RIGHT: THE SUMMARY (Sticky) --- */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 bg-[#16120f]/50 border border-white/5 p-10 backdrop-blur-xl rounded-sm space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-bold border-b border-white/5 pb-4">Order Summary</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm opacity-60">
                <span>Subtotal</span>
                <span>$5,450.00</span>
              </div>
              <div className="flex justify-between text-sm opacity-60">
                <span>Insured Shipping</span>
                <span className="text-[#d4af37]">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm opacity-60">
                <span>Estimated Tax</span>
                <span>$436.00</span>
              </div>
              <div className="h-[1px] bg-white/5 my-4" />
              <div className="flex justify-between text-2xl font-serif italic">
                <span>Total</span>
                <span className="text-[#d4af37]">$5,886.00</span>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <div className="flex items-start gap-4 opacity-40">
                <ShieldCheck size={18} className="text-[#d4af37]" />
                <p className="text-[10px] uppercase tracking-widest leading-relaxed">
                  Secured by Sapphire Vault Encryption. Your data is protected.
                </p>
              </div>
              <div className="flex gap-4 grayscale opacity-30">
                <CreditCard size={24} />
                <Lock size={24} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TreasuryCheckout;