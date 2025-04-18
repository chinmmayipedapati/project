import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsAward, BsPeople, BsHeadset, BsCurrencyDollar } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function About() {
  return (
    <div>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-4xl font-bold">
              👤NuiTech
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-white hover:text-[#00B4D8] transition">Home</Link>
              <Link to="/about" className="text-white hover:text-[#00B4D8] transition">About</Link>
              <Link to="/service" className="text-white hover:text-[#00B4D8] transition">Services</Link>
              <Link to="/blog" className="text-white hover:text-[#00B4D8] transition">Blog</Link>
              <Link to="/life-with-nuitech" className="text-white hover:text-[#00B4D8] transition">Life With Nuitech</Link>
              <div className="relative group">
                <button className="text-white hover:text-[#00B4D8] transition">Pages</button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 py-2 min-w-[200px]">
                  <Link to="/pricing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pricing Plan</Link>
                  <Link to="/features" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our features</Link>
                  <Link to="/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Team Members</Link>
                  <Link to="/quote" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Free Quote</Link>
                </div>
              </div>
              <Link to="/contact" className="text-white hover:text-[#00B4D8] transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('/public/carousel-2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              About Us
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-2 text-gray-300"
            >
              <Link to="/" className="hover:text-[#00B4D8]">Home</Link>
              <span>/</span>
              <span>About us</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className="text-[#00B4D8] text-lg font-medium mb-4">About Us</h6>
              <h2 className="text-4xl font-bold mb-6">The Best IT Solution With NuiTech</h2>
              <p className="text-gray-600 mb-8">
                At Nuitech IT Solutions, we specialize in providing cutting-edge technology solutions to help businesses thrive in the digital era. Our expertise spans across software development, cybersecurity, cloud computing, and IT consulting. With a team of experienced professionals, we deliver customized IT solutions that drive growth and efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <BsAward className="text-[#00B4D8] text-2xl" />
                  <span>Award Winning</span>
                </div>
                <div className="flex items-center gap-3">
                  <BsPeople className="text-[#00B4D8] text-2xl" />
                  <span>Professional Staff</span>
                </div>
                <div className="flex items-center gap-3">
                  <BsHeadset className="text-[#00B4D8] text-2xl" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <BsCurrencyDollar className="text-[#00B4D8] text-2xl" />
                  <span>Fair Prices</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#0B1B2B] text-white rounded-lg">
                <h6 className="text-[#00B4D8] mb-2">Call to ask any question</h6>
                <h3 className="text-2xl font-bold">+91 9837263762</h3>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img src="/public/about.jpg" className="square-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-[#00B4D8] text-lg font-medium mb-4">Team Members</h6>
            <h2 className="text-4xl font-bold">Professional Staff Ready to Help Your Business</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1B2B] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">NuiTech</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                At Nuitech IT Solutions, we specialize in providing cutting-edge technology solutions to help businesses thrive in the digital era.
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
                {["Website Design", "School ERP", "SEO Services", "Digital Marketing", "App Development", "Graphics/Logo Design"].map((item) => (
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
              © {new Date().getFullYear()} NuiTech. All Rights Reserved. Designed by{" "}
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