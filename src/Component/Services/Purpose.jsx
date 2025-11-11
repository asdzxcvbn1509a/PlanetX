import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Purpose = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkedItems, setCheckedItems] = useState({
    promotion: false,
    education: false,
    socialMedia: false,
    game: false,
    personalArt: false,
    brand: false,
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
          จุดประสงค์
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
            <div className="grid gap-[10px] pt-[12px] pl-[12px] pb-[12px]">
              <label className="text-base font-light cursor-pointer">
                <input
                  checked={checkedItems.promotion}
                  onChange={() => handleCheckboxChange("promotion")}
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                />
                โปรโมชั่นสินค้า
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  checked={checkedItems.education}
                  onChange={() => handleCheckboxChange("education")}
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                />
                การศึกษา
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedItems.socialMedia}
                  onChange={() => handleCheckboxChange("socialMedia")}
                />
                โซเชียลมีเดีย
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedItems.game}
                  onChange={() => handleCheckboxChange("game")}
                />
                เกม
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedItems.personalArt}
                  onChange={() => handleCheckboxChange("personalArt")}
                />
                ศิลปะส่วนบุคคล
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedItems.brand}
                  onChange={() => handleCheckboxChange("brand")}
                />
                องค์กร / แบรนด์
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purpose;
