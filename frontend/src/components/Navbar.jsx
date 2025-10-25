import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          HomeWhirl
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="text-gray-700 text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none text-center md:text-left`}
        >
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-green-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-700 hover:text-green-500"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-700 hover:text-green-500"
          >
            Contact Us
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-green-500 border border-gray-700 px-4 py-2 rounded-lg"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
