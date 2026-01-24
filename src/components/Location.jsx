import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Navigation, Compass } from 'lucide-react';

const ContactLocationBespoke = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone-200 overflow-hidden rounded-3xl border border-stone-200">
          
          {/* Panel 1: The Atelier Map */}
          <div className="bg-white p-12 lg:p-16 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#AF8F55]/10 rounded-full flex items-center justify-center text-[#AF8F55]">
                <Compass size={24} />
              </div>
              <h2 className="font-serif text-4xl text-[#1A1A1A]">Visit the <br/><span className="italic font-light">Flagship Atelier</span></h2>
              <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                Experience the collection in person. Our New York flagship offers a private lounge for diamond consultations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#AF8F55] mt-1" size={18} />
                <div>
                  <p className="font-medium text-[#1A1A1A]">721 Fifth Avenue</p>
                  <p className="text-sm text-stone-400">New York, NY 10022</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] group">
                <Navigation size={14} className="group-hover:text-[#AF8F55] transition-colors" />
                <span>Open in Google Maps</span>
              </button>
            </div>
          </div>

          {/* Panel 2: The Bespoke Invitation (Visual) */}
          <div className="relative group overflow-hidden min-h-[500px]">
            <img 
              src="/owner.jpg" 
              alt="Bespoke Jewelry Crafting" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
            
            <div className="relative h-full p-12 lg:p-16 flex flex-col justify-between text-white">
              <div className="self-end">
                <div className="px-4 py-1 border border-white/30 rounded-full text-[10px] uppercase tracking-widest backdrop-blur-md">
                  Limited Availability
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-4xl italic">Bespoke Design <br/><span className="not-italic">Consultations</span></h3>
                <p className="text-stone-300 font-light text-sm max-w-xs">
                  Sit down with our Creative Director to design a piece that is uniquely yours. 
                </p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="h-px w-12 bg-[#AF8F55]"></span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-[#AF8F55] transition-colors">
                    Book the Experience
                  </span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>

        </div>

        {/* --- Global Support Strip --- */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="text-center md:text-left">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">London Office</h4>
                <p className="text-sm font-serif italic text-stone-600">Mayfair, W1K 7HL</p>
            </div>
            <div className="text-center md:text-left">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">Paris Atelier</h4>
                <p className="text-sm font-serif italic text-stone-600">Place Vendôme, 75001</p>
            </div>
            <div className="text-center md:text-left">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2">Tokyo Boutique</h4>
                <p className="text-sm font-serif italic text-stone-600">Ginza, Chuo City</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocationBespoke;