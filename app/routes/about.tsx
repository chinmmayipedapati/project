import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHeadset, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router';
import { useState } from 'react';
import { FaShieldAlt, FaChartLine, FaCode, FaMobileAlt, FaSearch, FaCloud, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLocationOn, MdEmail, MdPhone, MdStar, MdKeyboardArrowDown } from "react-icons/md";

export function meta() {
  return [
    { title: "About Us - NuiTech" },
    { name: "description", content: "Learn about NuiTech's mission, values, and the team behind our innovative IT solutions." },
  ];
}
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

  const features = [
    {
      icon: <FaShieldAlt className="text-white" />,
      title: "Award Winning",
      description: "Recognized for excellence in IT solutions and customer service"
    },
    {
      icon: <FaChartLine className="text-white" />,
      title: "Professional Staff",
      description: "Expert team with years of industry experience"
    },
    {
      icon: <FaCode className="text-white" />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and support"
    },
    {
      icon: <FaCloud className="text-white" />,
      title: "Fair Prices",
      description: "Competitive pricing with transparent billing"
    }
  ];

  const teamMembers = [
    {
      name: "Sanjeev",
      role: "Fullstack Developer",
      image: "/team-1.jpg",
      bio: "Experienced fullstack developer with expertise in modern web technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:sanjeev@nuitech.com"
      }
    },
    {
      name: "Karishma Upadhyay",
      role: "Fullstack Developer",
      image: "/team-2.jpg",
      bio: "Passionate developer specializing in scalable web applications.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:karishma@nuitech.com"
      }
    },
    {
      name: "Mohit Kumar",
      role: "Graphics Designer",
      image: "/team-3.jpg",
      bio: "Creative designer with a keen eye for detail and user experience.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:mohit@nuitech.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B]">
      <HeroSection />
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/public/about.jpg"
                alt="About NuiTech"
                className="w-full h-auto square-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#00B4D8] p-4 rounded-lg shadow-lg">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                The Best IT Solution With NuiTech
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                At Nuitech IT Solutions, we specialize in providing cutting-edge technology solutions 
                to help businesses thrive in the digital era. Our expertise spans across software 
                development, cybersecurity, cloud computing, and IT consulting.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-[#00B4D8] p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-[#0B1B2B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Professional Staff Ready to Help Your Business</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center text-white"
                    >
                      <FaLinkedinIn />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center text-white"
                    >
                      <FaTwitter />
                    </motion.a>
                    <motion.a
                      href={member.social.email}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center text-white"
                    >
                      <MdEmail />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-[#00B4D8] mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
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
            <div className="col-span-1">
              <div className="flex items-center mb-6">
                <img src="/public/logo-white.png" alt="NuiTech" className="h-8 w-8 mr-2" />
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#00B4D8] p-2 rounded-md hover:bg-[#0096B7] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#00B4D8] p-2 rounded-md hover:bg-[#0096B7] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#00B4D8] p-2 rounded-md hover:bg-[#0096B7] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
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