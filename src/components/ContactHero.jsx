import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F9F8F6] overflow-hidden pt-20">
      {/* Abstract Background Element - The "Glint" */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#AF8F55]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[40%] bg-stone-200/40 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          
          {/* Left Side: Editorial Greeting */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-[10px] uppercase tracking-[0.5em] text-[#AF8F55] font-bold mb-6">
                Personalized Concierge
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] leading-[0.95] tracking-tight">
                Our artisans are <br /> 
                <span className="italic font-light text-stone-400">awaiting you.</span>
              </h1>
              <p className="mt-8 text-lg text-stone-500 font-light max-w-lg leading-relaxed">
                Whether seeking a rare gemstone or a custom-tailored masterpiece, 
                your journey toward the extraordinary begins with a single conversation.
              </p>
            </motion.div>

            {/* Quick-Access Contact Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                { icon: <MessageCircle size={16} />, label: "Live Assistance", detail: "2 min wait" },
                { icon: <Clock size={16} />, label: "Response Time", detail: "Within 24h" },
                { icon: <MapPin size={16} />, label: "Global Studios", detail: "NYC / London" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-stone-200/60 px-5 py-3 rounded-full shadow-sm hover:border-[#AF8F55]/40 transition-colors cursor-default">
                  <span className="text-[#AF8F55]">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400">{item.label}</span>
                    <span className="text-xs text-[#1A1A1A]">{item.detail}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: The "Hero" Image (Atmospheric) */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-t-full overflow-hidden border-[12px] border-white shadow-2xl shadow-stone-200"
            >
              <img 
                src="/owner.jpg" 
                alt="Jewelry Design Table" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80 mb-1">The Atelier</p>
                <p className="font-serif italic text-2xl">Crafting your legacy.</p>
              </div>
            </motion.div>

            {/* Decorative Gold Ring Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[#AF8F55]/20 rounded-full animate-pulse" />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#AF8F55] to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default ContactHero;