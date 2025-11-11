import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Style = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [checkedItems, setCheckedItems] = useState({
    minimal: false,
    cartoon: false,
    pixelArt: false,
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
          สไตล์
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
            className="w-[229px] rounded-b-xl"
          >
            <div className="grid gap-[10px] pt-[12px] pl-[12px] pb-[12px]">
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedItems.minimal}
                  onChange={() => handleCheckboxChange("minimal")}
                />
                มินิมอล
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedItems.cartoon}
                  onChange={() => handleCheckboxChange("cartoon")}
                />
                การ์ตูน
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedItems.pixelArt}
                  onChange={() => handleCheckboxChange("pixelArt")}
                />
                พิกเซลอาร์ต
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Style;
