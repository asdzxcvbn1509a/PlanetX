import React from "react";
import TwoD from "../../assets/Home/TwoD.png";
import ThreeD from "../../assets/Home/ThreeD.png";
import Motion from "../../assets/Home/motion.png";
import Photo from "../../assets/Home/Photo.png";

const OurCompany = () => {
  return (
    <div
      className="rounded-b-[100px] bg-[#D9D9D9] shadow-lg"
      style={{
        background:
          "linear-gradient(180deg, #1D0F35 2%, #B790FF 54%, #FFFFFF 100%)",
      }}
    >
      <h1
        className="text-center text-[32px] text-white pt-[88px] pb-[22px]"
        style={{ textShadow: "0px 4px 3.1px rgba(0,0,0,0.25)" }}
      >
        บริษัทของเราสามารถทำได้ทุกอย่าง
      </h1>
      <div className="flex justify-center pb-[73px] gap-24">
        <div>
          <img
            src={TwoD}
            alt="TwoD"
            className="w-[140px] h-[140px] hover:scale-110"
          />
          <p className="text-center text-xl text-[#241347]">2D</p>
        </div>
        <div>
          <img
            src={ThreeD}
            alt="ThreeD"
            className="w-[140px] h-[140px] hover:scale-110"
          />
          <p className="text-center text-xl text-[#241347]">3D</p>
        </div>
        <div>
          <img
            src={Motion}
            alt="Motion"
            className="w-[140px] h-[140px] hover:scale-110"
          />
          <p className="text-center text-xl text-[#241347]">Motion</p>
        </div>
        <div>
          <img
            src={Photo}
            alt="Photo"
            className="w-[140px] h-[140px] hover:scale-110"
          />
          <p className="text-center text-xl text-[#241347]">Photo</p>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
