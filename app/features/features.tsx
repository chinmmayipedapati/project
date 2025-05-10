import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHeadset, FaIndustry } from 'react-icons/fa';
import {Link} from 'react-router';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Features() {
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
          backgroundImage: "url('/carousel-2.jpg')",
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
            <Link to="/service" className="text-white hover:text-gray-300 transition-colors">
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
        <h1 className="text-5xl font-bold mb-4">Features</h1>
        <nav className="flex items-center space-x-3">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <span className="text-2xl">○</span>
          <span>Features</span>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0B1B2B]">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-[#00B4D8] text-lg uppercase mb-4">Why Choose Us</h5>
            <h2 className="text-4xl font-bold text-white mb-8">We Are Here to Grow Your Business Exponentially</h2>
            
            {/* Feature Image */}
            <div className="w-full max-w-4xl mx-auto mb-16">
              <img 
                src="/public/feature.jpg"
                alt="Business Growth" 
                className="w-1/2 h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#00B4D8] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Best In Industry</h3>
              <p className="text-gray-600">Clear Branding & Navigation – A clean, structured menu for services, about, blog, and contact.</p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#00B4D8] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Service Highlights</h3>
              <p className="text-gray-600">Showcase core IT services (e.g., cybersecurity, cloud computing, software development).</p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#00B4D8] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaIndustry className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry-Specific Solutions</h3>
              <p className="text-gray-600">Tailor services for different industries (healthcare, finance, e-commerce, etc.).</p>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#00B4D8] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FaHeadset className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Reliable and always available support to assist you anytime.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0B1B2B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center mb-6">
                <img src="/logo-white.png" alt="NuiTech" className="h-8 w-8 mr-2" />
                <span className="text-2xl font-bold">NuiTech</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                At Nuitech IT Solutions, we specialize in providing cutting-edge technology solutions to help businesses thrive in the digital era.
              </p>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative">
                Explore
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#00B4D8]"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    About Company
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Nuitech Team
                  </Link>
                </li>
                <li>
                  <Link to="/awards" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Awards
                  </Link>
                </li>
                <li>
                  <Link to="/works" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Our Works
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative">
                Service
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#00B4D8]"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/services/web-design" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/school-erp" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    School ERP
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-marketing" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services/app-development" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/graphics-design" className="text-gray-300 hover:text-[#00B4D8] transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Graphics/ Logo Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 relative">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#00B4D8]"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-[#00B4D8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">
                    Kankera khera<br />
                    Meerut 250001
                  </span>
                </li>
                <li>
                  <a href="mailto:nuitechithub@gmail.com" className="flex items-center text-gray-300 hover:text-[#00B4D8] transition-colors">
                    <svg className="w-6 h-6 mr-2 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    nuitechithub@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919837263762" className="flex items-center text-gray-300 hover:text-[#00B4D8] transition-colors">
                    <svg className="w-6 h-6 mr-2 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 9837263762
                  </a>
                </li>
                <li className="flex space-x-4 mt-6">
                  <a href="#" className="bg-[#00B4D8] p-2 rounded-md hover:bg-[#0096B7] transition-colors">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-[#00B4D8] p-2 rounded-md hover:bg-[#0096B7] transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-[#00B4D8] p-2 rounded-md hover:bg-[#0096B7] transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-[#00B4D8] p-2 rounded-md hover:bg-[#0096B7] transition-colors">
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-[#0B1B2B] border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © <Link to="/" className="hover:text-[#00B4D8]">NuiTech</Link>. All Rights Reserved. Designed by <Link to="/" className="hover:text-[#00B4D8]">Nuitech</Link>
        </div>
      </div>
    </div>
  );
}