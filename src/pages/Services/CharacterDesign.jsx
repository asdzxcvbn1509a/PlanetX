import React from "react";
import { NavLink } from "react-router-dom";
import CharacterData from "../../data/CharacterData";

import { useTranslation } from "react-i18next";

const CharacterDesign = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center bg-[url(/BackgroundIMG.webp)] bg-cover bg-center xl:pb-[96px] md:pb-[43px] pb-[64px]">
      <div className="xl:mt-[88px] mt-[72px]">
        <div className="flex md:mb-[32px] mb-[16px] xl:mt-[16px] mt-[16px] md:mt-[12px]">
          <NavLink
            to="/"
            className="text-[#888888] xl:text-xl md:text-base text-sm"
          >
            {t("home")}
          </NavLink>
          <h1 className="text-[#888888] xl:text-xl md:text-base text-sm">
            &nbsp; &gt; &nbsp;
          </h1>
          <NavLink
            to="/services"
            className="text-[#888888] xl:text-xl md:text-base text-sm"
          >
            {t("services")}
          </NavLink>
          <h1 className="text-[#888888] xl:text-xl md:text-base text-sm">
            &nbsp; &gt; &nbsp;
          </h1>
          <NavLink
            to="/services/character"
            className="text-[#303030] xl:text-xl md:text-base text-sm"
          >
            {t("character")}
          </NavLink>
        </div>
        <div>
          <h1 className="xl:text-[32px] text-xl text-[#493678] xl:font-semibold md:font-normal font-semibold xl:mb-2 md:mb-4 mb-[11px]">
            {t("design")}
          </h1>
          <hr className="text-[#303030]" />
          <h1 className="xl:text-xl font-light md:font-normal text-base xl:mt-[13px] xl:mb-6 md:my-[9px] my-[8px]">
            {t("character")}
          </h1>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-[50px] md:gap-[32px] gap-[20px] md:max-w-[794px] max-w-[353px] xl:max-w-full">
          {CharacterData.map((item) =>
            item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-[472px] border shadow-lg"
              />
            ) : (
              <video
                autoPlay
                loop
                src={item.src}
                className="w-[472px] border shadow-lg"
              ></video>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDesign;
