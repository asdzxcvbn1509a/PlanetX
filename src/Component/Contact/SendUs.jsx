import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useTranslation } from "react-i18next";

const SendUs = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const notify = () => toast.success("ส่งสำเร็จ");

  const clearState = () => {
    setName("");
    setEmail("");
    setTel("");
    setMessage("");
    notify();
  };

  return (
    <div className="bg-[#FEF9FF] xl:mt-[88px] xl:mr-[88px] xl:mb-[96px] md:w-auto h-auto rounded-[10px] md:mx-[20px] mt-[19px] w-auto mx-[20px] ">
      <div className="font-light md:text-[48px] xl:pt-[32px] xl:pl-[57px]  xl:pb-[40px] md:pt-[50px] md:pl-[25px] md:pb-[27px] text-[32px] ml-[11px] pt-[31px]">
        {t("send")}
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="font-light xl:pb-[13px] xl:ml-[57px] xl:w-[716px] text-[15px] md:pb-[22px] md:ml-[26px] md:w-[744px] pb-[12px] ml-[12px] w-[327px] outline-0"
        placeholder={t("name")}
        type="text"
      />
      <hr className="w-auto xl:mx-[57px] md:pb-[42px] md:mx-[25px] pb-[51px] mx-[11px]" />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="font-light xl:pb-[13px] xl:ml-[57px] xl:w-[716px] text-[15px] md:pb-[22px] md:ml-[26px] md:w-[744px] pb-[12px] ml-[12px] w-[327px] outline-0"
        placeholder={t("email")}
        type="email"
      />
      <hr className="w-auto xl:mx-[57px] md:pb-[42px] md:mx-[25px] pb-[51px] mx-[11px]" />
      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        className="font-light xl:pb-[13px] xl:ml-[57px] xl:w-[716px] text-[15px] md:pb-[22px] md:ml-[26px] md:w-[744px] pb-[12px] ml-[12px] w-[327px] outline-0"
        placeholder={t("tel")}
        type="text"
      />
      <hr className="w-auto xl:mx-[57px] md:pb-[42px] md:mx-[25px] pb-[51px] mx-[11px]" />
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="font-light xl:pb-[13px] xl:ml-[57px] xl:w-[716px] text-[15px] md:pb-[22px] md:ml-[26px] md:w-[744px] pb-[12px] ml-[12px] w-[327px] outline-0"
        placeholder={t("thing")}
        type="text"
      />
      <hr className="w-auto xl:mx-[57px] xl:pb-[25] md:pb-[31px] md:mx-[25px] pb-[30px] mx-[11px]" />
      <button
        onClick={() => clearState()}
        className="bg-[#7153A9] text-white border-[#3B2862] border-[2px] xl:w-[108px] xl:h-[39px] xl:ml-[57px] xl:text-[20px] md:w-[139px] md:h-[40px] md:ml-[25px] mb-[32px] w-[61px] h-[39px] ml-[11px] text-[16px] cursor-pointer rounded-[10px] "
      >
        {t("send-btn")}
      </button>{" "}
      <ToastContainer />
    </div>
  );
};

export default SendUs;
