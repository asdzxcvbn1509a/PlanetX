import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Sleep from "../../assets/Services/Illustration/Sleep.png";
import Kuma from "../../assets/Services/Illustration/Kuma.png";
import Sushi from "../../assets/Services/Illustration/Sushi.png";
import Tok from "../../assets/Services/Illustration/Tok.png";
import Kimbab from "../../assets/Services/Illustration/Kimbab.png";
import Corn from "../../assets/Services/Illustration/Corn.png";
import Breakfast from "../../assets/Services/Illustration/Breakfast.png";
import Curry from "../../assets/Services/Illustration/Curry.png";
import Ramen from "../../assets/Services/Illustration/Ramen.png";
import Ramen2 from "../../assets/Services/Illustration/Ramen2.png";
import Tomyum from "../../assets/Services/Illustration/Tomyum.png";
import Padthai from "../../assets/Services/Illustration/Padthai.png";
import Mooping from "../../assets/Services/Illustration/Mooping.png";
import Game1 from "../../assets/Services/Illustration/Game1.png";
import Game2 from "../../assets/Services/Illustration/Game2.png";
import Game3 from "../../assets/Services/Illustration/Game3.png";
import Museum1 from "../../assets/Services/Illustration/Museum1.png";
import Museum2 from "../../assets/Services/Illustration/Museum2.png";
import Museum3 from "../../assets/Services/Illustration/Museum3.png";
import Museum4 from "../../assets/Services/Illustration/Museum4.png";
import FlowerWhite from "../../assets/Services/Illustration/FlowerWhite.png";
import FlowerRed from "../../assets/Services/Illustration/FlowerRed.png";
import EakWhite from "../../assets/Services/Illustration/EakWhite.png";
import EakGreen from "../../assets/Services/Illustration/EakGreen.png";
import Thai from "../../assets/Services/Illustration/Thai.png";
import { NavLink } from "react-router-dom";

const Illustration = ({ checkedStyle, checkedPurpose, checkedPeriod }) => {
  const slides = [
    {
      type: "image",
      src: Sleep,
      alt: "Sleep",
      style: "cartoon",
      purpose: "personalArt",
      period: "twoWeek",
    },
    {
      type: "image",
      src: Kuma,
      alt: "Kuma",
      style: "cartoon",
      purpose: "personalArt",
      period: "twoWeek",
    },
    {
      type: "image",
      src: Sushi,
      alt: "Sushi",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Tok,
      alt: "Tok",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Kimbab,
      alt: "Kimbab",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Corn,
      alt: "Corn",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Breakfast,
      alt: "Breakfast",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Curry,
      alt: "Curry",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Ramen,
      alt: "Ramen",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Ramen2,
      alt: "Ramen2",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Tomyum,
      alt: "Tomyum",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Padthai,
      alt: "Padthai",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Mooping,
      alt: "Mooping",
      style: "cartoon",
      purpose: "promotion",
      period: "threeDay",
    },
    {
      type: "image",
      src: Game1,
      alt: "Game1",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Game2,
      alt: "Game2",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Game3,
      alt: "Game3",
      style: "cartoon",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Museum1,
      alt: "Museum1",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Museum2,
      alt: "Museum2",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Museum3,
      alt: "Museum3",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Museum4,
      alt: "Museum4",
      style: "cartoon",
      purpose: "brand",
      period: "oneWeek",
    },
    {
      type: "image",
      src: FlowerWhite,
      alt: "FlowerWhite",
      style: "pixelArt",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: FlowerRed,
      alt: "FlowerRed",
      style: "pixelArt",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: EakWhite,
      alt: "EakWhite",
      style: "pixelArt",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: EakGreen,
      alt: "EakGreen",
      style: "pixelArt",
      purpose: "game",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Thai,
      alt: "Thai",
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
        <h1 className="text-xl mt-[13px] mb-6">ภาพประกอบ</h1>
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
            to="/services/illustration"
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

export default Illustration;
