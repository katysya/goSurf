'use client';
import { useRef } from 'react';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './mainSwiper.scss';

import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import slide1 from '../../../../public/MainSwiper/Slide1.jpg';

export default function MainSwiper() {
  const swiperRef = useRef<SwiperCore>();

  const beach = [
    {
      id: 1,
      number: '01',
      name: 'North Shore',
      picture: 'slide1',
      condition: 'radical',
    },
    {
      id: 2,
      number: '02',
      name: 'South Shore',
      picture: 'slide1',
      condition: 'radical',
    },
    {
      id: 3,
      number: '03',
      name: 'West Shore',
      picture: 'slide1',
      condition: 'radical',
    },
    {
      id: 4,
      number: '04',
      name: 'East Shore',
      picture: 'slide1',
      condition: 'radical',
    },
  ];

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
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={10}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {beach.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <Image src={slide1} fill={true} alt="" />
                <div className="mainSwiper__info">
                  <div className="mainSwiper__info-top">
                    <div className="mainSwiper__desc">Surf</div>
                    <div className="mainSwiper__name">
                      {item.name}
                    </div>
                  </div>
                  <div className="mainSwiper__info-bottom">
                    <div className="mainSwiper__desc">Condition</div>
                    <div className="mainSwiper__condition">
                      {item.condition}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="mainSwiper__bottom">
          {beach.map((item, index) => {
            return (
              <div key={index} className="mainSwiper__item">
                <div className="mainSwiper__number">
                  {item.number}
                </div>
                <div className="mainSwiper__beach"> {item.name} </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
