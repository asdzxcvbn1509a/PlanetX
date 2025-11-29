import React from "react";
import WeHappy from "../component/Contact/WeHappy";
import SendUs from "../component/Contact/SendUs";

const Contact = () => {
  return (
    <div className="xl:pt-[88px] pt-[72px] xl:flex xl:gap-[80px] xl:justify-center bg-[url('/BackgroundIMG.webp')] bg-cover bg-center">
      <WeHappy/>
      <SendUs/>
    </div>
  );
};

export default Contact;