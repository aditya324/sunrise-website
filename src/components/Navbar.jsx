import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import sunriselogo from "../assets/images/sunriselogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Added "relative" so that absolutely positioned elements (the desktop menu) are positioned relative to the navbar.
    <nav className="bg-color-main fixed w-full top-0 z-50 relative ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="flex items-center">
          <img src={sunriselogo} alt="Logo" className="w-60 h-16" />
        </div>

        {/* Right Section: Hamburger Menu & Get in Touch button */}
        <div className="flex items-center">
          {/* "Get in Touch" button visible on large screens */}
          <a
            href="#"
            className="hidden lg:inline-block mr-4 bg-[#FFA314] text-[#44433F] px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-primary text-xl font-semibold"
          >
            Get in Touch
          </a>
          {/* Hamburger menu icon always visible */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Render menus only when isMenuOpen is true */}
      {isMenuOpen && (
        <>
          {/* Mobile Menu Overlay (Visible on small screens) */}
          <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center z-40">
            <Link
              to="/home"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              Contact
            </Link>
            {/* "Get in Touch" button inside mobile menu */}
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-4 py-2 bg-[#FFA314] text-[#44433F] rounded-full  transition duration-300 font-primary text-xl font-semibold"
            >
              Get in Touch
            </a>
          </div>

          {/* Desktop Dropdown Menu (Visible on medium and larger screens) */}
          <div className="hidden md:block absolute top-full right-4 mt-2 w-48 py-2 bg-white shadow-lg rounded-md z-40">
            <Link
              to="/home"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-xl"
            >
              Contact
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
