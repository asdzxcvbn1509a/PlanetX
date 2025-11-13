import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Israel from "../../assets/Services/Photo/Israel.jpeg";
import Food1 from "../../assets/Services/Photo/Food1.jpg";
import Food2 from "../../assets/Services/Photo/Food2.jpg";
import Food3 from "../../assets/Services/Photo/Food3.jpg";
import Food4 from "../../assets/Services/Photo/Food4.jpg";
import Food5 from "../../assets/Services/Photo/Food5.jpg";
import Food6 from "../../assets/Services/Photo/Food6.jpg";
import Food7 from "../../assets/Services/Photo/Food7.jpg";
import Food8 from "../../assets/Services/Photo/Food8.jpg";
import Food9 from "../../assets/Services/Photo/Food9.jpg";
import Food10 from "../../assets/Services/Photo/Food10.jpg";

const Photo = ({ checkedStyle }) => {
  const slides = [
    { type: "image", src: Israel, alt: "Israel", style: "minimal" },
    { type: "image", src: Food1, alt: "Food1", style: "minimal" },
    { type: "image", src: Food2, alt: "Food2", style: "minimal" },
    { type: "image", src: Food3, alt: "Food3", style: "minimal" },
    { type: "image", src: Food4, alt: "Food4", style: "minimal" },
    { type: "image", src: Food5, alt: "Food5", style: "minimal" },
    { type: "image", src: Food6, alt: "Food6", style: "minimal" },
    { type: "image", src: Food7, alt: "Food7", style: "minimal" },
    { type: "image", src: Food8, alt: "Food8", style: "minimal" },
    { type: "image", src: Food9, alt: "Food9", style: "minimal" },
    { type: "image", src: Food10, alt: "Food10", style: "minimal" },
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
      <h1 className="text-xl mt-[13px] mb-6">ถ่ายภาพ / วีดีโอ</h1>
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
              <video
                controls
                loop
                src={item.src}
                className="w-full h-56 object-cover border shadow-lg"
              ></video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end mt-[27px] mb-[96px]">
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

export default Photo;
