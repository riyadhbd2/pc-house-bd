import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlusSquare, FaRegHeart } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoIosGitCompare, IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div>
      {/* first part */}
      <div className="bg-black flex-col lg:flex justify-between items-center px-5 lg:px-40 py-4 text-white">
        <div className="flex justify-between items-center w-full">
          {/* home logo for large screen */}
          <div className="hidden lg:flex cursor-pointer">
            <img width="300px" src={assets.home} alt=""/>
          </div>
          {/* hamburger menu for small screen */}
          <div className="lg:hidden cursor-pointer">
            <RxHamburgerMenu className="text-2xl" />
          </div>

          {/* search bar for large screen */}
          <div className="hidden lg:flex relative cursor-pointer w-2/5">
            <IoIosSearch className="absolute top-1 right-3 text-black text-2xl hover:text-orange-400" />
            <input
              className="h-8 w-full rounded-full text-black p-2 outline-none"
              type="search"
              name=""
              id=""
            />
          </div>
          {/* home logo for small screen */}
          <div className="lg:hidden cursor-pointer">
            <img width="250px" src={assets.home} alt="" />
          </div>
          {/* contents section */}
          <div className="flex justify-between gap-4">
            {/* contents */}
            <div className="hidden lg:flex gap-4 items-center justify-center">
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <FiMoon className="text-orange-400 text-2xl hover:text-orange-400" />
                <p className="text-xs">Ramadan Fest</p>
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <CgProfile className="text-2xl hover:text-orange-400" />
                <p className="text-xs">Account</p>
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaRegHeart className="text-2xl hover:text-orange-400" />
                <p className="text-xs">Wishlist</p>
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <IoIosGitCompare className="text-2xl hover:text-orange-400" />
                <p className="text-xs">Compare</p>
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaPlusSquare className="text-2xl hover:text-orange-400" />
                <p className="text-xs">PC Builder</p>
              </div>
            </div>
            {/* cart logo */}
            <div className="cursor-pointer">
              <TiShoppingCart className="text-4xl lg:text-4xl lg:bg-blue-500 hover:opacity-50 px-1 rounded-sm" />
            </div>
          </div>
        </div>
        {/* search bar for small screen */}
        <div className="lg:hidden relative cursor-pointer w-full">
          <IoIosSearch className="absolute top-1 right-3 text-black text-2xl hover:text-orange-400" />
          <input
            className="h-8 w-full rounded-full text-black p-3 outline-none"
            type="search"
            name=""
            id=""
            style={{
              WebkitAppearance: "none", // Ensures compatibility
              MozAppearance: "textfield" // Firefox compatibility
            }}
          />
        </div>
      </div>
      {/* second part */}
      <div className="">
        <ul className="hidden lg:flex justify-between items-center bg-gray-100 px-40 py-2 gap-2">
          <li className="cursor-pointer">Desktop</li>
          <li className="cursor-pointer">Laptops</li>
          <li className="cursor-pointer">Monitor</li>
          <li className="cursor-pointer">Components</li>
          <li className="cursor-pointer">Tablets</li>
          <li className="cursor-pointer">Accessories</li>
          <li className="cursor-pointer">Gaming</li>
          <li className="cursor-pointer">Camera</li>
          <li className="cursor-pointer">Smartwatch</li>
          <li className="cursor-pointer">Gimbal</li>
          <li className="cursor-pointer">Projector</li>
          <li className="cursor-pointer">Audio</li>
          <li className="cursor-pointer">Office Equipment</li>
          <li className="cursor-pointer">Router</li>
          <li className="cursor-pointer">TV</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
