import React from "react";

import Nine from "../../assets/AboutUs/Nine.webp";
import Bam from "../../assets/AboutUs/Bam.webp";
import Jack from "../../assets/AboutUs/Jack.webp";
import Song from "../../assets/AboutUs/Song.webp";
import Agrun from "../../assets/AboutUs/Agrun.webp";
import Bow from "../../assets/AboutUs/Bow.webp";
import Baimai from "../../assets/AboutUs/Baimai.webp";

import { useTranslation } from "react-i18next";

const PersonCard = ({ image, role, name, id, className = "" }) => (
  <div
    className={`xl:w-[270px] md:w-[20vw] w-[228px] h-auto flex flex-col items-center ${className}`}
  >
    <img src={image} alt={name} className="object-cover" />
    <h1 className="text-[#2F0045] xl:text-2xl md:text-xl text-[24px] text-center font-bold mt-4 text-balance">
      {role}
    </h1>
    <h1 className="xl:text-xl md:text-base text-xl text-center text-balance">
      {name}
    </h1>
    <h1 className="xl:text-xl md:text-base text-xl text-[#4A4A4A ] text-center text-balance">
      {id}
    </h1>
  </div>
);

const Member = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full xl:px-[88px] xl:pb-[96px] md:pb-[43px] pb-[64px]">
      <h1 className="xl:text-4xl xl:py-[88px] py-10 xl:text-[32px] md:text-2xl text-[32px] font-bold flex justify-center text-[#2F0045]">
        {t("personnel")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-x-[227px] xl:gap-y-[80px] md:gap-y-[32px] gap-y-[39px] justify-items-center w-full">
        {/* --- แถวที่ 1: ประธานบริษัท --- */}
        <div className="col-span-1 md:col-span-3 flex justify-center">
          <PersonCard
            image={Nine}
            role={t("company")}
            name={t("pornphawit")}
            id="67080500264"
          />
        </div>

        {/* --- แถวที่ 2 --- */}
        <PersonCard
          image={Bam}
          role={t("manager")}
          name={t("siriyakorn")}
          id="67080500236"
        />
        <PersonCard
          image={Jack}
          role={t("chief")}
          name="นาย สฌาพล พลพิทักษ์"
          id="67080500234"
        />
        <PersonCard
          image={Song}
          role={t("head")}
          name={t("sarawut")}
          id="67080500272"
        />

        {/* --- แถวที่ 3 --- */}
        <PersonCard
          image={Agrun}
          role={t("head-of")}
          name={t("janjira")}
          id="67080500206"
        />
        <PersonCard
          image={Bow}
          role={t("head-of-production")}
          name={t("suparat")}
          id="67080500233"
        />
        <PersonCard
          image={Baimai}
          role={t("head-of-creative")}
          name={t("onrampa")}
          id="67080500239"
        />
      </div>
    </div>
  );
};

export default Member;
