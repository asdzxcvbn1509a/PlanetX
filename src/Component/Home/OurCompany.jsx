import React from "react";
import TwoD from "../../assets/TwoD.png";
import ThreeD from "../../assets/ThreeD.png";
import Motion from "../../assets/motion.png";
import Photo from "../../assets/Photo.png";

const OurCompany = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #1D0F35 2%, #B790FF 54%, #FFFFFF 100%)",
      }}
    >
      <h1
        className="text-center text-[32px] text-white pt-22 pb-15"
        style={{ textShadow: "0px 4px 3.1px rgba(0,0,0,0.25)" }}
      >
        บริษัทของเราสามารถทำได้ทุกอย่าง
      </h1>
      <div className="flex justify-center pb-[73px] gap-24">
        <div>
          <img src={TwoD} alt="TwoD" className="w-35 h-35 hover:scale-110 bg-white rounded-full" />
          <p className="text-center text-xl">2D</p>
        </div>
        <div>
          <img
            src={ThreeD}
            alt="ThreeD"
            className="w-35 h-35 hover:scale-110 bg-white rounded-full"
          />
          <p className="text-center text-xl">3D</p>
        </div>
        <div>
          <img
            src={Motion}
            alt="Motion"
            className="w-35 h-35 hover:scale-110 bg-white rounded-full"
          />
          <p className="text-center text-xl">Motion</p>
        </div>
        <div>
          <img src={Photo} alt="Photo" className="w-35 h-35 hover:scale-110 bg-white rounded-full" />
          <p className="text-center text-xl">Photo</p>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
