import React from 'react';
import { motion } from 'framer-motion';

const SilhouetteReveal = () => {
  return (
    <section className="bg-[#0f0a07] py-20 px-8 md:px-16 relative overflow-hidden border-b border-white/5">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-5 space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 text-[#d4af37] mb-4">
              <div className="h-[1px] w-6 bg-[#d4af37]" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold">The Craft</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif italic leading-[1.1] text-[#fdfaf7] mb-6">
              Beauty in <br /> 
              <span className="text-[#d4af37] not-italic">the Detail.</span>
            </h2>
            
            <p className="text-[11px] text-stone-500 max-w-sm leading-relaxed tracking-wide font-light">
              Every curve is intentional. Our master artisans spend hundreds of hours perfecting a single silhouette to ensure it breathes with you—a second skin of pure gold.
            </p>
          </motion.div>

          {/* Stats Row */}
          <div className="flex gap-10 pt-4">
            <div className="space-y-1">
              <p className="text-2xl font-serif italic text-[#fdfaf7]">18k</p>
              <div className="h-[1px] w-4 bg-[#d4af37]/40 mb-1" />
              <p className="text-[8px] uppercase tracking-widest text-[#d4af37] font-bold">Solid Gold</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-serif italic text-[#fdfaf7]">VVS1</p>
              <div className="h-[1px] w-4 bg-[#d4af37]/40 mb-1" />
              <p className="text-[8px] uppercase tracking-widest text-[#d4af37] font-bold">Clarity Standard</p>
            </div>
          </div>
        </div>

        {/* Right Side: Masked Reveal Image (No Hover Effects) */}
        <div className="lg:col-span-7 flex justify-end">
          <motion.div 
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="relative h-[350px] md:h-[450px] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000" 
              className="w-full h-full object-cover" 
              alt="Jewelry Reveal"
            />
            
            {/* Image Signature */}
            <div className="absolute bottom-6 right-6 pointer-events-none">
               <p className="text-[8px] uppercase tracking-[0.5em] text-white/30 rotate-90 origin-right font-bold">
                 Aurum Atelier © 2026
               </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SilhouetteReveal;