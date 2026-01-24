import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MoveRight, Sparkles } from 'lucide-react';

const NewArrivalsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0f0a07] text-[#fdfaf7] p-8 md:p-24 min-h-screen font-sans relative overflow-hidden">
      
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Layout Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left: Branding Flare */}
        <div className="lg:col-span-3 space-y-12">
          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37] leading-relaxed">
              Unleash your own <br /> hidden flare
            </h5>
            {/* Minimalist vertical line */}
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#d4af37] to-transparent ml-2 relative">
               <motion.div 
                animate={{ y: [0, 80, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-[-2px] w-1.5 h-1.5 rounded-full bg-[#fdfaf7] shadow-[0_0_10px_#d4af37]" 
               />
            </div>
          </div>
        </div>

        {/* Center: Main Model Portrait (Cinematic) */}
        <div className="lg:col-span-4 group cursor-pointer" onClick={() => navigate('/shop')}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800" 
              alt="Aurum Model" 
              className="w-full h-[500px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* Right: Big Heading & Community Profile */}
        <div className="lg:col-span-5 space-y-10 lg:pl-12">
          <div className="flex items-start justify-between">
            <h2 className="text-6xl md:text-8xl font-serif italic leading-[0.85] text-[#fdfaf7]">
              Dare to <br />
              <span className="text-[#d4af37]">dazzle</span> <br /> 
              differently
            </h2>
            <div className="flex -space-x-3 pt-4">
               <div className="w-12 h-12 rounded-full border-2 border-[#0f0a07] bg-stone-800 overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100" className="object-cover h-full w-full" alt="user" />
               </div>
               <div className="w-12 h-12 rounded-full border-2 border-[#0f0a07] bg-[#d4af37] overflow-hidden flex items-center justify-center shadow-lg">
                  <Sparkles size={16} className="text-[#0f0a07]" />
               </div>
            </div>
          </div>
          <p className="text-sm font-light text-stone-400 max-w-sm leading-relaxed tracking-wide">
            Exceptional 18k gold pieces designed for those who seek to leave a lasting impression. Recommended by artisans, worn by icons.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-white/[0.03] border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-[#d4af37] hover:text-[#0f0a07] transition-all"
          >
            Become an Ambassador
          </button>
        </div>
      </div>

      {/* Bottom Layout Grid: New Arrivals */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mt-24 items-end relative z-10">
        
        {/* New Arrivals Context */}
        <div className="lg:col-span-7 border-t border-white/10 pt-10">
          <div className="flex justify-between items-baseline mb-12">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#fdfaf7]">New Arrivals</h3>
            <span className="text-[10px] tracking-[0.5em] text-[#d4af37] font-bold">JAN / 2026 / EDITION</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 group cursor-pointer" onClick={() => navigate('/shop')}>
            <div className="relative">
                <div className="absolute inset-0 bg-[#d4af37]/20 blur-2xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-700" />
                <img 
                src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=400" 
                className="w-40 h-40 object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-transform group-hover:rotate-12" 
                alt="Ruby Earrings" 
                />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <p className="text-2xl font-light leading-snug max-w-xs text-stone-300">
                Crafting personalised <br />
                <span className="font-serif italic text-[#d4af37] text-3xl">Memories</span> since 1964
              </p>
              <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[#d4af37] border-b border-[#d4af37]/30 pb-2 hover:border-[#d4af37] transition-all mx-auto md:mx-0">
                View Collection <MoveRight size={16} />
              </button>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex gap-3 mt-16 justify-center md:justify-start">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-[2px] transition-all duration-500 ${i === 1 ? 'w-12 bg-[#d4af37]' : 'w-4 bg-white/10'}`} />
            ))}
          </div>
        </div>

        {/* Featured Floating Product Card */}
        <div className="lg:col-span-5 flex justify-end">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/[0.02] border border-white/10 backdrop-blur-2xl p-10 rounded-3xl w-full max-w-md relative group cursor-pointer shadow-2xl"
            onClick={() => navigate('/shop')}
          >
            <div className="flex justify-between items-start mb-12">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#d4af37]">Atelier Selection</p>
                <p className="text-xl font-serif italic">The Golden Orb</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#fdfaf7] text-[#0f0a07] flex items-center justify-center group-hover:bg-[#d4af37] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
            
            <div className="relative py-4">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400" 
                className="w-full h-44 object-contain drop-shadow-[0_20px_40px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform duration-700" 
                alt="Gold Earring Detail" 
              />
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-stone-500">
                <span>Hand-finished</span>
                <span>Limited 1/50</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Vertical Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-20">
         <p className="[writing-mode:vertical-lr] text-[9px] tracking-[1.5em] uppercase text-stone-500 font-bold">
            Aurum International • New York • London • Paris
         </p>
      </div>
    </section>
  );
};

export default NewArrivalsSection;