import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, ShieldCheck } from 'lucide-react';

const ContactTeamConcierge = () => {
  const specialists = [
    {
      name: "Julianne Vane",
      role: "Lead Gemologist",
      image: "/female.jpg",
      specialty: "Engagement & Diamonds"
    },
    {
      name: "Marcus Aurelius",
      role: "Bespoke Designer",
      image: "/man.jpg",
      specialty: "Custom Gold Work"
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Trust Signals */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#AF8F55] font-bold">Personalized Care</span>
              <h2 className="mt-4 font-serif text-5xl text-[#1A1A1A] leading-tight italic">
                You aren't just <br/><span className="not-italic">submitting a form.</span>
              </h2>
              <p className="mt-6 text-stone-500 font-light leading-relaxed">
                When you reach out, your inquiry is personally handled by one of our GIA-certified specialists. We treat every piece of jewelry as a future heirloom.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-[#AF8F55] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">Secure & Encrypted</p>
                  <p className="text-xs text-stone-400">Your designs and data are kept private.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-[#AF8F55] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                  <Star size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">Expert Curation</p>
                  <p className="text-xs text-stone-400">GIA certified diamond experts on staff.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Specialist Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialists.map((person, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-stone-50"
              >
                {/* REMOVED grayscale and grayscale-0 here */}
                <div className="aspect-square rounded-[1.5rem] overflow-hidden mb-6 transition-all duration-700">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover" // Image is now full color and bright
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif text-xl text-[#1A1A1A] italic">{person.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#AF8F55] font-bold">{person.role}</p>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed italic">
                    "Specializing in {person.specialty}."
                  </p>
                  <button className="w-full py-4 bg-[#FAF9F6] text-[#1A1A1A] rounded-xl text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
                    <Calendar size={14} />
                    Book {person.name.split(' ')[0]}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* --- Floating Bottom CTA --- */}
        <div className="mt-24 text-center">
            <p className="text-stone-300 text-sm font-light italic mb-4">Can't wait 24 hours?</p>
            <a 
                href="tel:+" 
                className="text-2xl font-serif text-[#1A1A1A] hover:text-[#AF8F55] transition-colors border-b border-stone-200 pb-2"
            >
                +1 (800) 555-GOLD
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactTeamConcierge;