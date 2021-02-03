import React from "react";
import removePublic from "../../helper/removePublic";

const PersonCard = ({ item }) => {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <img
        src={removePublic(item.image)}
        alt=""
        className="w-full h-96 p-2 border border-gray-500 rounded-lg"
      />
      <span className="text-white text-2xl font-bold">{item.name}</span>
      <span className="text-white text-md">{item.job}</span>
    </div>
  );
};

export default PersonCard;
