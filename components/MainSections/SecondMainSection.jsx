import React from "react";
import FloatingBar from "../FloatingBar";
import ImageWithLayers from "../ImageWithLayers";
import ServiceItem from "../ServiceItem";

const services = [
  { id: 1, image: "/images/icon_2.png", text: "قص الشعر" },
  { id: 2, image: "/images/icon_3.png", text: "حلاقة الذقن" },
  { id: 3, image: "/images/icon_4.png", text: "الصبغات" },
  { id: 4, image: "/images/icon_5.png", text: "معالجات الشعر" },
  { id: 5, image: "/images/icon_6.png", text: "تدليك الوجه (الماسك)" },
  { id: 6, image: "/images/icon_7.png", text: "العنايه باليدين والقدمين" },
];

const SecondMainSection = () => {
  return (
    <div className="w-full min-h-full relative py-36">
      <ImageWithLayers
        image="/images/image_1.png"
        layers={["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-90"]}
      />
      <div className="relative text-white flex flex-col w-full space-y-20">
        <FloatingBar text="الخدمات" image="/images/icon_1.png" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-4/6">
          {services.map((item) => (
            <ServiceItem ket={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondMainSection;
