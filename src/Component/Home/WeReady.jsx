import React from "react";

const WeReady = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFF 0%, #D9D9D9 49%, #AF7ABF 100%)",
      }}
    >
      <h1 className="text-center xl:text-[32px] md:text-2xl  xl:font-semibold text-[#481DA0] xl:pt-[86px] md:pt-[50px] xl:pb-6 md:pb-[15px]">
        เราพร้อมให้บริการคุณ
      </h1>
      <div className="grid gap-1 mb-6">
        <p className="text-center xl:text-2xl md:text-base text-[#303030]">
          เราพร้อมให้บริการด้วยผลงานคุณภาพและความคิดสร้างสรรค์
        </p>
        <p className="text-center xl:text-2xl md:text-base text-[#303030]">
          เชิญชมผลงานของเรา แล้วมาสร้างสรรค์สิ่งที่คุณจินตนาการไปด้วยกัน
        </p>
      </div>
      <div className="flex max-w-[1264px] mx-auto justify-center xl:gap-[136px] md:gap-[70px] xl:pb-[88px] md:pb-[40px] relative">
        <img
          src=""
          alt=""
          className="xl:w-[564px] xl:h-[321px] md:w-[361.94px] md:h-[206px] border bg-white"
        />
        <button className="absolute xl:bottom-30 xl:left-55 md:bottom-15 md:left-40 bg-[rgba(98,0,133,0.15)] border xl:py-[11px] xl:px-[37px] md:py-[8px] md:px-[20px] cursor-pointer md:text-xs xl:text-base">
          ดูเพิ่มเติม
        </button>
        <img
          src=""
          alt=""
          className="xl:w-[564px] xl:h-[321px] md:w-[361.94px] md:h-[206px] border bg-white"
        />
        <button className="absolute xl:bottom-30 xl:right-50 md:bottom-15 md:right-40 bg-[rgba(98,0,133,0.15)] border py-[11px] px-[37px] md:py-[8px] md:px-[20px] cursor-pointer md:text-xs xl:text-base">
          ดูเพิ่มเติม
        </button>
      </div>
    </div>
  );
};

export default WeReady;
