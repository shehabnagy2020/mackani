import React from "react";
import FloatingBar from "../FloatingBar";
import ImageWithLayers from "../ImageWithLayers";
import PersonCard from "../PersonCard";
import PricingItem from "../PricingItem";

const TenthMainSection = ({ teamMembersData }) => {
  return (
    <div className="w-screen min-h-screen flex relative py-32">
      <ImageWithLayers
        image="/images/image_2.png"
        layers={["bg-black bg-opacity-90", "bg-black bg-opacity-30"]}
      />
      <div className="relative text-white flex flex-col flex-grow space-y-20">
        <FloatingBar text="أعضاء الفريق" image="/images/icon_10.png" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-11/12 md:w-10/12 lg:w-3/5">
          {teamMembersData &&
            teamMembersData.map((item, i) => (
              <PersonCard key={i} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TenthMainSection;
