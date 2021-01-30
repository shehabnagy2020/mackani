import React from "react";
import CardContainer from "../CardContainer";
import ImageWithLayers from "../ImageWithLayers";

const FourthMainSection = () => {
  return (
    <div className="w-screen min-h-screen flex relative py-36">
      <ImageWithLayers
        image="/images/image_3.png"
        layers={["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]}
      />
      <CardContainer
        text="حلاقة الذقن"
        image="/images/image_3.png"
        icon="/images/icon_3.png"
      >
        <div className="text-white space-y-5 w-full h-full flex flex-col justify-center p-5">
          <p className="text-center text-xl">
            أنت الآن في المكان الأنسب للحصول على حلاقة جذابة للحيتك. سيضمن
            الماهرون لدينا تجهيز بشرتك بشكل صحيح قبل الحــــلاقــــة
            باسـتــخــــدام أفضــــل الـمـنــتـــجـــــات في الســــــوق. من
            الضروري تهيئة بشرتك قبل الحلاقة للحصول على حلاقة خالية من البثور، مع
            ترك البشرة بدون التعرض لأي ضرر بعد ذلك. لذا، دعونا نقول وداعًا
            للحبوب والحك!
          </p>
          <p className="text-center text-xl">
            ألقِ نظرة على مجموعة باقات حلاقة اللحية من مكاني واختر أفضل ما يناسب
            شخصيتك وإطلالتك
          </p>
        </div>
      </CardContainer>
    </div>
  );
};

export default FourthMainSection;
