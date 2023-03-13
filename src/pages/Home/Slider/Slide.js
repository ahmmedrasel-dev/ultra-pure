import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import wsp from '../../../assets/images/wsp.jpeg'
import ro from '../../../assets/images/ro.jpeg'
import eog from '../../../assets/images/eog.jpeg'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './slider.css'

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const Slide = () => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={600}
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-content">
            <img src={wsp} className="w-full h-[600px]" alt="" />
            <div className='absolute top-[50%] left-[50%] -translate-x-1/2'>
              <div className="text-center flex gap-8 flex-col items-center">
                <h2 className='text-5xl text-white text-center'>Water Softener Plant</h2>
                <button className='btn bg-warning border-0 text-white hover:bg-primary w-44 '>Lern More</button>
              </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <img src={ro} className="w-full h-[600px]" alt="" />
            <div className='absolute top-[50%] left-[50%] -translate-x-1/2'>
              <div className="text-center flex gap-8 flex-col items-center">
                <h2 className='text-5xl text-white text-center '>Water Softener Plant</h2>
                <button className='btn bg-warning border-0 text-white hover:bg-primary w-44 '>Lern More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content" data-swiper-parallax="-300">
            <img src={eog} className="w-full h-[600px]" alt="" />

            <div className='absolute top-[50%] left-[50%] -translate-x-1/2'>
              <div className="flex gap-8 flex-col items-center">
                <h2 className='text-5xl text-white text-center'>Water Softener Plant</h2>
                <button className='btn border-0 bg-warning text-white hover:bg-primary w-44 '>Lern More</button>
              </div>

            </div>
          </div>
        </SwiperSlide>


        <div className='swiper-button-next slide_next_btn bg-pure'>
          <FaAngleRight className='text-primary hover:text-[#3c65f5] text-2xl duration-200' />
        </div>
        <div className='swiper-button-prev slide_prev_btn bg-pure'>
          <FaAngleLeft className='text-primary hover:text-[#3c65f5] text-2xl duration-200 ' />
        </div>
      </Swiper>
    </>
  );
};

export default Slide;