import React from "react";
import { features } from "../assets/assets";

const Features = () => {
  return (
    <div className="mt-5">
      <div className="px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="bg-gray-200 w-full h-5"></div>
        <div className="">
          <h1 className="text-center text-3xl py-2">Featured Categories</h1>
          <div className="bg-gray-200 w-full h-5"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-5 gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-center items-center cursor-pointer"
              >
                <img
                  src={feature}
                  alt="feature"
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
