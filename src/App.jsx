import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // For smooth page transitions
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page/Section Imports
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import Featured from './components/Featured';
import Founder from './components/Founder';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home Page showing the Hero and Stats */}
              <Route path="/" element={<><Hero /><ImpactStats /></>} />
              
              {/* Individual Paths for each section */}
              <Route path="/initiatives" element={<Featured/>} />
              <Route path="/founder" element={<Founder/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/contact" element={<CTA />}/>
              <Route path="/about" element={<About/>}/>
              
              {/* 404 Redirect to Home */}
              <Route path="*" element={<Hero />}/>
            </Routes>
          </AnimatePresence>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;