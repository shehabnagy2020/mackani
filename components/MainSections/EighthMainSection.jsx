import React from "react";
import FloatingBar from "../FloatingBar";
import ImageWithLayers from "../ImageWithLayers";
import PricingItem from "../PricingItem";

const EighthMainSection = ({ pricingData }) => {
  return (
    <div className="w-screen min-h-screen flex relative py-32">
      <ImageWithLayers
        image="/images/image_7.png"
        layers={["bg-black bg-opacity-90", "bg-black bg-opacity-80"]}
      />
      <div className="relative text-white flex flex-col flex-grow space-y-20">
        <FloatingBar text="باقات متميزه" image="/images/icon_8.png" />
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center w-full h-full bg-gray-100 bg-opacity-30 space-y-9 xl:space-y-0 xl:space-x-9 xl:space-x-reverse py-7">
          {pricingData &&
            pricingData.map((item, i) => <PricingItem key={i} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default EighthMainSection;
