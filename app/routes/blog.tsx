import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export function meta() {
  return [
    { title: "Blog - NuiTech" },
    { name: "description", content: "Read our latest blog posts about technology and digital solutions." },
  ];
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white">
      {/* Blog Header */}
      <div className="relative py-20 bg-[url('/public/blog-header.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <div className="flex items-center text-gray-300">
            <Link to="/" className="hover:text-[#00B4D8]">Home</Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Blog Post */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
                <img 
                  src="/public/blog-1.jpg" 
                  alt="Empowering Businesses with Cutting-Edge IT Solutions" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="bg-[#00B4D8] text-white px-3 py-1 rounded-full mr-2">Web Design</span>
                    <span>Admin</span>
                    <span className="mx-2">•</span>
                    <span>01 feb, 2025</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Empowering Businesses with Cutting-Edge IT Solutions</h2>
                  <p className="text-gray-300 mb-4">
                    In today's fast-paced digital era, businesses need reliable, scalable, and secure IT solutions to stay competitive at Nuitech IT Solutions
                  </p>
                  <Link to="/blog" className="text-[#00B4D8] font-semibold hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {["Web Design", "Web Development", "Keyword Research", "Email Marketing"].map((category) => (
                    <li key={category}>
                      <Link to="#" className="text-gray-300 hover:text-[#00B4D8] flex items-center">
                        <MdKeyboardArrowRight className="mr-2" />
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Recent Post</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet adipis elit</p>
              </div>

              {/* Tag Cloud */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Tag Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {["Design", "Development", "Marketing", "SEO", "Writing", "Consulting"].map((tag) => (
                    <Link 
                      key={tag}
                      to="#" 
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-[#00B4D8] hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Plain Text */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Plain Text</h3>
                <p className="text-gray-300 mb-4">
                  Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam
                </p>
                <Link to="#" className="text-[#00B4D8] font-semibold hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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