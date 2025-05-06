'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";


export default function Pricing() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.pricePageContainer}>
      {/* Navigation */}
      <nav className={`${styles.mainNav} ${isNavScrolled ? styles.navScrolled : styles.navTransparent}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link to="/">NuiTech</Link>
          </div>
          <div className={styles.navLinks}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/life-with-nuitech">Life With Nuitech</Link>
            
            {/* Pages Dropdown */}
            <div className={styles.dropdownContainer}>
              <button 
                onClick={togglePagesDropdown}
                className={styles.dropdownButton}
              >
                Pages
                <span className={isPagesDropdownOpen ? styles.arrowUp : styles.arrowDown}></span>
              </button>
              {isPagesDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <Link to="/pricing" className={styles.dropdownItem}>Pricing Plan</Link>
                  <Link to="/features" className={styles.dropdownItem}>Our Features</Link>
                  <Link to="/team" className={styles.dropdownItem}>Team Members</Link>
                  <Link to="/quote" className={styles.dropdownItem}>Free Quote</Link>
                </div>
              )}
            </div>

            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full viewport height */}
      <div className={styles.fullScreenHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Price</h1>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span> / </span>
            <span>Price</span>
          </div>
        </div>
      </div>

      {/* Main Content Below Hero */}
      <div className={styles.contentBelowHero}>
        <div className={styles.pricingSection}>
          <div className={styles.sectionHeader}>
            <h2>Our Affordable Website Packages</h2>
          </div>

          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h3>Basic Plan</h3>
              <div className={styles.priceCardPrice}>$99</div>
              <ul>
                <li>Up to 5 Pages</li>
                <li>Mobile Responsive Design</li>
                <li>Basic SEO Optimization</li>
                <li>1-Year Free Hosting</li>
                <li>Email Support</li>
              </ul>
              <Link to="/contact" className={styles.getStartedBtn}>Get Started</Link>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <h3>Standard Plan</h3>
              <div className={styles.priceCardPrice}>$199</div>
              <ul>
                <li>Up to 10 Pages</li>
                <li>Mobile & SEO Optimized</li>
                <li>Contact Form Integration</li>
                <li>Free SSL Certificate</li>
                <li>1-Year Free Hosting</li>
                <li>Priority Email & Chat Support</li>
              </ul>
              <Link to="/contact" className={styles.getStartedBtn}>Get Started</Link>
            </div>

            <div className={styles.pricingCard}>
              <h3>Premium Plan</h3>
              <div className={styles.priceCardPrice}>$299</div>
              <ul>
                <li>Unlimited Pages</li>
                <li>Custom UI/UX Design</li>
                <li>E-commerce Integration</li>
                <li>Advanced SEO & Marketing</li>
                <li>Free SSL & Domain</li>
                <li>1-Year Free Hosting</li>
                <li>24/7 Priority Support</li>
              </ul>
              <Link to="/contact" className={styles.getStartedBtn}>Get Started</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.mainFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>NuiTech</h3>
            <p>At Nuitech IT Solutions, we specialize in providing cutting-edge technology solutions to help businesses thrive in the digital era.</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/about">About Company</Link></li>
              <li><Link to="/team">Nuitech Team</Link></li>
              <li><Link to="/awards">Awards</Link></li>
              <li><Link to="/works">Our Works</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Service</h3>
            <ul>
              <li><Link to="/services/website-design">Website Design</Link></li>
              <li><Link to="/services/school-erp">School ERP</Link></li>
              <li><Link to="/services/seo">SEO Services</Link></li>
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/app-development">App Development</Link></li>
              <li><Link to="/services/graphics">Graphics/Logo Design</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Get In Touch</h3>
            <p>Kankera khera Meerut 250001</p>
            <p>nuitechithub@gmail.com</p>
            <p>+91 9837263762</p>
            {/* Social Media Links */}
            <div className={styles.socialMediaLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© NuiTech. All Rights Reserved. Designed by Nuitech</p>
        </div>
      </footer>
    </div>
  );
}