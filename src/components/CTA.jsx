
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  const actions = [
    {
      icon: <FaHeart className="text-secondary" />,
      title: "Donate Trees",
      description: "A small contribution helps us nurture and plant resilient seedlings.",
      buttonText: "Give Today",
      primary: true
    },
    {
      icon: <FaUsers className="text-secondary" />,
      title: "Become a Partner",
      description: "Scale our impact through corporate social responsibility and expertise.",
      buttonText: "Partner with Us",
      primary: false
    },
    {
      icon: <FaHandHoldingHeart className="text-secondary" />,
      title: "Volunteer",
      description: "Join our local teams on the ground in Northern Kenya.",
      buttonText: "Join Movement",
      primary: false
    }
  ];

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative background elements for a premium feel */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-[0.03] -skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to grow a <span className="text-secondary">greener future?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            Whether you are an individual, a corporation, or a fellow environmentalist, 
            your support helps us reach our goal of 10 million trees.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl transition-all duration-300 flex flex-col items-center text-center ${
                action.primary 
                ? "bg-white shadow-2xl scale-105 z-20" 
                : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <div className={`text-4xl mb-6 ${action.primary ? "scale-110" : ""}`}>
                {action.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${action.primary ? "text-gray-900" : "text-white"}`}>
                {action.title}
              </h3>
              <p className={`mb-8 leading-relaxed ${action.primary ? "text-gray-600" : "text-gray-400"}`}>
                {action.description}
              </p>
              <button className={`mt-auto flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all group ${
                action.primary 
                ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" 
                : "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20"
              }`}>
                {action.buttonText}
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Support note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm tracking-wide uppercase font-medium">
            Certified by the Kenya Plant Health Inspectorate Service (KEPHIS)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;