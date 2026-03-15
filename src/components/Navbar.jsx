
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaTree } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaTree className={`text-3xl ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Garissa<span className="text-secondary">Million</span>Trees
          </span>
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex gap-8 font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`}>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#initiatives" className="hover:text-secondary transition-colors">Initiatives</a>
          <a href="#impact" className="hover:text-secondary transition-colors">Impact</a>
          <a href="#founder" className="hover:text-secondary transition-colors">Founder</a>
        </div>

        <button className="hidden md:block bg-secondary hover:bg-[#c29160] text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
          Donate Now
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <FaBars className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 text-gray-800 font-medium">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#initiatives" onClick={() => setIsOpen(false)}>Initiatives</a>
          <a href="#impact" onClick={() => setIsOpen(false)}>Impact</a>
          <button className="bg-primary text-white px-8 py-3 rounded-full mt-2">Donate</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;