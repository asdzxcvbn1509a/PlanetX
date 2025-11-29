import React from "react";
import { NavLink } from "react-router-dom";
import MotionData from "../../data/MotionData";

import { useTranslation } from "react-i18next";

const MotionGraphic = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center bg-[url(/BackgroundIMG.webp)] bg-cover bg-center xl:pb-[96px] md:pb-[43px] pb-[64px]">
      <div className="xl:mt-[88px] mt-[72px]">
        <div className="flex md:mb-[32px] mb-[16px] xl:mt-[16px] md:mt-[12px] mt-[16px]">
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
            to="/services/motion"
            className="text-[#303030] xl:text-xl md:text-base text-sm"
          >
            {t("motion-graphic")}
          </NavLink>
        </div>
        <div>
          <h1 className="xl:text-[32px] text-xl text-[#493678] xl:font-semibold md:font-normal font-semibold xl:mb-2 md:mb-4 mb-[11px]">
            {t("production")}
          </h1>
          <hr className="text-[#303030]" />
          <h1 className="xl:text-xl text-base xl:mt-[13px] xl:mb-6 md:my-[9px] my-[8px] font-light md:font-normal">
            {t("motion-graphic")}
          </h1>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-[50px] md:gap-[32px] gap-[20px] md:max-w-[794px] xl:max-w-full">
          {MotionData.map((item) =>
            item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-[472px] border shadow-lg"
              />
            ) : (
              <iframe
                title={item.alt}
                src={item.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="xl:w-[472px] md:w-[380px] xl:h-[265px] md:h-[214px] w-[353px] h-[200px] border shadow-lg"
              ></iframe>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MotionGraphic;
