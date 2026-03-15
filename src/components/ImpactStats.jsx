import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTree, FaUsers, FaMapMarkedAlt, FaHandsHelping } from 'react-icons/fa';

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const ImpactStats = () => {
  const stats = [
    { 
      label: "Trees Planted", 
      value: 100000, 
      suffix: "+", 
      icon: <FaTree />, 
      sub: "Across Northern Kenya" 
    },
    { 
      label: "Active Nurseries", 
      value: 15, 
      suffix: "", 
      icon: <FaMapMarkedAlt />, 
      sub: "KEPHIS Certified" 
    },
    { 
      label: "Community Partners", 
      value: 50, 
      suffix: "+", 
      icon: <FaUsers />, 
      sub: "Local Stakeholders" 
    },
    { 
      label: "Volunteers Engaged", 
      value: 500, 
      suffix: "+", 
      icon: <FaHandsHelping />, 
      sub: "Dedicated Climate Heroes" 
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="impact">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Measurable <span className="text-primary">Impact.</span>
          </motion.h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Turning environmental goals into verifiable results on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Icon Accent */}
              <div className="text-secondary text-2xl mb-6 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {stat.icon}
              </div>

              {/* Counter and Labels */}
              <div className="flex flex-col">
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h3>
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">
                  {stat.label}
                </span>
                <span className="text-gray-400 text-xs font-medium">
                  {stat.sub}
                </span>
              </div>

              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;