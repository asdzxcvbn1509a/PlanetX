import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="text-center bg-[#3B2862] mt-[96px]">
        <div className="py-10">
          <h1 className="text-[40px] text-white">Planet x</h1>
          <p className="text-xl font-light text-white">
            Planet x Media Studio สำหรับทุกความต้องการของคุณ
          </p>
        </div>
        <hr className="max-w-[1264px] mx-auto text-white" />
        <div className="flex justify-around max-w-[700px] mx-auto py-6">
          <NavLink to="/" className="text-xl font-light text-white">
            หน้าหลัก
          </NavLink>
          <NavLink to="/services" className="text-xl font-light text-white">
            บริการ
          </NavLink>
          <NavLink to="/about-us" className="text-xl font-light text-white">
            เกี่ยวกับเรา
          </NavLink>
          <NavLink to="/contact" className="text-xl font-light text-white">
            ติดต่อ
          </NavLink>
        </div>
      </div>
      <p className="text-xl font-light bg-[#1C0F36] text-white text-center py-6">
        © 2025 Planet x Media Studio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
