import React from "react";

const FloatingBar = ({ image, text }) => {
  return (
    <div className="flex justify-between items-center mr-auto w-11/12 lg:w-5/6">
      <img
        src="/images/logo.png"
        alt=""
        className="flex-shrink w-1/3 lg:w-1/4 xl:w-1/5"
      />
      <div className="bg-primary text-white py-3 px-6 flex items-center space-x-3 space-x-reverse w-2/4 md:w-2/4 lg:w-2/5">
        <img src={image} alt="" className="w-5 md:w-6 lg:w-8" />
        <span className="text-xl md:text-2xl lg:text-3xl">{text}</span>
      </div>
    </div>
  );
};

export default FloatingBar;
