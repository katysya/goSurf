'use client';
import React, { useState } from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';
import Logo from '@/components/UI/Logo/Logo';
import CardLink from '@/components/UI/CardLink/CardLink';

/* Style */
import './BeachSwiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';

/* Picture */
import arrowRight from '../../../../public/Swiper/swiperRight.svg';
import arrowLeft from '../../../../public/Swiper/swiperLeft.svg';

/* Data */
import { mockSlides } from './lib';

export default function BeachSwiper() {
  const swiperRef = useRef<SwiperCore>();
  const [dataSwiper, setDataSwiper] = useState(mockSlides);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  // const slideTo = (index: any) => swiper.slideTo(index);

  return (
    <div className="beachSwiper">
      <div className="beachSwiper__top">
        <div className="beachSwiper__navigation">
          <button
            className="beachSwiper__navigation-btn navButton"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image src={arrowLeft} width={25} height={20} alt="" />
          </button>
          <button
            className="beachSwiper__navigation-btn navButton"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image src={arrowRight} width={25} height={20} alt="" />
          </button>
        </div>
      </div>
      <div className="beachSwiper__swiper">
        <Swiper
          onSwiper={setSwiper}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay, EffectFade, Navigation]}
          initialSlide={1}
          slidesPerView={2}
          breakpoints={{
            800: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide className="empty"></SwiperSlide>
          {dataSwiper.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="beachSwiper__swiper-slide">
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
                      <div className="beachSwiper__swiper-link">
                        <CardLink
                          link=""
                          leftText="view"
                          rightText="surf"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide></SwiperSlide>
          <SwiperSlide className="empty"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
