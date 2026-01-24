import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Gift, ShieldCheck, Globe } from 'lucide-react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <Clock size={24} strokeWidth={1} />,
      title: "Priority Dispatch",
      description: "Orders placed before 2 PM GMT are prepared and dispatched within the same business day."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1} />,
      title: "White-Glove Delivery",
      description: "Every shipment is fully insured and handled by our specialized global logistics partners."
    },
    {
      icon: <Gift size={24} strokeWidth={1} />,
      title: "Atelier Packaging",
      description: "Your selection arrives in our signature velvet-lined box, complete with a certificate of authenticity."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#AF8F55] font-bold">The Aurum Promise</span>
          <h2 className="mt-4 text-4xl font-serif italic">Seamless Acquisition</h2>
          <div className="mt-6 h-px w-20 bg-stone-200 mx-auto" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group text-center space-y-6"
            >
              <div className="mx-auto w-16 h-16 rounded-full border border-stone-100 flex items-center justify-center text-[#AF8F55] group-hover:bg-[#AF8F55] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl italic">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light px-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 bg-[#FAF9F6] rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-100"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Globe size={30} className="text-[#AF8F55]" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-serif text-lg italic">International Concierge</h4>
              <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">Complimentary Express Shipping Worldwide</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#AF8F55] transition-colors">
            View Logistics Policy
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatures;