import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, MoveRight } from 'lucide-react';

const GlamourShowcase = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Hook to track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for the image
  // It starts at 100vw/100vh (Full screen) and shrinks to the container size
  const imageWidth = useTransform(scrollYProgress, [0, 0.5], ["100vw", "100%"]);
  const imageHeight = useTransform(scrollYProgress, [0, 0.5], ["100vh", "100%"]);
  const imageRadius = useTransform(scrollYProgress, [0, 0.5], ["0px", "12px"]);
  const imageGrayscale = useTransform(scrollYProgress, [0, 0.5], ["grayscale(0%)", "grayscale(30%)"]);

  return (
    /* We increase min-height to 200vh to create 'scroll room' for the sticky effect */
    <section ref={containerRef} className="bg-[#0f0a07] text-[#fdfaf7] min-h-[200vh] relative font-sans">
      
      {/* STICKY WRAPPER: This stays fixed while you scroll through the 200vh */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-16">
        
        {/* Background Aesthetic */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#d4af37]/5 blur-[160px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 relative z-10 border-t border-white/10 pt-12 h-full py-12">
          
          {/* LEFT COLUMN: Artisan Branding */}
          <div className="lg:col-span-4 p-6 md:p-12 flex flex-col justify-between border-r border-white/5 h-full">
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#d4af37]" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] font-bold">The Atelier Series</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif italic leading-tight text-[#fdfaf7]">
                Aurum <br /> Signature <br /> <span className="text-[#d4af37]">Chain</span>
              </h3>
              <button 
                onClick={() => navigate('/shop')}
                className="flex items-center gap-3 group text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400 hover:text-[#d4af37] transition-all"
              >
                Discover Pieces <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]) }}
              className="mt-auto relative"
            >
              <div className="absolute -top-16 left-0 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-ping" />
                <div className="h-[1px] w-12 bg-white/20" />
              </div>
              <h4 className="text-3xl md:text-4xl font-serif italic mb-6 leading-snug">
                Crafted for the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#fdfaf7]">extraordinary</span> <br /> 
                modern spirit.
              </h4>
              <p className="text-[12px] text-stone-500 max-w-[280px] leading-relaxed font-light tracking-wide">
                Every link is hand-polished in our London studio, ensuring a weight and luster that lasts generations.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Cinematic Visuals */}
          <div className="lg:col-span-8 p-6 md:p-12 flex flex-col justify-between h-full">
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex gap-3 text-[#d4af37]/40">
                 <Sparkles size={20} className="animate-pulse" />
                 <Sparkles size={14} className="mt-8 opacity-50" />
              </div>
              <motion.h2 
                style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }}
                className="text-6xl md:text-9xl font-serif italic leading-[0.75] text-right"
              >
                Glamour <br /> 
                <span className="text-white/20">redefined</span>
              </motion.h2>
            </div>

            {/* Main Content Area (Where the image shrinks to) */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-end flex-grow">
              
              {/* IMAGE SHOWCASE CONTAINER */}
              <div className="relative group cursor-pointer h-full flex flex-col justify-end" onClick={() => navigate('/collection')}>
                <motion.p 
                  style={{ opacity: useTransform(scrollYProgress, [0.45, 0.5], [0, 1]) }}
                  className="text-[13px] font-serif italic mb-6 text-stone-400 group-hover:text-[#d4af37] transition-colors"
                >
                  — Sequence No. 04: The Link Bracelet
                </motion.p>

                {/* The Animated Image Wrapper */}
                <motion.div 
                  className="relative z-50 self-center lg:self-start overflow-hidden"
                  style={{ 
                    width: imageWidth, 
                    height: imageHeight,
                    borderRadius: imageRadius,
                    filter: imageGrayscale,
                    // If it's full screen, we position it fixed. If shrunk, it sits in the grid.
                    position: useTransform(scrollYProgress, [0, 0.5], ["fixed", "relative"]),
                    top: useTransform(scrollYProgress, [0, 0.5], ["0%", "auto"]),
                    left: useTransform(scrollYProgress, [0, 0.5], ["0%", "auto"]),
                    zIndex: useTransform(scrollYProgress, [0, 0.51], [100, 10]),
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-transparent z-20 opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200" 
                    alt="Gold Chain" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Technical Detail & CTA */}
              <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0.45, 0.6], [0, 1]) }}
                className="space-y-16 pb-6"
              >
                <div className="space-y-6">
                  <button onClick={() => navigate('/shop')} className="group flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                      <ArrowRight size={24} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37] group-hover:text-white transition-colors">
                      Explore All <br /> Handmade Sets
                    </span>
                  </button>
                </div>

                <div className="space-y-4 border-l border-[#d4af37]/20 pl-6">
                   <div className="flex gap-1 opacity-40">
                      <div className="w-1 h-1 bg-[#d4af37]"></div>
                      <div className="w-1 h-1 bg-[#d4af37]"></div>
                   </div>
                   <p className="text-[11px] font-light leading-relaxed text-stone-500 tracking-wider">
                      Investment-grade metals. <br /> 
                      Ethically sourced. <br />
                      Unconditionally guaranteed.
                   </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-[#d4af37]" />
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlamourShowcase;