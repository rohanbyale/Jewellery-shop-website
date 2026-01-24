import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, CheckCircle2, Ruler, Hammer, Star, ShieldCheck } from 'lucide-react';

const AtelierService = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-[#0c0b09] text-[#fdfaf7] min-h-screen selection:bg-[#d4af37] selection:text-black" ref={containerRef}>
      
      {/* --- SECTION 1: CINEMATIC HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2000" 
            alt="Jewelry Workbench" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-20 h-20 border border-[#d4af37]/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer size={32} className="text-[#d4af37] animate-pulse" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif mb-6 leading-[1.1]"
          >
            Artisanal <span className="italic text-[#d4af37]">Alchemy.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-stone-400 max-w-lg mx-auto uppercase tracking-[0.3em] text-[10px] font-bold"
          >
            The Journey from Raw Earth to Refined Elegance
          </motion.p>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* --- SECTION 2: THE THREE PILLARS --- */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              title: "Ethical Selection",
              icon: <Star size={20} />,
              desc: "Every diamond is hand-selected under 40x magnification, ensuring only the top 1% of stones enter our atelier."
            },
            {
              title: "Digital Blueprint",
              icon: <Ruler size={20} />,
              desc: "Precision meets poetry. We use aerospace-grade CAD modeling to ensure structural integrity before the first drop of gold is poured."
            },
            {
              title: "Master Finish",
              icon: <ShieldCheck size={20} />,
              desc: "A three-stage polishing process that creates a 'mirror-black' finish, a hallmark of genuine high-jewelry."
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group space-y-6"
            >
              <div className="text-[#d4af37] border-l border-[#d4af37] pl-4 group-hover:pl-6 transition-all duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-serif italic">{pillar.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE PROCESS --- */}
      <section className="bg-white text-black py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">The Aurum Method</h2>
            <div className="h-px w-32 bg-[#d4af37]" />
          </div>

          <div className="space-y-32">
            {[
              {
                step: "01",
                label: "The Private Consultation",
                text: "Whether virtual or in our Mayfair atelier, we begin by exploring your aesthetic DNA and heritage requirements.",
                img: "https://plus.unsplash.com/premium_photo-1663047595696-3b0267cf96b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGpld2VscnklMjBzaG9wfGVufDB8fDB8fHww"
              },
              {
                step: "02",
                label: "The Material Sourcing",
                text: "We provide a curated selection of loose stones, sourced specifically for your project from conflict-free mines in Botswana and Canada.",
                img: "https://plus.unsplash.com/premium_photo-1678025061535-91fe679f8105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZHxlbnwwfHwwfHx8MA%3D%3D"
              },
              {
                step: "03",
                label: "The Artisanal Forge",
                text: "Our master smiths spend 80+ hours on a single piece, using tools that have been passed down through three generations.",
                img: "/owner.jpg"
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-2xl">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={item.img} 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <span className="text-[#d4af37] font-serif text-6xl opacity-20 block">{item.step}</span>
                  <h3 className="text-3xl font-serif tracking-tight">{item.label}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{item.text}</p>
                  <ul className="space-y-2">
                    {["Detailed Reporting", "Video Progress Updates", "Secure Insured Delivery"].map(li => (
                      <li key={li} className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold">
                        <CheckCircle2 size={12} className="text-[#d4af37]" /> {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION 4: HERITAGE & NUMBERS --- */}
      <section className="py-32 px-8 relative overflow-hidden bg-[#0c0b09]">
        {/* Abstract Background Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#d4af37] font-bold">By The Numbers</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic leading-tight">Quantifying our <br/> commitment to craft.</h3>
            <p className="text-stone-500 font-light leading-relaxed max-w-md">
              Excellence is not an accident. It is the result of high intention, sincere effort, and intelligent execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-y-16 gap-x-8">
            {[
              { label: "Hours of Craft", value: "120+" },
              { label: "Master Artisans", value: "14" },
              { label: "Years of Heritage", value: "45" },
              { label: "Hand-Set Stones", value: "10k+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2 border-l border-white/10 pl-6"
              >
                <h4 className="text-3xl md:text-5xl font-serif text-[#d4af37]">{stat.value}</h4>
                <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-32 bg-[#d4af37] text-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none italic font-serif text-[20vw] whitespace-nowrap -translate-y-1/2">
          AURUM AURUM AURUM
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Begin Your Legacy Today.</h2>
          <button className="bg-black text-white px-12 py-6 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform shadow-2xl">
            Request an Invitation
          </button>
        </div>
      </section>

    </div>
  );
};

export default AtelierService;