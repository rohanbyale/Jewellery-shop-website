import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0806] text-[#fdfaf7] pt-20 pb-10 px-8 relative overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP DECORATIVE LINE: Elegant thin line with a golden center */}
        <div className="flex items-center justify-center mb-16 opacity-30">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="h-1 w-1 rounded-full bg-[#d4af37] mx-4 shadow-[0_0_10px_#d4af37]" />
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* MIDDLE SECTION: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {[
            {
              title: "Collections",
              links: ["Engagement", "Fine Necklaces", "Architectural Rings"]
            },
            {
              title: "The House",
              links: ["Our Heritage", "Sustainability", "The Journal"]
            },
            {
              title: "Concierge",
              links: ["Shipping", "Jewelry Care", "Sizing Guide"]
            }
          ].map((col, idx) => (
            <div key={idx} className="space-y-5">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37]/80">{col.title}</h4>
              <ul className="space-y-3 text-stone-500 text-[11px] font-medium tracking-widest uppercase">
                {col.links.map(link => (
                  <li key={link} className="hover:text-[#d4af37] transition-all cursor-pointer w-fit transform hover:translate-x-1 duration-300 italic">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37]/80">Ateliers</h4>
            <div className="text-stone-500 text-[11px] space-y-4 leading-relaxed font-medium uppercase tracking-widest">
              <p className="group cursor-pointer">
                Mayfair <span className="text-stone-700 font-light italic ml-2">12 Bruton St</span>
              </p>
              <p className="group cursor-pointer">
                Paris <span className="text-stone-700 font-light italic ml-2">7 Rue de la Paix</span>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Socials & Animated Credit */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Icons */}
          <div className="flex gap-8 items-center">
            {[Instagram, Facebook, Twitter, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="text-stone-600 hover:text-[#d4af37] transition-all transform hover:-translate-y-1">
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Copyright & Animated Developer Name */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-[8px] uppercase tracking-[0.5em] text-stone-800 font-bold">
              © 2026 Aurum Fine Jewelry
            </p>
            
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-white/5" />
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 flex items-center gap-2">
                Developed by 
                <motion.span 
                  animate={{ 
                    color: ["#d4af37", "#fdfaf7", "#d4af37"],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="font-serif italic lowercase text-[14px] cursor-default"
                >
                  rohan
                </motion.span>
              </p>
              <span className="h-px w-4 bg-white/5" />
            </div>
          </div>

          {/* Compact Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-[#d4af37]"
          >
            Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-700">
              <ArrowUpRight size={14} className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;