import React from "react";
import FloatingBar from "../FloatingBar";
import ImageWithLayers from "../ImageWithLayers";
import PersonCard from "../PersonCard";
import PricingItem from "../PricingItem";

const TenthMainSection = () => {
  return (
    <div className="w-screen min-h-screen flex relative py-32">
      <ImageWithLayers
        image="/images/image_2.png"
        layers={["bg-black bg-opacity-90", "bg-black bg-opacity-30"]}
      />
      <div className="relative text-white flex flex-col flex-grow space-y-20">
        <FloatingBar text="احجز موعد" image="/images/icon_10.png" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-11/12 md:w-10/12 lg:w-3/5">
          <PersonCard
            image="/images/image_1.png"
            name="jonh doe"
            job="barber"
          />
          <PersonCard
            image="/images/image_2.png"
            name="jonh doe"
            job="barber"
          />
          <PersonCard
            image="/images/image_3.png"
            name="jonh doe"
            job="barber"
          />
        </div>
      </div>
    </div>
  );
};

export default TenthMainSection;
