import React from "react";
import { features } from "../assets/assets";

const Features = () => {
  return (
    <div className="mt-5">
      <div className="px-40">
        <div className="bg-gray-200 w-full h-5"></div>
        <div className="m-2">
          <h1 className="text-center text-3xl">Featured Categories</h1>
          <div className="grid grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-center items-center cursor-pointer mt-5 border"
              >
                <div className="border">
                  <img src={feature} alt="feature" className="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-200 w-full h-5"></div>
      </div>
    </div>
  );
};

export default Features;
