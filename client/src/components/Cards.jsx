import React from "react";
import { assets } from "../assets/assets";

const Cards = () => {
  return (
    <div className="px-5 lg:px-40 mt-10">
      {/* Intel Gaming */}
      <h1 className="text-2xl font-semibold">Intel Gaming PC</h1>
      <div className="flex flex-wrap items-center justify-center gap-12 mt-5">
        <div className="w-full sm:w-1/2 lg:w-[31%] border rounded-lg p-5 flex gap-5 items-center justify-center">
          <img className="w-28" src={assets.pc_card1} alt="" />
          <div>
            <h1 className="text-lg">Intel Core i5 14400F 14th Gen Raptor Lake MSI B760M BOMBER</h1>
            <p className="text-sm">100000</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-[31%] border rounded-lg p-5 flex gap-5 items-center justify-center">
          <img className="w-28" src={assets.pc_card2} alt="" />
          <div>
            <h1 className="text-lg">Intel Core i5 14400F 14th Gen Raptor Lake MSI B760M BOMBER</h1>
            <p className="text-sm">100000</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-[31%] border rounded-lg p-5 flex gap-5 items-center justify-center">
          <img className="w-28" src={assets.pc_card3} alt="" />
          <div>
            <h1 className="text-lg">Intel Core i5 14400F 14th Gen Raptor Lake MSI B760M BOMBER</h1>
            <p className="text-sm">100000</p>
          </div>
        </div>
      </div>
      
      {/* AMD Gaming */}
      <h1 className="mt-5 text-2xl font-semibold">AMD Gaming PC</h1>
      <div className="flex flex-wrap items-center justify-center gap-12 mt-5">
        <div className="w-full sm:w-1/2 lg:w-[31%] border rounded-lg p-5 flex gap-5 items-center justify-center">
          <img className="w-28" src={assets.pc_card4} alt="" />
          <div>
            <h1 className="text-lg">Intel Core i5 14400F 14th Gen Raptor Lake MSI B760M BOMBER</h1>
            <p className="text-sm">100000</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-[31%] border rounded-lg p-5 flex gap-5 items-center justify-center">
          <img className="w-28" src={assets.pc_card5} alt="" />
          <div>
            <h1 className="text-lg">Intel Core i5 14400F 14th Gen Raptor Lake MSI B760M BOMBER</h1>
            <p className="text-sm">100000</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-[31%]  border rounded-lg p-5 flex gap-5 items-center justify-center">
          <img className="w-28" src={assets.pc_card6} alt="" />
          <div>
            <h1 className="text-lg">Intel Core i5 14400F 14th Gen Raptor Lake MSI B760M BOMBER</h1>
            <p className="text-sm">100000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
