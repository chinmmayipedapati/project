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

  const features = [
    {
      icon: <FaAward className="text-4xl text-blue-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in IT solutions"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Professional Staff",
      description: "Expert team of dedicated professionals"
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    },
    {
      icon: <FaDollarSign className="text-4xl text-blue-600" />,
      title: "Fair Prices",
      description: "Competitive and transparent pricing"
    }
  ];

  const teamMembers = [
    {
      name: "Sanjeev",
      role: "Fullstack Developer",
      image: "/public/team-1.jpg"
    },
    {
      name: "Karishma Upadhyay",
      role: "Fullstack Developer",
      image: "/public/team-2.jpg"
    },
    {
      name: "Mohit Kumar",
      role: "Graphics Designer",
      image: "/public/team-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Best IT Solution With NuiTech
            </h2>
            <p className="text-xl text-gray-600">
              At Nuitech IT Solutions, we specialize in providing cutting-edge technology solutions 
              to help businesses thrive in the digital era. Our expertise spans across software 
              development, cybersecurity, cloud computing, and IT consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Staff Ready to Help Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Call to ask any question</h2>
          <p className="text-2xl mb-8">+91 9837263762</p>
          <Link 
            to="/quote"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Request A Quote
          </Link>
        </div>
      </section>
    </div>
  );
}