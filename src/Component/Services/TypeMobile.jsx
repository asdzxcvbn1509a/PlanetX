import React from "react";

const TypeMobile = ({ checkedType, onChange }) => {
  const typeDesign = [
    ["treeD", "3D"],
    ["logo", "โลโก้"],
    ["poster", "โปสเตอร์ /ป้ายโฆษณา"],
    ["character", "การออกแบบตัวละคร"],
    ["illustration", "ภาพประกอบ"],
    ["shirt", "เสื้อยืด"],
  ];

  const typeProduction = [
    ["motion", "โมชั่นกราฟฟิก"],
    ["photo", "ภาพถ่าย /วีดีโอ"],
  ];
  return (
    <div>
      <h1 className="text-base md:my-[7px] mt-[12px] mb-[8px]">ออกแบบ</h1>
      <div className="grid md:grid-cols-2 grid-cols-3 md:gap-[7px] gap-[5px]">
        {typeDesign.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedType[key]
                ? "text-xs font-medium md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 border bg-[#B94D80] border-[#6C1317] text-white"
                : "text-xs font-light md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 bg-[#FEF9FF]"
            }
          >
            {value}
          </button>
        ))}
      </div>
      <h1 className="text-base md:my-[7px] mt-[24px] mb-[8px]">โปรดักชั่น</h1>
      <div className="grid md:grid-cols-2 grid-cols-3 md:gap-[7px] gap-[5px]">
        {typeProduction.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedType[key]
                ? "text-xs font-medium md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 border bg-[#B94D80] border-[#6C1317] text-white"
                : "text-xs font-light md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 bg-[#FEF9FF]"
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeMobile;
