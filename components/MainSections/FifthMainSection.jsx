import React from "react";
import CardContainer from "../CardContainer";
import ImageWithLayers from "../ImageWithLayers";

const FifthMainSection = () => {
  return (
    <div className="w-screen min-h-screen flex relative py-36">
      <ImageWithLayers
        image="/images/image_4.png"
        layers={["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]}
      />
      <CardContainer
        text="الصبغات"
        image="/images/image_4.png"
        icon="/images/icon_4.png"
      >
        <div className="text-white space-y-6 w-full h-full flex flex-col justify-center p-5">
          <div className="flex flex-col space-y-3">
            <span className="text-xl font-bold">
              تحتاج صبغات عصريه وانيقه ؟
            </span>
            <p className="text-xl">أنامل محترفينا جاهزة لتنفيذ ما يطلبه شعرك</p>
          </div>
          <p className="text-xl">
            ألقِ نظرة على اختياراتنا المختلفة من الألوان وعلاجات الشعر واختر
            واحدة أو أكثر من الخيارات التي تناسب شعرك:
          </p>
          <ul className="list-disc list-inside">
            <li className="">فـــرد وتنعيـم الشعـر</li>
            <li className="">معالجة الشعر بالزيت</li>
            <li className="">ألـوان صبغـات للشعـر</li>
            <li className="">ألـوان الشعر الجديدة</li>
            <li className="">ألـــــــــوان الــلــحـــيـــــــة</li>
          </ul>
        </div>
      </CardContainer>
    </div>
  );
};

export default FifthMainSection;
