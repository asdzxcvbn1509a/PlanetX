import React from "react";
import { Outlet } from "react-router-dom";
import Type from "../Component/Services/Type";
import { Funnel } from "lucide-react";
import Style from "../Component/Services/Style";
import Purpose from "../Component/Services/Purpose";
import Period from "../Component/Services/Period";
import TreeD from "../Component/Services/TreeD";
import Logo from "../Component/Services/Logo";
import Illustration from "../Component/Services/Illustration";

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
      <div className="flex gap-6">
        {/* Sidebar with filters */}
        <div className="grid gap-4 w-[229px] shrink-0">
          <Type />
          <Style />
          <Purpose />
          <Period />
        </div>
        {/* Main content area */}
        <div className="flex-1">
          <div className="-mt-14">
            <h1 className="text-[32px] text-[#493678] font-semibold mb-2">
              ออกแบบ
            </h1>
            <hr className="text-[#303030] max-w-[1260px]" />
            <TreeD />
            <Logo />
            <Illustration />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Services;
