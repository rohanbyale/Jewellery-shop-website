import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plus, X, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';

// --- PERSPECTIVE CARD COMPONENT ---
const ProductCard = ({ item, onOpen }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="relative group mb-16"
      onClick={() => onOpen(item)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[16/10] md:aspect-square lg:aspect-[16/10] overflow-hidden bg-[#12100e] border border-white/5 cursor-pointer"
      >
        <motion.img
          src={item.img}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
           <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
              <Plus size={20} className="text-[#d4af37]" />
           </div>
        </div>

        <div className="absolute top-4 left-4 overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className="text-[8px] block uppercase tracking-[0.4em] text-[#d4af37] font-bold px-2 py-1 bg-black/60 backdrop-blur-sm"
          >
            {item.cat}
          </motion.span>
        </div>
      </motion.div>

      <div className="mt-5 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-serif italic text-white/90 group-hover:text-[#d4af37] transition-colors duration-500">
            {item.name}
          </h3>
          <div className="flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
             <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
             <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">In Stock</p>
          </div>
        </div>
        <p className="text-white font-light tracking-tighter text-base group-hover:scale-110 transition-transform duration-500">
          <span className="text-[10px] text-[#d4af37] mr-1">$</span>{item.price}
        </p>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const CollectionGrid = () => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const products = [
    { id: 1, name: "Astral Bloom Ring", price: "2,400", cat: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800", desc: "A singular brilliant-cut diamond surrounded by a halo of sapphire constellations." },
    { id: 2, name: "Luna Pendant", price: "1,850", cat: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800", desc: "Hand-carved moonstone set in 18k white gold on a delicate Venetian chain." },
    { id: 3, name: "Solaris Cuff", price: "3,100", cat: "Bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800", desc: "22k gold cuff capturing the essence of the meridian sun." },
    { id: 4, name: "Elysian Hoops", price: "950", cat: "Earrings", img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800", desc: "Architectural earrings crafted in recycled sterling silver." },
    { id: 5, name: "Void Diamond", price: "5,200", cat: "Rings", img: "https://www.brilliance.com/cdn-cgi/image/f=webp,width=1440,height=1440,quality=90/sites/default/files/vue/collections/engagement-rings-diamond_og.jpg", desc: "Rare black diamond centerpiece emphasizing the beauty of the unknown." },
    { id: 6, name: "Heritage Chain", price: "4,400", cat: "Necklaces", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800", desc: "Heavy-link heirloom piece designed for lifelong refinement." },
  ];

  const filteredItems = useMemo(() => 
    filter === 'All' ? products : products.filter(p => p.cat === filter), 
  [filter]);

  return (
    <section className="bg-[#0a0806] py-24 px-6 md:px-12 min-h-screen relative overflow-hidden">
      
      {/* Editorial Header */}
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-12">
        <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
              Curated <span className="not-italic text-white/20">Artifacts</span>
            </h2>
            <p className="text-white/40 text-sm mt-4 font-light tracking-wide">Refining the boundary between raw earth and celestial form.</p>
        </div>
        
        <div className="flex gap-6 mt-8 md:mt-0 overflow-x-auto no-scrollbar">
          {['All', 'Rings', 'Necklaces', 'Earrings'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all px-4 py-2 border ${filter === cat ? 'border-[#d4af37] text-[#d4af37]' : 'border-transparent text-white/30 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} onOpen={setSelectedItem} />
          ))}
        </AnimatePresence>
      </div>

      {/* --- QUICK VIEW DRAWER --- */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop Dismiss */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] cursor-zoom-out"
            />
            
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#0d0d0d] z-[70] shadow-2xl p-8 md:p-12 flex flex-col"
            >
              {/* TOP NAVIGATION (BACK BUTTON) */}
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 border border-white/10 rounded-full group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/5 transition-all">
                    <ArrowLeft size={16} className="text-white group-hover:text-[#d4af37]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                    Back to collection
                  </span>
                </button>
                
                <button 
                  onClick={() => setSelectedItem(null)} 
                  className="text-white/20 hover:text-[#d4af37] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar">
                <div className="aspect-[16/10] overflow-hidden border border-white/5 mb-10">
                  <motion.img 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    src={selectedItem.img} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.6em] text-[#d4af37] block mb-3 font-bold">Limited Edition</span>
                    <h3 className="text-4xl font-serif italic text-white leading-tight">{selectedItem.name}</h3>
                  </div>

                  <p className="text-white/50 font-light leading-relaxed text-base italic">
                    "{selectedItem.desc}"
                  </p>

                  <div className="space-y-6 pt-8 border-t border-white/5">
                      <div className="flex items-center gap-4 text-white/70 bg-white/[0.02] p-4 rounded-sm border border-white/5">
                          <ShieldCheck size={20} className="text-[#d4af37]" />
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest font-bold">Provenance Guaranteed</span>
                            <span className="text-[9px] text-white/30">Includes 24-month artisanal warranty</span>
                          </div>
                      </div>
                      
                      <div className="flex justify-between items-center bg-[#161412] p-8 rounded-sm">
                          <div className="flex flex-col">
                             <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-1">Value</span>
                             <span className="text-3xl font-light text-white tracking-tighter">${selectedItem.price}</span>
                          </div>
                          <button className="relative group bg-[#d4af37] text-black px-10 py-4 text-[10px] uppercase tracking-widest font-black overflow-hidden">
                              <span className="relative z-10">Acquire Now</span>
                              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                          </button>
                      </div>
                  </div>
                </div>

                {/* FOOTER DISMISS */}
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="w-full mt-12 py-6 text-[9px] uppercase tracking-[0.5em] text-white/20 hover:text-[#d4af37] border-t border-white/5 transition-all text-center"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollectionGrid;