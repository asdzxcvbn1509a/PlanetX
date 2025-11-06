import React from "react";

const WeReady = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFF 0%, #D9D9D9 49%, #AF7ABF 100%)",
      }}
    >
      <h1 className="text-center text-[32px] font-semibold text-[#481DA0] pt-[86px] pb-6">
        เราพร้อมให้บริการคุณ
      </h1>
      <div className="grid gap-1 mb-6">
        <p className="text-center text-2xl text-[#303030]">
          เราพร้อมให้บริการด้วยผลงานคุณภาพและความคิดสร้างสรรค์
        </p>
        <p className="text-center text-2xl text-[#303030]">
          เชิญชมผลงานของเรา แล้วมาสร้างสรรค์สิ่งที่คุณจินตนาการไปด้วยกัน
        </p>
      </div>
      <div className="flex max-w-[1264px] mx-auto justify-center gap-[136px] pb-[88px] relative">
        <img src="" alt="" className="w-[564px] h-[321px] border bg-white" />
        <button className="absolute bottom-30 left-55 bg-[rgba(98,0,133,0.15)] border py-[11px] px-[37px] cursor-pointer">
          ดูเพิ่มเติม
        </button>
        <img src="" alt="" className="w-[564px] h-[321px] border bg-white" />
        <button className="absolute bottom-30 right-50 bg-[rgba(98,0,133,0.15)] border py-[11px] px-[37px] cursor-pointer">
          ดูเพิ่มเติม
        </button>
      </div>
    </div>
  );
};

export default WeReady;
