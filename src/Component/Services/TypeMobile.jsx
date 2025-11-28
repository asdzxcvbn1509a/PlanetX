import React from "react";

import { useTranslation } from "react-i18next";

const TypeMobile = ({ checkedType, onChange }) => {
  const { t } = useTranslation();

  const typeDesign = [
    ["treeD", t("3d")],
    ["logo", t("logo")],
    ["poster", t("poster")],
    ["character", t("character")],
    ["illustration", t("illustration")],
    ["shirt", t("shirt")],
  ];

  const typeProduction = [
    ["motion", t("motion-graphic")],
    ["photo", t("photo-video")],
  ];
  return (
    <div>
      <h1 className="text-base md:my-[7px] mt-[12px] mb-[8px]">{t('design')}</h1>
      <div className="grid md:grid-cols-2 grid-cols-3 md:gap-[7px] gap-[5px]">
        {typeDesign.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedType[key]
                ? "text-xs font-medium md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 border bg-[#B94D80] border-[#6C1317] text-white"
                : "text-xs font-light md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 bg-[#FEF9FF]"
            }
          >
            {value}
          </button>
        ))}
      </div>
      <h1 className="text-base md:my-[7px] mt-[24px] mb-[8px]">{t("production")}</h1>
      <div className="grid md:grid-cols-2 grid-cols-3 md:gap-[7px] gap-[5px]">
        {typeProduction.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedType[key]
                ? "text-xs font-medium md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 border bg-[#B94D80] border-[#6C1317] text-white"
                : "text-xs font-light md:w-[102px] w-[104px] h-[35px] rounded-[3px] md:px-5 px-2 bg-[#FEF9FF]"
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeMobile;
