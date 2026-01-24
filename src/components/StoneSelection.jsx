import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const StoneSelection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const stones = [
    { 
      name: "Royal Sapphire", 
      glow: "rgba(30, 58, 138, 0.4)", 
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600",
      meaning: "Wisdom & Royalty",
      latent: "Resonates with the Throat Chakra for clarity of intent."
    },
    { 
      name: "Eternal Diamond", 
      glow: "rgba(212, 175, 55, 0.2)", 
      img: "https://truediamond.in/cdn/shop/files/celestial-pear-round-eternity-band-front_1024x1024.jpg?v=1757411393",
      meaning: "Strength & Purity",
      latent: "The hardest known natural mineral, representing invincibility."
    },
    { 
      name: "Rose Quartz", 
      glow: "rgba(244, 114, 182, 0.25)", 
      img: "https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      meaning: "Love & Compassion",
      latent: "A stone of the heart, emitting vibrations of unconditional peace."
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="bg-[#0a0806] py-40 px-6 relative overflow-hidden transition-colors duration-1000"
    >
      {/* Dynamic Spectrum Background */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${stones[hoveredIndex].glow} 0%, transparent 65%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating Dust Particles (Visual Polish) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#d4af37] rounded-full animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <motion.span 
            className="text-[10px] uppercase tracking-[1em] text-[#d4af37] font-bold block mb-6"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            The Alchemy of Nature
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-serif italic text-[#fdfaf7] leading-none">
            Choose your <span className="not-italic">Essence</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-10">
          {stones.map((stone, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer w-full max-w-[320px]"
            >
              {/* Interaction Ring (SVG Orbit) */}
              <div className="absolute inset-[-40px] pointer-events-none">
                <svg className="w-full h-full rotate-45">
                  <motion.circle
                    cx="50%" cy="50%" r="48%"
                    fill="none"
                    stroke="rgba(212, 175, 55, 0.1)"
                    strokeWidth="1"
                    strokeDasharray="10 20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>

              {/* Stone Image Container */}
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="aspect-square rounded-full p-3 border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                  <motion.img 
                    src={stone.img} 
                    className="w-full h-full object-cover rounded-full transition-all duration-1000 group-hover:scale-110 group-hover:rotate-12 filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-110"
                    alt={stone.name} 
                  />
                  
                  {/* Internal Shimmer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>

                {/* Spectral Meaning Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-center overflow-hidden h-12">
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex flex-col items-center"
                      >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] font-bold">
                          {stone.meaning}
                        </span>
                        <div className="w-8 h-[1px] bg-[#d4af37]/40 mt-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Title & Latent Description */}
              <div className="mt-20 text-center relative z-20">
                <h4 className="font-serif italic text-4xl text-[#fdfaf7] mb-4 transition-colors duration-500 group-hover:text-[#d4af37]">
                  {stone.name}
                </h4>
                <p className="text-[11px] text-white/30 leading-relaxed max-w-[200px] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  {stone.latent}
                </p>
                <motion.div 
                  className="h-[1px] bg-[#d4af37] mt-6 mx-auto"
                  initial={{ width: 0 }}
                  whileHover={{ width: "40%" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Decorative Text (Editorial Style) */}
      <div className="absolute left-10 top-1/2 -rotate-90 origin-left hidden xl:block">
        <span className="text-[10px] uppercase tracking-[1em] text-white/10 font-bold whitespace-nowrap">
          The Curated Collection — 2026
        </span>
      </div>
    </section>
  );
};

export default StoneSelection;