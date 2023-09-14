'use client';
import React, { useState } from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';
import Logo from '@/components/UI/Logo/Logo';

/* Style */
import 'swiper/css';
import 'swiper/css/navigation';
import './BeachSwiper.scss';

/* Picture */
import arrowRight from '../../../../public/Swiper/swiperRight.svg';
import arrowLeft from '../../../../public/Swiper/swiperLeft.svg';

/* Data */
import { mockSlides } from './lib';

export default function BeachSwiper() {
  const swiperRef = useRef<SwiperCore>();
  const [dataSwiper, setDataSwiper] = useState(mockSlides);

  return (
    <div className="beachSwiper">
      <div className="beachSwiper__top">
        <div className="beachSwiper__navigation">
          <button
            className="beachSwiper__navigation-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image src={arrowLeft} width={25} height={20} alt="" />
          </button>
          <button
            className="beachSwiper__navigation-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image src={arrowRight} width={25} height={20} alt="" />
          </button>
        </div>
      </div>
      <div className="beachSwiper__swiper">
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay, EffectFade, Navigation]}
          initialSlide={2}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          {dataSwiper.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <a
                  href="#"
                  target="_blank"
                  className="beachSwiper__swiper-slide"
                >
                  <Image
                    src={item.picture}
                    fill
                    alt=""
                    sizes="100vw"
                    className="beachSwiper__swiper-img"
                  />
                  <div className="beachSwiper__swiper-content">
                    <div className="beachSwiper__swiper-name">
                      {item.nameBeach}
                    </div>
                    <div className="beachSwiper__swiper-bottom">
                      <div className="beachSwiper__swiper-block">
                        <div className="beachSwiper__swiper-place">
                          {item.textBeach}
                        </div>
                      </div>
                      <div className="beachSwiper__swiper-logo">
                        <Logo leftText="View" rightText="Surf" />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
