import React from 'react';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';

const JewelryContactHero = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1C1C] selection:bg-[#D4AF37]/30">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1C1C1C]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Branding & Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
                The Concierge
              </span>
              <h1 className="mt-6 text-5xl lg:text-7xl font-light leading-tight tracking-tight font-serif">
                Let’s Discuss Your <br />
                <span className="italic">Next Masterpiece.</span>
              </h1>
              <p className="mt-8 text-lg text-stone-500 font-light leading-relaxed max-w-md">
                Whether it's a bespoke engagement design or a private viewing of our 
                Heritage Collection, our specialists provide a world-class experience.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid gap-8 border-t border-stone-200 pt-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-stone-100 rounded-full">
                  <Mail size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">General Inquiries</h4>
                  <p className="text-stone-500 text-sm">atelier@luxuryjewels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-stone-100 rounded-full">
                  <Phone size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Private Concierge</h4>
                  <p className="text-stone-500 text-sm">+1 (212) 555-8800</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-stone-100 rounded-full">
                  <Clock size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Studio Hours</h4>
                  <p className="text-stone-500 text-sm">Mon — Fri: 10am to 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-stone-100 rounded-2xl relative overflow-hidden">
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
              
              <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Evelyn"
                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-[#D4AF37] outline-none transition-all font-light placeholder:text-stone-300" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Rothschild"
                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-[#D4AF37] outline-none transition-all font-light placeholder:text-stone-300" 
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.rothschild@domain.com"
                    className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-[#D4AF37] outline-none transition-all font-light placeholder:text-stone-300" 
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Inquiry Type</label>
                  <select className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-[#D4AF37] outline-none transition-all font-light text-stone-600 appearance-none">
                    <option>Bespoke Design</option>
                    <option>Private Appointment</option>
                    <option>Repair & Restoration</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Your Vision</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about the piece you're dreaming of..."
                    className="w-full bg-transparent border border-stone-100 p-4 focus:border-[#D4AF37] outline-none transition-all font-light placeholder:text-stone-300 mt-2 rounded-lg"
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-[#1C1C1C] text-white py-5 rounded-full hover:bg-[#D4AF37] transition-all duration-500 uppercase tracking-widest text-xs font-semibold shadow-lg shadow-stone-200">
                    Send Inquiry
                  </button>
                  <p className="text-center text-[10px] text-stone-400 mt-6 uppercase tracking-widest">
                    Response time: Within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JewelryContactHero;