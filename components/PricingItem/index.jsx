import React from "react";
import removePublic from "../../helper/removePublic";

const PricingItem = ({ item }) => {
  return (
    <div className="flex flex-col rounded-lg relative w-7/12 md:w-4/12 lg:w-3/12 xl:w-60 shadow-lg">
      <div className="rounded-lg relative" style={{ height: "250px" }}>
        <img
          src={removePublic(item.image)}
          alt=""
          className="absolute w-full h-full top-0 left-0"
        />
        {item && item.price && item.price != 0 && (
          <>
            {" "}
            <div className="bg-black bg-opacity-75 absolute w-full h-full top-0 left-0" />
            <div className="relative flex justify-center items-center h-full">
              <span className="capitalize text-white text-4xl font-bold">
                <sup className="text-xl">SR</sup>
                {item.price}
              </span>
            </div>
          </>
        )}
        <div
          className="absolute rounded-lg p-3 abs-center-x text-sm z-10"
          style={{ backgroundColor: item.title_color, bottom: "-10%" }}
        >
          {item.title}
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-2 items-center bg-black rounded-b-lg relative p-4 pt-10">
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
        {item.text_5 && (
          <div className="text-white capitalize">{item.text_5}</div>
        )}
        {item.text_6 && (
          <div className="text-white capitalize">{item.text_6}</div>
        )}
        {item.text_7 && (
          <div className="text-white capitalize">{item.text_7}</div>
        )}
        {item.text_8 && (
          <div className="text-white capitalize">{item.text_8}</div>
        )}
        {item.text_9 && (
          <div className="text-white capitalize">{item.text_9}</div>
        )}
      </div>
    </div>
  );
};

export default PricingItem;
