import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTree } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standard style for nav links
  const linkStyle = ({ isActive }) => 
    `transition-all duration-300 font-semibold uppercase text-xs tracking-widest ${
      isActive 
        ? 'text-secondary border-b-2 border-secondary pb-1' 
        : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-secondary'
    }`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <FaTree className={`text-3xl transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Garissa<span className="text-secondary uppercase ml-1">Million trees</span>
          </span>
        </Link>

        {/* Desktop Navigation using Paths */}
        <div className="hidden md:flex gap-10">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/initiatives" className={linkStyle}>Initiatives</NavLink>
          <NavLink to="/founder" className={linkStyle}>Founder</NavLink>
          <NavLink to="/gallery" className={linkStyle}>Gallery</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
        </div>

        <Link to="/contact" className="hidden md:block bg-secondary hover:bg-primary text-white px-8 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md">
          Donate
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <FaBars className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-2xl transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 -z-10'}`}>
        <div className="flex flex-col items-center gap-8 py-16">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-lg">Home</NavLink>
          <NavLink to="/initiatives" onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-lg">Initiatives</NavLink>
          <NavLink to="/founder" onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-lg">Founder</NavLink>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-lg">Gallery</NavLink>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-lg">About</NavLink>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-primary text-white px-10 py-3 rounded-full font-bold">Donate Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;