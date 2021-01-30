import React from "react";

const PricingItem = ({ badgeText, badgeColor }) => {
  return (
    <div
      className="flex flex-col rounded-lg relative w-7/12 md:w-4/12 lg:w-3/12 xl:w-60 shadow-lg"
      style={{ height: "400px" }}
    >
      <div
        className="absolute rounded-lg p-3 abs-center text-sm"
        style={{ backgroundColor: badgeColor }}
      >
        {badgeText}
      </div>
      <div className="bg-red-500 h-2/4 rounded-lg"></div>
      <div className="h-2/4 flex justify-center items-center bg-black rounded-b-lg">
        <img src="/images/logo.png" alt="" className="w-7/12" />
      </div>
    </div>
  );
};

export default PricingItem;
