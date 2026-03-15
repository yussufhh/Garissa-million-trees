
import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaAppleAlt, FaCarrot, FaGlobeAfrica } from 'react-icons/fa';

const Featured = () => {
  const initiatives = [
    { icon: <FaLeaf />, title: "Tree Nurseries", desc: "KEPHIS-certified nurseries hosting over 100,000 seedlings adapted to extreme heat." },
    { icon: <FaAppleAlt />, title: "Fruit Tree Planting", desc: "Cultivating mangoes, bananas, and papaws to boost local economies and nutrition." },
    { icon: <FaCarrot />, title: "Kitchen Gardens", desc: "Promoting household food security through sustainable, water-efficient local gardening." },
    { icon: <FaGlobeAfrica />, title: "Climate Restoration", desc: "Driving environmental awareness and community-led sustainability programs across the region." },
  ];

  return (
    <section className="py-24 bg-gray-50" id="initiatives">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Initiatives</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;