import React from "react";
import TwoD from "../../assets/Home/TwoD.png";
import ThreeD from "../../assets/Home/ThreeD.png";
import Motion from "../../assets/Home/motion.png";
import Photo from "../../assets/Home/Photo.png";

const OurCompany = () => {
  return (
    <div
      className="xl:rounded-b-[100px] bg-[#D9D9D9] shadow-lg"
      style={{
        background:
          "linear-gradient(180deg, #1D0F35 2%, #B790FF 54%, #FFFFFF 100%)",
      }}
    >
      <h1
        className="text-center xl:text-[32px] text-xl text-white xl:pt-[88px] md:pt-[41px] pt-[40px] xl:pb-[22px] md:pb-[11px] pb-[25px] md:tracking-wide xl:tracking-normal"
        style={{ textShadow: "0px 4px 3.1px rgba(0,0,0,0.25)" }}
      >
        บริษัทของเราสามารถทำได้ทุกอย่าง
      </h1>
      <div className="flex justify-center xl:pb-[73px] md:pb-[42px] xl:gap-24 md:gap-[33px] gap-[38px]">
        <div>
          <img
            src={TwoD}
            alt="TwoD"
            className="xl:w-[140px] xl:h-[140px] md:w-[105px] md:h-[105px] w-[54px] h-[54px] hover:scale-110"
          />
          <p className="text-center xl:text-xl text-[13px] text-[#241347]">2D</p>
        </div>
        <div>
          <img
            src={ThreeD}
            alt="ThreeD"
            className="xl:w-[140px] xl:h-[140px] md:w-[105px] md:h-[105px] w-[54px] h-[54px] hover:scale-110"
          />
          <p className="text-center xl:text-xl text-[13px] text-[#241347]">3D</p>
        </div>
        <div>
          <img
            src={Motion}
            alt="Motion"
            className="xl:w-[140px] xl:h-[140px] md:w-[105px] md:h-[105px] w-[54px] h-[54px] hover:scale-110"
          />
          <p className="text-center xl:text-xl text-[13px] text-[#241347]">Motion</p>
        </div>
        <div>
          <img
            src={Photo}
            alt="Photo"
            className="xl:w-[140px] xl:h-[140px] md:w-[105px] md:h-[105px] w-[54px] h-[54px] hover:scale-110"
          />
          <p className="text-center xl:text-xl text-[13px] text-[#241347]">Photo</p>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
