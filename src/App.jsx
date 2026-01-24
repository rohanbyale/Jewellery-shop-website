import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Service from './pages/Service';

// --- Scroll Management Component ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // 'instant' is usually better for page transitions than 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="bg-[#0f0a07] min-h-screen flex flex-col">
      {/* ScrollToTop logic must sit inside the Router context */}
      <ScrollToTop />
      
      {/* Navbar stays at the top of every page */}
      <Navbar />

      {/* The main content area that changes based on the URL */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
      
          {/* 404 Redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom of every page */}
      <Footer />
    </div>
  );
};

export default App;