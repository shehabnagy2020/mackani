import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black w-full p-10 space-y-5">
      <div className="flex items-center">
        <div className="flex-grow text-white flex flex-col space-y-2">
          <div className="flex items-center space-x-reverse space-x-1">
            <span className="material-icons">location_on</span>
            <span className="">الموقع</span>
          </div>
          <div className="px-2 flex space-x-2 space-x-reverse">
            <span className="">الرياض,</span>
            <span className="">شارع القاديسيه,</span>
            <span className="">حي الياسمين</span>
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
      <div className="text-white text-sm lg:text-lg text-center">
        جميع الحقوق © محفوظه لموقع مكاني
      </div>
    </footer>
  );
};

export default Footer;
