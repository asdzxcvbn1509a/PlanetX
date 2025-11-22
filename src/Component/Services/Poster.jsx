import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import PosterData from "../../data/PosterData";

const Poster = ({ checkedStyle, checkedPurpose, checkedPeriod }) => {
  const stylesSelected = Object.keys(checkedStyle).filter(
    (key) => checkedStyle[key]
  );

  const purposesSelected = Object.keys(checkedPurpose).filter(
    (key) => checkedPurpose[key]
  );

  const periodSelected = Object.keys(checkedPeriod).filter(
    (key) => checkedPeriod[key]
  );

  const filterdSlides = PosterData.filter((item) => {
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
      {filterdSlides.length === 0 ? (
        ""
      ) : (
        <h1 className="xl:text-xl text-base font-light md:font-normal xl:mt-[13px] md:mt-[9px] mt-[17px] mb-[7px] xl:mb-6 md:mb-[10px]">
          โปสเตอร์ / ป้ายโฆษณา
        </h1>
      )}

      <Swiper
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 9 },
          768: { slidesPerView: 2, spaceBetween: 18 },
          1024: { slidesPerView: 3, spaceBetween: 26 },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="xl:max-w-[1264px] md:max-w-[541px] !ml-0"
      >
        {filterdSlides.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover border shadow-lg"
              ></img>
            ) : (
              <video></video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {filterdSlides.length === 0 ? (
        ""
      ) : (
        <div className="flex justify-end xl:mt-[27px] md:mt-[14px] mt-[12px] md:max-w-[541px] xl:max-w-full">
          <NavLink
            to="/services/poster"
            style={{
              background: "linear-gradient(180deg, #533F85 40%, #30008C 80%)",
            }}
            className="xl:text-base text-xs text-white border border-white xl:py-1 xl:px-[21px] md:px-[9px] md:py-[6px] px-[7px] py-[6px] rounded-md cursor-pointer font-light md:font-normal"
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

export default Poster;
