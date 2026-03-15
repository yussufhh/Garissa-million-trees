
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom counter component for animation
const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

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
    { label: "Trees Planted", value: 100000, suffix: "+" },
    { label: "Nurseries Built", value: 15, suffix: "" },
    { label: "Communities Impacted", value: 50, suffix: "+" },
    { label: "Active Volunteers", value: 500, suffix: "+" },
  ];

  return (
    <section className="py-16 bg-primary text-white" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-gray-200 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;