import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "The Collection", path: "/collection" },
    { name: "Shop All", path: "/shop" },
    { name: "Bespoke Service", path: "/service" }, // Future page
    { name: "Contact Atelier", path: "/contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 md:px-16 flex justify-between items-center ${
          scrolled 
            ? 'h-20 bg-[#0a0806]/95 backdrop-blur-2xl border-b border-[#d4af37]/20 shadow-2xl' 
            : 'h-32 bg-transparent'
        }`}
      >
        {/* Left: Search Utility */}
        <div className="flex-1 hidden md:flex items-center gap-6">
          <button className="text-[#fdfaf7] opacity-60 hover:opacity-100 hover:text-[#d4af37] transition-all duration-300">
            <Search size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Center: Brand Identity */}
        <Link to="/" className="flex-shrink-0 text-center group cursor-pointer">
          <h1 className="text-3xl md:text-4xl font-serif italic tracking-[0.25em] text-[#fdfaf7] drop-shadow-sm">
            AURUM
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            className="h-[1px] bg-[#d4af37] mx-auto mt-1"
          />
          <p className={`text-[9px] uppercase tracking-[0.7em] text-[#d4af37] font-medium transition-all duration-500 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 mt-2'}`}>
            Fine Jewelry
          </p>
        </Link>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.4em] font-medium text-[#fdfaf7]">
            <Link to="/contact" className="opacity-70 hover:opacity-100 hover:text-[#d4af37] transition-all">Account</Link>
            <Link to="/shop" className="relative group cursor-pointer text-[#fdfaf7] hover:text-[#d4af37] transition-all">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-[#d4af37] text-[#0a0806] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg">
                2
              </span>
            </Link>
          </div>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 text-[#fdfaf7] hover:text-[#d4af37] transition-all duration-300"
          >
            <Menu size={28} strokeWidth={1.2} />
          </button>
        </div>
      </motion.nav>

      {/* FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#0a0806] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4af37]/5 blur-[120px] rounded-full" />

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-12 right-12 text-[#fdfaf7] hover:text-[#d4af37] hover:rotate-90 transition-all duration-500 z-[120]"
            >
              <X size={48} strokeWidth={1} />
            </button>

            {/* Menu Links using react-router-dom Link */}
            <div className="space-y-6 md:space-y-10 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="group"
                >
                  <Link 
                    to={link.path}
                    className="block text-4xl md:text-8xl font-serif italic text-[#fdfaf7]/40 group-hover:text-[#fdfaf7] transition-all duration-700"
                  >
                    {link.name}
                  </Link>
                  <div className="h-[1px] w-0 group-hover:w-1/2 bg-[#d4af37] transition-all duration-700 mx-auto mt-4" />
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-16 w-full flex flex-col items-center gap-8">
              <div className="h-[1px] w-24 bg-[#d4af37]/30" />
              <div className="flex gap-12 text-[10px] uppercase tracking-[0.5em] font-semibold text-[#fdfaf7]">
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#d4af37] transition-all">Instagram</a>
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#d4af37] transition-all">Pinterest</a>
                <Link to="/contact" className="opacity-40 hover:opacity-100 hover:text-[#d4af37] transition-all">Concierge</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;