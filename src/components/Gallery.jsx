
import React from 'react';
import { motion } from 'framer-motion';

// Replace these imports with your actual local paths
import img1 from '../assets/image_7e24d3.png';
import img2 from '../assets/image_7e24b2.png';
import img3 from '../assets/image_7e247b.png';
import img4 from '../assets/image_7e245a.png';
import img5 from '../assets/image_7e2175.png';
import img6 from '../assets/image_7e2153.png';
import img7 from '../assets/image_7e2134.png';

const Gallery = () => {
  const images = [
    { src: img1, title: "Lush Nursery Path", size: "col-span-1 row-span-2" },
    { src: img2, title: "Sapling Development", size: "col-span-1 row-span-1" },
    { src: img3, title: "Official Certification", size: "col-span-1 row-span-1" },
    { src: img5, title: "Community Planting", size: "col-span-2 row-span-1" },
    { src: img4, title: "One Million Trees Campaign", size: "col-span-1 row-span-1" },
    { src: img6, title: "Miti Mashinani Program", size: "col-span-1 row-span-1" },
    { src: img7, title: "Environmental Stewardship", size: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-24 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-widest text-sm mb-3"
          >
            Visualizing Change
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Our Work in <span className="text-primary">Action</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group shadow-lg ${img.size}`}
            >
              {/* Image with Zoom Effect */}
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </p>
                <div className="w-10 h-1 bg-secondary mt-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100"></div>
              </div>

              {/* Tag for branding context (Optional) */}
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-tighter px-2 py-1 rounded">
                GMT Project
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-500 italic"
        >
          Join us on the ground and witness the transformation of Garissa.
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;