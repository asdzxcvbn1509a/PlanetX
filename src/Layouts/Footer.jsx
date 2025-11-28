import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="xl:text-center bg-[#3B2862] md:pl-[24px] pl-[20px] pt-[20px] xl:pl-0 md:pt-0">
        <div className="xl:py-10 md:pt-[24px]">
          <h1 className="xl:text-[40px] text-xl text-white font-medium xl:font-normal md:mb-[10px] mb-[8px] xl:mb-[0px]">
            Planet x
          </h1>
          <div className="xl:flex justify-center mb-[20px] md:mb-0">
            <p className="xl:text-xl text-[11px] font-light text-white">
              Planet x Media Studio '
            </p>
            <p className="xl:text-xl text-[11px] font-light text-white">
              {t("for-all")}'
            </p>
          </div>
        </div>
        <hr className="max-w-[1264px] mx-auto text-white hidden xl:block " />
        <div
          style={{ fontFamily: '"Jost", sans-serif' }}
          className="xl:flex xl:justify-around md:gap-[24px] gap-[20px] max-w-[700px] xl:mx-auto xl:py-6 md:pb-[12px] md:pt-[26px] grid pb-[20px]"
        >
          <NavLink to="/" className="xl:text-xl text-sm font-light text-white">
            {t("home")}
          </NavLink>
          <NavLink
            to="/services"
            className="xl:text-xl text-sm font-light text-white"
          >
            {t("services")}
          </NavLink>
          <NavLink
            to="/about-us"
            className="xl:text-xl text-sm font-light text-white"
          >
            {t("about-us")}
          </NavLink>
          <NavLink
            to="/contact"
            className="xl:text-xl text-sm font-light text-white"
          >
            {t("contact")}
          </NavLink>
        </div>
      </div>
      <p
        style={{ fontFamily: '"Jost", sans-serif' }}
        className="xl:text-xl text-[10px] font-light bg-[#1C0F36] text-white text-center xl:py-6 py-[12px]"
      >
        © 2025 Planet x Media Studio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
