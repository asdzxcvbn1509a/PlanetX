import React from "react";
import { NavLink } from "react-router-dom";
import Style from "../../Component/Services/Style";
const ThreeD = () => {
  return (
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
        <NavLink to="/services/three-d" className="text-[#303030] text-xl">
          3D
        </NavLink>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ThreeD;
