import React from "react";
import { NavLink } from "react-router-dom";
import IllustrationData from "../../data/IllustrationData";

const Illustration = () => {
  return (
    <div className="flex justify-center">
      <div className="xl:mt-[88px] md:mt-[72px]">
        <div className="flex mb-[32px] xl:mt-[16px] md:mt-[12px]">
          <NavLink to="/" className="text-[#888888] xl:text-xl md:text-base">
            หน้าหลัก
          </NavLink>
          <h1 className="text-[#888888] xl:text-xl md:text-base">&nbsp; &gt; &nbsp;</h1>
          <NavLink to="/services" className="text-[#888888] xl:text-xl md:text-base">
            บริการ
          </NavLink>
          <h1 className="text-[#888888] xl:text-xl md:text-base">&nbsp; &gt; &nbsp;</h1>
          <NavLink to="/services/illustration" className="text-[#303030] xl:text-xl md:text-base">
            ภาพประกอบ
          </NavLink>
        </div>
        <div>
          <h1 className="xl:text-[32px] md:text-xl text-[#493678] xl:font-semibold xl:mb-2 md:mb-4">
            ออกแบบ
          </h1>
          <hr className="text-[#303030]" />
          <h1 className="xl:text-xl md:text-base xl:mt-[13px] xl:mb-6 md:my-[9px]">ภาพประกอบ</h1>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-[50px] md:gap-[32px] md:max-w-[794px] xl:max-w-full">
          {IllustrationData.map((item) =>
            item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-[472px] border shadow-lg"
              />
            ) : (
              <video
                autoPlay
                loop
                src={item.src}
                className="w-[472px] border shadow-lg"
              ></video>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Illustration;
