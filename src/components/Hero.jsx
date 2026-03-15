
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Transforming the Arid <span className="text-secondary">Landscape</span> of Northern Kenya.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          An award-winning social enterprise dedicated to planting 10 million drought-resistant trees in 10 years.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-secondary hover:bg-[#c29160] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Donate Trees
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Join the Movement
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;