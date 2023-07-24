'use client';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import './mainSwiper.scss';

import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import slide1 from '../../../assets/images/mainSwiper/img1.webp';

export default function MainSwiper() {
  const swiperRef = useRef<SwiperCore>();

  return (
    <section className="mainSwiper">
      <div className="mainSwiper__navigation">
        <button
          className="mainSwiper__navigation-btn"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={arrowLeft} width={25} height={20} alt="" />
        </button>
        <button
          className="mainSwiper__navigation-btn"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={arrowRight} width={25} height={20} alt="" />
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide1} width={1000} height={500} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
