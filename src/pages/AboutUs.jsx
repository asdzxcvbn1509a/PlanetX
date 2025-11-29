import React from 'react'
import Sincerity from '../component/AboutUs/Sincerity'
import SwiperHome from '../component/Home/SwiperHome'
import Member from '../component/AboutUs/Member';

const AboutUs = () => {
  return (
    <div className='xl:pt-[88px] pt-[72px] bg-[url("/BackgroundIMG.webp")] bg-cover bg-center'>
    <SwiperHome/>
    <Sincerity/>
    <Member/>
    </div>
  );
};

export default AboutUs;