import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

const ContactHero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-[#FAF9F6] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-16">
          <motion.span 
            {...fadeUp}
            className="text-[10px] uppercase tracking-[0.4em] text-[#AF8F55] font-bold"
          >
            Contact Us
          </motion.span>
          <motion.h1 
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 text-6xl md:text-8xl font-serif text-[#1A1A1A] tracking-tight"
          >
            At your <span className="italic font-light">service.</span>
          </motion.h1>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Main Inquiry Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-2 bg-[#1A1A1A] rounded-3xl p-10 text-white flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <MessageSquare className="text-[#AF8F55] mb-6" size={32} />
              <h2 className="text-3xl font-serif mb-4">General Inquiries</h2>
              <p className="text-stone-400 font-light leading-relaxed">
                Looking for a specific gemstone or have questions about an existing order? Our boutique specialists are ready to help.
              </p>
            </div>
            <a href="mailto:hello@brand.com" className="group flex items-center justify-between border-t border-stone-800 pt-6 mt-8">
              <span className="text-xl font-light italic">hello@yourjewelrybrand.com</span>
              <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-[#AF8F55] group-hover:border-[#AF8F55] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </a>
          </motion.div>

          {/* Boutique Location Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border border-[#E5E5E5] rounded-3xl p-8 flex flex-col justify-between"
          >
            <MapPin className="text-[#AF8F55] mb-6" size={28} />
            <div>
              <h3 className="font-serif text-xl mb-2">Our Atelier</h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                721 Fifth Avenue,<br />
                New York, NY 10022
              </p>
            </div>
            <button className="mt-6 text-xs uppercase tracking-widest font-bold text-[#1A1A1A] underline underline-offset-8">
              Get Directions
            </button>
          </motion.div>

          {/* Social Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#F2F0EB] rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-[#E5E5E5]"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
              <span className="text-[#AF8F55] font-serif italic text-2xl">ig</span>
            </div>
            <h3 className="font-serif text-xl mb-1">Follow Us</h3>
            <p className="text-stone-400 text-sm mb-4">@the_jewelry_label</p>
            <button className="text-[10px] uppercase tracking-[0.2em] py-2 px-6 border border-stone-300 rounded-full hover:bg-white transition-colors">
              Follow
            </button>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#E5D5B8]/20 border border-[#E5D5B8]/40 rounded-3xl p-8 md:col-span-1"
          >
            <Phone className="text-[#AF8F55] mb-6" size={28} />
            <h3 className="font-serif text-xl mb-2">Call Concierge</h3>
            <p className="text-[#1A1A1A] font-medium">+1 (800) LUX-GOLD</p>
            <p className="text-stone-500 text-xs mt-2 uppercase tracking-tighter">Available 10am—6pm EST</p>
          </motion.div>

          {/* Appointment CTA Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-3 bg-[url('https://images.unsplash.com/photo-1573408302185-9146fe634ad0?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center rounded-3xl min-h-[300px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="relative h-full p-10 flex flex-col justify-end">
              <h2 className="text-white text-3xl font-serif">Private Viewings</h2>
              <p className="text-stone-200 font-light max-w-md mt-2">Book an exclusive 1-on-1 session with our lead designer in London or NYC.</p>
              <button className="mt-6 w-fit bg-white text-[#1A1A1A] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#AF8F55] hover:text-white transition-all">
                Book Appointment
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;