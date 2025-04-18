import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaChartLine, FaCode, FaMobileAlt, FaSearch, FaCloud, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLocationOn, MdEmail, MdPhone, MdStar, MdKeyboardArrowDown } from "react-icons/md";

export function meta() {
  return [
    { title: "NuiTech - Creative & Innovative Digital Solution" },
    { name: "description", content: "NuiTech provides cutting-edge IT solutions tailored to your business needs." },
  ];
}

export default function Home() {
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

  const pricingPlans = [
    {
      title: "Basic Plan",
      features: [
        "Static Website",
        "Up to 5 Pages",
        "Mobile Responsive Design",
        "Basic SEO Optimization",
        "Renewal Charge Extra",
        "Upto 30 Days Free Support",
        "Email Support"
      ],
      cta: "Get Started"
    },
    {
      title: "Standard Plan",
      features: [
        "Dynamic Website",
        "Up to 10 Pages",
        "Mobile & SEO Optimized",
        "Contact Form Integration",
        "User friendly Admin Panel",
        "40 Days Free Support",
        "Priority Email & Chat Support"
      ],
      cta: "Get Started"
    },
    {
      title: "Premium Plan",
      features: [
        "E-commerce Integration",
        "Unlimited Pages",
        "Custom UI/UX Design",
        "Advanced SEO & Marketing",
        "Free SSL & Domain",
        "60 Days Free Support",
        "Payment Gateway Integration",
        "Renewal Charge Extra",
        "Full Responsive All Devices",
        "24/7 Priority Support"
      ],
      cta: "Get Started"
    }
  ];

  const features = [
    {
      icon: <FaCheck className="text-white" />,
      title: "Award Winning",
      description: "We are proud to have won multiple awards for our exceptional services."
    },
    {
      icon: <FaCheck className="text-white" />,
      title: "Professional Staff",
      description: "Our team consists of highly skilled and experienced professionals."
    },
    {
      icon: <FaCheck className="text-white" />,
      title: "24/7 Support",
      description: "We are available 24 hours a day, 7 days a week to assist you."
    },
    {
      icon: <FaCheck className="text-white" />,
      title: "Fair Prices",
      description: "Our pricing is competitive and transparent, ensuring value for your investment."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1B2B]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="text-4xl font-bold text-white">
            👤NuiTech
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#00B4D8] transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-[#00B4D8] transition-colors">
                About
              </Link>
              <Link to="/service" className="text-white hover:text-[#00B4D8] transition-colors">
                Services
              </Link>
              <Link to="/blog" className="text-white hover:text-[#00B4D8] transition-colors">
                Blog
              </Link>
              <Link to="/life-with-nuitech" className="text-white hover:text-[#00B4D8] transition-colors">
                Life With Nuitech
              </Link>
              
              {/* Pages Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-[#00B4D8] font-medium">
                  Pages
                  <MdKeyboardArrowDown className="ml-1" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/pricing" className="block px-4 py-2 text-[#0B1B2B] hover:bg-gray-100 hover:text-[#00B4D8]">Pricing Plan</Link>
                  <Link to="/features" className="block px-4 py-2 text-[#0B1B2B] hover:bg-gray-100 hover:text-[#00B4D8]">Our features</Link>
                  <Link to="/team" className="block px-4 py-2 text-[#0B1B2B] hover:bg-gray-100 hover:text-[#00B4D8]">Team Members</Link>
                  <Link to="/quote" className="block px-4 py-2 text-[#0B1B2B] hover:bg-gray-100 hover:text-[#00B4D8]">Free Quote</Link>
                </div>
              </div>
              
              <Link to="/contact" className="text-white hover:text-[#00B4D8] font-medium">Contact</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen bg-[url('/public/carousel-2.jpg')] bg-cover bg-center pt-20">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold mb-4 text-[#00B4D8]"
              >
                Creative & Innovative
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-8"
              >
                Creative & Innovative Digital Solution
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link to="/service" className="bg-[#00B4D8] text-white px-8 py-3 rounded-md hover:bg-[#0096c7] transition-colors">
                  Free Quote
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#0B1B2B] transition-colors">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
          <button className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#0B1B2B] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold mb-2">45</h3>
              <p className="text-gray-400">Happy Clients</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold mb-2">45</h3>
              <p className="text-gray-400">Projects Done</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6"
            >
              <h3 className="text-4xl font-bold mb-2">52</h3>
              <p className="text-gray-400">Win Awards</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-[#0B1B2B]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                The Best IT Solution With NuiTech
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                At NuiTech, we provide cutting-edge IT solutions tailored to your business needs. 
                Whether you're a startup, a growing enterprise, or a large corporation, our expert 
                team ensures seamless digital transformation with innovative technology, security, 
                and scalability.
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

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/public/about.jpg"
                alt="About NuiTech"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#00B4D8] p-4 rounded-lg shadow-lg">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
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
          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-[#00B4D8] text-white px-8 py-3 rounded-md hover:bg-[#0096c7] transition-colors">
              Request A Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-4 bg-[#0B1B2B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">We Are Here to Grow Your Business Exponentially</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Best In Industry</h3>
              <p className="text-gray-300">We design and develop software, cloud solutions, and IT infrastructures that align with your business goals.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Cybersecurity Excellence</h3>
              <p className="text-gray-300">Protect your data with our advanced security protocols and compliance solutions.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Professional Staff</h3>
              <p className="text-gray-300">Migrate, manage, and scale with our cloud computing and automation solutions.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">24/7 Support</h3>
              <p className="text-gray-300">Optimize processes with intelligent automation and AI-driven analytics.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-[#0B1B2B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Custom IT Solutions for Your Successful Business</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT solutions tailored to your business needs, helping you stay ahead in the digital landscape.
            </p>
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
      </div>

      {/* Pricing Plans */}
      <div className="py-20 px-4 bg-[#0B1B2B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Affordable Website Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-[#00B4D8] transition-colors"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-white">{plan.title}</h3>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-[#00B4D8] mt-1 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link to="/contact" className="inline-block bg-[#00B4D8] text-white px-6 py-2 rounded-md hover:bg-[#0096c7] transition-colors">
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Request Section */}
      <div className="py-20 px-4 bg-[#0B1B2B] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Need A Free Quote? Please Feel Free to Contact Us</h2>
              <p className="text-gray-300 mb-8">
                At NuiTech, we don't just provide IT solutions—we empower businesses with technology that drives growth, efficiency, and security. Let's build the future together!
              </p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center mr-4">
                  <FaCheck className="text-white" />
                </div>
                <span className="text-white">Reply within 24 hours</span>
              </div>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center mr-4">
                  <FaCheck className="text-white" />
                </div>
                <span className="text-white">24 hrs telephone support</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Call to ask any question</h3>
              <a
                href="tel:+919837263762"
                className="text-2xl font-bold text-[#00B4D8] hover:text-white transition-colors"
              >
                +91 9837263762
              </a>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Request A Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-white">Select A Service</label>
                  <select className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white">
                    <option>Website Development</option>
                    <option>Digital Marketing</option>
                    <option>App Development</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-white">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block mb-2 text-white">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block mb-2 text-white">Message</label>
                  <textarea className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white" rows={4} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#00B4D8] text-white py-3 rounded-md hover:bg-[#0096c7] transition-colors">
                  Request A Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 bg-[#0B1B2B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What Our Clients Say About Our Digital Services</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve their goals.
            </p>
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

      {/* Blog Section */}
      <div className="py-20 px-4 bg-[#0B1B2B]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Read The Latest Articles from Our Blog Post</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span className="bg-[#00B4D8] text-white px-3 py-1 rounded-full mr-2">Web Design</span>
                  <span>John Doe</span>
                  <span className="mx-2">•</span>
                  <span>01 Jan, 2045</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Empowering Businesses with Cutting-Edge IT Solutions</h3>
                <p className="text-gray-300 mb-4">
                  In today's fast-paced digital era, businesses need reliable, scalable, and secure IT solutions to stay competitive at Nuitech IT Solutions
                </p>
                <Link to="/blog" className="text-[#00B4D8] font-semibold hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span className="bg-[#00B4D8] text-white px-3 py-1 rounded-full mr-2">Digital Marketing</span>
                  <span>Jane Smith</span>
                  <span className="mx-2">•</span>
                  <span>15 Dec, 2044</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">How to Leverage Digital Marketing for Business Growth</h3>
                <p className="text-gray-300 mb-4">
                  Discover effective digital marketing strategies that can help your business reach new heights in the competitive market.
                </p>
                <Link to="/blog" className="text-[#00B4D8] font-semibold hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span className="bg-[#00B4D8] text-white px-3 py-1 rounded-full mr-2">App Development</span>
                  <span>Mike Johnson</span>
                  <span className="mx-2">•</span>
                  <span>30 Nov, 2044</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">The Future of Mobile App Development: Trends to Watch</h3>
                <p className="text-gray-300 mb-4">
                  Explore the latest trends in mobile app development and how they can benefit your business in the coming years.
                </p>
                <Link to="/blog" className="text-[#00B4D8] font-semibold hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
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