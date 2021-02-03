import React, { useState } from "react";
import FloatingBar from "../FloatingBar";
import ImageWithLayers from "../ImageWithLayers";
import Axios from "axios";
import moment from "moment";
import { API } from "../../helper/CONST";
import convertToFormData from "../../helper/convertToFormData";

const NinethMainSection = () => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    type: "قص الشعر",
    date: "",
    time: "",
  });

  const [loader, setLoader] = useState(false);

  const handleChange = (id, value) => {
    setInfo({ ...info, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!info.name || !info.phone || !info.date) {
      alert("برجاء ملئ جميع البيانات");
      return;
    }
    setLoader(true);
    try {
      const res = await Axios({
        baseURL: API,
        url: "/api/reservation",
        method: "POST",
        data: convertToFormData(info),
      });
      setLoader(false);
      alert("لقد تم حجز الموعد");
    } catch (error) {
      console.log(error.response);
      setLoader(false);
      if (error.response && error.response.data && error.response.data.msg)
        alert(error.response.data.msg);
      else alert("فشل حجز الموعد حاول من جديد");
    }
  };

  const handleTime = (value) => {
    setInfo({
      ...info,
      time: `${value}:00:00`,
    });
  };

  const types = [
    { id: 1, name: "قص الشعر", value: "قص الشعر" },
    { id: 2, name: "حلاقة الذقن", value: "حلاقة الذقن" },
    { id: 3, name: "الصبغات", value: "الصبغات" },
    { id: 4, name: "معالجات الشعر", value: "معالجات الشعر" },
    { id: 5, name: "تدليك الوجه", value: "تدليك الوجه" },
    {
      id: 6,
      name: "العنايه باليدين والقدمين",
      value: "العنايه باليدين والقدمين",
    },
  ];

  console.log(info);

  return (
    <div className="w-screen min-h-screen flex relative py-32">
      <ImageWithLayers
        image="/images/image_1.png"
        layers={["bg-black bg-opacity-90", "bg-black bg-opacity-30"]}
      />
      <div className="relative text-white flex flex-col flex-grow space-y-20">
        <FloatingBar text="احجز موعد" image="/images/icon_9.png" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full h-full bg-gray-100 bg-opacity-30 space-y-9 py-9"
        >
          <div className="flex flex-col text-gray-500 xl:flex-row w-full items-center justify-center space-y-9 xl:space-y-0 xl:space-x-9 xl:space-x-reverse">
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <input
                onChange={(e) => handleChange("name", e.target.value)}
                type="text"
                placeholder="ادخل اسمك"
                className="p-3 w-full border-gray-500 rounded-lg"
              />
            </div>
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <input
                onChange={(e) => handleChange("phone", e.target.value)}
                type="tel"
                placeholder="رقم هاتفك"
                className="p-3 w-full border-gray-500 rounded-lg"
              />
            </div>
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <select
                className="p-3 w-full border-gray-500 rounded-lg"
                onChange={(e) => handleChange("type", e.target.value)}
              >
                <option value="">نوع الخدمه</option>
                {types.map((item) => (
                  <option key={item.id} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-10/12 lg:w-8/12 xl:w-2/12">
              <div className="w-full flex space-x-3 space-x-reverse items-center p-3 text-right border-gray-500 rounded-lg text-gray-500 bg-white">
                <select
                  className="flex-shrink-0"
                  onChange={(e) => handleTime(e.target.value)}
                >
                  <option value="">الساعه</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <option value={i}>{i}</option>
                  ))}
                </select>
                <input
                  onChange={(e) => handleChange("date", e.target.value)}
                  type="date"
                  placeholder="ادخل الميعاد"
                  className="flex-grow"
                />
              </div>
            </div>
          </div>
          {loader ? (
            <div className="animate-ping bg-secondary w-6 h-6 rounded-full"></div>
          ) : (
            <button className="p-3 rounded-lg bg-secondary hover:bg-primary w-10/12 lg:w-8/12 xl:w-2/12">
              احجز معنا
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default NinethMainSection;
