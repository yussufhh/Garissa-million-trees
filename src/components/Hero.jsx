import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaGlobeAfrica, FaAward, FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Animation Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary pt-20">
      {/* Background Layer with Parallax Effect (CSS-based) */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        >
          {/* Multiply Layer for deep Forest Green aesthetic */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          {/* Gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left lg:max-w-4xl"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase border border-secondary/30">
                Award Winning Social Enterprise
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8"
            >
              Reforesting the <br />
              <span className="text-secondary italic">Drylands</span> of Kenya.
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed"
            >
              We are transforming arid landscapes into thriving ecosystems. Through 
              sustainable reforestation and community-led agriculture, we are on 
              a mission to plant <span className="text-white font-semibold">10 million trees</span> by 2035.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link to="/contact">
                <button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95">
                  Donate Seeds & Trees
                </button>
              </Link>
              <Link to="/initiatives">
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg transition-all">
                  Explore Initiatives
                </button>
              </Link>
            </motion.div>

            {/* Quick Stats Bar */}
            <motion.div 
              variants={itemVariants}
              className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10"
            >
              <div className="flex items-start gap-4">
                <FaGlobeAfrica className="text-secondary text-3xl shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-xl leading-none">Garissa Hub</h4>
                  <p className="text-gray-400 text-sm mt-1">Operational across Northern Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaAward className="text-secondary text-3xl shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-xl leading-none">Certified</h4>
                  <p className="text-gray-400 text-sm mt-1">KEPHIS Regulated Nurseries</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaSeedling className="text-secondary text-3xl shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-xl leading-none">100k+ Seedlings</h4>
                  <p className="text-gray-400 text-sm mt-1">Ready for current season</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Discover More</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaChevronDown className="text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;