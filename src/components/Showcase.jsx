import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const JewelryLanding = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#fdfaf7] font-sans selection:bg-[#d4af37] selection:text-black overflow-hidden relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(212,175,55,0.08)_0%,_rgba(15,10,7,1)_70%)] pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-6 flex flex-col h-screen justify-between">
        
        {/* Minimal Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center border-b border-white/5 pb-4"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Aurum Atelier</span>
          </div>
          <h1 className="text-3xl font-serif italic tracking-wide">
            Infinite <span className="not-italic text-[#d4af37]">Sparkle</span>
          </h1>
          <button className="text-[10px] uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
            Menu
          </button>
        </motion.div>

        {/* Main Compressed Grid */}
        <div className="grid grid-cols-12 gap-6 items-center flex-1 py-4">
          
          {/* Left Column */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="col-span-12 md:col-span-3 space-y-8"
          >
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] font-bold">The Archive</p>
              <h2 className="text-2xl font-serif italic">Most Loved <br/> Essentials</h2>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-full aspect-square max-w-[220px] bg-white/[0.03] rounded-2xl border border-white/5 p-4 group cursor-pointer"
              onClick={() => navigate('/shop')}
            >
              <img 
                src="https://images.unsplash.com/photo-1719924998065-0c60e329ef58?q=80&w=627" 
                alt="Diamond Ring"
                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(212,175,55,0.2)] transition-transform group-hover:rotate-6"
              />
              <div className="absolute bottom-4 right-4 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          </motion.div>

          {/* Center Column - Reduced Height Model Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-12 md:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl h-[450px]">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1740020260564-052b5b97b37e?q=80&w=687" 
                  alt="Model"
                  className="w-full h-full object-cover brightness-90 grayscale-[0.2]"
                />
              </div>
              
              {/* Secondary floating image - Integrated better */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-40 h-28 border-4 border-[#0f0a07] rounded-xl shadow-2xl overflow-hidden hidden md:block"
              >
                <img 
                  src="https://plus.unsplash.com/premium_photo-1680181362119-5c9bf196805f?q=80&w=880" 
                  className="w-full h-full object-cover"
                  alt="Earrings"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="col-span-12 md:col-span-3 text-right flex flex-col items-end gap-6"
          >
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-stone-500">Fine Jewelry</p>
              <h3 className="text-xl font-serif italic text-[#fdfaf7]">The 18k <br/> Gold Collection</h3>
            </div>
            
            <div className="w-16 h-[1px] bg-[#d4af37]" />
            
            <p className="text-[11px] leading-relaxed text-stone-400 font-light max-w-[180px]">
              Elegance is not being noticed, it's being remembered.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section - Tighter Layout */}
        <div className="mt-4 border-t border-white/5 pt-6 grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="text-[10px] leading-relaxed text-stone-500 uppercase tracking-widest">
              Crafting bespoke <br /> brilliance since 2026
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center gap-4">
            <motion.button 
              onClick={() => navigate('/shop')}
              whileHover={{ scale: 1.05 }}
              className="bg-[#d4af37] text-[#0f0a07] px-12 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-[#d4af37]/10"
            >
              Shop All Pieces
            </motion.button>
            <div 
              onClick={() => navigate('/contact')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all"
            >
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 flex items-center gap-4 justify-end">
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-tighter text-stone-500 leading-tight font-bold">
                London • Paris • Dubai
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1588909006332-2e30f95291bc?q=80&w=1128" 
              className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/30"
              alt="Small ring"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default JewelryLanding;