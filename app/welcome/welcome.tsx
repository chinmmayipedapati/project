import { useEffect, useState } from "react";

export function Welcome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
      <div
        className="min-h-screen bg-cover bg-center relative;"
      style={{
        backgroundImage:"url('/public/carousel-2.jpg')",
      }}
      >
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-4xl font-bold text-white-800">
          👤NuiTech
          </div>
          {/* Navigation Links */}
          <ul className="flex space-x-8 text-lg">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-black-500 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-black-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="text-gray-700 hover:text-black-500 transition-colors"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-gray-700 hover:text-black-500 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#live with nuitech"
                className="text-gray-700 hover:text-black-500 transition-colors"
              >
                Live with NuiTech
              </a>
            </li>
            {/* Dropdown for Pages */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-black-500 transition-colors"
              >
                Pages
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40">
                  <li>
                    <a
                      href="#pricing plan"
                      className="block px-2 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Pricing plan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Our future"
                      className="block px-2 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Our future
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team members"
                      className="block px-2 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Team members
                    </a>
                  </li>
                  <li>
                    <a
                      href="#free quote"
                      className="block px-2 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Free quote
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-black-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-2xl font-bold">Creative & Innovative</h1>
        <h2 className="text-7xl font-bold">Creative & Innovative</h2>
        <h3 className="text-7xl font-bold mt-4">Digital Solutions</h3>
        <div className="mt-8 flex space-x-4">
          <button className="px-8 py-4 bg-blue-500 text-white square shadow hover:bg-blue-600 transition-colors">
            Free Quote
          </button>
          <button className="px-8 py-4 bg-gray-100 text-gray-800 square shadow hover:bg-gray-200 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}