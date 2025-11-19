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
      <h1 className="text-base my-[7px]">ออกแบบ</h1>
      <div className="grid grid-cols-2 gap-[7px]">
        {typeDesign.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedType[key]
                ? "text-xs font-light w-[102px] h-[35px] rounded-[3px] px-5 border bg-[#B94D80] border-[#6C1317]"
                : "text-xs font-light w-[102px] h-[35px] rounded-[3px] px-5 bg-[#FEF9FF]"
            }
          >
            {value}
          </button>
        ))}
      </div>
      <h1 className="text-base my-[7px]">โปรดักชั่น</h1>
      <div className="grid grid-cols-2 gap-[7px]">
        {typeProduction.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedType[key]
                ? "text-xs font-light w-[102px] h-[35px] rounded-[3px] border bg-[#B94D80] border-[#6C1317]"
                : "text-xs font-light w-[102px] h-[35px] rounded-[3px] bg-[#FEF9FF]"
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
