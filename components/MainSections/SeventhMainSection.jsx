import React from "react";
import CardContainer from "../CardContainer";
import ImageWithLayers from "../ImageWithLayers";

const SeventhMainSection = () => {
  return (
    <div className="w-screen min-h-screen flex relative py-36">
      <ImageWithLayers
        image="/images/image_6.png"
        layers={["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-80"]}
      />
      <CardContainer
        text="العناية باليدين والقدمين"
        image="/images/image_6.png"
        icon="/images/icon_7.png"
      >
        <div className="text-white space-y-5 w-full h-full flex flex-col justify-center p-5">
          <p className="text-center text-xl">
            ما علــيــــك ســوى الاستـــرخـــاء ودعـنــا نهـــتـــم بــك.
            سيساعدك خبراؤنا في تحسين صحة أظافرك والحفاظ عليها بفضل أساليـب
            العناية الفائقـــة باليديـــن والقدمين التي نــقــدمهــا لتحــصـــل
            على مظهر أكثــــر احتــرافــيــــة ونــظـــافــــة.
          </p>
        </div>
      </CardContainer>
    </div>
  );
};

export default SeventhMainSection;
