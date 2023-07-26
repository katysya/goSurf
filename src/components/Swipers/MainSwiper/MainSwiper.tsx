'use client';
import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './mainSwiper.scss';

import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import slide1 from '../../../assets/images/mainSwiper/img1.webp';
import slide2 from '../../../assets/images/mainSwiper/img2.webp';
import slide3 from '../../../assets/images/mainSwiper/img3.webp';
import slide4 from '../../../assets/images/mainSwiper/img4.webp';

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
      <div className="mainSwiper__swiper">
        <Swiper
          modules={[Navigation, Pagination]}
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
            <Image src={slide2} width={1000} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide3} width={1000} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide4} width={1000} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide1} width={1000} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide2} width={1000} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide3} width={1000} height={500} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide4} width={1000} height={500} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
