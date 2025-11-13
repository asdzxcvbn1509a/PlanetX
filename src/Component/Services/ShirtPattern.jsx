import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import SixtySix from "../../assets/Services/ShirtPattern/SixtySix.png";
import Thep from "../../assets/Services/ShirtPattern/Thep.png";
import EightTeen from "../../assets/Services/ShirtPattern/EightTeen.png";
import EightTeen2 from "../../assets/Services/ShirtPattern/EightTeen2.png";
import Thep2 from "../../assets/Services/ShirtPattern/Thep2.png";

const ShirtPattern = ({ checkedStyle }) => {
  const slides = [
    { type: "image", src: SixtySix, alt: "SixtySix", style: "minimal" },
    { type: "image", src: Thep, alt: "Thep", style: "minimal" },
    { type: "image", src: EightTeen, altL: "EightTeen", style: "minimal" },
    { type: "image", src: EightTeen2, alt: "EightTeen2", style: "minimal" },
    { type: "image", src: Thep2, alt: "Thep2", style: "minimal" },
  ];

  const stylesSelected = Object.keys(checkedStyle).filter(
    (key) => checkedStyle[key]
  );

  const filteredSlides =
    stylesSelected.length === 0
      ? slides
      : slides.filter((item) => stylesSelected.includes(item.style));

  return (
    <div>
      <h1 className="text-xl mt-[13px] mb-6">ออกแบบลายเสื้อ</h1>
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

export default ShirtPattern;
