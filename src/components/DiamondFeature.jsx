import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Plus, ArrowRight, Sparkles } from 'lucide-react';

const DiamondFeature = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const imageWidth = useTransform(smoothProgress, [0, 0.5], ["100vw", "100%"]);
  const imageHeight = useTransform(smoothProgress, [0, 0.5], ["100vh", "720px"]);
  const imageRadius = useTransform(smoothProgress, [0.4, 0.6], ["0px", "24px"]);
  
  const contentOpacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.5, 0.7], [40, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-[#0f0a07] text-white font-sans">
      
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#d4af37]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[0%] w-[30%] h-[50%] bg-[#d4af37]/5 blur-[130px] rounded-full" />
        </div>

        {/* --- FIXED HEADLINE LAYER --- */}
        {/* This ensures the text is always dead-center of the screen during the first 20% of scroll */}
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]),
            y: useTransform(smoothProgress, [0, 0.2], [0, -20]) 
          }}
          className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none px-6"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-tight text-white text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            Unrivaled brilliance <br />
            <span className="flex items-center justify-center gap-4 text-[#d4af37]">
              exclusive <Sparkles size={48} className="animate-pulse hidden md:block" /> artistry
            </span>
          </h2>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 md:px-16">
          
          {/* LEFT COLUMN */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="lg:col-span-3 hidden lg:flex flex-col gap-12 order-2 lg:order-1"
          >
            <div className="p-3 bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-2xl w-fit group cursor-pointer" onClick={() => navigate('/shop')}>
              <div className="overflow-hidden rounded-xl bg-[#16100c]">
                <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400" className="w-56 h-56 object-cover transition-transform duration-700 group-hover:scale-110" alt="Ring" />
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-2">The Archive No. 1</p>
                <p className="text-[11px] leading-relaxed text-stone-400 max-w-[200px]">Precision-cut solitaire diamonds set in signature 18k Aurum gold.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-4xl font-serif italic leading-tight text-[#fdfaf7]">Discover the <br /><span className="text-[#d4af37]">Eternal Glow</span></h3>
              <button onClick={() => navigate('/shop')} className="px-10 py-4 bg-[#d4af37] text-[#0f0a07] rounded-full font-bold text-[10px] uppercase tracking-[0.2em]">View Collection</button>
            </div>
          </motion.div>

          {/* CENTER COLUMN: THE IMAGE */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full flex justify-center items-center">
              <motion.div 
                style={{ 
                  width: imageWidth, 
                  height: imageHeight, 
                  borderRadius: imageRadius,
                  position: useTransform(smoothProgress, [0, 0.5], ["fixed", "relative"]),
                  top: useTransform(smoothProgress, [0, 0.5], ["0%", "auto"]),
                  left: useTransform(smoothProgress, [0, 0.5], ["0%", "auto"]),
                  zIndex: useTransform(smoothProgress, [0, 0.5], [50, 10]),
                }}
                className="overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
              >
                <motion.img 
                  style={{ scale: useTransform(smoothProgress, [0, 0.6], [1.2, 1]) }}
                  src="https://images.unsplash.com/photo-1721807551235-4072be6913c0?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Aurum Model" 
                  className="w-full h-full object-cover brightness-75 lg:brightness-90 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-transparent opacity-80" />
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div 
            style={{ opacity: contentOpacity, x: contentY }}
            className="lg:col-span-3 hidden lg:flex flex-col justify-end h-full pb-10 order-3"
          >
            <div className="space-y-8 flex flex-col items-start">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] font-bold">New Arrival</p>
                <h4 className="text-2xl font-serif italic text-[#fdfaf7]">The Halo Pendant</h4>
              </div>
              <div className="relative w-full aspect-[4/5] bg-[#16100c] overflow-hidden rounded-2xl border border-white/5 group cursor-pointer">
                 <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400" className="w-full h-full object-contain p-10 transition-all duration-700 group-hover:scale-110" alt="Earrings" />
                 <div className="absolute bottom-6 right-6 bg-[#d4af37] p-3 rounded-full text-[#0f0a07] opacity-0 group-hover:opacity-100 transition-all"><ArrowRight size={16} /></div>
              </div>
              <button className="flex items-center gap-3 group text-[10px] uppercase tracking-[0.4em] font-bold text-stone-500 hover:text-[#d4af37] transition-all">
                Shop The Set <div className="h-[1px] w-8 bg-[#d4af37] group-hover:w-16 transition-all duration-500" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DiamondFeature;