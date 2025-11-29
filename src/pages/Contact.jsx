import React from "react";
import WeHappy from "../Component/Contact/WeHappy";
import SendUs from "../Component/Contact/SendUs";

const Contact = () => {
  return (
    <div className="xl:pt-[88px] pt-[72px] xl:flex xl:gap-[80px] xl:justify-center bg-[url('/BackgroundIMG.webp')] bg-cover bg-center xl:pb-0 md:pb-[59px] pb-[54px] min-h-[80vh]">
      <WeHappy/>
      <SendUs/>
    </div>
  );
};

export default Contact;