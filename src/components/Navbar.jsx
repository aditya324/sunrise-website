import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaBars } from "react-icons/fa";
import sunriselogo from "../assets/images/sunriselogo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full top-0 z-50 bg-color-main">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="flex items-center ">
          <img src={sunriselogo} alt=""  className="w-60 h-16"/>
        </div>

        {/* Right Section: Get in Touch Button & Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="bg-[#FFA314] text-[#44433F] px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-primary text-xl font-semibold"
          >
            Get in Touch
          </a>
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md w-48 py-2">
          <Link to="/home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</Link>
          <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
