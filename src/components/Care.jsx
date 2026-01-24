import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Shield, Wind } from 'lucide-react';

const CareGuide = () => {
  const rituals = [
    {
      icon: <Waves size={20} />,
      title: "The Gentle Cleanse",
      content: "Use lukewarm water and mild, phosphate-free soap. Soak for 10 minutes and brush gently with a soft-bristle brush."
    },
    {
      icon: <Wind size={20} />,
      title: "Atmospheric Protection",
      content: "Store your pieces in a low-humidity environment. Avoid contact with perfumes, hairsprays, or harsh household chemicals."
    },
    {
      icon: <Shield size={20} />,
      title: "Annual Inspection",
      content: "We recommend a professional prong-tightening and ultrasonic cleaning once every twelve months to ensure stone security."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-40 pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#AF8F55] font-bold">Maintenance</span>
          <h1 className="text-6xl font-serif italic mt-6">Preserving Your <span className="not-italic">Legacy.</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {rituals.map((ritual, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] border border-stone-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center text-[#AF8F55] mb-8">
                {ritual.icon}
              </div>
              <h3 className="font-serif text-xl italic mb-4">{ritual.title}</h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {ritual.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Professional Service CTA */}
        <div className="mt-20 bg-[#1A1A1A] rounded-[3rem] p-16 text-center text-white overflow-hidden relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1584302174644-629a07a91286?q=80&w=1200')] bg-cover bg-center"
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif italic mb-6">Need a Professional Polish?</h2>
            <p className="text-stone-400 max-w-md mx-auto mb-10 font-light">
              Our master artisans are available for restoration and deep-cleaning services for all Aurum originals.
            </p>
            <button className="bg-white text-black px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#AF8F55] hover:text-white transition-all">
              Schedule Servicing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareGuide;