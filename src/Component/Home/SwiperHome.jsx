import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import Easy from "../../assets/Home/Easy.png";
import Design from "../../assets/Home/Design.png";
import Production from "../../assets/Home/Production.png";
import Promotion from "../../assets/Home/Promotion.mp4";
import PlanetX from "../../assets/Home/PlanetX.mp4";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperHome = () => {
  const swiperRef = useRef(null);

  const swiperData = [
    { type: "video", src: PlanetX, alt: "PlanetX" },
    { type: "video", src: Promotion, alt: "Promotion" },
    { type: "image", src: Easy, alt: "Easy", duration: 5000 },
    { type: "image", src: Design, alt: "Design", duration: 5000 },
    { type: "image", src: Production, alt: "Production", duration: 5000 },
  ];

  const startSlideTimer = (swiper) => {
    const currentSlide = swiperData[swiper.realIndex];
    const video = document.querySelectorAll("video")[swiper.realIndex];

    if (currentSlide.type === "video" && video) {
      video.currentTime = 0;
      video.play();
      video.onended = () => swiper.slideNext();
    } else {
      setTimeout(() => swiper.slideNext(), currentSlide.duration);
    }
  };

  return (
    <div className="w-full">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="w-full xl:h-[543px] md:h-[314.49px]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          startSlideTimer(swiper);
        }}
        onSlideChange={(swiper) => {
          startSlideTimer(swiper);
        }}
      >
        {swiperData.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <video muted playsInline className="w-full h-full object-fill">
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHome;
