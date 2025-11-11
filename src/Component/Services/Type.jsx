import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Type = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkedItems, setCheckedItems] = useState({
    treeD: false,
    logo: false,
    illustration: false,
    poster: false,
    character: false,
    shirt: false,
    motion: false,
    photo: false,
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
          ประเภท
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
              <h1 className="text-base text-[#303030]">ออกแบบ</h1>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.treeD}
                  onChange={() => handleCheckboxChange("treeD")}
                  className="mr-3 cursor-pointer"
                />
                3D
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.logo}
                  onChange={() => handleCheckboxChange("logo")}
                  className="mr-3 cursor-pointer"
                />
                โลโก้
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.illustration}
                  onChange={() => handleCheckboxChange("illustration")}
                  className="mr-3 cursor-pointer"
                />
                ภาพประกอบ
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.poster}
                  onChange={() => handleCheckboxChange("poster")}
                  className="mr-3 cursor-pointer"
                />
                โปสเตอร์ / ป้ายโฆษณา
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.character}
                  onChange={() => handleCheckboxChange("character")}
                  className="mr-3 cursor-pointer"
                />
                ออกแบบตัวละคร
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.shirt}
                  onChange={() => handleCheckboxChange("shirt")}
                  className="mr-3 cursor-pointer"
                />
                ออกแบบลายเสื้อ
              </label>
              <h1 className="text-base text-[#303030]">โปรดักชั่น</h1>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.motion}
                  onChange={() => handleCheckboxChange("motion")}
                  className="mr-3 cursor-pointer"
                />
                โมชั่นกราฟิก
              </label>
              <label className="text-base font-light cursor-pointer flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems.photo}
                  onChange={() => handleCheckboxChange("photo")}
                  className="mr-3 cursor-pointer"
                />
                ถ่ายภาพ / วิดีโอ
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Type;
