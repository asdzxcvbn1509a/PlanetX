import React, { useEffect, useState } from "react";
import Pc_en from "../../assets/AboutUs/Pc-en.webp";
import Pc_th from "../../assets/AboutUs/Pc-th.webp";
import Phone_en from "../../assets/AboutUs/Phone-en.webp";
import Phone_th from "../../assets/AboutUs/Phone-th.webp";
import { Type } from "lucide-react";

const Sincerity = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const Photo_PC = [
    { Type: "image", src: Pc_th, alt: "Pc_th" },
  ];
  const Photo_Moblie = [
    { Type: "image", src: Phone_th, alt: "Phone_th" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataToUse = isMobile ? Photo_Moblie : Photo_PC;

  return <div>{dataToUse.map((item, index) => (<img id={index} src={item.src} alt={item.alt} className="w-full"/>))}</div>;
};
export default Sincerity;
