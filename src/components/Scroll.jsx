import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HorizontalShowcase = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Snappier horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const items = [
    { id: 1, title: "The Royal Band", price: "$4,200", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" },
    { id: 2, title: "Oceanic Pearl", price: "$2,850", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800" },
    { id: 3, title: "Golden Solstice", price: "$3,100", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800" },
    { id: 4, title: "Midnight Carat", price: "$5,200", img: "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?q=80&w=1231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <section ref={targetRef} className="relative h-[160vh] bg-[#0f0a07]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Cinematic Background Title */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]) }} 
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[12vw] font-serif italic text-[#d4af37] opacity-[0.03] pointer-events-none select-none"
        >
          THE ATELIER EXHIBITION
        </motion.div>

        <div className="relative flex flex-col w-full">
          {/* Subtle Label */}
          <motion.div 
            style={{ opacity }}
            className="px-10 md:px-20 mb-8 flex items-center gap-4 text-[#d4af37]"
          >
            <div className="w-8 h-[1px] bg-[#d4af37]/40" />
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold">Private Selection</span>
          </motion.div>

          {/* Horizontal Slider */}
          <motion.div style={{ x }} className="flex gap-10 px-10 md:px-20">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="group relative h-[380px] w-[280px] md:h-[480px] md:w-[380px] flex-shrink-0 cursor-pointer"
                onClick={() => navigate('/shop')}
              >
                {/* Image Container */}
                <div className="h-full w-full overflow-hidden rounded-2xl border border-white/5 bg-[#16120f] relative shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="h-full w-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100" 
                  />
                  {/* Glassmorphism Bottom Card */}
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-black/40 backdrop-blur-md border-t border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[8px] uppercase tracking-widest text-[#d4af37] font-bold">Limited Edition</p>
                        <h3 className="text-xl md:text-2xl font-serif italic text-[#fdfaf7]">{item.title}</h3>
                        <p className="text-sm font-light text-[#fdfaf7]/50">{item.price}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Minimalist View All End-Card */}
            <div 
              onClick={() => navigate('/shop')}
              className="h-[380px] w-[200px] md:h-[480px] md:w-[250px] flex-shrink-0 flex items-center justify-center group cursor-pointer"
            >
                <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border border-dashed border-[#d4af37]/40 flex items-center justify-center mx-auto group-hover:rotate-90 transition-transform duration-700">
                        <ArrowRight size={24} className="text-[#d4af37]" />
                      </div>
                    </div>
                    <p className="text-[#fdfaf7] text-[10px] uppercase tracking-[0.5em] font-bold">Enter the <br/>Boutique</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;