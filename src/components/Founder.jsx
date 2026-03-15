import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
// Ensure the image path is correct based on your local project structure
import founderImg from '../assets/image_7e3320.jpg'; 

const Founder = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Background Element */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative group">
              <img 
                src={founderImg} 
                alt="Abdikadir Aden Hassan (HSC) holding a tree seedling" 
                className="rounded-2xl shadow-2xl object-cover aspect-[4/5] w-full transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating Award Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-secondary text-white p-6 rounded-2xl shadow-2xl max-w-[240px]"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <FaAward className="text-3xl text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-1">Recognition</p>
                    <p className="font-bold text-sm leading-tight">Queen’s Young Leaders Award — Buckingham Palace</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Founder's Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Abdikadir Aden Hassan <span className="text-primary tracking-tighter italic">HSC</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium mb-8 italic flex gap-3">
              <FaQuoteLeft className="text-secondary opacity-50 mt-1" />
              From the driver’s seat to the frontlines of conservation.
            </p>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                An award-winning environmentalist and humanitarian, Abdikadir’s journey began behind the wheel of a truck. Navigating the vast, arid stretches of East Africa, he witnessed the silent crisis of desertification firsthand. 
              </p>
              
              <p>
                Recognizing that the survival of Northern Kenya depended on its ecosystems, he founded <strong>Garissa Million Trees</strong>. His mission is to bridge the gap between human survival and nature by planting drought-resilient forests that feed, shade, and protect.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-primary/20 transition-colors">
                  <h5 className="font-bold text-primary mb-1 text-sm uppercase">2015 Laureate</h5>
                  <p className="text-sm">Queen’s Young Leaders Award winner at Buckingham Palace.</p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-primary/20 transition-colors">
                  <h5 className="font-bold text-primary mb-1 text-sm uppercase">CEO Finalist</h5>
                  <p className="text-sm">Under 40 Africa CEOs & Change Makers finalist.</p>
                </div>
              </div>

              <div className="pt-8">
                <button className="flex items-center gap-3 text-primary font-bold hover:text-secondary transition-colors group">
                  Read Full Bio 
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Founder;