import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHeadset, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router';
import { useState } from 'react';

export default function About() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  // Hero section with background image and overlay
  const HeroSection = () => (
    <div className="relative h-[400px] w-full">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/public/carousel-2.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-white">
            NuiTech
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link to="/life-with-nuitech" className="text-white hover:text-gray-300 transition-colors">
              Life With NuiTech
            </Link>
            
            {/* Pages Dropdown */}
            <div className="relative">
              <button 
                onClick={togglePagesDropdown}
                className="text-white hover:text-gray-300 transition-colors flex items-center"
              >
                Pages
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isPagesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30">
                  <Link 
                    to="/pricing" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Pricing Plan
                  </Link>
                  <Link 
                    to="/features" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Features
                  </Link>
                  <Link 
                    to="/team" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Team Members
                  </Link>
                  <Link 
                    to="/quote" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Free Quote
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <nav className="flex items-center space-x-3">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <span className="text-2xl">○</span>
          <span>About us</span>
        </nav>
      </div>
    </div>
  );
}
