import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Info } from 'lucide-react';

const BestMaterial = () => {
  const [activePoint, setActivePoint] = useState(null);

  const features = [
    { id: 1, label: "Wire Guardian", x: "18%", y: "35%", side: "left", desc: "Reinforced structural integrity for lifelong wear." },
    { id: 2, label: "End Cap", x: "15%", y: "60%", side: "left", desc: "Seamless fusion finish for maximum comfort." },
    { id: 3, label: "Bead Tip", x: "20%", y: "82%", side: "left", desc: "Precision-angled edges to catch natural light." },
    { id: 4, label: "Ribbon Crimp", x: "78%", y: "32%", side: "right", desc: "Micro-set diamonds for a flush, elegant profile." },
    { id: 5, label: "Chain Terminator", x: "82%", y: "58%", side: "right", desc: "Industrial-grade polishing for scratch resistance." },
    { id: 6, label: "Cord Coil", x: "75%", y: "80%", side: "right", desc: "Ethically sourced 18k solid gold composition." },
  ];

  return (
    <section className="bg-[#fdfaf7] py-40 px-6 md:px-12 overflow-hidden relative">
      {/* Background Text Decal */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[20vw] font-serif italic leading-none">Composition</h2>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-black/10" />
            <span className="text-[10px] uppercase tracking-[0.8em] text-black/40 font-bold">The Blueprint</span>
            <div className="h-[1px] w-12 bg-black/10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-serif italic text-[#0a0806] tracking-tight">
            Superior <span className="not-italic text-black/10">Material</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Main Product Image with subtle floating animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <motion.img 
            initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src="https://t3.ftcdn.net/jpg/06/91/86/24/360_F_691862455_oHryabg7dZg6C86IK72IF65haHLIxMtU.jpg"
            className="w-full h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] mix-blend-multiply"
            alt="Luxury Jewelry Detail"
          />
        </motion.div>

        {/* Interactive Hotspots Layer */}
        {features.map((point) => (
          <div 
            key={point.id}
            className="absolute z-20 hidden md:block"
            style={{ left: point.x, top: point.y }}
          >
            <div className="relative flex items-center justify-center">
              
              {/* Animated Connector Line */}
              <svg 
                className={`absolute pointer-events-none overflow-visible ${point.side === 'left' ? 'right-0' : 'left-0'}`}
                width="120" height="40"
              >
                <motion.path
                  d={point.side === 'left' ? "M 120 20 L 0 20" : "M 0 20 L 120 20"}
                  fill="none"
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>

              {/* Hotspot Button */}
              <motion.button
                onMouseEnter={() => setActivePoint(point.id)}
                onMouseLeave={() => setActivePoint(null)}
                whileHover={{ scale: 1.2 }}
                className="group relative w-10 h-10 flex items-center justify-center"
              >
                {/* Magnetic Ripple */}
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-black/5 rounded-full"
                />
                
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${activePoint === point.id ? 'bg-[#d4af37] scale-125' : 'bg-black'}`}>
                  <Plus size={8} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.button>

              {/* Floating Information Panel */}
              <AnimatePresence>
                {activePoint === point.id && (
                  <motion.div
                    initial={{ opacity: 0, x: point.side === 'left' ? -20 : 20, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, x: point.side === 'left' ? -140 : 140, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: point.side === 'left' ? -20 : 20 }}
                    className={`absolute w-48 p-4 bg-white/40 backdrop-blur-md border border-white/20 shadow-xl rounded-sm text-left ${point.side === 'left' ? 'right-full mr-4' : 'left-full ml-4'}`}
                  >
                    <div className="flex items-center gap-2 mb-2 text-[#d4af37]">
                      <Info size={12} />
                      <span className="text-[9px] uppercase tracking-widest font-bold">Tech Specs</span>
                    </div>
                    <p className="text-[11px] uppercase tracking-widest font-bold text-black mb-1">{point.label}</p>
                    <p className="text-[10px] text-black/60 leading-relaxed font-light italic">
                      {point.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Experience: Elegant List */}
      <div className="mt-24 md:hidden space-y-12">
        {features.map((f, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={f.id} 
            className="flex items-start gap-6 border-l border-black/5 pl-6"
          >
            <span className="text-[10px] font-serif italic text-[#d4af37]">0{f.id}</span>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-bold mb-1">{f.label}</p>
              <p className="text-[10px] text-black/50 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Aesthetic Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 100">
          <motion.path
            d="M 0 50 Q 360 10 720 50 T 1440 50"
            fill="none"
            stroke="black"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default BestMaterial;