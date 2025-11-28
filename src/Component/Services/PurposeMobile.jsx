import React from "react";

import { useTranslation } from "react-i18next";

const PurposeMobile = ({ checkedPurpose, onChange }) => {
  const { t } = useTranslation();

  const styleDesign = [
    ["promotion", t("promotion")],
    ["education", t("education")],
    ["game", t("game")],
    ["personalArt", t("art")],
    ["socialMedia", t("social")],
    ["brand", t("brand")],
  ];
  return (
    <div>
      <h1 className="text-base md:my-[7px] mb-[8px]">{t("purpose")}</h1>
      <div className="grid md:grid-cols-2 grid-cols-3 md:gap-[7px] gap-[5px]">
        {styleDesign.map(([key, value]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              checkedPurpose[key]
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

export default PurposeMobile;
