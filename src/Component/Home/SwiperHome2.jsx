import React, { useState } from "react";
import Israel from "../../assets/Services/Photo/Israel.webp";
import Sixtysix from "../../assets/Services/ShirtPattern/SixtySix.webp";
import Sleep from "../../assets/Services/Illustration/Sleep.webp";

import { useTranslation } from "react-i18next";

const SwiperHome2 = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);

  const movies = [
    {
      id: 1,
      title: "",
      image: Sixtysix,
      color: "from-purple-900/50 to-pink-900/50",
    },
    {
      id: 2,
      title: "",
      image: Israel,
      color: "from-blue-900/50 to-gray-900/50",
    },
    {
      id: 3,
      title: "",
      image: Sleep,
      color: "from-red-900/50 to-blue-900/50",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  const getSlideStyle = (index) => {
    const diff = index - currentIndex;
    const isCenter = diff === 0;
    const isLeft =
      diff === -1 || (currentIndex === 0 && index === movies.length - 1);
    const isRight =
      diff === 1 || (currentIndex === movies.length - 1 && index === 0);

    if (isCenter) {
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (isLeft) {
      return {
        transform: "translateX(-85%) scale(0.8)",
        zIndex: 20,
        opacity: 1,
        filter: "blur(2px) brightness(0.5)",
      };
    } else if (isRight) {
      return {
        transform: "translateX(85%) scale(0.8)",
        zIndex: 20,
        opacity: 1,
        filter: "blur(2px) brightness(0.5)",
      };
    } else {
      return {
        transform: "translateX(0) scale(0.6)",
        zIndex: 10,
        opacity: 0,
        filter: "blur(4px)",
      };
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 xl:p-4 overflow-hidden">
      <h1 className="xl:text-[32px] text-xl text-white text-center xl:pt-[48px] md:pt-[51px] pt-[29px] md:-mb-10 -mb-25 xl:-mb-0">
        {t("popular")}
      </h1>
      <div className="w-full max-w-7xl relative mx-auto">
        {/* Swiper Container */}
        <div className="relative h-[400px] flex items-center justify-center">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="absolute w-full xl:max-w-[606px] xl:max-h-[345px] md:max-w-[507px] md:max-h-[289px] max-w-[300px] md:h-full h-[171px] transition-all duration-300 ease-out cursor-pointer shadow-2xl"
              style={getSlideStyle(index)}
              onClick={() => {
                if (index !== currentIndex) {
                  setCurrentIndex(index);
                }
              }}
            >
              <div className="relative w-full h-full overflow-hidden shadow-2xl border-0 border-[#1D0F35]">
                {/* Image */}
                <img
                  loading="lazy"
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${movie.color}`}
                />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-wider">
                    {movie.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={handlePrev} aria-label="Previous"></button>

        <button onClick={handleNext} aria-label="Next"></button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 xl:-mt-6 md:-mt-[54px] -mt-28 md:pb-[25px] pb-[24px] xl:pb-[48px]">
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentIndex
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperHome2;
