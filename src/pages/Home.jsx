import React from "react";
import SwiperHome from "../Component/Home/SwiperHome";
import OurCompany from "../Component/Home/OurCompany";
import WeReady from "../Component/Home/WeReady";
import SwiperHome2 from "../Component/Home/SwiperHome2";
import EasyToOrder from "../Component/Home/EasyToOrder";
import WeWillDrive from "../Component/Home/WeWillDrive";

const Home = () => {
  return (
    <div className="xl:pt-[88px] pt-[72px] xl:pb-[96px] md:pb-[43px] pb-[64px]">
      <SwiperHome />
      <OurCompany />
      <WeReady />
      <SwiperHome2 />
      <EasyToOrder />
      <WeWillDrive />
    </div>
  );
};

export default Home;
