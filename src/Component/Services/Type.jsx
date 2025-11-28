import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { useTranslation } from "react-i18next";

const Type = ({ checkedType, onChange }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(true);

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
          {t("type")}
        </h1>
        {isOpen ? (
          <ChevronUp size={32} className="text-white my-auto pr-[12px]" />
        ) : (
          <ChevronDown size={32} className="text-white my-auto pr-[12px]" />
        )}
      </button>

      {isOpen && (
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(239, 202, 255, 0.1) 13%, #EFCAFF 100%)",
          }}
          className="w-[229px] rounded-b-lg"
        >
          <div className="grid gap-[10px] pt-[12px] pl-[12px] pb-[12px]">
            <h1 className="text-base text-[#303030]">{t("design")}</h1>

            {[
              ["treeD", t("3d")],
              ["logo", t("logo")],
              ["illustration", t("illustration")],
              ["poster", t("poster")],
              ["character", t("character")],
              ["shirt", t("shirt")],
            ].map(([key, label]) => (
              <label
                key={key}
                className="text-base font-light cursor-pointer flex items-center"
              >
                <input
                  type="checkbox"
                  checked={checkedType[key]}
                  onChange={() => onChange(key)}
                  className="mr-3 cursor-pointer"
                />
                {label}
              </label>
            ))}

            <h1 className="text-base text-[#303030]">{t("production")}</h1>

            {[
              ["motion", t("motion-graphic")],
              ["photo", t("photo-video")],
            ].map(([key, label]) => (
              <label
                key={key}
                className="text-base font-light cursor-pointer flex items-center"
              >
                <input
                  type="checkbox"
                  checked={checkedType[key]}
                  onChange={() => onChange(key)}
                  className="mr-3 cursor-pointer"
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Type;
