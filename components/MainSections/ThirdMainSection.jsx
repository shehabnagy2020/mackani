import React from "react";
import CardContainer from "../CardContainer";
import ImageWithLayers from "../ImageWithLayers";

const ThirdMainSection = () => {
  return (
    <div className="w-screen min-h-screen flex relative py-36">
      <ImageWithLayers
        image="/images/image_2.png"
        layers={["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]}
      />
      <CardContainer
        text="قص الشعر"
        image="/images/image_2.png"
        icon="/images/icon_2.png"
      >
        <div className="text-white space-y-5 w-full h-full flex flex-col justify-center p-5">
          <p className="text-center text-xl">
            إذا كنت ممن يهتم بمظهره وتريد مواكبة أحدث قصات الشعر والموضــة مع
            الحرص على الحصول على خدمة هي الأكثر أناقـــة. إذا لا تـبــحــث بعد
            الآن!
          </p>
          <p className="text-center text-xl">
            صالون مكاني، يقدم لك كل ما تستحقه اناقتك وبما يليق بك، كما نستخدم
            أفضل المنتجات للعناية برجل .
          </p>
        </div>
      </CardContainer>
    </div>
  );
};

export default ThirdMainSection;
