import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: ''
  });

  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      <div className="relative h-[400px] w-full pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/carousel-2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Free Quote</h1>
          <nav className="flex items-center space-x-3">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <span className="text-2xl">○</span>
            <span>Free Quote</span>
          </nav>
        </div>
      </div>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-[#00B4D8] text-lg uppercase mb-4">Request A Quote</h5>
            <h2 className="text-4xl font-bold text-white mb-8">Need A Free Quote? Please Feel Free to Contact Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Reply within 24 hours</h3>
                <p className="text-gray-600">
                  Our dedicated team ensures smooth operations with real-time troubleshooting and monitoring.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">24 hrs telephone support</h3>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-[#00B4D8] text-2xl" />
                  <a href="tel:+919837263762" className="text-gray-600 hover:text-[#00B4D8] transition-colors">
                    +91 9837263762
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Call to ask any question</h3>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-[#00B4D8] text-2xl" />
                  <span className="text-gray-600">+91 9837263762</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <motion.div 
              className="bg-grey p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:outline-none focus:border-[#00B4D8]"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B4D8]"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B4D8]"
                    required
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black-300 rounded-lg focus:outline-none focus:border-white"
                  >
                    <option value="Website Development" className='text-black' >Website Development</option>
                    <option value="Digital Marketing" className='text-black' >Digital Marketing</option>
                    <option value="App Development" className='text-black'>App Development</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B4D8]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00B4D8] text-white py-3 rounded-lg hover:bg-[#0096B7] transition-colors"
                >
                  Request A Quote
                </button>
              </form>
            </motion.div>
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