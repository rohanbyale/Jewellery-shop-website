import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, X, Minus, Plus, Trash2, 
  ShieldCheck, Lock, ArrowLeft, CreditCard,
  CheckCircle2, Loader2, Landmark
} from 'lucide-react';

// --- 1. MOCK DATA ---
const PRODUCTS = [
  { id: 1, name: "The Ethereal Drop", price: 4250, collection: "Heritage", material: "18k Gold", image: "https://i.pinimg.com/736x/8d/52/b8/8d52b85be2d7b29db98dd24fec174ec7.jpg" },
  { id: 2, name: "Midnight Solitaire", price: 8900, collection: "Engagement", material: "Platinum", image: "https://i.pinimg.com/736x/4d/11/a5/4d11a5421501ad0848ff3f6aefe84a41.jpg" },
  { id: 3, name: "Orbit Gold Band", price: 1150, collection: "Essentials", material: "18k Rose Gold", image: "https://images.unsplash.com/photo-1705326452395-1d35e6add570?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Lunar Pavé Ring", price: 3800, collection: "Celestial", material: "White Gold", image: "https://i.pinimg.com/736x/f4/67/b6/f467b637f137d6b5aa14519f65c26ef8.jpg" },
  { id: 5, name: "Heritage Emerald Cut", price: 12400, collection: "Heritage", material: "Yellow Gold", image: "https://i.pinimg.com/1200x/63/c7/d6/63c7d6364e9e37fc1233940f494562ec.jpg" },
  { id: 6, name: "Serpent Coil Cuff", price: 5600, collection: "Atelier", material: "18k Gold", image: "https://i.pinimg.com/736x/29/15/b7/2915b7e7434bad806794f687a75f5c8d.jpg" }
];

// --- 2. PERSISTENCE ENGINE ---
const usePersistentCart = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('aurum_vault');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => { localStorage.setItem('aurum_vault', JSON.stringify(cart)); }, [cart]);
  return [cart, setCart];
};

export default function LuxuryAtelier() {
  const [view, setView] = useState('shop'); // shop, checkout, payment, processing, success
  const [cart, setCart] = usePersistentCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.qty), 0), [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, d) => setCart(p => p.map(i => i.id === id ? {...i, qty: Math.max(1, i.qty + d)} : i));
  const removeItem = id => setCart(p => p.filter(i => i.id !== id));

  const handleToPayment = (e) => {
    e.preventDefault();
    setView('payment');
    window.scrollTo(0, 0);
  };

  const handleFinalizeOrder = () => {
    setView('processing');
    setTimeout(() => { setView('success'); }, 2500);
  };

  // --- VIEW: PROCESSING ---
  if (view === 'processing') {
    return (
      <div className="min-h-screen bg-[#0f0a07] flex flex-col items-center justify-center text-white">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
          <Loader2 size={48} className="text-[#AF8F55]" />
        </motion.div>
        <p className="mt-8 font-serif italic text-xl tracking-[0.2em] animate-pulse text-[#AF8F55]">Securing your pieces...</p>
      </div>
    );
  }

  // --- VIEW: SUCCESS ---
  if (view === 'success') {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-stone-100">
          <div className="w-20 h-20 bg-[#AF8F55]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-[#AF8F55]" />
          </div>
          <h2 className="font-serif text-4xl italic mb-4">Acquisition Complete</h2>
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.3em] mb-10">Ref: AUR-{Math.floor(Math.random() * 900000 + 100000)}</p>
          
          <div className="text-left space-y-4 mb-10 py-8 border-y border-stone-50">
            <div className="flex justify-between"><span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">Consignee</span><span className="text-sm font-serif italic">{customerName}</span></div>
            <div className="flex justify-between"><span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest">Investment</span><span className="text-sm font-bold">${subtotal.toLocaleString()}</span></div>
          </div>

          <button onClick={() => {setCart([]); setView('shop');}} className="w-full bg-[#0f0a07] text-white py-6 rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#AF8F55] transition-all duration-500">
            Return to Gallery
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-stone-100">
        <div className="font-serif text-2xl tracking-[0.5em] uppercase cursor-pointer" onClick={() => setView('shop')}>Aurum</div>
        <button onClick={() => setIsCartOpen(true)} className="relative group p-2">
          <ShoppingBag size={22} className="group-hover:text-[#AF8F55] transition-colors" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#AF8F55] text-white text-[9px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
              {cart.reduce((a,b) => a + b.qty, 0)}
            </span>
          )}
        </button>
      </nav>

      {view === 'shop' && (
        <main>
          <header className="pt-56 pb-24 px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[10px] uppercase tracking-[0.8em] text-[#AF8F55] font-bold block mb-6">The Private Vault</span>
              <h1 className="text-7xl md:text-9xl font-serif italic leading-tight">Artistry in <br/><span className="not-italic text-[#0f0a07]">Motion</span></h1>
            </motion.div>
          </header>

          <div className="px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-20">
            {PRODUCTS.map(product => (
              <motion.div layout key={product.id} className="group">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-200 mb-8 shadow-sm">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={product.name}/>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <button onClick={() => addToCart(product)} className="absolute inset-x-10 bottom-10 bg-white text-[#0f0a07] py-5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl hover:bg-[#AF8F55] hover:text-white">
                    Acquire Piece
                  </button>
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">{product.collection}</p>
                  <h3 className="font-serif text-2xl italic">{product.name}</h3>
                  <p className="text-sm font-light text-stone-500">${product.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      )}

      {(view === 'checkout' || view === 'payment') && (
        <div className="pt-48 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 pb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <button onClick={() => setView('shop')} className="mb-12 text-stone-400 uppercase text-[9px] tracking-[0.4em] flex items-center gap-3 hover:text-[#AF8F55] transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back to Gallery
            </button>
            
            <h2 className="font-serif text-6xl italic mb-16 leading-tight">
              {view === 'checkout' ? "Client Details" : "Secure Payment"}
            </h2>
            
            {view === 'checkout' ? (
              <form onSubmit={handleToPayment} className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Legal Name</label>
                  <input required value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full border-b border-stone-200 py-4 bg-transparent outline-none focus:border-[#AF8F55] transition-all text-lg font-serif italic" placeholder="Julian Sterling" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Shipping Email</label>
                  <input required type="email" className="w-full border-b border-stone-200 py-4 bg-transparent outline-none focus:border-[#AF8F55] transition-all text-lg font-serif italic" placeholder="client@atelier.com" />
                </div>
                <button type="submit" className="w-full bg-[#0f0a07] text-white py-7 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-[#AF8F55] transition-all duration-500">
                  Continue to Payment
                </button>
              </form>
            ) : (
              <div className="space-y-12">
                <div className="p-8 border border-stone-200 rounded-3xl bg-white shadow-sm space-y-8">
                   <div className="flex justify-between items-center">
                      <div className="flex gap-4"><CreditCard className="text-[#AF8F55]"/><span className="text-xs uppercase tracking-widest font-bold">Encrypted Transaction</span></div>
                      <Lock size={16} className="text-stone-300" />
                   </div>
                   <div className="space-y-6">
                      <input className="w-full border-b border-stone-100 py-3 text-sm tracking-[0.3em]" placeholder="0000 0000 0000 0000" />
                      <div className="flex gap-8">
                        <input className="w-1/2 border-b border-stone-100 py-3 text-sm tracking-[0.3em]" placeholder="MM / YY" />
                        <input className="w-1/2 border-b border-stone-100 py-3 text-sm tracking-[0.3em]" placeholder="CVC" />
                      </div>
                   </div>
                </div>
                <button onClick={handleFinalizeOrder} className="w-full bg-[#AF8F55] text-white py-7 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-[#0f0a07] transition-all duration-500">
                  Confirm Investment (${subtotal.toLocaleString()})
                </button>
                <button onClick={() => setView('checkout')} className="w-full text-stone-400 text-[9px] uppercase tracking-widest font-bold hover:text-black transition-colors">Edit Details</button>
              </div>
            )}
          </motion.div>

          {/* Sticky Summary */}
          <div className="lg:sticky lg:top-40 h-fit bg-white p-12 rounded-[3rem] shadow-xl border border-stone-50">
            <h3 className="font-serif text-2xl mb-10 italic">Selected Pieces</h3>
            <div className="space-y-8 mb-12">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <img src={item.image} className="w-12 h-12 object-cover rounded-lg" alt=""/>
                    <span className="text-stone-500 text-xs font-medium">{item.name} <span className="text-stone-300 ml-2">x{item.qty}</span></span>
                  </div>
                  <span className="font-serif italic text-sm">${(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-100 pt-8 flex justify-between items-end">
              <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Total Investment</span>
              <span className="font-serif text-4xl italic">${subtotal.toLocaleString()}</span>
            </div>
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-[9px] text-stone-400 uppercase tracking-widest font-bold">
                <ShieldCheck size={14} className="text-[#AF8F55]" /> <span>White-Glove Delivery Included</span>
              </div>
              <div className="flex items-center gap-3 text-[9px] text-stone-400 uppercase tracking-widest font-bold">
                <Landmark size={14} className="text-[#AF8F55]" /> <span>Insured by Lloyd's of London</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onUpdateQty={updateQty} 
        onRemove={removeItem} 
        onCheckout={() => { setIsCartOpen(false); setView('checkout'); window.scrollTo(0,0); }} 
      />
    </div>
  );
}

// --- SUB-COMPONENT: CART DRAWER ---
const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQty, onRemove, onCheckout }) => {
  const subtotal = cartItems?.reduce((acc, item) => acc + (item.price * item.qty), 0) || 0;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 200 }} className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col">
            <div className="p-10 border-b border-stone-50 flex justify-between items-center">
              <h2 className="font-serif text-3xl italic">The Tray</h2>
              <X className="cursor-pointer hover:rotate-90 transition-all text-stone-400" onClick={onClose}/>
            </div>
            <div className="flex-1 overflow-y-auto p-10 space-y-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-30">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-serif italic text-lg">Your tray is empty</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex gap-6 items-center">
                    <img src={item.image} className="w-20 h-24 object-cover rounded-2xl shadow-sm" alt={item.name}/>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start"><h4 className="font-serif italic text-lg">{item.name}</h4><button onClick={() => onRemove(item.id)}><Trash2 size={14} className="text-stone-300 hover:text-red-400 transition-colors"/></button></div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 border border-stone-100 rounded-full px-3 py-1 scale-90">
                          <Minus size={12} className="cursor-pointer text-stone-400" onClick={() => onUpdateQty(item.id, -1)}/>
                          <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                          <Plus size={12} className="cursor-pointer text-stone-400" onClick={() => onUpdateQty(item.id, 1)}/>
                        </div>
                        <span className="text-sm font-bold text-[#AF8F55]">${(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="p-10 bg-stone-50/50 backdrop-blur-sm border-t border-stone-100">
                <div className="flex justify-between mb-10 items-end"><span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Total Investment</span><span className="font-serif text-3xl italic">${subtotal.toLocaleString()}</span></div>
                <button onClick={onCheckout} className="w-full bg-[#0f0a07] text-white py-6 rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#AF8F55] transition-all duration-500 shadow-xl">Proceed to Acquisition</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};