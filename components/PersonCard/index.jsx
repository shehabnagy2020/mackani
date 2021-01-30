import React from "react";

const PersonCard = ({ image, name, job }) => {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <img
        src={image}
        alt=""
        className="w-full h-96 p-2 border border-gray-500 rounded-lg"
      />
      <span className="text-white text-2xl font-bold">{name}</span>
      <span className="text-white text-md">{job}</span>
    </div>
  );
};

export default PersonCard;
