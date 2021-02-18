import React from "react";
import removePublic from "../../helper/removePublic";

const PricingItem = ({ item }) => {
  return (
    <div
      className="flex flex-col rounded-lg relative w-7/12 md:w-4/12 lg:w-3/12 xl:w-60 shadow-lg"
      style={{ height: "400px" }}
    >
      <div className="h-2/4 rounded-lg relative">
        <img
          src={removePublic(item.image)}
          alt=""
          className="absolute w-full h-full top-0 left-0"
        />
        <div className="bg-black bg-opacity-75 absolute w-full h-full top-0 left-0" />
        <div className="relative flex justify-center items-center h-full">
          <span className="capitalize text-white text-4xl font-bold">
            <sup className="text-xl">$</sup>
            {item.price}
          </span>
        </div>
      </div>
      <div className="h-2/4 flex flex-col justify-center space-y-2 items-center bg-black rounded-b-lg">
        {item.text_1 && (
          <div className="text-white capitalize">{item.text_1}</div>
        )}
        {item.text_2 && (
          <div className="text-white capitalize">{item.text_2}</div>
        )}
        {item.text_3 && (
          <div className="text-white capitalize">{item.text_3}</div>
        )}
        {item.text_4 && (
          <div className="text-white capitalize">{item.text_4}</div>
        )}
      </div>
      <div
        className="absolute rounded-lg p-3 abs-center text-sm"
        style={{ backgroundColor: item.title_color }}
      >
        {item.title}
      </div>
    </div>
  );
};

export default PricingItem;
