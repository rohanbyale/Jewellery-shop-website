import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MapPin, Calendar, Gem } from 'lucide-react';

const ContactExtension = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Do you offer bespoke design consultations?",
      a: "Yes. Our lead designers offer 1-on-1 virtual or in-person sessions to bring your vision to life using the finest ethically sourced stones."
    },
    {
      q: "What is the typical lead time for custom pieces?",
      a: "Bespoke creations typically take 6 to 8 weeks, including stone selection, 3D modeling, and artisanal hand-setting."
    },
    {
      q: "How do I care for my Heritage jewelry?",
      a: "We provide professional ultrasonic cleaning and prong inspections at no cost for all our clients twice a year at any of our boutiques."
    }
  ];

  return (
    <section className="bg-[#FAF9F6] pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto border-t border-stone-200 pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Process & Map */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="font-serif text-3xl text-[#1A1A1A] mb-8 italic">The Journey to Your Piece</h3>
              <div className="space-y-8">
                {[
                  { icon: <Calendar size={18} />, title: "Consultation", desc: "Share your inspiration with our gemologists." },
                  { icon: <Gem size={18} />, title: "Sourcing", desc: "We hand-select stones based on your criteria." },
                  { icon: <MapPin size={18} />, title: "Crafting", desc: "Finalizing the setting in our NYC atelier." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-[#AF8F55] transition-colors">
                      <span className="text-[#AF8F55]">{step.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1A1A1A]">{step.title}</h4>
                      <p className="text-sm text-stone-500 font-light mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aesthetic Map Frame */}
            <div className="relative rounded-2xl overflow-hidden h-64 border border-stone-200 grayscale contrast-125">
               <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                alt="Map View" 
                className="w-full h-full object-cover opacity-50"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-[10px] tracking-[.2em] uppercase">
                    Visit the Boutique
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-3xl text-[#1A1A1A] mb-8">Frequently Asked</h3>
            <div className="divide-y divide-stone-200">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-6">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-lg font-light text-[#1A1A1A] group-hover:text-[#AF8F55] transition-colors tracking-tight">
                      {faq.q}
                    </span>
                    {activeFaq === idx ? <Minus size={18} strokeWidth={1}/> : <Plus size={18} strokeWidth={1}/>}
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-stone-500 font-light leading-relaxed max-w-xl text-sm">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Final CTA Strip */}
            <div className="mt-16 p-8 bg-white border border-stone-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#AF8F55] font-bold">Immediate Support?</p>
                <p className="text-stone-500 text-sm mt-1">Our concierge is available for live chat.</p>
              </div>
              <button className="whitespace-nowrap bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
                Start Chat
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactExtension;