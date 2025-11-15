import React from "react";
import { Outlet } from "react-router-dom";

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
          <a href="/" className="text-xl font-light text-white">
            หน้าหลัก
          </a>
          <a href="/services" className="text-xl font-light text-white">
            บริการ
          </a>
          <a href="/about-us" className="text-xl font-light text-white">
            เกี่ยวกับเรา
          </a>
          <a href="/contact" className="text-xl font-light text-white">
            ติดต่อ
          </a>
        </div>
      </div>
      <p className="text-xl font-light bg-[#1C0F36] text-white text-center py-6">
        © 2025 Planet x Media Studio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
