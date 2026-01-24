import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus, ShoppingBag } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "The Ethereal Drop",
      collection: "Heritage Series",
      price: "$4,250",
      img1: "https://i.pinimg.com/736x/57/17/13/5717132e934c24ce314b51b9dbc14125.jpg",
      img2: "https://i.pinimg.com/736x/96/f2/8d/96f28df8a220bc98d33bfeab7d480125.jpg",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Midnight Solitaire",
      collection: "Engagement",
      price: "$8,900",
      img1: "https://i.pinimg.com/736x/df/25/96/df25962373c1b81bfd1adee079542c6c.jpg",
      img2: "https://i.pinimg.com/736x/ec/33/78/ec337802c82b112d175e256336361b08.jpg",
      tag: "Limited"
    },
    {
      id: 3,
      name: "Orbit Gold Band",
      collection: "Essentials",
      price: "$1,150",
      img1: "https://i.pinimg.com/736x/fd/67/49/fd67496aa7f97fea71331f4e4e90d3a3.jpg",
      img2: "https://i.pinimg.com/1200x/49/22/c6/4922c6b0953b887a783ff7e5780e8cf7.jpg", // Placeholder
      tag: null
    },
    {
      id: 4,
      name: "Celestial Pendant",
      collection: "Heritage Series",
      price: "$2,800",
      img1: "https://i.pinimg.com/736x/27/41/6e/27416e5834d83a14fc019de75b960d70.jpg",
      img2: "https://i.pinimg.com/1200x/8b/59/97/8b59974e056a3dd87e68739e45738e4b.jpg",
      tag: "New"
    }
  ];

  return (
    <section className="bg-[#FAF9F6] pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-2xl mb-6">
                {/* Secondary Image (Hover) */}
                <img 
                  src={product.img2} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                />
                {/* Primary Image */}
                <img 
                  src={product.img1} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
                />
                
                {/* Product Tags */}
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[9px] uppercase tracking-widest font-bold text-[#1A1A1A] rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-stone-400 hover:text-red-400 transition-colors opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Heart size={16} />
                </button>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-[#AF8F55] transition-colors">
                    <Plus size={14} />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#AF8F55] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                      {product.collection}
                    </p>
                  </div>
                  <p className="font-medium text-[#1A1A1A]">{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More / Footer of Grid */}
        <div className="mt-24 text-center">
            <button className="px-12 py-5 border border-stone-200 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-500">
              Discover More Pieces
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;