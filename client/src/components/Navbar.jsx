import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlusSquare, FaRegHeart } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoIosGitCompare, IoIosSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      {/* first part */}
      <div className="bg-black flex justify-between items-center px-40 py-4 text-white">
        {/* home logo */}
        <div className="">
          <img width="300px" src={assets.home} alt="" />
        </div>
        {/* search bar */}
        <div className="w-48 sm:w-64 md:w-80 lg:w-96 relative cursor-pointer">
          <IoIosSearch className="absolute top-1 right-3 text-black text-2xl" />
          <input
            className="h-8 w-full rounded-full text-black p-2 border-none"
            type="search"
            name=""
            id=""
          />
        </div>
        {/* contents section */}
        <div className="flex justify-between gap-4 ">
          {/* contents */}
          <div className="flex gap-4 items-center justify-center">
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
              <FaPlusSquare className="text-2xl hover:text-orange-400"/>
              <p className="text-xs">PC Builder</p>
            </div>
          </div>
          {/* cart logo */}
          <div className="cursor-pointer">
            <TiShoppingCart className="text-4xl bg-blue-500 hover:opacity-50 px-1 rounded-sm" />
          </div>
        </div>
      </div>
      {/* second part */}
      <div></div>
    </div>
  );
};

export default Navbar;
