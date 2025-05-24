import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 mt-14">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">HobbyHub</h2>
            <p>Email: hobbyhub@gmail.com</p>
            <p>Phone: +880 1234 567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          {/* Middle: Useful Links */}
          <div className=" text-center ">
            <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-1">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">All Groups</li>
              <li className="hover:underline cursor-pointer">My Groups</li>
            </ul>
          </div>

          {/* Right: Social Icons */}

          <div className="flex justify-center md:justify-end items-center space-x-4 text-2xl mt-2 md:mt-0">
            <p>Follow us </p>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
