import React from "react";
import ImageWithLayers from "../ImageWithLayers";

const FirstMainSection = () => {
  return (
    <div className="w-full h-full relative flex items-center">
      <ImageWithLayers
        // image="/images/image_1.png"
        layers={["bg-black bg-opacity-90", "bg-black bg-opacity-20"]}
      >
        <img
          src="/images/man.png"
          alt=""
          className="absolute right-0 top-0 h-auto md:abs-center-y md:h-3/4 "
        />
      </ImageWithLayers>
      <div className="relative w-full text-white flex flex-col items-center space-y-28 px-5">
        <span className="text-lg md:text-xl lg:text-2xl font-semibold">
          مرحبا بك في
        </span>
        <img
          src="/images/logo.png"
          alt=""
          className="w-4/6 md:w-3/6 xl:w-3/12"
        />
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
            جاذبيتك كرجل لدي مكاني
          </h3>
          <div className="text-sm md:text-base lg:text-xl font-medium text-center leading-6">
            <p className="">
              يقدم صالون مكاني تجربة حلاقة أنيقة إلى جانب مختلف من الخدمات
              والعناية الشخصية بالرجل باستخدام
            </p>
            <p className="">
              أرقى وأكثـــر طــرق الحلاقـة إبتكارًا، سيساعدك أمهر الحلاقين لدينا
              في إكتمــال طلتـك الرجوليــة الجذابــــة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstMainSection;
