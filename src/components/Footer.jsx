
import React from 'react';
import { FaTree, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <FaTree className="text-3xl text-primary" />
            <span className="text-xl font-bold tracking-tight">Garissa<span className="text-secondary">Million</span>Trees</span>
          </div>
          <p className="text-sm leading-relaxed">
            Restoring the arid landscapes of Northern Kenya through reforestation, sustainable agriculture, and community empowerment.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
            <li><a href="#initiatives" className="hover:text-secondary transition-colors">Our Work</a></li>
            <li><a href="#impact" className="hover:text-secondary transition-colors">Impact</a></li>
            <li><a href="#founder" className="hover:text-secondary transition-colors">Founder</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Garissa County, Kenya</li>
            <li>info@garissamilliontrees.org</li>
            <li>+254 700 000 000</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FaTwitter /></a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FaFacebook /></a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FaLinkedin /></a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Garissa Million Trees. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Certified by KEPHIS</p>
      </div>
    </footer>
  );
};

export default Footer;