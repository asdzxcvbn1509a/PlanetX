import React from "react";
import { Outlet } from "react-router-dom";
import Type from "../Component/Services/Type";
import { Funnel } from "lucide-react";
import Style from "../Component/Services/Style";
import Purpose from "../Component/Services/Purpose";
import Period from "../Component/Services/Period";

const Services = () => {
  return (
    <div className="pt-[88px] ml-[88px]">
      <div className="flex mb-[32px] mt-[16px]">
        <a href="/" className="text-[#888888] text-xl">
          หน้าหลัก
        </a>
        <h1 className="text-[#888888] text-xl">&nbsp; &gt; &nbsp;</h1>
        <a href="/services" className="text-[#303030] text-xl">
          บริการ
        </a>
      </div>
      <div className="flex gap-[8px] mb-[16px]">
        <Funnel size={32} strokeWidth={3} className="text-[#312070]" />
        <h1 className="text-[#303030] text-2xl">ค้นหาแบบละเอียด</h1>
      </div>
      <div className="grid gap-[16px]">
        <Type />
        <Style />
        <Purpose />
        <Period />
      </div>

      <Outlet />
    </div>
  );
};

export default Services;
