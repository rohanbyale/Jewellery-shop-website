import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Compass, Ruler, Calendar, 
  ChevronRight, ArrowRight, CheckCircle2 
} from 'lucide-react';

const BespokePage = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ metal: '', stone: '', budget: '' });

  const nextStep = () => setStep(s => s + 1);

  // --- SUB-VIEW: SUCCESS ---
  if (step === 4) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center p-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <CheckCircle2 size={60} className="text-[#AF8F55] mx-auto mb-6" />
          <h2 className="text-5xl font-serif italic mb-4">Request Received.</h2>
          <p className="text-stone-500 max-w-sm mx-auto font-light leading-relaxed">
            A Master Jeweler has been assigned to your profile. You will receive a private invitation for a digital consultation within 24 hours.
          </p>
          <button onClick={() => setStep(1)} className="mt-12 text-[10px] uppercase tracking-[0.4em] text-[#AF8F55] font-bold border-b border-[#AF8F55] pb-2">Start New Brief</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-40 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="flex gap-2 mb-20 max-w-xs mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= i ? 'bg-[#AF8F55]' : 'bg-stone-200'}`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#AF8F55] font-bold">Step 01</span>
              <h2 className="text-5xl font-serif italic mt-6 mb-12">Select Your Base Element</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['18k Yellow Gold', 'Platinum', 'Rose Gold'].map(metal => (
                  <button 
                    key={metal}
                    onClick={() => { setSelections({...selections, metal}); nextStep(); }}
                    className="p-10 bg-white border border-stone-100 rounded-[2rem] hover:border-[#AF8F55] transition-all group"
                  >
                    <Compass size={24} className="mx-auto mb-4 text-stone-300 group-hover:text-[#AF8F55]" />
                    <span className="text-sm font-medium">{metal}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-center"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#AF8F55] font-bold">Step 02</span>
              <h2 className="text-5xl font-serif italic mt-6 mb-12">The Center Stone</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Round Brilliance', 'Emerald Cut', 'Pear Shape', 'Oval'].map(shape => (
                  <button 
                    key={shape}
                    onClick={() => { setSelections({...selections, stone: shape}); nextStep(); }}
                    className="aspect-square bg-white border border-stone-100 rounded-2xl flex flex-col items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all"
                  >
                    <div className="w-10 h-10 border border-current rounded-full mb-4 flex items-center justify-center opacity-40">
                      <Sparkles size={16} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold">{shape}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#AF8F55] font-bold">Step 03</span>
                <h2 className="text-5xl font-serif italic mt-6">Consultation Details</h2>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Target Budget (USD)</label>
                  <select className="w-full bg-white border border-stone-200 p-4 rounded-xl outline-none appearance-none">
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Notes for the Designer</label>
                  <textarea className="w-full bg-white border border-stone-200 p-4 rounded-xl outline-none h-32 resize-none" placeholder="Describe your vision..." />
                </div>
                <button 
                  onClick={nextStep}
                  className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#AF8F55] transition-all flex items-center justify-center gap-3"
                >
                  Request Consultation <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BespokePage;