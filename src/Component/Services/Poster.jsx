import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Kmutt from "../../assets/Services/Poster/Kmutt.png";
import TwentyFour from "../../assets/Services/Poster/TwentyFour.png";
import ThisSong from "../../assets/Services/Poster/ThisSong.png";
import Kung from "../../assets/Services/Poster/Kung.png";
import Cheer from "../../assets/Services/Poster/Cheer.png";
import Audition from "../../assets/Services/Poster/Audition.png";

const Poster = ({ checkedStyle }) => {
  const slides = [
    { type: "image", src: Kmutt, alt: "Kmutt", style: "cartoon" },
    { type: "image", src: TwentyFour, alt: "TwentyFour", style: "cartoon" },
    { type: "image", src: ThisSong, alt: "ThisSong", style: "cartoon" },
    { type: "image", src: Kung, alt: "Kung", style: "cartoon" },
    { type: "image", src: Cheer, alt: "Cheer", style: "cartoon" },
    { type: "image", src: Audition, alt: "Audition", style: "cartoon" },
  ];

  const stylesSelected = Object.keys(checkedStyle).filter(
    (key) => checkedStyle[key]
  );

  const filterdSlides =
    stylesSelected.length === 0
      ? slides
      : slides.filter((item) => stylesSelected.includes(item.style));

  return (
    <div>
      <h1 className="text-xl mt-[13px] mb-6">โปสเตอร์ / ป้ายโฆษณา</h1>
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
        {filterdSlides.map((item, index) => (
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
      <div className="flex justify-end mt-[27px]">
        <a
          style={{
            background: "linear-gradient(180deg, #533F85 40%, #30008C 80%)",
          }}
          className="text-base text-white mr-[88px] border border-white py-1 px-[21px] box-border  rounded-md cursor-pointer"
        >
          ดูเพิ่มเติม
        </a>
      </div>
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

export default Poster;
