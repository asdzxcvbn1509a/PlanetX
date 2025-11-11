import React from "react";
import SwiperHome from "../Component/Home/SwiperHome";
import OurCompany from "../Component/Home/OurCompany";
import WeReady from "../Component/Home/WeReady";
import SwiperHome2 from "../Component/Home/SwiperHome2";
import EasyToOrder from "../Component/Home/EasyToOrder";
import WeWillDrive from "../Component/Home/WeWillDrive";

const Home = () => {
  return (
    <div className="pt-[88px]">
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
