import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight, ShoppingBag, X, Trash2, ArrowRight } from 'lucide-react';

const ProductPage = () => {
  const navigate = useNavigate();
  
  // --- MOCK BACKEND / STATE ---
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const products = [
    { id: 1, name: "Crystal Pear Ring", price: 96, tag: "Ring", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400" },
    { id: 2, name: "Molten Hoops", price: 184, tag: "Earrings", img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=400" },
    { id: 3, name: "Orbit Crystal Cuff", price: 139, tag: "Bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400" },
    { id: 4, name: "Horseshoe Pendant", price: 245, tag: "Necklace", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400" },
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, cartId: Date.now() }]);
    setIsDrawerOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="font-sans selection:bg-[#d4af37]/30 bg-[#fdfaf7] min-h-screen relative overflow-x-hidden">
      
      {/* --- CART DRAWER OVERLAY --- */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            {/* Sidebar */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-serif italic">Your Selection ({cart.length})</h3>
                <button onClick={() => setIsDrawerOpen(false)} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-6 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-stone-400 italic">Your collection is empty.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.cartId} className="flex gap-4 items-center border-b border-stone-50 pb-4">
                      <img src={item.img} className="w-20 h-20 object-cover rounded-lg bg-stone-50" alt="" />
                      <div className="flex-1">
                        <h4 className="font-serif text-lg leading-none">{item.name}</h4>
                        <p className="text-[#d4af37] font-bold mt-2 text-sm">${item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} className="text-stone-300 hover:text-red-400 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-stone-100">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-stone-400 uppercase text-[10px] tracking-widest font-bold">Subtotal</span>
                  <span className="text-2xl font-serif">${totalPrice}</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-[#1a110a] text-white py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-[#d4af37] transition-all"
                  >
                    Proceed to Checkout <ArrowRight size={14} />
                  </button>
                  <button 
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-full bg-stone-100 text-stone-600 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-stone-200 transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- PAGE CONTENT --- */}
      <section className="py-32 bg-[#fdfaf7] text-[#1a110a]">
        <div className="px-10 flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] font-bold mb-4">The 2026 Archive</p>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Handcrafted Brilliance</h2>
          </div>
          <button 
            onClick={() => navigate('/shop')} 
            className="flex items-center gap-4 group text-[11px] font-bold uppercase tracking-widest border-b border-black/10 pb-2 hover:border-[#d4af37] transition-all cursor-pointer"
          >
            Explore Full Shop 
            <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex gap-8 px-10 overflow-x-auto pb-16 no-scrollbar snap-x">
          {products.map((item) => (
            <motion.div 
              whileHover={{ y: -15 }}
              key={item.id} 
              className="min-w-[320px] bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col h-[480px] snap-center border border-black/[0.02] group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-stone-400 border border-stone-100 px-3 py-1 rounded-full group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37] transition-colors">
                  {item.tag}
                </span>
                <button 
                  onClick={() => addToCart(item)}
                  className="p-2 bg-stone-50 rounded-full hover:bg-[#d4af37] hover:text-white transition-all cursor-pointer"
                >
                  <Plus size={18} />
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                <img src={item.img} className="w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-110" alt={item.name} />
              </div>

              <div className="mt-8 border-t border-stone-50 pt-6 flex justify-between items-end">
                <div>
                  <h4 className="font-serif italic text-2xl text-[#1a110a]">{item.name}</h4>
                  <p className="text-sm font-bold text-[#d4af37] mt-1">${item.price}</p>
                </div>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-10 h-10 bg-[#1a110a] text-white rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-colors cursor-pointer"
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CAMPAIGN SECTION --- */}
      <section className="bg-[#0f0a07] grid md:grid-cols-2 min-h-[700px] overflow-hidden">
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.6em] font-bold mb-6">Our Philosophy</p>
            <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.9] mb-8">
              Dare to <br/><span className="text-[#d4af37]">dazzle</span> differently
            </h2>
            <button 
              onClick={() => navigate('/contact')}
              className="mt-12 px-14 py-5 bg-[#d4af37] text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl cursor-pointer"
            >
              Consult an Artisan
            </button>
          </motion.div>
        </div>
        <div className="relative group overflow-hidden cursor-pointer" onClick={() => navigate('/collection')}>
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 scale-105 group-hover:scale-100" alt="" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;