import React from "react";
import FloatingBar from "../FloatingBar";
import ImageWithLayers from "../ImageWithLayers";
import PricingItem from "../PricingItem";

const NinethMainSection = () => {
  return (
    <div className="w-screen min-h-screen flex relative py-32">
      <ImageWithLayers
        image="/images/image_1.png"
        layers={["bg-black bg-opacity-90", "bg-black bg-opacity-30"]}
      />
      <div className="relative text-white flex flex-col flex-grow space-y-20">
        <FloatingBar text="احجز موعد" image="/images/icon_9.png" />
        <form className="flex flex-col items-center justify-center w-full h-full bg-gray-100 bg-opacity-30 space-y-9 py-9">
          <div className="flex flex-col text-gray-500 xl:flex-row w-full items-center justify-center space-y-9 xl:space-y-0 xl:space-x-9 xl:space-x-reverse">
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <input
                type="text"
                placeholder="ادخل اسمك"
                className="p-3 w-full border-gray-500 rounded-lg"
              />
            </div>
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <input
                type="tel"
                placeholder="رقم هاتفك"
                className="p-3 w-full border-gray-500 rounded-lg"
              />
            </div>
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <select
                value="1"
                className="p-3 w-full border-gray-500 rounded-lg"
              >
                <option value="1">قص الشعر</option>
                <option value="1">قص الشعر</option>
                <option value="1">قص الشعر</option>
              </select>
            </div>
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <input
                type="datetime-local"
                placeholder="ادخل الميعاد"
                className="p-3 text-right w-full border-gray-500 rounded-lg text-gray-500"
              />
            </div>
          </div>
          <button className="p-3 rounded-lg bg-secondary hover:bg-primary w-10/12 lg:w-8/12 xl:w-2/12">
            احجز معنا
          </button>
        </form>
      </div>
    </div>
  );
};

export default NinethMainSection;
