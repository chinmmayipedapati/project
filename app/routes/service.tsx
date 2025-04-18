import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShieldAlt, FaChartLine, FaCode, FaMobileAlt, FaSearch, FaCloud, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLocationOn, MdEmail, MdPhone, MdStar, MdKeyboardArrowDown } from "react-icons/md";

export function meta() {
  return [
    { title: "Our Services - NuiTech" },
    { name: "description", content: "Explore our comprehensive range of IT services including cybersecurity, data analytics, web development, and more." },
  ];
}

export default function Service() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const services = [
    {
      icon: FaShieldAlt,
      title: "Cyber Security",
      description: "Protect your business with our top-tier cybersecurity services, designed to safeguard your digital assets from evolving threats."
    },
    {
      icon: FaChartLine,
      title: "Data Analytics",
      description: "Unlock the full potential of your data with our expert data analytics services. We turn complex data into actionable insights, helping you make informed decisions and drive business growth."
    },
    {
      icon: FaCode,
      title: "Web Development",
      description: "Transform your online presence with our expert web development services. We create responsive, user-friendly websites tailored to your business needs, ensuring seamless experiences across all devices."
    },
    {
      icon: FaMobileAlt,
      title: "Apps Development",
      description: "We design and build custom mobile applications that deliver seamless performance, user-friendly interfaces, and innovative features."
    },
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description: "Boost your online visibility with our expert SEO optimization services. We employ proven strategies to improve your website's ranking, increase organic traffic, and enhance user engagement."
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing with our comprehensive cloud solutions, ensuring scalability and cost-effectiveness."
    }
  ];

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Client",
      text: "Nuitech IT Solutions transformed our business with their advanced software development services."
    },
    {
      name: "Mohit Kumar",
      role: "Client",
      text: "We were facing serious security threats, but Nuitech's cybersecurity team provided a comprehensive solution that protected our systems. Their expertise and prompt response saved us from potential data breaches."
    },
    {
      name: "Sanju",
      role: "Client",
      text: "Migrating to the cloud was a complex task, but Nuitech made it seamless. Their cloud solutions have improved our efficiency and reduced IT costs."
    },
    {
      name: "Shivam",
      role: "Client",
      text: "The Nuitech team is highly professional, always available, and provides the best IT consulting services."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B]">
      {/* Hero Section */}
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
          <h1 className="text-5xl font-bold mb-4">Service</h1>
          <nav className="flex items-center space-x-3">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <span className="text-2xl">○</span>
            <span>Service</span>
          </nav>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Custom IT Solutions for Your Successful Business</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#00B4D8] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-[#0B1B2B] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Call to ask any question</h2>
          <a
            href="tel:+919837263762"
            className="inline-block text-2xl font-bold text-[#00B4D8] hover:text-white transition-colors"
          >
            +91 9837263762
          </a>
          <p className="mt-4 text-gray-300">we are here to assist you <span className="font-bold">24/7</span> for any query you can contact us.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 bg-[#0B1B2B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say About Our Digital Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <MdStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0B1B2B] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">NuiTech</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                At NuiTech IT Solutions, we specialize in providing cutting-edge technology solutions to help businesses thrive in the digital era.
              </p>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Explore
                <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#00B4D8]"></div>
              </h3>
              <ul className="space-y-3">
                {["About Company", "Nuitech Team", "Awards", "Our Works", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-400 hover:text-[#00B4D8] flex items-center text-sm">
                      <MdKeyboardArrowRight className="mr-2" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Service
                <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#00B4D8]"></div>
              </h3>
              <ul className="space-y-3">
                {["Website Design", "School ERP", "SEO Services", "Digital Marketing", "App Development", "Graphics/ Logo Design"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-gray-400 hover:text-[#00B4D8] flex items-center text-sm">
                      <MdKeyboardArrowRight className="mr-2" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#00B4D8]"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MdLocationOn className="text-[#00B4D8] text-xl mt-1" />
                  <span className="text-gray-400 text-sm">Kankera khera Meerut 250001</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdEmail className="text-[#00B4D8] text-xl" />
                  <span className="text-gray-400 text-sm">nuitechithub@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdPhone className="text-[#00B4D8] text-xl" />
                  <span className="text-gray-400 text-sm">+91 9837263762</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-8 h-8 bg-[#00B4D8] flex items-center justify-center rounded-sm hover:bg-white hover:text-[#00B4D8] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} All Rights Reserved. Designed by{" "}
              <a href="#" className="text-[#00B4D8] hover:underline">
                NuiTech
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 