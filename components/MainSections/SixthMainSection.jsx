import React from "react";
import CardContainer from "../CardContainer";
import ImageWithLayers from "../ImageWithLayers";

const SixthMainSection = () => {
  return (
    <div className="w-screen min-h-screen flex relative py-36">
      <ImageWithLayers
        image="/images/image_5.png"
        layers={["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]}
      />
      <CardContainer
        text="تدليك الوجه"
        image="/images/image_5.png"
        icon="/images/icon_6.png"
      >
        <div className="text-white space-y-5 w-full h-full flex flex-col justify-center p-5">
          <p className="text-center text-xl">
            يستحق وجهك لمسات تدليل خاصة، يتعرض الوجه البشري لشوائب كثيرة كل يوم،
            وللأشعة فوق البنفسجية والغبار والأتربة، ندعوك إلى زيارتنا واختيار
            أحد خدمات العناية بالوجه المـنــعــشــــة لـتــعــيــــد إليـــه
            بـريـقـــه وتـــوهــجـــــــه.
          </p>
        </div>
      </CardContainer>
    </div>
  );
};

export default SixthMainSection;
