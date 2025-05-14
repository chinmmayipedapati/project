import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function LifeWithNuitech() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join us for an engaging discussion on the latest tech trends.",
      image: "/public/life.jpg"
    },
    {
      id: 2,
      title: "Hackathon 2024",
      description: "Showcase your coding skills and compete with top developers.",
      image: "/public/life.jpg"
    },
    {
      id: 3,
      title: "Annual Team Meetup",
      description: "A day of fun activities and team bonding with colleagues.",
      image: "/public/life.jpg"
    }
  ];

  const galleryImages = [
    "/public/life.jpg",
    "/public/life.jpg",
    "/public/life.jpg",
    "/public/life.jpg",
    "/public/life.jpg",
    "/public/life.jpg"
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B]">
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
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                className="text-white hover:text-gray-300 transition-colors flex items-center"
              >
                Pages
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isPagesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30">
                  <Link to="/pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Pricing Plan
                  </Link>
                  <Link to="/features" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Our Features
                  </Link>
                  <Link to="/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Team Members
                  </Link>
                  <Link to="/quote" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
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

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/carousel-2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Life with Nuitech</h1>
          <nav className="flex items-center space-x-3">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <span className="text-2xl">○</span>
            <span>Life with Nuitech</span>
          </nav>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Event {index + 1}</h3>
                  <h4 className="text-2xl font-bold text-[#00B4D8] mb-4">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diwali Celebration Section */}
      <section className="py-20 bg-white-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white-800 mb-12 text-center">Diwali Celebration</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0B1B2B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">NuiTech</h3>
              <p className="text-gray-300">
                At Nuitech IT Solutions, we specialize in providing cutting-edge technology solutions to help businesses thrive in the digital era.
              </p>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Explore</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-300 hover:text-[#00B4D8]">About Company</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-[#00B4D8]">Nuitech Team</Link></li>
                <li><Link to="/awards" className="text-gray-300 hover:text-[#00B4D8]">Awards</Link></li>
                <li><Link to="/works" className="text-gray-300 hover:text-[#00B4D8]">Our Works</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-[#00B4D8]">Contact Us</Link></li>
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Service</h3>
              <ul className="space-y-4">
                <li><Link to="/services/web-design" className="text-gray-300 hover:text-[#00B4D8]">Website Design</Link></li>
                <li><Link to="/services/school-erp" className="text-gray-300 hover:text-[#00B4D8]">School ERP</Link></li>
                <li><Link to="/services/seo" className="text-gray-300 hover:text-[#00B4D8]">SEO Services</Link></li>
                <li><Link to="/services/digital-marketing" className="text-gray-300 hover:text-[#00B4D8]">Digital Marketing</Link></li>
                <li><Link to="/services/app-development" className="text-gray-300 hover:text-[#00B4D8]">App Development</Link></li>
                <li><Link to="/services/graphics-design" className="text-gray-300 hover:text-[#00B4D8]">Graphics/ Logo Design</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-[#00B4D8] mt-1 mr-3" />
                  <span className="text-gray-300">
                    Kankera khera<br />
                    Meerut 250001
                  </span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-[#00B4D8] mr-3" />
                  <a href="mailto:nuitechithub@gmail.com" className="text-gray-300 hover:text-[#00B4D8]">
                    nuitechithub@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-[#00B4D8] mr-3" />
                  <a href="tel:+919837263762" className="text-gray-300 hover:text-[#00B4D8]">
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