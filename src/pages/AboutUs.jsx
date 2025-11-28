import React from 'react'
import Sincerity from '../Component/AboutUs/Sincerity'
import SwiperHome from '../Component/Home/SwiperHome'
import Member from '../Component/AboutUs/Member';

const AboutUs = () => {
  return (
    <div className='xl:pt-[88px] pt-[72px]'>
    <SwiperHome/>
    <Sincerity/>
    <Member/>
    </div>
  );
};

export default AboutUs;