import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function TeamPage() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const teamMembers = [
    {
      name: "Sanjeev",
      role: "Fullstack Developer",
      image: "/public/team-1.jpg",
      bio: "Sanjeev is a fullstack developer with over 5 years of experience in web development. He specializes in React, Node.js, and cloud technologies.",
      social: {
        linkedin: "https://linkedin.com/in/sanjeev",
        twitter: "https://twitter.com/sanjeev",
        email: "sanjeev@nuitech.com"
      }
    },
    {
      name: "Karishma Upadhyay",
      role: "Fullstack Developer",
      image: "/public/team-2.jpg",
      bio: "Karishma is a passionate fullstack developer with expertise in modern web technologies. She has a strong background in UI/UX design and frontend development.",
      social: {
        linkedin: "https://linkedin.com/in/karishma",
        twitter: "https://twitter.com/karishma",
        email: "karishma@nuitech.com"
      }
    },
    {
      name: "Mohit Kumar",
      role: "Graphics Designer",
      image: "/public/team-3.jpg",
      bio: "Mohit is a creative graphics designer with a keen eye for detail. He has worked on numerous branding projects and has a strong portfolio in UI design.",
      social: {
        linkedin: "https://linkedin.com/in/mohit",
        twitter: "https://twitter.com/mohit",
        email: "mohit@nuitech.com"
      }
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      image: "/public/team-4.jpg",
      bio: "Priya is a UI/UX designer with a focus on creating intuitive and engaging user experiences. She has a background in psychology and design thinking.",
      social: {
        linkedin: "https://linkedin.com/in/priya",
        twitter: "https://twitter.com/priya",
        email: "priya@nuitech.com"
      }
    },
    {
      name: "Rahul Verma",
      role: "DevOps Engineer",
      image: "/public/team-5.jpg",
      bio: "Rahul is a DevOps engineer with expertise in CI/CD pipelines, containerization, and cloud infrastructure. He ensures smooth deployment and operations.",
      social: {
        linkedin: "https://linkedin.com/in/rahul",
        twitter: "https://twitter.com/rahul",
        email: "rahul@nuitech.com"
      }
    },
    {
      name: "Anjali Patel",
      role: "Project Manager",
      image: "/public/team-6.jpg",
      bio: "Anjali is a certified project manager with a track record of delivering complex IT projects on time and within budget. She excels in agile methodologies.",
      social: {
        linkedin: "https://linkedin.com/in/anjali",
        twitter: "https://twitter.com/anjali",
        email: "anjali@nuitech.com"
      }
    }
  ];

  // Hero section with background image and overlay
  const HeroSection = () => (
    <div className="relative h-[300px] w-full">
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
        <h1 className="text-5xl font-bold mb-4">Our Team</h1>
        <nav className="flex items-center space-x-3">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <span className="text-2xl">○</span>
          <span>Team Members</span>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Professional Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experts brings together diverse skills and experiences to deliver exceptional IT solutions for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-8">We're always looking for talented individuals to join our growing team.</p>
          <Link 
            to="/careers"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}