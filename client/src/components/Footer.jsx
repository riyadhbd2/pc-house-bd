import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center mt-10">
      <div className="px-4 md:px-10 lg:px-40 mt-10">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-500"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-pink-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-red-500"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Contact Numbers */}
        <div className="flex flex-wrap justify-center gap-3">
          {["PC COMPONENT", "GADGET", "DESKTOP SERVICE", "LAPTOP"].map(
            (category, index) => (
              <div
                key={index}
                className="flex items-center border border-gray-600 w-full sm:w-1/2 lg:w-1/5 p-3 rounded-lg cursor-pointer hover:border-white"
              >
                <FaMobileScreenButton className="text-blue-700" />
                <div className="h-10 w-px bg-gray-600 mx-3"></div>
                <div className="text-start">
                  <p className="text-orange-600 text-sm">{category}</p>
                  <p className="text-sm">019000000000, 01900000000</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Branch Addresses */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-600 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 text-gray-400 rounded-lg"
            >
              <h2 className="text-white">Branch-{index + 1}</h2>
              <p>Shop 248, 249, 250, Level-2, Computer City Center</p>
              <p>(Multiplkan) New Elephant Road, Dhaka-1205, Bangladesh</p>
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div className="mt-10">
          <h2 className="text-xl">About Us</h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              "About Us",
              "Contact Us",
              "Delivery",
              "Privacy Policy",
              "Terms & Conditions",
              "EMI Information",
              "Brands",
              "Blog",
            ].map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-10 mb-2">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
