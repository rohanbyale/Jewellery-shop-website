import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Scissors, Droplets, Sparkles } from 'lucide-react';

const AtelierJournal = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflow = [
    {
      title: "The Sketch",
      detail: "Form begins as a charcoal study of light and shadow.",
      img: "https://img.freepik.com/premium-photo/very-luxurious-gold-bracelet-line-art-white-background_1295878-1286.jpg",
      icon: <PenTool size={18} />
    },
    {
      title: "The Cast",
      detail: "Lost-wax casting transforms ephemeral wax into solid gold.",
      img: "https://www.darjewellery.com/product_image/s1200__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE2MDcwMDIzMzk4MDQuanBn",
      icon: <Droplets size={18} />
    },
    {
      title: "The Set",
      detail: "Micro-pave techniques ensure stones are held by light alone.",
      img: "https://www.swashaa.com/cdn/shop/files/SunAndPearlBracelet-nikitama_am-19-07-2025-krupa_1.jpg?v=1761912729&width=1800",
      icon: <Scissors size={18} />
    }
  ];

  return (
    <section className="bg-[#0a0806] py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* LEFT: INTERACTIVE STEPS (REDUCED HEIGHT) */}
        <div className="w-full md:w-1/2 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <span className="text-[9px] uppercase tracking-[0.6em] text-[#d4af37] font-bold">The Craft</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-white mt-2">Atelier Journal</h2>
          </motion.div>

          <div className="space-y-2">
            {workflow.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className="relative group cursor-pointer py-6 border-b border-white/5"
              >
                <div className="flex items-center gap-6 relative z-10">
                  <span className={`text-[10px] transition-colors duration-500 ${activeStep === idx ? 'text-[#d4af37]' : 'text-white/20'}`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className={`text-xl font-serif transition-all duration-500 ${activeStep === idx ? 'text-white translate-x-2' : 'text-white/30'}`}>
                      {step.title}
                    </h3>
                    <AnimatePresence transition={{duration: 0.3}}>
                      {activeStep === idx && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-[11px] text-white/40 mt-2 font-light tracking-wide max-w-xs leading-relaxed"
                        >
                          {step.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                {activeStep === idx && (
                  <motion.div 
                    layoutId="active-bg" 
                    className="absolute inset-0 bg-white/[0.02] -z-0" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: DYNAMIC IMAGE (CINEMATIC REVEAL) */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[60vh] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 1.1, filter: 'grayscale(1)' }}
              animate={{ opacity: 1, scale: 1, filter: 'grayscale(0)' }}
              exit={{ opacity: 0, scale: 0.9, filter: 'grayscale(1)' }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="w-full h-full"
            >
              <img 
                src={workflow[activeStep].img} 
                alt={workflow[activeStep].title}
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Icon Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-[#d4af37]"
          >
            {workflow[activeStep].icon}
          </motion.div>

          <div className="absolute top-8 left-8">
             <Sparkles className="text-white/20 animate-pulse" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtelierJournal;