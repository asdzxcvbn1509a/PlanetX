import React from "react";

const PeriodMobile = ({ checkedPeriod, onChange }) => {
  const styleDesign = [
    ["threeDay", "3 วัน"],
    ["oneWeek", "1 สัปดาห์"],
    ["twoWeek", "2 สัปดาห์"],
    ["moreThanTwoWeek", "มากกว่า 2 สัปดาห์"],
  ];
  return (
    <div>
      <h1 className="text-base my-[7px]">ระยะเวลาการผลิต</h1>
      <div className="grid grid-cols-2 gap-[7px]">
        {styleDesign.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedPeriod[key]
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

export default PeriodMobile;
