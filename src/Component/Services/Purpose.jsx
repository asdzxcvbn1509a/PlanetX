import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Purpose = ({ checkedPurpose, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);

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
                  checked={checkedPurpose.promotion}
                  onChange={() => onChange("promotion")}
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                />
                โปรโมทสินค้า
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  checked={checkedPurpose.education}
                  onChange={() => onChange("education")}
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                />
                การศึกษา
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedPurpose.socialMedia}
                  onChange={() => onChange("socialMedia")}
                />
                โซเชียลมีเดีย
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedPurpose.game}
                  onChange={() => onChange("game")}
                />
                เกม
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedPurpose.personalArt}
                  onChange={() => onChange("personalArt")}
                />
                ศิลปะส่วนบุคคล
              </label>
              <label className="text-base font-light cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-[12px] cursor-pointer"
                  checked={checkedPurpose.brand}
                  onChange={() => onChange("brand")}
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
