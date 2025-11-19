import React from "react";
import { NavLink } from "react-router-dom";
import CharacterData from "../../data/CharacterData"

const CharacterDesign = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-[88px]">
        <div className="flex mb-[32px] mt-[16px]">
          <NavLink to="/" className="text-[#888888] text-xl">
            หน้าหลัก
          </NavLink>
          <h1 className="text-[#888888] text-xl">&nbsp; &gt; &nbsp;</h1>
          <NavLink to="/services" className="text-[#888888] text-xl">
            บริการ
          </NavLink>
          <h1 className="text-[#888888] text-xl">&nbsp; &gt; &nbsp;</h1>
          <NavLink to="/services/character" className="text-[#303030] text-xl">
            ออกแบบตัวละคร
          </NavLink>
        </div>
        <div>
          <h1 className="text-[32px] text-[#493678] font-semibold mb-2">
            ออกแบบ
          </h1>
          <hr className="text-[#303030]" />
          <h1 className="text-xl mt-[13px] mb-6">ออกแบบตัวละคร</h1>
        </div>
        <div className="grid grid-cols-3 gap-[50px]">
          {CharacterData.map((item) =>
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

export default CharacterDesign;
