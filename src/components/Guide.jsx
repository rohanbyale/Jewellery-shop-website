import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Diamond, Zap, Microscope, MoveRight, Beaker } from 'lucide-react';

const IntelligencePage = () => {
  const [clarity, setClarity] = useState(50);

  const label = useMemo(() => {
    if (clarity < 20) return { grade: "I1", name: "Included", desc: "Visible characteristics to the naked eye." };
    if (clarity < 40) return { grade: "SI1", name: "Slightly Included", desc: "Noticeable under 10x magnification." };
    if (clarity < 60) return { grade: "VS2", name: "Very Slightly Included", desc: "Minor inclusions, difficult to see at 10x." };
    if (clarity < 80) return { grade: "VVS1", name: "Very, Very Slightly Included", desc: "Minute characteristics, extremely difficult to see." };
    return { grade: "IF", name: "Internally Flawless", desc: "No internal characteristics under 10x magnification." };
  }, [clarity]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#AF8F55]/20 pb-20">
      {/* Condensed Hero Header */}
      <header className="pt-32 pb-16 px-8 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#AF8F55] font-bold inline-block mb-4">
            Educational Series 01
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic leading-tight">
            The Intelligence <br /> of <span className="not-italic text-black">Light</span>
          </h1>
          <p className="mt-6 text-stone-500 text-base font-light leading-relaxed max-w-2xl mx-auto">
            Understanding the anatomy of a diamond is the first step toward a lifetime acquisition. 
            Explore the technical mastery and optical science behind our rare stones.
          </p>
        </motion.div>
      </header>

      <div className="max-w-6xl mx-auto px-8 space-y-20">
        
        {/* Interactive Clarity Module - Tightened */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3 text-[#AF8F55]">
              <Microscope size={16} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Interactive Module: Clarity</span>
            </div>
            <div className="text-[10px] text-stone-300 uppercase font-mono">10x Magnification</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square bg-[#FAF9F6] rounded-[2rem] flex items-center justify-center overflow-hidden border border-stone-50">
              <motion.div 
                animate={{ 
                  filter: `blur(${Math.max(0, (100 - clarity) / 12)}px)`,
                  opacity: clarity / 100 + 0.3,
                  scale: 0.95 + (clarity / 500)
                }}
                className="text-[#AF8F55]"
              >
                <Diamond size={180} strokeWidth={0.2} />
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={label.grade}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute bottom-8 right-8 text-6xl font-serif italic text-stone-200/60 uppercase"
                >
                  {label.grade}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-10">
              <div className="min-h-[100px]">
                <h3 className="text-3xl font-serif italic mb-3">{label.name}</h3>
                <p className="text-stone-500 text-base font-light leading-relaxed">{label.desc}</p>
              </div>

              <div className="space-y-6 pt-6 border-t border-stone-100">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">
                  <span>Inclusions</span>
                  <span>Museum Grade</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  value={clarity}
                  onChange={(e) => setClarity(parseInt(e.target.value))}
                  className="w-full h-[2px] bg-stone-100 rounded-lg appearance-none cursor-pointer accent-[#AF8F55]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Refraction Science - Condensed Gaps */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 text-[#AF8F55] mb-6">
              <Beaker size={16} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Optical Physics</span>
            </div>
            <h2 className="font-serif text-4xl italic mb-6 text-black leading-tight">The Physics of <br/> Brilliance</h2>
            <div className="space-y-6 text-stone-600 text-base leading-relaxed font-light">
              <p>
                A diamond's sparkle isn't magic—it's precision geometry. Light enters the table and must be reflected internally rather than leaking through the pavilion.
              </p>
              
              <div className="p-8 bg-[#1A1A1A] text-stone-400 rounded-[2rem] font-mono text-xs leading-relaxed shadow-xl">
                <p className="mb-2 text-[#AF8F55] text-[10px] uppercase font-bold tracking-widest">Ideal Proportionality</p>
                Pavilion Angle $(\theta_p)$ optimized at $40.75^\circ$ for maximum Light Return.
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-stone-200 aspect-video lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-8 text-center">
             <div className="w-full h-full border border-stone-300/50 rounded-2xl flex items-center justify-center relative bg-[#FAF9F6]">
                <Zap size={30} className="text-[#AF8F55] animate-pulse" />
                <span className="absolute bottom-4 text-[9px] uppercase tracking-widest font-bold text-stone-400">Ray Tracing Diagram</span>
             </div>
          </div>
        </section>

        {/* Anatomy - Streamlined Grid */}
        <section className="text-center pt-8">
          <div className="inline-block p-3 bg-white rounded-full border border-stone-100 mb-8 shadow-sm">
            <Info size={16} className="text-[#AF8F55]" />
          </div>
          <h2 className="font-serif text-4xl italic mb-12 text-black leading-tight">Anatomy of the Stone</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'The Table', desc: 'Flat surface top.' },
              { title: 'The Crown', desc: 'Upper portion.' },
              { title: 'The Pavilion', desc: 'Lower portion.' },
              { title: 'The Culet', desc: 'Base point.' }
            ].map((part) => (
              <motion.div 
                key={part.title}
                whileHover={{ y: -5 }}
                className="p-8 border border-stone-100 rounded-3xl bg-white hover:border-[#AF8F55] transition-all duration-300 text-left"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#AF8F55] mb-2">{part.title}</p>
                <p className="text-stone-500 font-light text-xs leading-relaxed">{part.desc}</p>
                <div className="mt-6">
                  <MoveRight size={14} className="text-stone-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default IntelligencePage;