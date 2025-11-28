import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import Easy from "../../assets/Home/Easy.webp";
import Design from "../../assets/Home/Design.webp";
import Production from "../../assets/Home/Production.webp";
import Promotion from "../../assets/Home/Promotion.webm";
import PlanetX from "../../assets/Home/PlanetX.webm";
import PlanetXMobile from "../../assets/Home/PlanetXMobile.webm";
import PromotionMobile from "../../assets/Home/PromotionMobile.webm";
import EasyMobile from "../../assets/Home/EasyMobile.webp";
import DesignMobile from "../../assets/Home/DesignMobile.webp";
import ProductionMobile from "../../assets/Home/ProductionMobile.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperHome = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const swiperData = [
    { type: "video", src: PlanetX, alt: "PlanetX", duration: 10000 },
    { type: "video", src: Promotion, alt: "Promotion", duration: 10000 },
    { type: "image", src: Easy, alt: "Easy", duration: 5000 },
    { type: "image", src: Design, alt: "Design", duration: 5000 },
    { type: "image", src: Production, alt: "Production", duration: 5000 },
  ];

  const swiperDataMobile = [
    { type: "video", src: PlanetXMobile, alt: "PlanetXMobile", duration: 10000 },
    { type: "video", src: PromotionMobile, alt: "PromotionMobile", duration: 10000 },
    { type: "image", src: EasyMobile, alt: "EasyMobile", duration: 5000 },
    { type: "image", src: DesignMobile, alt: "DesignMobile", duration: 5000 },
    { type: "image", src: ProductionMobile, alt: "ProductionMobile", duration: 5000 },
  ];

  const dataToUse = isMobile ? swiperDataMobile : swiperData;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startSlideTimer = (swiper) => {
    const currentSlide = dataToUse[swiper.realIndex];
    const video = document.querySelectorAll("video")[swiper.realIndex];

    if (video) {
      video.currentTime = 0;
      video.play();
    }

    setTimeout(() => swiper.slideNext(), currentSlide.duration);
  };

  return (
    <div className="w-full">
      <Swiper
        pagination={{ clickable: true }}
        navigation={!isMobile}
        modules={[Pagination, Navigation]}
        loop={true}
        className="w-full xl:h-auto md:h-auto"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          startSlideTimer(swiper);
        }}
        onSlideChange={(swiper) => {
          startSlideTimer(swiper);
        }}
      >
        {dataToUse.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <video muted playsInline className="w-full h-full object-cover">
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                loading="lazy"
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
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
          right: 22px !important;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }

        .swiper-button-prev { left:22px !important; }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 22px;
        }

        .swiper-pagination-bullet-active {
          background-color: #303030 !important;
        }
      `}</style>
    </div>
  );
};

export default SwiperHome;