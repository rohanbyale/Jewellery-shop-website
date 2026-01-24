import React from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const HeroPage = () => {
  const navigate = useNavigate(); // Hook to handle button clicks

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#0f0a07] text-white font-sans min-h-screen pt-20 lg:pt-0">
      
      {/* HERO BENTO GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
        
        {/* Main Branding Side */}
        <div className="lg:col-span-8 relative p-10 md:p-20 flex flex-col justify-center overflow-hidden border-r border-white/5">
          {/* Ambient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a110a] via-[#0f0a07] to-[#1a110a]">
             <motion.div 
               animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
               transition={{ duration: 20, repeat: Infinity }}
               className="absolute -top-1/2 -left-1/4 w-full h-full bg-[#d4af37]/5 blur-[120px] rounded-full"
             />
          </div>

          <motion.div variants={stagger} initial="initial" animate="animate" className="relative z-10">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-[#d4af37]"></div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] font-bold">Exquisite Craftsmanship</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-serif italic leading-[0.85] mb-12">
              Unleash the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f5f5] via-[#d4af37] to-[#f5f5f5]">shining</span> beauty
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex items-center gap-6">
              {/* Updated Redirect to Shop */}
              <button 
                onClick={() => navigate('/shop')}
                className="px-12 py-4 bg-[#2a1d13] border border-white/10 rounded-full italic font-serif text-lg hover:bg-[#d4af37] hover:text-black transition-all transform hover:-translate-y-1"
              >
                The Collection
              </button>
              
              <div 
                onClick={() => navigate('/contact')}
                className="p-4 border border-white/10 rounded-full hover:rotate-45 hover:border-[#d4af37] hover:text-[#d4af37] transition-all cursor-pointer"
              >
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          </motion.div>

          {/* Social Proof glassmorphism */}
          <div className="mt-auto pt-20 relative z-10">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 max-w-sm rounded-sm">
              <p className="font-serif italic text-xl mb-4 italic text-stone-300">"The standard of modern alchemy."</p>
              <button 
                onClick={() => navigate('/collection')}
                className="text-[10px] tracking-widest uppercase text-[#d4af37] hover:tracking-[0.2em] transition-all"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Feature */}
        <div className="lg:col-span-4 flex flex-col">
          <div 
            onClick={() => navigate('/shop')}
            className="flex-1 p-12 bg-[#16100c] flex flex-col justify-center items-center relative group cursor-pointer"
          >
            <div className="absolute top-10 left-10 text-left">
              <p className="text-[10px] uppercase tracking-widest text-[#d4af37] mb-2 font-bold">Premium Grade</p>
              <h3 className="text-3xl font-serif italic">The Golden Vault</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" 
              className="w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform duration-700" 
              alt="Ring" 
            />
          </div>

          <div className="h-1/3 grid grid-cols-2 border-t border-white/5">
              <div className="relative group overflow-hidden cursor-pointer border-r border-white/5">
                <img src="https://i.pinimg.com/736x/86/26/3c/86263c86f339e78eb1ef1e739bbfa994.jpg" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="model" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <Play size={16} fill="#d4af37" className="text-[#d4af37]" />
                </div>
              </div>
              
              <div 
                onClick={() => navigate('/collection')}
                className="p-6 flex flex-col justify-between bg-[#0f0a07] border-l border-white/5 group cursor-pointer"
              >
                <p className="text-[9px] uppercase tracking-widest opacity-60 group-hover:text-[#d4af37] transition-colors">Handpicked<br/>Pieces</p>
                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400" className="w-full h-24 object-contain brightness-110 transition-transform group-hover:scale-105" alt="Earrings" />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;