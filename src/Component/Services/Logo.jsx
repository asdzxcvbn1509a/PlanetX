import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Sixty from "../../assets/Services/Logo/Sixty.png";
import Sweet from "../../assets/Services/Logo/Sweet.png";
import Kmutt from "../../assets/Services/Logo/Kmutt.png";
import Night from "../../assets/Services/Logo/Night.png";
import Cheer from "../../assets/Services/Logo/Cheer.png";
import BBQ from "../../assets/Services/Logo/BBQ.png";
import Shell from "../../assets/Services/Logo/Shell.png";
import Sex from "../../assets/Services/Logo/Sex.png";
import Way from "../../assets/Services/Logo/Way.png";
import Diamond from "../../assets/Services/Logo/Diamond.png";
import Modern from "../../assets/Services/Logo/Modern.png";

const Logo = () => {
  const slides = [
    { type: "image", src: Sixty, alt: "Sixty" },
    { type: "image", src: Sweet, alt: "Sweet" },
    { type: "image", src: Kmutt, alt: "Kmutt" },
    { type: "image", src: Night, alt: "Night" },
    { type: "image", src: Cheer, alt: "Cheer" },
    { type: "image", src: BBQ, alt: "BBQ" },
    { type: "image", src: Shell, alt: "Shell" },
    { type: "image", src: Sex, alt: "Sea" },
    { type: "image", src: Way, alt: "Way" },
    { type: "image", src: Diamond, alt: "Diamond" },
    { type: "image", src: Modern, alt: "Modern" },
  ];
  return (
    <div>
      <h1 className="text-xl mt-[13px] mb-6">โลโก้</h1>
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
        {slides.map((item, index) => (
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

export default Logo;
