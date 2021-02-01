import React from "react";

const PricingItem = ({ badgeText, badgeColor }) => {
  return (
    <div
      className="flex flex-col rounded-lg relative w-7/12 md:w-4/12 lg:w-3/12 xl:w-60 shadow-lg"
      style={{ height: "400px" }}
    >
      <div className="h-2/4 rounded-lg relative">
        <img
          src="/images/image_1.png"
          alt=""
          className="absolute w-full h-full top-0 left-0"
        />
        <div className="bg-black bg-opacity-75 absolute w-full h-full top-0 left-0" />
        <div className="relative flex justify-center items-center h-full">
          <span className="capitalize text-white text-4xl font-bold">
            <sup>$</sup>100
          </span>
        </div>
      </div>
      <div className="h-2/4 flex flex-col justify-center space-y-2 items-center bg-black rounded-b-lg">
        <div className="text-white capitalize">24/7 tech support</div>
        <div className="text-white capitalize">24/7 tech support</div>
        <div className="text-white capitalize">24/7 tech support</div>
        <div className="text-white capitalize">24/7 tech support</div>
      </div>
      <div
        className="absolute rounded-lg p-3 abs-center text-sm"
        style={{ backgroundColor: badgeColor }}
      >
        {badgeText}
      </div>
    </div>
  );
};

export default PricingItem;
