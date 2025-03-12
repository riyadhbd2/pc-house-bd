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
      <div className="px-5 lg:px-40 flex flex-col lg:flex-row gap-5 mt-5">
        {/* part 1 */}
        <div className="hidden lg:flex lg:w-1/3">
          <img
            className="w-full cursor-pointer rounded-lg"
            src={assets.graphics}
            alt="Special Offer 1"
          />
        </div>

        {/* part 2 */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10">
          {/* CardSlider */}
          <div className="h-1/2">
            <CardSlider />
          </div>

          {/* Second Image */}
          <div className="hidden lg:flex h-1/2">
            <img
              className="w-full h-full cursor-pointer rounded-lg"
              src={assets.component}
              alt="Special Offer 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
