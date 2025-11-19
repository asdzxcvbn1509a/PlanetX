import React from "react";
import EasyToOrderImage from "../../assets/Home/EasyToOrder.PNG";
import EasyToEdit from "../../assets/Home/EasyToEdit.PNG";
import Garantee from "../../assets/Home/Garantee.PNG";

const EasyToOrder = () => {
  return (
    <div className="xl:pb-[78px] md:pb-[48px] bg-[#faf2fb]">
      <h1 className="text-center xl:text-[32px] md:text-xl text-[#481DA0] xl:pt-[88px] md:pt-[25px] xl:font-bold md:font-normal mb-[24px]">
        สั่งงานง่าย แก้งานดี คุณภาพเกินร้อย
      </h1>
      <div className="flex justify-center xl:gap-[80px] md:gap-[58px]">
        <div className="text-center">
          <img
            src={EasyToOrderImage}
            alt="EasyToOrderImage"
            className="mx-auto mb-[16px] xl:w-[168px] xl:h-[168px] md:w-[120px] md:h-[120px]"
          />
          <h2 className="xl:text-[32px] text-base text-[#303030]">
            สั่งงานง่าย
          </h2>
          <p className="xl:text-xl md:text-xs text-[#303030]">
            ไม่ว่าคุณจะมีประสบการณ์หรือไม่
          </p>
          <p className="xl:text-xl md:text-xs text-[#303030]">
            เราพร้อมแนะนำทุกขั้นตอนให้เข้าใจง่ายและชัดเจน
          </p>
        </div>
        <div className="text-center">
          <img
            src={EasyToEdit}
            alt="EasyToEdit"
            className="mx-auto mb-[16px] xl:w-[168px] xl:h-[168px] md:w-[120px] md:h-[120px]"
          />
          <h2 className="xl:text-[32px] md:text-base text-[#303030]">
            แก้งานง่าย
          </h2>
          <p className="xl:text-xl text-xs text-[#303030]">
            ขั้นตอนการแก้งานกับเราไม่ยุ่งยาก
          </p>
          <p className="xl:text-xl text-xs text-[#303030]">
            เพื่อให้คุณได้รับผลงานที่พึงพอใจมากที่สุด
          </p>
        </div>
        <div className="text-center">
          <img
            src={Garantee}
            alt="Garantee"
            className="mx-auto mb-[16px] xl:w-[168px] xl:h-[168px] md:w-[120px] md:h-[120px]"
          />
          <h2 className="xl:text-[32px] md:text-base text-[#303030]">
            รับประกันคุณภาพ
          </h2>
          <p className="xl:text-xl md:text-xs text-[#303030]">
            เชื่อถือได้ว่าผลงานทุกชิ้นของเราจะโดดเด่น
          </p>
          <p className="xl:text-xl md:text-xs text-[#303030]">
            สร้างความประทับใจเกินความคาดหมาย
          </p>
        </div>
      </div>
    </div>
  );
};

export default EasyToOrder;
