import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-gray-600 via-gray-700 to-gray-800 text-white pt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between flex-wrap gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">HomeWhirl®</h2>
          <p>
            Unit no. 1227, 1228,
            <br /> Tower C, Alphathum, Sector 90,
            <br /> Noida - 201305
          </p>
          <p className="mt-2">
            <a
              href="mailto:feedback@HomeWhirl.in"
              className="underline hover:text-gray-300"
            >
              feedback@HomeWhirl.in
            </a>
          </p>
          <Link to="/contact">
            <button className="mt-4 px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-700 transition">
              Contact Us
            </button>
          </Link>
          <div className="mt-4 flex gap-4">
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-2">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* HomeWhirls */}
        <div>
          <h3 className="text-xl font-bold mb-2">HomeWhirls</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                HomeWhirls in Delhi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                HomeWhirls in Noida
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                HomeWhirls in Gurgaon
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                HomeWhirls in Bangalore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                HomeWhirls in Pune
              </a>
            </li>
          </ul>
        </div>

        {/* PGs */}
        <div>
          <h3 className="text-xl font-bold mb-2">PGs</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                PG in Delhi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                PG in Noida
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                PG in Gurgaon
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                PG in Bangalore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                PG in Pune
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-2">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Rental Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Tenant Verification
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Buy Furniture
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Rent Receipt
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Manage Your Flat
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 mt-10 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} HomeWhirl. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
