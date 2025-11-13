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

const Illustration = ({ checkedStyle }) => {
  const slides = [
    { type: "image", src: Sleep, alt: "Sleep", style: "cartoon" },
    { type: "image", src: Kuma, alt: "Kuma", style: "cartoon" },
    { type: "image", src: Sushi, alt: "Sushi", style: "cartoon" },
    { type: "image", src: Tok, alt: "Tok", style: "cartoon" },
    { type: "image", src: Kimbab, alt: "Kimbab", style: "cartoon" },
    { type: "image", src: Corn, alt: "Corn", style: "cartoon" },
    { type: "image", src: Breakfast, alt: "Breakfast", style: "cartoon" },
    { type: "image", src: Curry, alt: "Curry", style: "cartoon" },
    { type: "image", src: Ramen, alt: "Ramen", style: "cartoon" },
    { type: "image", src: Ramen2, alt: "Ramen2", style: "cartoon" },
    { type: "image", src: Tomyum, alt: "Tomyum", style: "cartoon" },
    { type: "image", src: Padthai, alt: "Padthai", style: "cartoon" },
    { type: "image", src: Mooping, alt: "Mooping", style: "cartoon" },
    { type: "image", src: Game1, alt: "Game1", style: "cartoon" },
    { type: "image", src: Game2, alt: "Game2", style: "cartoon" },
    { type: "image", src: Game3, alt: "Game3", style: "cartoon" },
    { type: "image", src: Museum1, alt: "Museum1", style: "cartoon" },
    { type: "image", src: Museum2, alt: "Museum2", style: "cartoon" },
    { type: "image", src: Museum3, alt: "Museum3", style: "cartoon" },
    { type: "image", src: Museum4, alt: "Museum4", style: "cartoon" },
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
      <h1 className="text-xl mt-[13px] mb-6">ภาพประกอบ</h1>
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

export default Illustration;
