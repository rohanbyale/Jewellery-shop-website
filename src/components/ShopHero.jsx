import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const LuxuryHero = () => {
  const { scrollY } = useScroll();
  // Subtle parallax for the main image
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);
  const rotateText = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen bg-[#F9F7F2] overflow-hidden flex items-center px-6 py-20">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Massive subtle watermark */}
      <motion.div 
        style={{ rotate: rotateText }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <h2 className="text-[35vw] font-serif italic text-black/[0.02] leading-none -ml-[20%]">
          Aura
        </h2>
      </motion.div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-center relative z-10">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-5 z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#AF8F55]" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#AF8F55] font-bold">
                London Atelier • 2026
              </span>
            </div>
            
            <h1 className="text-7xl md:text-[120px] font-serif text-[#1A1A1A] leading-[0.85] tracking-tighter">
              Eternal <br />
              <span className="italic font-light text-[#AF8F55] ml-[0.5em]">Radiance</span>
            </h1>

            <p className="mt-12 text-stone-500 font-light max-w-sm text-lg leading-relaxed italic">
              "Beauty is not just seen, it is inherited." 
              <span className="block not-italic text-sm mt-4 text-stone-400">
                Explore our signature collection of conflict-free diamonds and hand-poured 18k solid gold.
              </span>
            </p>

            <div className="mt-12 flex items-center gap-10">
              <button className="group relative flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A] transition-all">
                <span className="border-b border-[#1A1A1A] pb-1">Explore Collection</span>
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                  <ArrowRight size={14} />
                </div>
              </button>
              
              <button className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 hover:text-[#AF8F55] transition-colors">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Play size={10} fill="currentColor" />
                </div>
                <span>The Film</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Imagery */}
        <div className="lg:col-span-7 relative flex justify-end">
          <motion.div 
            style={{ y: yImage }}
            className="relative w-full max-w-[500px] aspect-[4/5]"
          >
            {/* Main Aesthetic Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-t-full rounded-b-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-stone-200"
            >
              <img 
                src="https://i.pinimg.com/1200x/cd/ab/38/cdab380b3b0c79718ceaba7e81416c6b.jpg" 
                alt="Luxury Jewelry Statement" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[2s]"
              />
            </motion.div>

            {/* Floating Minimalist Tag */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-6 top-1/4 bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 hidden md:block"
            >
              <span className="text-[9px] uppercase tracking-widest text-[#AF8F55] font-bold">Limited Edition</span>
              <h3 className="font-serif text-lg italic text-[#1A1A1A]">Ethereal Drop</h3>
              <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-tighter">18k Gold / 2.4ct Diamond</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- SIDEBAR TEXT --- */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-[9px] uppercase tracking-[0.8em] text-stone-300 font-bold -rotate-90 origin-left">
          Artisanal Heritage
        </p>
      </div>

      {/* --- BOTTOM DECOR --- */}
      <div className="absolute bottom-12 left-10 flex gap-12 text-[9px] uppercase tracking-[0.3em] font-bold text-stone-300">
        <p>Paris</p>
        <p>London</p>
        <p>New York</p>
      </div>
    </section>
  );
};

export default LuxuryHero;