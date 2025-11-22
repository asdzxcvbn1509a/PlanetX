import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import ThreeDData from "../../data/ThreeDData";

const TreeD = ({ checkedStyle, checkedPurpose, checkedPeriod }) => {
  const stylesSelected = Object.keys(checkedStyle).filter(
    (key) => checkedStyle[key]
  );

  const purposesSelected = Object.keys(checkedPurpose).filter(
    (key) => checkedPurpose[key]
  );

  const periodSelected = Object.keys(checkedPeriod).filter(
    (key) => checkedPeriod[key]
  );

  const filteredSlides = ThreeDData.filter((item) => {
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
        <h1 className="xl:text-xl text-base font-light md:font-normal xl:mt-[13px] md:mt-[9px] mt-[11px] mb-[7px] xl:mb-6 md:mb-[10px] mb-[7px]">
          3D
        </h1>
      )}

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 9,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 26,
          },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="xl:max-w-[1264px] md:max-w-[541px] !ml-0"
      >
        {filteredSlides.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover border shadow-lg"
              />
            ) : (
              <video
                muted
                autoPlay
                loop
                src={item.src}
                className="object-cover border shadow-lg"
              ></video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ปุ่มดูเพิ่มเติม */}
      {filteredSlides.length === 0 ? (
        ""
      ) : (
        <div className="flex justify-end xl:mt-[27px] md:mt-[14px] mt-[12px] md:max-w-[541px] xl:max-w-full">
          <NavLink
            to="/services/three-d"
            style={{
              background: "linear-gradient(180deg, #533F85 40%, #30008C 80%)",
            }}
            className="xl:text-base text-xs text-white border border-white xl:py-1 xl:px-[21px] md:px-[9px] md:py-[6px] px-[7px] py-[6px] rounded-md cursor-pointer font-light md:font-normal"
          >
            ดูเพิ่มเติม
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TreeD;
