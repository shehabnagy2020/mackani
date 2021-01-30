import React from "react";

const ServiceItem = ({ item }) => {
  return (
    <div className="border border-gray-500 rounded-xl bg-secondary bg-opacity-40 p-8 flex flex-col justify-center items-center space-y-8">
      <img src={item.image} alt="" className="w-12 lg:w-12" />
      <span className="text-white text-xl lg:text-2xl text-center">
        {item.text}
      </span>
    </div>
  );
};

export default ServiceItem;
