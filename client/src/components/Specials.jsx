import React from "react";
import { assets } from "../assets/assets";
import CardSlider from "./CardSlider";

const Specials = () => {
  return (
    <div className="mt-5">
      {/* header part */}
      <div>
        <div className="bg-gray-200 w-full h-5"></div>
        <h1 className="text-center text-3xl py-2">Specials Offer Products</h1>
        <div className="bg-gray-200 w-full h-5"></div>
      </div>
      {/* body part */}
      <div className="px-40 flex gap-5 mt-5">
        {/* part 1 */}
        <div className="w-1/3">
          <img className="w-full cursor-pointer rounded-lg" src={assets.graphics} alt="" />
        </div>
        {/* part 2 */}
        <div className=" w-2/3 gap-10 flex flex-col">
          <div className="h-1/2 ">
            <CardSlider/>
          </div>
          <div className="h-1/2">
            <img className="w-full h-full cursor-pointer rounded-lg" src={assets.component} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
