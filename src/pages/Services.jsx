import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Funnel } from "lucide-react";
import Type from "../Component/Services/Type";
import Style from "../Component/Services/Style";
import Purpose from "../Component/Services/Purpose";
import Period from "../Component/Services/Period";
import TreeD from "../Component/Services/TreeD";
import Logo from "../Component/Services/Logo";
import Illustration from "../Component/Services/Illustration";
import Poster from "../Component/Services/Poster";
import Character from "../Component/Services/Character";
import ShirtPattern from "../Component/Services/ShirtPattern";
import Motion from "../Component/Services/Motion";
import Photo from "../Component/Services/Photo";

const Services = () => {
  const [checkedType, setCheckedType] = useState({
    treeD: false,
    logo: false,
    illustration: false,
    poster: false,
    character: false,
    shirt: false,
    motion: false,
    photo: false,
  });

  const [checkedStyle, setCheckedStyle] = useState({
    minimal: false,
    cartoon: false,
    pixelArt: false,
  });

  const [checkedPurpose, setCheckedPurpose] = useState({
    promotion: false,
    education: false,
    socialMedia: false,
    game: false,
    personalArt: false,
    brand: false,
  });

  const [checkedPeriod, setCheckedPeriod] = useState({
    threeDay: false,
    oneWeek: false,
    twoWeek: false,
    moreThanTwoWeek: false,
  });

  const handleTypeChange = (key) => {
    setCheckedType((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleStyleChange = (key) => {
    setCheckedStyle((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePurposeChange = (key) => {
    setCheckedPurpose((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePeriodChange = (key) => {
    setCheckedPeriod((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // 🧠 ถ้ามีติ๊กอันไหนไว้ จะกรองเฉพาะอันนั้น
  const isAnyChecked = Object.values(checkedType).some((v) => v);

  return (
    <div className="flex justify-center">
      <div className="pt-[88px]">
        <div className="flex mb-[32px] mt-[16px]">
          <NavLink to="/" className="text-[#888888] text-xl">
            หน้าหลัก
          </NavLink>
          <h1 className="text-[#888888] text-xl">&nbsp; &gt; &nbsp;</h1>
          <NavLink to="/services" className="text-[#303030] text-xl">
            บริการ
          </NavLink>
        </div>

        <div className="flex gap-[8px] mb-[16px]">
          <Funnel size={32} strokeWidth={3} className="text-[#312070]" />
          <h1 className="text-[#303030] text-2xl">ค้นหาแบบละเอียด</h1>
        </div>

        <div className="flex gap-6 items-start">
          {/* Sidebar */}
          <div className="grid gap-4 w-[229px] shrink-0">
            <Type checkedType={checkedType} onChange={handleTypeChange} />
            <Style checkedStyle={checkedStyle} onChange={handleStyleChange} />
            <Purpose
              checkedPurpose={checkedPurpose}
              onChange={handlePurposeChange}
            />
            <Period
              checkedPeriod={checkedPeriod}
              onChange={handlePeriodChange}
            />
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="-mt-14">
              <h1 className="text-[32px] text-[#493678] font-semibold mb-2">
                ออกแบบ
              </h1>
              <hr className="text-[#303030] min-w-[1260px]" />

              {/* 🩷 ฟิลเตอร์แสดงเฉพาะที่เลือกไว้ */}
              {(!isAnyChecked || checkedType.treeD) && (
                <TreeD
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}
              {(!isAnyChecked || checkedType.logo) && (
                <Logo
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}
              {(!isAnyChecked || checkedType.illustration) && (
                <Illustration
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}
              {(!isAnyChecked || checkedType.poster) && (
                <Poster
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}
              {(!isAnyChecked || checkedType.character) && (
                <Character
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}
              {(!isAnyChecked || checkedType.shirt) && (
                <ShirtPattern
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}

              <h1 className="text-[32px] text-[#493678] font-semibold mb-2 mt-4">
                โปรดักชั่น
              </h1>
              <hr className="text-[#303030] max-w-[1260px]" />
              {(!isAnyChecked || checkedType.motion) && <Motion />}
              {(!isAnyChecked || checkedType.photo) && (
                <Photo
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
