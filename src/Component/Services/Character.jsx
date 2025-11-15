import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Girl from "../../assets/Services/Character/Girl.png";
import Boy from "../../assets/Services/Character/Boy.png";
import Woman from "../../assets/Services/Character/Woman.png";
import CatDoctor from "../../assets/Services/Character/CatDoctor.png";
import CatMagic from "../../assets/Services/Character/CatMagic.png";
import CatGhost from "../../assets/Services/Character/CatGhost.png";
import CatNigga from "../../assets/Services/Character/CatNigga.png";
import CatWhite from "../../assets/Services/Character/CatWhite.png";
import CatBlue from "../../assets/Services/Character/CatBlue.png";
import CatWhiteHero from "../../assets/Services/Character/CatWhiteHero.png";
import CatNiggaHero from "../../assets/Services/Character/CatNiggaHero.png";
import Shark from "../../assets/Services/Character/Shark.png";
import CatSkeleton from "../../assets/Services/Character/CatSkeleton.png";
import MFS1 from "../../assets/Services/Character/MFS1.png";
import MFS2 from "../../assets/Services/Character/MFS2.png";
import MFS3 from "../../assets/Services/Character/MFS3.png";
import Candle from "../../assets/Services/Character/Candle.png";
import EakGreen from "../../assets/Services/Character/EakGreen.png";
import EakWhite from "../../assets/Services/Character/EakWhite.png";
import EakBlue from "../../assets/Services/Character/EakBlue.png";
import EakRed from "../../assets/Services/Character/EakRed.png";
import EakPink from "../../assets/Services/Character/EakPink.png";
import EakGreenSoft from "../../assets/Services/Character/EakGreenSoft.png";
import StudentBoy from "../../assets/Services/Character/StudentBoy.png";
import StudentGirl from "../../assets/Services/Character/StudentGirl.png";
import { NavLink } from "react-router-dom";

const Character = ({ checkedStyle, checkedPurpose, checkedPeriod }) => {
  const slides = [
    {
      type: "image",
      src: Girl,
      alt: "Girl",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Boy,
      alt: "Boy",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Woman,
      alt: "Woman",
      style: "cartoon",
      purpose: "education",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatDoctor,
      alt: "CatDoctor",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatMagic,
      alt: "Catmagic",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatGhost,
      alt: "CatGhost",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatNigga,
      alt: "CatNigga",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatWhite,
      alt: "CatWhite",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatBlue,
      alt: "CatBlue",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatWhiteHero,
      alt: "CatWhiteHero",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatNiggaHero,
      alt: "CatNiggaHero",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Shark,
      alt: "Shark",
      style: "cartoon",
      purpose: "education",
      period: "oneWeek",
    },
    {
      type: "image",
      src: CatSkeleton,
      alt: "CatSkeleton",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: MFS1,
      alt: "MFS1",
      style: "cartoon",
      purpose: "education",
      period: "oneWeek",
    },
    {
      type: "image",
      src: MFS2,
      alt: "MFS2",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: MFS3,
      alt: "MFS3",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Candle,
      alt: "Candle",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: EakGreen,
      alt: "EakGreen",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
    {
      type: "image",
      src: EakWhite,
      alt: "EakWhite",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
    {
      type: "image",
      src: EakBlue,
      alt: "EakBlue",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
    {
      type: "image",
      src: EakRed,
      alt: "EakRed",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
    {
      type: "image",
      src: EakPink,
      alt: "EakPink",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
    {
      type: "image",
      src: EakGreenSoft,
      alt: "EakGreenSoft",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
    {
      type: "image",
      src: StudentBoy,
      alt: "StudentBoy",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
    {
      type: "image",
      src: StudentGirl,
      alt: "StudentGirl",
      style: "pixelArt",
      purpose: "game",
      period: "twoWeek",
    },
  ];

  const stylesSelected = Object.keys(checkedStyle).filter(
    (key) => checkedStyle[key]
  );

  const purposesSelected = Object.keys(checkedPurpose).filter(
    (key) => checkedPurpose[key]
  );

  const periodSelected = Object.keys(checkedPeriod).filter(
    (key) => checkedPeriod[key]
  );

  const filteredSlides = slides.filter((item) => {
    const styleMatch =
      stylesSelected.length === 0 || stylesSelected.includes(item.style);
    const purposeMatch =
      purposesSelected.length === 0 || purposesSelected.includes(item.purpose);
    const periodMatch =
      periodSelected.length === 0 || periodSelected.includes(item.period);
    return styleMatch && purposeMatch && periodMatch;
  });

  return (
    <div>
      {filteredSlides.length === 0 ? (
        ""
      ) : (
        <h1 className="text-xl mt-[13px] mb-6">ออกแบบตัวละคร</h1>
      )}

      <Swiper
        slidesPerView={3}
        spaceBetween={26}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="max-w-[1264px] !ml-0"
      >
        {filteredSlides.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 object-cover border shadow-lg"
              ></img>
            ) : (
              <video></video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {filteredSlides.length === 0 ? (
        ""
      ) : (
        <div className="flex justify-end mt-[27px]">
          <NavLink
            to="/services/character"
            style={{
              background: "linear-gradient(180deg, #533F85 40%, #30008C 80%)",
            }}
            className="text-base text-white border border-white py-1 px-[21px] box-border  rounded-md cursor-pointer"
          >
            ดูเพิ่มเติม
          </NavLink>
        </div>
      )}

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black;
          font-size: 40px !important;
          font-weight: extrabold !important;
          transition: 0.3s;
          width:40px;
          height:40px;
          padding:10px;
          background-color: rgba(255, 255, 255, 0.5);
          border: 1px solid black;
          border-radius: 100%;
          right: 9px !important;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }

        .swiper-button-prev {
        left:9px !important;}

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 22px; /* ขนาดลูกศร */
        }

        .swiper-pagination-bullet-active {
          background-color: #303030 !important;
        }
        
      `}</style>
    </div>
  );
};

export default Character;
