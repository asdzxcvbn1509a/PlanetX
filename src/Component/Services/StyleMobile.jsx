import React from "react";

const StyleMobile = ({ checkedStyle, onChange }) => {
  const styleDesign = [
    ["minimal", "มินิมอล"],
    ["cartoon", "การ์ตูน"],
    ["pixelArt", "พิกเซลอาร์ต"],
  ];

  return (
    <div>
      <h1 className="text-base my-[7px]">สไตล์</h1>
      <div className="grid grid-cols-2 gap-[7px]">
        {styleDesign.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedStyle[key]
                ? "text-xs font-light w-[102px] h-[35px] rounded-[3px] px-5 border bg-[#B94D80] border-[#6C1317]"
                : "text-xs font-light w-[102px] h-[35px] rounded-[3px] px-5 bg-[#FEF9FF]"
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleMobile;
