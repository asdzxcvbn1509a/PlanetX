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
import TypeMobile from "../Component/Services/TypeMobile";
import StyleMobile from "../Component/Services/StyleMobile";
import PurposeMobile from "../Component/Services/PurposeMobile";
import PeriodMobile from "../Component/Services/PeriodMobile";

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
      <div className="xl:pt-[88px] md:pt-[72px]">
        <div className="flex mb-[32px] xl:mt-[16px] md:mt-[12px]">
          <NavLink to="/" className="text-[#888888] xl:text-xl md:text-base">
            หน้าหลัก
          </NavLink>
          <h1 className="text-[#888888] xl:text-xl md:text-base">
            &nbsp; &gt; &nbsp;
          </h1>
          <NavLink
            to="/services"
            className="text-[#303030] xl:text-xl text-base"
          >
            บริการ
          </NavLink>
        </div>

        <div className="flex gap-[8px] xl:mb-[16px]">
          <Funnel
            size={32}
            strokeWidth={3}
            className="text-[#312070] md:hidden xl:block"
          />
          <h1 className="text-[#303030] xl:text-2xl md:text-xl md:hidden xl:block">
            ค้นหาแบบละเอียด
          </h1>
        </div>

        <div className="flex xl:gap-6 md:gap-[17px] items-start">
          {/* Sidebar */}
          <div className="xl:grid gap-4 w-[229px] shrink-0 md:hidden xl:block">
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
          <div className="bg-[#F3DEFF] pb-[16px]">
            <h1 className="text-[#303030] xl:text-2xl md:text-xl p-[15px] xl:hidden">
              ค้นหาแบบละเอียด
            </h1>
            <div className="xl:hidden px-[15px]">
              <hr />
              <TypeMobile
                checkedType={checkedType}
                onChange={handleTypeChange}
              />
              <StyleMobile
                checkedStyle={checkedStyle}
                onChange={handleStyleChange}
              />
              <PurposeMobile
                checkedPurpose={checkedPurpose}
                onChange={handlePurposeChange}
              />
              <PeriodMobile
                checkedPeriod={checkedPeriod}
                onChange={handlePeriodChange}
              />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="xl:-mt-14">
              <h1 className="xl:text-[32px] md:text-xl text-[#493678] font-semibold xl:mb-2 md:mb-[16px]">
                ออกแบบ
              </h1>
              <hr className="text-[#303030] xl:min-w-[1260px] md:min-w-[542px]" />

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

              <h1 className="xl:text-[32px] md:text-xl text-[#493678] font-semibold mb-2 mt-4">
                โปรดักชั่น
              </h1>
              <hr className="text-[#303030] max-w-[1260px]" />
              {(!isAnyChecked || checkedType.motion) && (
                <Motion
                  checkedStyle={checkedStyle}
                  checkedPurpose={checkedPurpose}
                  checkedPeriod={checkedPeriod}
                />
              )}
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
