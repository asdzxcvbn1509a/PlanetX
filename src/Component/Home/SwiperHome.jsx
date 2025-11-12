import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Easy from "../../assets/Home/Easy.png";
import Design from "../../assets/Home/Design.png";
import Production from "../../assets/Home/Production.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperHome = () => {
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-[543px]"
      >
        <SwiperSlide className="">
          <img src={Easy} alt="Easy" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={Design} alt="Design" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={Production} alt="Production" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
