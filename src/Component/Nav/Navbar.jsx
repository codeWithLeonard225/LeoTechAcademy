// src/components/Nav/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Only Link is needed now
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define menu items, all pointing to dedicated routes
  const menuItems = [
    { label: "Home", to: "/" }, // Links to the main homepage route
    { label: "About Us", to: "/about" },
    { label: "Our Courses", to: "/courses" }, // This will be the main courses page
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
    { label: "FAQs", to: "/faqs" },
    // { label: "Blog / News", to: "/blog" }, 
  ];

  return (
    <nav className="bg-white text-leo-blue shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between md:justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold">
            {/* Logo links to the home route */}
            <Link to="/" className="text-leo-blue hover:text-leo-green transition-colors duration-300">
              LeoTech <span className="text-leo-green">Academy</span>
            </Link>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to}
                  className="text-gray-700 hover:text-leo-green transition-colors duration-300 text-xs sm:text-sm md:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Login/Sign Up Buttons - separate for distinct styling */}
            <li>
              <Link to="/login" className="px-4 py-2 border border-leo-blue text-leo-blue rounded-md hover:bg-leo-blue hover:text-white transition duration-300 text-sm">Login</Link>
            </li>
          </ul>

        </div>

        {/* Mobile Toggle & Login/Signup (for mobile only in header) */}
        <div className="flex items-center md:hidden">
          <Link to="/login" className="px-3 py-1 border border-leo-blue text-leo-blue rounded-md text-sm mr-2">Login</Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} className="text-leo-blue" /> : <Menu size={28} className="text-leo-blue" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 font-medium bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Close mobile menu on click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;