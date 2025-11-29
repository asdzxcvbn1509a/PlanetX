import React from "react";

import { useTranslation } from "react-i18next";

const WeHappy = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h1 className="xl:text-[64px] xl:mt-[88px] xl:ml-[88px] md:mt-[36px] md:text-4xl ml-[19px] text-[40px]">
          Planet X
        </h1>
        <p className="xl:ml-[88px] font-light xl:text-[20px] text-base ml-[19px]">
          Planet X {t("we")}
          <br />
          {t("whether-you")}
          <br />
          {t("or")}
          <br />
          {t("our")}
          <br />
          {t("and")}
        </p>
      </div>
    </div>
  );
};

export default WeHappy;
