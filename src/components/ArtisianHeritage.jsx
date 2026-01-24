import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Gem, PenTool, Sparkles, ArrowRight } from 'lucide-react';

const ArtisanHeritage = () => {
  const navigate = useNavigate();
  
  // Subtle parallax for a tighter feel
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section className="bg-[#0f0a07] py-20 px-6 md:px-16 relative overflow-hidden border-t border-white/5">
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* Left: Compact Image Composition */}
        <div className="lg:w-5/12 relative h-[450px] md:h-[550px] w-full">
          {/* Main Image */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-[80%] h-[80%] z-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=800" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
              alt="Diamond Detail" 
            />
          </motion.div>

          {/* Floating Detail Image */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-4 right-0 w-[55%] h-[50%] z-20 p-1 bg-[#0f0a07] rounded-xl shadow-[-20px_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg border border-[#d4af37]/30">
              <img 
                src="https://media.istockphoto.com/id/617895460/photo/craft-jewelery-making.jpg?s=612x612&w=0&k=20&c=2kAIW4Xf6bquXPEXpNQy8lsQuZbxxPGXU0ONEKf0u7g=" 
                className="w-full h-full object-cover brightness-110" 
                alt="Craftsmanship" 
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Content & Feature Grid */}
        <div className="lg:w-7/12 space-y-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[#d4af37]"
            >
              <div className="h-[1px] w-8 bg-[#d4af37]" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-bold">The Heritage</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-serif italic leading-tight text-[#fdfaf7]">
              Legacy of <span className="text-[#d4af37] not-italic">Pure</span> Elegance.
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <p className="max-w-md text-stone-400 text-[12px] leading-relaxed tracking-wide font-light">
                Every creation is a dialogue between nature's raw beauty and human precision. Our artisans spend hundreds of hours perfecting a single silhouette.
              </p>
              
              {/* Specialized Button */}
              <button 
                onClick={() => navigate('/about')}
                className="group relative flex items-center gap-3 px-6 py-3 border border-[#d4af37]/50 rounded-full text-[10px] uppercase tracking-widest text-[#fdfaf7] hover:bg-[#d4af37] hover:text-[#0f0a07] transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">Read Story</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Compressed Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Gem size={18}/>, title: "18k Gold", desc: "Conflict-free metals." },
              { icon: <ShieldCheck size={18}/>, title: "Lifetime", desc: "Complimentary care." },
              { icon: <PenTool size={18}/>, title: "Bespoke", desc: "Tailored narrative." },
              { icon: <Sparkles size={18}/>, title: "GIA Std", desc: "Grading standards." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-5 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[#d4af37]">{item.icon}</div>
                  <h4 className="font-serif italic text-lg text-[#fdfaf7]">{item.title}</h4>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-stone-500 group-hover:text-stone-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanHeritage;