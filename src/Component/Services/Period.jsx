import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Type = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkedItems, setCheckedItems] = useState({
    treeDay: false,
    oneWeek: false,
    twoWeek: false,
    moreThanTwoWeek: false,
  });

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div>
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
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  checked={checkedItems.treeDay}
                  onChange={() => handleCheckboxChange("treeDay")}
                  type="checkbox"
                  className="mr-3 cursor-pointer"
                />
                3 วัน
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.oneWeek}
                  onChange={() => handleCheckboxChange("oneWeek")}
                  className="mr-3 cursor-pointer"
                />
                1 สัปดาห์
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.twoWeek}
                  onChange={() => handleCheckboxChange("twoWeek")}
                  className="mr-3 cursor-pointer"
                />
                2 สัปดาห์
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.moreThanTwoWeek}
                  onChange={() => handleCheckboxChange("moreThanTwoWeek")}
                  className="mr-3 cursor-pointer"
                />
                มากกว่า 2 สัปดาห์
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Type;
