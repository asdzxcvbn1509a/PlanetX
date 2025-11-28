import React from "react";
import EasyToOrderImage from "../../assets/Home/EasyToOrder.webp";
import EasyToEdit from "../../assets/Home/EasyToEdit.webp";
import Garantee from "../../assets/Home/Garantee.webp";

import { useTranslation } from "react-i18next";

const EasyToOrder = () => {
  const { t } = useTranslation();
  return (
    <div className="xl:pb-[78px] md:pb-[48px] pb-[40px] bg-[#faf2fb]">
      <h1 className="text-center xl:text-[32px] md:text-xl text-base text-[#481DA0] xl:pt-[88px] md:pt-[25px] pt-[35px] xl:font-bold md:font-normal font-semibold xl:mb-[24px] md:mb-[28px] mb-[17px]">
        {t("easy")}
      </h1>
      <div className="md:flex grid justify-center xl:gap-[80px] md:gap-[58px] gap-[40px]">
        <div className="text-center xl:min-w-[386px]">
          <img
            loading="lazy"
            src={EasyToOrderImage}
            alt="EasyToOrderImage"
            className="mx-auto xl:mb-[16px] md:mb-[10px] mb-[5px] xl:w-[168px] xl:h-[168px] md:w-[120px] md:h-[120px] w-[99px] h-[99px]"
          />
          <h2 className="xl:text-[32px] text-base text-[#303030]">
            {t("easy-to-order")}
          </h2>
          <p className="xl:text-xl text-xs text-[#303030]">{t("whether")}</p>
          <p className="xl:text-xl text-xs text-[#303030]">
            {t("we-are-ready-to-guide")}
          </p>
        </div>
        <div className="text-center xl:min-w-[386px]">
          <img
            loading="lazy"
            src={EasyToEdit}
            alt="EasyToEdit"
            className="mx-auto mb-[16px] xl:w-[168px] xl:h-[168px] md:w-[120px] md:h-[120px] w-[99px] h-[99px]"
          />
          <h2 className="xl:text-[32px] text-base text-[#303030]">
            {t("easy-to-edit")}
          </h2>
          <p className="xl:text-xl text-xs text-[#303030]">
            {t("the-editing")}
          </p>
          <p className="xl:text-xl text-xs text-[#303030]">{t("to-ensure")}</p>
        </div>
        <div className="text-center xl:min-w-[386px]">
          <img
            loading="lazy"
            src={Garantee}
            alt="Garantee"
            className="mx-auto mb-[16px] xl:w-[168px] xl:h-[168px] md:w-[120px] md:h-[120px] w-[99px] h-[99px]"
          />
          <h2 className="xl:text-[32px] text-base text-[#303030]">
            {t("garantee")}
          </h2>
          <p className="xl:text-xl text-xs text-[#303030]">
            {t("you-can")}
          </p>
          <p className="xl:text-xl text-xs text-[#303030]">
            {t("make-an")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EasyToOrder;
