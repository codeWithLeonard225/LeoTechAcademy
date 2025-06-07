// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'; // Assuming lucide-react is installed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-10 md:py-16 mt-12 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">

          {/* Section 1: Logo & About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="text-white text-3xl font-extrabold mb-4 hover:text-blue-400 transition-colors duration-300">
              LeoTech <span className="text-teal-400">Academy</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-4">
              Empowering the next generation of tech leaders in Sierra Leone through accessible and practical education.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/yourplatform" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com/yourplatform" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/company/yourplatform" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors duration-300 text-sm">Our Courses</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors duration-300 text-sm">Services</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors duration-300 text-sm">Blog / News</Link></li>
              <li><Link to="/faqs" className="hover:text-blue-400 transition-colors duration-300 text-sm">FAQs</Link></li>
            </ul>
          </div>

          {/* Section 3: Support & Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-5">Support & Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors duration-300 text-sm">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-400 transition-colors duration-300 text-sm">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400 transition-colors duration-300 text-sm">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Section 4: Contact Information */}
          <div className="text-center md:text-left lg:col-span-1 md:col-span-3"> {/* Span wider on medium screens for better layout */}
            <h3 className="text-lg font-bold text-white mb-5">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start text-sm">
                <Mail size={18} className="mr-3 text-gray-400" />
                <a href="mailto:info@yourplatform.com" className="hover:text-blue-400 transition-colors duration-300">
                  info@yourplatform.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-sm">
                <Phone size={18} className="mr-3 text-gray-400" />
                <a href="tel:+23277123456" className="hover:text-blue-400 transition-colors duration-300">
                  +232 77 123 456
                </a> {/* Sierra Leone format */}
              </li>
              <li className="flex items-start justify-center md:justify-start text-sm">
                <MapPin size={18} className="mr-3 text-gray-400 mt-1" />
                <span>
                  123 Academy Road,<br/>
                  Freetown, Sierra Leone
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="border-t border-gray-700 mt-10 md:mt-16 pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} LeoTech Academy. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2">
            Proudly empowering the future of technology in Sierra Leone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;