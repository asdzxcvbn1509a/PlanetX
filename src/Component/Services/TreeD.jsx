import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Duck from "../../assets/Services/TreeD/Duck.png";
import Pudding from "../../assets/Services/TreeD/Pudding.png";
import Base from "../../assets/Services/TreeD/Base.mp4";
import { NavLink } from "react-router-dom";

const TreeD = ({ checkedStyle, checkedPurpose, checkedPeriod }) => {
  const slides = [
    {
      type: "image",
      src: Duck,
      alt: "Duck",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "image",
      src: Pudding,
      alt: "Pudding",
      style: "cartoon",
      purpose: "personalArt",
      period: "oneWeek",
    },
    {
      type: "video",
      src: Base,
      alt: "Base",
      style: "cartoon",
      purpose: "promotion",
      period: "oneWeek",
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
        <h1 className="text-xl mt-[13px] mb-6">3D</h1>
      )}

      <Swiper
        slidesPerView={3}
        spaceBetween={26}
        pagination={{ clickable: true }}
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
              />
            ) : (
              <video
                autoPlay
                controls
                loop
                src={item.src}
                className="w-full h-56 object-cover border shadow-lg"
              ></video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ปุ่มดูเพิ่มเติม */}
      {filteredSlides.length === 0 ? (
        ""
      ) : (
        <div className="flex justify-end mt-[27px]">
          <NavLink
            to="/services/three-d"
            style={{
              background: "linear-gradient(180deg, #533F85 40%, #30008C 80%)",
            }}
            className="text-base text-white border border-white py-1 px-[21px] rounded-md cursor-pointer"
          >
            ดูเพิ่มเติม
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TreeD;
