import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Duck from "../../assets/Services/TreeD/Duck.png";
import Pudding from "../../assets/Services/TreeD/Pudding.png";
import Base from "../../assets/Services/TreeD/Base.mp4";

const TreeD = ({ checkedStyle, checkedPurpose }) => {
  const slides = [
    {
      type: "image",
      src: Duck,
      alt: "Duck",
      style: "cartoon",
      purpose: "personalArt",
    },
    {
      type: "image",
      src: Pudding,
      alt: "Pudding",
      style: "cartoon",
      purpose: "personalArt",
    },
    {
      type: "video",
      src: Base,
      alt: "Base",
      style: "cartoon",
      purpose: "promotion",
    },
  ];

  const stylesSelected = Object.keys(checkedStyle).filter(
    (key) => checkedStyle[key]
  );

  const purposesSelected = Object.keys(checkedPurpose).filter(
    (key) => checkedPurpose[key]
  );

  const filteredSlides = slides.filter((item) => {
    const styleMatch =
      stylesSelected.length === 0 || stylesSelected.includes(item.style);
    const purposeMatch =
      purposesSelected.length === 0 || purposesSelected.includes(item.purpose);
    return styleMatch && purposeMatch;
  });

  return (
    <div>
      <h1 className="text-xl mt-[13px] mb-6">3D</h1>
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
      <div className="flex justify-end mt-[27px]">
        <a
          style={{
            background: "linear-gradient(180deg, #533F85 40%, #30008C 80%)",
          }}
          className="text-base text-white mr-[88px] border border-white py-1 px-[21px] rounded-md cursor-pointer"
        >
          ดูเพิ่มเติม
        </a>
      </div>
    </div>
  );
};

export default TreeD;
