import React from "react";
import FloatingBar from "../FloatingBar";

const CardContainer = ({ text, image, children, icon }) => {
  return (
    <div className="relative text-white flex flex-col flex-grow space-y-20">
      <FloatingBar text={text} image={icon} />
      <div className="flex flex-col xl:flex-row items-center justify-center mx-auto w-11/12 md:w-10/12 lg:w-3/5 h-full space-y-5 space-x-0 xl:space-x-5 xl:space-y-0 xl:space-x-reverse">
        <div className="h-full w-full rounded-lg border border-gray-500">
          {children}
        </div>
        <img
          src={image}
          alt=""
          className="w-full xl:w-1/3 h-full rounded-lg p-2 border border-gray-500"
        />
      </div>
    </div>
  );
};

export default CardContainer;
