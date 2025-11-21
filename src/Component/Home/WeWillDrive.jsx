import React from "react";

const WeWillDrive = () => {
  return (
    <div
      className="text-center bg-[#FAF2FB] xl:py-[44px] md:py-[53px] py-[16px]"
      style={{
        fontFamily: '"Jost", sans-serif',
        boxShadow: "rgba(209, 160, 225, 1) 0px 0px 70px 4px",
      }}
    >
      <h1 className="xl:text-4xl md:text-lg text-xs xl:mb-[24px] md:mb-[12px] hidden md:block">
        “ เราจะขับเคลื่อนสื่อแห่งอนาคต
        ด้วยพลังแห่งความคิดสร้างสรรค์ที่ไร้ขีดจำกัด “
      </h1>
      <h1 className="xl:text-4xl md:text-lg text-xs xl:mb-[24px] md:mb-[12px] mb-[13px] md:hidden">
        “ เราจะขับเคลื่อนสื่อแห่งอนาคต
        <br />
        ด้วยพลังแห่งความคิดสร้างสรรค์ที่ไร้ขีดจำกัด “
      </h1>
      <p className="xl:text-[22px] md:text-base text-[10px]">
        ที่ Planet X เรามุ่งสร้างประสบการณ์ด้านมัลติมีเดีย
        <br />
        ด้วยพลังแห่งความคิดสร้างสรรค์
        <br />
        เพื่อให้ทุกสื่อที่เราสร้างไม่เพียงทันต่อโลก
        <br />
        แต่เป็นแรงขับเคลื่อนที่ก้าวนำโลกที่มีการเปลี่ยนแปลงอยู่เสมอ
        <br />
      </p>
      <h2 className="text-[24px] mt-[24px] hidden xl:block">Planet x</h2>
    </div>
  );
};

export default WeWillDrive;
