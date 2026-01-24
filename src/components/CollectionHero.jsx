import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const CollectionHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for the "Floating Lens"
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // We only track mouse if it's a fine pointer (desktop)
      if (window.matchMedia("(pointer: fine)").matches) {
        mouseX.set(e.clientX - 100); 
        mouseY.set(e.clientY - 100);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center select-none pt-20 pb-12 lg:py-0">
      
      {/* Background Texture */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent)] opacity-30 pointer-events-none"
      />

      {/* Floating Lens - Hidden on mobile/touch for better UX */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-48 h-64 z-50 pointer-events-none hidden lg:block overflow-hidden border border-white/20 rounded-lg shadow-2xl"
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          rotate: isHovered ? 5 : 0
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1611583027838-515a1087afdb?q=80&w=765&auto=format&fit=crop" 
          className="w-full h-full object-cover scale-150" 
          alt="Macro Detail"
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-4 h-full relative z-10">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] lg:tracking-[1em] text-[#d4af37] font-bold block mb-4 lg:mb-8">
              Volume No. 04
            </span>
            
            <h1 className="text-[18vw] lg:text-[10vw] font-serif leading-[0.85] lg:leading-[0.8] text-white italic">
              Sculpting <br />
              <span className="text-transparent stroke-text lg:pl-24">Silence</span>
            </h1>

            <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                className="text-xs md:text-sm font-light text-white max-w-[280px] leading-relaxed"
              >
                A collection defined by the negative space between metal and skin.
              </motion.p>
              
              {/* Responsive Linkable Button */}
              <a href="/series" className="block w-full sm:w-auto">
                <motion.button
                  whileHover={{ gap: "2rem" }}
                  className="flex items-center justify-center lg:justify-start gap-4 text-white text-[10px] md:text-xs uppercase tracking-widest group border-b border-white/20 pb-2 transition-all w-full lg:w-auto"
                >
                  Enter Series <MoveRight size={16} className="text-[#d4af37]" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: The Asymmetric Frame */}
        <div className="lg:col-span-5 relative h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full max-w-[400px] lg:max-w-none lg:w-[120%] h-full group"
          >
            <img 
              src="https://images.unsplash.com/photo-1739194806935-3b4c66aee282?q=80&w=715&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-all duration-1000"
              alt="Sculptural Jewelry"
            />
            
            {/* Absolute Badge - hidden on very small screens to avoid overlap */}
            <motion.div 
              animate={{ rotate: -90 }}
              className="absolute -left-16 bottom-24 hidden sm:flex items-center gap-4 origin-left"
            >
              <div className="h-px w-16 lg:w-24 bg-white/20" />
              <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.5em] text-white/40 whitespace-nowrap">Handmade in London</span>
            </motion.div>
          </motion.div>

          {/* Background Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[120%] aspect-square border border-white/5 rounded-full -z-10 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
};

export default CollectionHero;