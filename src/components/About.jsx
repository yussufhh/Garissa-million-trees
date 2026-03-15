import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaCheckCircle, FaLeaf, FaWater, FaUsers, FaPlay, FaTimes, 
  FaSun, FaChartLine, FaSeedling, FaGlobeAfrica 
} from 'react-icons/fa';

// --- DATA STRUCTURES ---
// Keeping data outside the component prevents recreation on every render

const pillars = [
  {
    icon: <FaLeaf className="text-primary" />,
    title: "Resilient Species",
    desc: "Cultivating indigenous, drought-resistant trees engineered for extreme heat."
  },
  {
    icon: <FaWater className="text-primary" />,
    title: "Precision Water",
    desc: "Implementing localized drip-irrigation to maximize every drop in arid zones."
  },
  {
    icon: <FaUsers className="text-primary" />,
    title: "Community Led",
    desc: "Empowering local farmers through sustainable agroforestry training."
  },
  {
    icon: <FaSun className="text-primary" />,
    title: "Solar Integration",
    desc: "Utilizing off-grid solar power to pump water for large-scale nurseries."
  }
];

const methodologyTabs = [
  {
    id: "mapping",
    title: "Ecological Mapping",
    icon: <FaGlobeAfrica />,
    content: "Before a single seed is planted, our team conducts rigorous soil and topographical analyses. We identify degraded zones in Garissa County where intervention will yield the highest ecological return. This data-driven approach ensures we aren't just planting trees, but actively restoring disrupted micro-climates.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nursery",
    title: "Seedling Incubation",
    icon: <FaSeedling />,
    content: "Our KEPHIS-certified nurseries are strictly regulated environments. Here, we condition over 100,000 seedlings per season. By exposing them to controlled water stress early on, we ensure that when they are transplanted into the harsh Northern Kenya environment, their survival rate exceeds 85%.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "monitoring",
    title: "Long-term Tracking",
    icon: <FaChartLine />,
    content: "Planting is only 20% of the work. Our community rangers employ GPS mapping and periodic growth assessments to track tree health. If a specific zone faces unprecedented drought, our rapid-response water trucks are deployed to ensure the young forests survive their critical first three years.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const timelineEvents = [
  { year: "2015", title: "Global Recognition", desc: "Founder Abdikadir Aden Hassan receives the Queen’s Young Leaders Award at Buckingham Palace." },
  { year: "2018", title: "The First 100k", desc: "Garissa Million Trees successfully propagates and plants its first 100,000 seedlings." },
  { year: "2021", title: "KEPHIS Certification", desc: "Nurseries achieve official government certification, standardizing quality control." },
  { year: "2026", title: "The 10M Scale-Up", desc: "Launching the decade-long initiative to reach 10 million surviving trees across the drylands." }
];

// --- SUB-COMPONENTS ---

// 1. Video Modal for interactive media viewing
const VideoModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes />
            </button>
            {/* Placeholder for YouTube/Vimeo iframe */}
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
              <FaPlay className="text-6xl mb-4 opacity-20" />
              <p>Cinematic Documentary Video Placeholder</p>
              <p className="text-sm">(Embed your actual video iframe here)</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- MAIN COMPONENT ---

const About = () => {
  const [activeTab, setActiveTab] = useState(methodologyTabs[0].id);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Parallax setup for the main image
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="relative bg-white pt-24 pb-32 overflow-hidden" id="about" ref={containerRef}>
      
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PART 1: THE CORE MISSION (Split Layout) --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          {/* Visual Column with Parallax */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl h-[600px]">
              <motion.img 
                style={{ y: imageY }}
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Environmental restoration in arid lands" 
                className="w-full h-[120%] object-cover absolute top-0 left-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              
              {/* Interactive Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="w-20 h-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center text-2xl shadow-[0_0_40px_rgba(22,101,52,0.5)] transform group-hover:scale-110 transition-all duration-300 backdrop-blur-md"
                >
                  <FaPlay className="ml-2" />
                </button>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-black text-4xl mb-1 tracking-tight">10 Million</p>
                <div className="w-12 h-1 bg-secondary mb-3 rounded-full"></div>
                <p className="text-gray-200 font-bold uppercase text-xs tracking-widest">
                  Our 10-Year Reforestation Target
                </p>
              </div>
            </div>
            
            {/* Decorative Background Blur */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-secondary"></span>
              <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">
                The Enterprise
              </h4>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
              Combating Desertification with <span className="text-primary italic">Action.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
              Garissa Million Trees is more than a localized planting project; it is a <strong>scalable social enterprise</strong> dedicated to ecological sovereignty. Founded by Abdikadir Aden Hassan, we engineer sun-scorched landscapes into productive green belts.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mb-12">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-4 group cursor-default">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm border border-gray-100">
                    {pillar.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">{pillar.title}</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-100">
                <FaCheckCircle className="text-primary text-xl" />
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">KEPHIS Certified</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-100">
                <FaCheckCircle className="text-primary text-xl" />
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">Award Winning</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- PART 2: INTERACTIVE METHODOLOGY TABS --- */}
        <div className="mt-32 bg-gray-900 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] pointer-events-none"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Our Methodology</h3>
            <p className="text-gray-400 text-lg">A scientific, community-integrated approach to ensuring maximum survival rates for every seedling planted.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Tab Navigation */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {methodologyTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                    activeTab === tab.id 
                      ? "bg-primary border-primary shadow-lg shadow-primary/20" 
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-gray-400"
                  }`}
                >
                  <div className={`text-2xl ${activeTab === tab.id ? "text-white" : "text-gray-500"}`}>
                    {tab.icon}
                  </div>
                  <span className={`font-bold text-lg ${activeTab === tab.id ? "text-white" : "text-gray-300"}`}>
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content Area */}
            <div className="w-full lg:w-2/3 bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[300px] flex items-center">
              <AnimatePresence mode="wait">
                {methodologyTabs.map((tab) => (
                  tab.id === activeTab && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col md:flex-row gap-8 items-center"
                    >
                      <div className="md:w-1/2">
                        <h4 className="text-2xl font-black text-white mb-4">{tab.title}</h4>
                        <div className="w-12 h-1 bg-secondary rounded-full mb-6"></div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {tab.content}
                        </p>
                        
                        {/* Insert Image Tag for specific tabs based on context */}
                        {tab.id === "nursery" && (
                          <div className="mt-4 hidden text-sm text-gray-500 italic">
                            
                          </div>
                        )}
                      </div>
                      <div className="md:w-1/2 w-full h-64 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={tab.image} 
                          alt={tab.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* --- PART 3: THE JOURNEY (Timeline) --- */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Milestones</h3>
            <p className="text-gray-500">The steady growth of an environmental movement.</p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-1/2">
            {timelineEvents.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 ml-10 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[49px] top-1.5 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-md"></div>
                
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-black text-sm uppercase tracking-widest rounded-full mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 text-sm text-gray-400 italic">
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;