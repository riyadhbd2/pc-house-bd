import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center mt-10">
      <div className="px-40 mt-10">
        {/* social media icons */}
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

        {/* contact numbers */}
        <div className="flex gap-3">
          <div className="flex items-center border border-gray-600 w-1/4 rounded-lg cursor-pointer hover:border-white">
            <div>
              <FaMobileScreenButton className="text-blue-700 ml-3" />
            </div>
            <hr className="w-px h-10 mx-3 my-1 rotate-180 bg-gray-600 border-none" />
            <div className="text-start">
              <p className="text-orange-600 text-sm">PC COMPONENT</p>
              <p className="text-sm">019000000000, 01900000000</p>
            </div>
          </div>
          <div className="flex items-center border border-gray-600 w-1/4 rounded-lg cursor-pointer hover:border-white">
            <div>
              <FaMobileScreenButton className="text-blue-700 ml-3" />
            </div>
            <hr className="w-px h-10 mx-3 my-1 rotate-180 bg-gray-600 border-none" />
            <div className="text-start">
              <p className="text-orange-600 text-sm">GADGET</p>
              <p className="text-sm">019000000000, 01900000000</p>
            </div>
          </div>
          <div className="flex items-center border border-gray-600 w-1/4 rounded-lg cursor-pointer hover:border-white">
            <div>
              <FaMobileScreenButton className="text-blue-700 ml-3" />
            </div>
            <hr className="w-px h-10 mx-3 my-1 rotate-180 bg-gray-600 border-none" />
            <div className="text-start">
              <p className="text-orange-600 text-sm">DESKTOP SERVICE</p>
              <p className="text-sm">019000000000, 01900000000</p>
            </div>
          </div>
          <div className="flex items-center border border-gray-600 w-1/4 rounded-lg cursor-pointer hover:border-white">
            <div>
              <FaMobileScreenButton className="text-blue-700 ml-3" />
            </div>
            <hr className="w-px h-10 mx-3 my-1 rotate-180 bg-gray-600 border-none" />

            <div className="text-start">
              <p className="text-orange-600 text-sm">LAPTOP</p>
              <p className="text-sm">019000000000, 01900000000</p>
            </div>
          </div>
        </div>
        {/* brances address card */}
        <div className="flex gap-4 mt-10 items-center justify-center">
          <div className="border border-gray-600 w-1/5 text-gray-400 rounded-lg">
            <h2 className="text-white">Brance-1</h2>
            <p>Shop 248, 249, 250, Level-2, Computer</p>
            <p>City Cneter, (Multiplkan) New Elephant</p>
            <p>Road, Dhaka-1205, Bangladesh</p>
          </div>
          <div className="border border-gray-600 w-1/5 text-gray-400 rounded-lg">
            <h2 className="text-white">Brance-1</h2>
            <p>Shop 248, 249, 250, Level-2, Computer</p>
            <p>City Cneter, (Multiplkan) New Elephant</p>
            <p>Road, Dhaka-1205, Bangladesh</p>
          </div>
          <div className="border border-gray-600 w-1/5 text-gray-400 rounded-lg">
            <h2 className="text-white">Brance-1</h2>
            <p>Shop 248, 249, 250, Level-2, Computer</p>
            <p>City Cneter, (Multiplkan) New Elephant</p>
            <p>Road, Dhaka-1205, Bangladesh</p>
          </div>
          <div className="border border-gray-600 w-1/5 text-gray-400 rounded-lg">
            <h2 className="text-white">Brance-1</h2>
            <p>Shop 248, 249, 250, Level-2, Computer</p>
            <p>City Cneter, (Multiplkan) New Elephant</p>
            <p>Road, Dhaka-1205, Bangladesh</p>
          </div>
        </div>
        {/* About us */}
        <div className="mt-10">
          <h2 className="text-xl">About Us</h2>
          <ul className="flex items-center justify-center gap-4">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms & Conditions </li>
            <li className="cursor-pointer">EMI Information</li>
            <li className="cursor-pointer">Brands</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        {/* all right reserved */}

        <p className="text-xs text-gray-400 mt-10 mb-2">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
