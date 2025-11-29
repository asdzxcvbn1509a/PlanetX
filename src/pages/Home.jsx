import React from "react";
import SwiperHome from "../component/Home/SwiperHome";
import OurCompany from "../component/Home/OurCompany";
import WeReady from "../component/Home/WeReady";
import SwiperHome2 from "../component/Home/SwiperHome2";
import EasyToOrder from "../component/Home/EasyToOrder";
import WeWillDrive from "../component/Home/WeWillDrive";

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
