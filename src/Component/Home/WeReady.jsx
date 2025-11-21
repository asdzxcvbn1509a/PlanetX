import React from "react";
import AboutUs from "../../assets/Home/AboutUs.png";
import OurServices from "../../assets/Home/OurServices.png";
import { NavLink } from "react-router-dom";

const WeReady = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFF 0%, #D9D9D9 49%, #AF7ABF 100%)",
      }}
    >
      <h1 className="text-center xl:text-[32px] md:text-2xl text-base font-semibold md:font-normal xl:font-semibold text-[#481DA0] xl:pt-[86px] pt-[50px] xl:pb-6 pb-[15px]">
        เราพร้อมให้บริการคุณ
      </h1>
      <div className="grid gap-1 md:mb-6 xl:mb-6 mb-[16px]">
        <p className="text-center xl:text-2xl md:text-base text-xs text-[#303030]">
          เราพร้อมให้บริการด้วยผลงานคุณภาพและความคิดสร้างสรรค์
        </p>
        <p className="text-center xl:text-2xl md:text-base text-xs text-[#303030]">
          เชิญชมผลงานของเรา แล้วมาสร้างสรรค์สิ่งที่คุณจินตนาการไปด้วยกัน
        </p>
      </div>
      <div className="md:flex grid gap-y-[16px] max-w-[1264px] mx-auto justify-center xl:gap-[136px] md:gap-[70px] xl:pb-[88px] pb-[40px]">
        {/* Our Services */}
        <div className="relative flex flex-col items-center">
          <img
            src={OurServices}
            alt="AboutUs"
            className="xl:w-[564px] xl:h-[321px] md:w-[361.94px] md:h-[206px] w-[282px] h-[161px] border bg-white"
          />
          <button className="absolute bottom-3 right-25 xl:bottom-3 xl:right-50 md:bottom-3 md:right-30 bg-[rgba(250,242,251,0.9)] border xl:py-[11px] xl:px-[37px] md:py-[8px] md:px-[20px] py-[5px] px-[7px] cursor-pointer text-xs xl:text-base">
            <NavLink to="/services">ดูเพิ่มเติม</NavLink>
          </button>
        </div>
        {/* About Us */}
        <div className="relative flex flex-col items-center">
          <img
            src={AboutUs}
            alt="OurServices"
            className="xl:w-[564px] xl:h-[321px] md:w-[361.94px] md:h-[206px] border bg-white w-[282px] h-[161px]"
          />
          <button className="absolute bottom-3 right-25 xl:bottom-3 xl:right-50 md:bottom-3 md:right-30 bg-[rgba(250,242,251,0.9)] border xl:py-[11px] xl:px-[37px] md:py-[8px] md:px-[20px] py-[5px] px-[7px] cursor-pointer text-xs xl:text-base">
            <NavLink to="/about-us">ดูเพิ่มเติม</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeReady;
