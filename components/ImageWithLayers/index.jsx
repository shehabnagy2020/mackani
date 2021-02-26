import React from "react";

const ImageWithLayers = ({ image, layers, children }) => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="w-full h-full relative">
        <img
          src={image}
          alt=""
          className="absolute w-full h-full object-cover  top-0 left-0"
        />
        {children}
        {layers.map((item, i) => (
          <div
            key={i}
            className={`absolute w-full h-full top-0 left-0 ${item}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageWithLayers;
