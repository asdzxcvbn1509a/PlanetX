import React from "react";

const PurposeMobile = ({ checkedPurpose, onChange }) => {
  const styleDesign = [
    ["promotion", "โปรโมชั่นสินค้า"],
    ["education", "การศึกษา"],
    ["game", "เกม"],
    ["personalArt", "ศิลปะส่วนบุคคล"],
    ["socialMedia", "โซเชียลมีเดีย"],
    ["brand", "องค์กร / แบรนด์"],
  ];
  return (
    <div>
      <h1 className="text-base my-[7px]">จุดประสงค์</h1>
      <div className="grid grid-cols-2 gap-[7px]">
        {styleDesign.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedPurpose[key]
                ? "text-xs font-light w-[102px] h-[35px] rounded-[3px] px-3 border bg-[#B94D80] border-[#6C1317]"
                : "text-xs font-light w-[102px] h-[35px] rounded-[3px] px-3 bg-[#FEF9FF]"
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PurposeMobile;
