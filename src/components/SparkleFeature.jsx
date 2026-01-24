import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const SparkleFeature = () => {
  const navigate = useNavigate();

  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="bg-[#0f0a07] py-24 md:py-32 px-6 md:px-16 overflow-hidden border-t border-white/5 relative">
      
      {/* Background Ambient Glow - Fixed Opacity for visibility */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#d4af37]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute right-[-10%] bottom-0 w-64 h-64 bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: THE ARTISAN STORY --- */}
        <div className="lg:col-span-4 space-y-10 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/3] overflow-hidden border border-white/10 group shadow-2xl rounded-2xl bg-[#16120f]"
          >
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800" 
              alt="Artisan Detail" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6 text-[#d4af37]">
              <Sparkles size={20} className="animate-pulse" />
            </div>
          </motion.div>
          
          <div className="space-y-6">
            {/* Enhanced contrast for sub-text */}
            <motion.p {...reveal} className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-stone-300 leading-relaxed max-w-[320px] font-semibold">
              We collaborate with master artisans to curate <span className="text-[#d4af37] font-bold">timeless</span> treasures for your narrative.
            </motion.p>
            
            <motion.div {...reveal} transition={{ delay: 0.2 }} className="space-y-8">
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-[1.1]">
                The perfect <br /> 
                <span className="text-[#d4af37] not-italic drop-shadow-sm">Diamond</span> <br />
                for your story.
              </h4>
              
              <button 
                onClick={() => navigate('/shop')}
                className="group flex items-center gap-6 px-8 py-4 bg-[#d4af37] border border-[#d4af37] rounded-full font-bold text-[10px] uppercase tracking-[0.2em] text-[#0f0a07] hover:bg-white hover:border-white transition-all duration-500"
              >
                Explore Boutique
                <div className="w-8 h-8 rounded-full bg-[#0f0a07]/10 flex items-center justify-center">
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* --- CENTER: THE EDITORIAL PORTRAIT --- */}
        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full aspect-[3/4.5] bg-[#16120f] relative group border border-white/5 rounded-3xl overflow-visible shadow-2xl"
          >
            {/* Image Container with rounded corners to clip the image but not the text */}
            <div className="w-full h-full rounded-3xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1759482067986-912a55696245?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Editorial Fashion" 
                  className="w-full h-full object-cover brightness-90 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07]/90 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* FIXED: Floating Editorial Text Overlay - Adjusted Position and Z-Index */}
            <div className="absolute top-1/2 -right-12 lg:-right-24 -translate-y-1/2 w-full lg:w-[150%] z-30 pointer-events-none">
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#fdfaf7] leading-[0.9] text-right"
                style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              >
                Sparkle <span className="text-[#d4af37]">endlessly</span> <br /> 
                with signature <br /> exclusivity.
              </motion.h2>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: FEATURED PRODUCT CARD --- */}
        <div className="lg:col-span-4 lg:pl-16 flex flex-col justify-end h-full order-3 mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] p-8 md:p-12 border border-white/10 backdrop-blur-3xl rounded-3xl space-y-10 hover:border-[#d4af37]/40 transition-all duration-700 group cursor-pointer"
            onClick={() => navigate('/shop')}
          >
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-[0.5em] text-[#d4af37] font-bold">New Release</span>
              <div className="h-[1px] w-12 bg-[#d4af37]/30" />
            </div>
            
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="py-4 flex justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=400" 
                alt="Aurum Earrings" 
                className="w-full h-48 md:h-64 object-contain drop-shadow-[0_20px_40px_rgba(212,175,55,0.2)] group-hover:drop-shadow-[0_30px_50px_rgba(212,175,55,0.3)] transition-all duration-700"
              />
            </motion.div>

            <div className="space-y-6">
               <h5 className="text-white font-serif italic text-2xl text-center">Golden Solstice Studs</h5>
               <div className="w-full flex flex-col items-center gap-4">
                  <div className="h-[1px] w-full bg-white/10" />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 group-hover:text-[#d4af37] transition-colors">
                    View Acquisition Details
                  </p>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SparkleFeature;