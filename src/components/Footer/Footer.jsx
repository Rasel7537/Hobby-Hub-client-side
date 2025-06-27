
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* Left: Logo & Contact Info */}
        <div className="space-y-3">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <img src={logo} alt="HobbyHub Logo" className="w-10 h-10 rounded-full" />
            <h2 className="text-2xl font-bold text-blue-400">HobbyHub</h2>
          </div>
          <p>Email: hobbyhub@gmail.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Middle: Useful Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold underline decoration-blue-400">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/anothrGroupCard" className="hover:text-blue-400 transition">All Groups</Link>
            </li>
            <li>
              <Link to="/MyGroups" className="hover:text-blue-400 transition">My Groups</Link>
            </li>
            <li>
              <Link to="/ConnectUs" className="hover:text-blue-400 transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Right: Social Icons */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold underline decoration-blue-400">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-sm text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
