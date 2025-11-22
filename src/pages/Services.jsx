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

  const isAnyChecked = Object.values(checkedType).some((v) => v);

  return (
    // 1. เอา div เปล่าออก ให้เหลือแค่ flex justify-center ของ Wrapper นอกสุด
    <div className="flex justify-center">
      {/* 2. ตัวนี้ต้องมี w-full เพื่อคุมไม่ให้ Swiper ดัน layout มือถือพัง */}
      <div className="xl:pt-[88px] pt-[72px] w-full md:w-[794px] xl:w-[1440px] px-4 xl:px-0">
        <div className="flex md:mb-[32px] mb-[24px] xl:mt-[16px] md:mt-[12px] mt-[16px]">
          <NavLink
            to="/"
            className="text-[#888888] xl:text-xl md:text-base text-sm"
          >
            หน้าหลัก
          </NavLink>
          <h1 className="text-[#888888] xl:text-xl md:text-base text-sm">
            &nbsp; &gt; &nbsp;
          </h1>
          <NavLink
            to="/services"
            className="text-[#303030] xl:text-xl md:text-base text-sm"
          >
            บริการ
          </NavLink>
        </div>

        <div className="flex gap-[8px] xl:mb-[16px]">
          <Funnel
            size={32}
            strokeWidth={3}
            className="text-[#312070] hidden xl:block"
          />
          <h1 className="text-[#303030] xl:text-2xl md:text-xl hidden xl:block">
            ค้นหาแบบละเอียด
          </h1>
        </div>

        {/* 3. ใส่ justify-center ตรงนี้ เพื่อให้ก้อนเนื้อหา (Sidebar+Content) อยู่ตรงกลางในจอ Tablet/PC */}
        <div className="flex flex-col md:flex-row xl:flex-row xl:gap-6 md:gap-[17px] items-start justify-center">
          {/* Sidebar (Desktop Only) */}
          <div className="xl:grid gap-4 w-[229px] shrink-0 hidden xl:block">
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

          {/* Mobile Filter (Mobile Only) */}
          <div className="bg-[#F3DEFF] pb-[16px] w-full md:w-[235px] xl:hidden mb-6">
            <h1 className="text-white font-medium md:font-normal xl:text-2xl md:text-xl text-base p-[15px] xl:hidden bg-[#391F79] rounded-md">
              ค้นหาแบบละเอียด
            </h1>
            <div className="xl:hidden px-[15px] grid gap-[24px] md:gap-0 justify-center">
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
          {/* ใส่ md:max-w-[542px] เพื่อคุมความกว้างใน Tablet ไม่ให้ยืดเกินไป */}
          <div className="flex-1 w-full min-w-0 md:max-w-[542px] xl:max-w-full">
            <div className="xl:-mt-14">
              <h1 className="xl:text-[32px] text-xl text-[#493678] font-semibold xl:mb-2 md:mb-[16px] mb-[11px]">
                ออกแบบ
              </h1>
              <hr className="text-[#303030] md:w-[542px] xl:w-full" />

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

              <h1 className="xl:text-[32px] text-xl text-[#493678] font-semibold xl:mb-2 md:mb-[16px] mb-[11px]">
                โปรดักชั่น
              </h1>
              <hr className="text-[#303030] md:w-[542px] xl:w-full" />
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
