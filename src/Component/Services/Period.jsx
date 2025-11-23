import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Type = ({ checkedPeriod, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const period = [
    ["threeDay", "3 วัน"],
    ["oneWeek", "1 สัปดาห์"],
    ["twoWeek", "2 สัปดาห์"],
    ["moreThanTwoWeek", "มากกว่า 2 สัปดาห์"],
  ];

  return (
    <div
      className="rounded-xl"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between bg-[#391F79] w-[229px] h-[39px] text-left cursor-pointer rounded-md border"
      >
        <h1 className="text-xl font-medium text-white my-auto pl-[12px]">
          ระยะเวลา
        </h1>
        {isOpen ? (
          <ChevronUp size={32} className="text-white my-auto pr-[12px]" />
        ) : (
          <ChevronDown size={32} className="text-white my-auto pr-[12px]" />
        )}
      </button>
      <div>
        {isOpen && (
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(239, 202, 255, 0.1) 13%, #EFCAFF 100%)",
            }}
            className="w-[229px] rounded-b-lg"
          >
            <div className="grid gap-3 pt-3 pl-3 pb-3">
              {period.map(([key, value]) => (
                <label
                  key={key}
                  className="text-base font-light cursor-pointer flex items-center"
                >
                  <input
                    checked={checkedPeriod[key]}
                    onChange={() => onChange(key)}
                    type="checkbox"
                    className="mr-3 cursor-pointer"
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Type;
