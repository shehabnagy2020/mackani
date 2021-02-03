import React from "react";
import Footer from "../components/Footer";
import EighthMainSection from "../components/MainSections/EighthMainSection";
import FifthMainSection from "../components/MainSections/FifthMainSection";
import FirstMainSection from "../components/MainSections/FirstMainSection";
import FourthMainSection from "../components/MainSections/FourthMainSection";
import NinethMainSection from "../components/MainSections/NinethMainSection";
import SecondMainSection from "../components/MainSections/SecondMainSection";
import SeventhMainSection from "../components/MainSections/SeventhMainSection";
import SixthMainSection from "../components/MainSections/SixthMainSection";
import TenthMainSection from "../components/MainSections/TenthMainSection";
import ThirdMainSection from "../components/MainSections/ThirdMainSection";
import { API } from "../helper/CONST";
import Axios from "axios";

export default function Home({ pricingData, teamMembersData }) {
  return (
    <main className="w-screen h-screen overflow-hidden overflow-y-auto">
      <FirstMainSection />
      <SecondMainSection />
      <ThirdMainSection />
      <FourthMainSection />
      <FifthMainSection />
      <SixthMainSection />
      <SeventhMainSection />
      <EighthMainSection />
      <TenthMainSection />
      <NinethMainSection />
      <Footer />
    </main>
  );
}
export const getServerSideProps = async ({ res }) => {
  const pricingData = await Axios({
    baseURL: API,
    url: "/api/pricing",
    method: "GET",
  });
  const teamMembersData = await Axios({
    baseURL: API,
    url: "/api/team-member",
    method: "GET",
  });
  return {
    props: {
      pricingData: pricingData.data,
      teamMembersData: teamMembersData.data,
    },
  };
};
