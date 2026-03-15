import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaAppleAlt, FaCarrot, FaGlobeAfrica, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Featured = () => {
  const initiatives = [
    {
      icon: <FaLeaf />,
      title: "Tree Nurseries",
      tag: "Infrastructure",
      desc: "Our KEPHIS-certified nurseries are the backbone of Northern Kenya's reforestation. We manage over 100,000 seedlings, specifically selected and conditioned for high-heat resilience.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "100k+ Seedlings"
    },
    {
      icon: <FaAppleAlt />,
      title: "Fruit Tree Planting",
      tag: "Economic Impact",
      desc: "Integrating mangoes, bananas, and papaws into the landscape to create sustainable value chains. We bridge the gap between environmental restoration and local economic prosperity.",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "3 Core Species"
    },
    {
      icon: <FaCarrot />,
      title: "Kitchen Gardens",
      tag: "Food Security",
      desc: "Empowering households with vertical and drip-irrigated kitchen gardens. This initiative ensures consistent food access while minimizing water footprint in arid regions.",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "Family Units"
    },
    {
      icon: <FaGlobeAfrica />,
      title: "Climate Restoration",
      tag: "Global Goals",
      desc: "Strategic reforestation designed to reverse desertification. We use indigenous knowledge combined with modern climate science to restore the natural biodiversity of the region.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "10m Tree Vision"
    },
  ];

  return (
    <section className="py-24 bg-white" id="initiatives">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4"
            >
              Strategic Operations
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
            >
              Driving the <span className="text-primary">Green Revolution.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm font-medium leading-relaxed"
          >
            A multi-faceted approach to ecological restoration, focusing on sustainability, 
            scalability, and community empowerment.
          </motion.p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {initiatives.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative flex flex-col md:flex-row bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-primary/20">
                      {item.icon}
                    </div>
                    <span className="text-primary font-black text-xs uppercase tracking-tighter bg-primary/5 px-3 py-1 rounded">
                      {item.stats}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200/60">
                  <Link 
                    to="/initiatives" 
                    className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group/btn"
                  >
                    View Operational Details
                    <FaArrowRight className="transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;