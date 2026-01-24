import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';

const LookbookSection = () => {
  const targetRef = useRef(null);
  
  // High-end parallax effect for the background text
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const highlights = [
    {
      title: "The Solstice Collection",
      subtitle: "Hand-carved 18k Gold",
      image: "https://images.unsplash.com/photo-1722410180687-b05b50922362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/collections/solstice"
    },
    {
      title: "Modern Heritage",
      subtitle: "Ethical Lab Diamonds",
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/collections/heritage"
    }
  ];

  return (
    <section ref={targetRef} className="bg-[#0f0a07] py-32 overflow-hidden relative">
      {/* Background Animated Text */}
      <motion.div 
        style={{ x }}
        className="absolute top-20 left-0 whitespace-nowrap pointer-events-none opacity-[0.03] select-none"
      >
        <span className="text-[20vw] font-serif leading-none text-white">EXCLUSIVITY • ARTISTRY • PRECISION • </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#AF8F55] font-bold">Volume II</span>
            <h2 className="mt-4 text-5xl md:text-7xl font-serif text-white italic leading-tight">
              Beyond the <br/><span className="not-italic">Ordinary.</span>
            </h2>
          </div>
          <p className="text-stone-500 font-light max-w-xs leading-relaxed border-l border-stone-800 pl-6">
            Explore cinematic captures of our latest designs, styled for the modern connoisseur.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#AF8F55] font-bold mb-2">{item.subtitle}</p>
                  <h3 className="text-3xl font-serif italic">{item.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#AF8F55] group-hover:border-[#AF8F55] transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-4 text-white text-[11px] uppercase tracking-[0.4em] font-bold group">
            <span className="h-px w-12 bg-stone-700 group-hover:w-20 group-hover:bg-[#AF8F55] transition-all duration-500" />
            View Full Lookbook
            <MoveRight size={16} className="text-[#AF8F55]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;