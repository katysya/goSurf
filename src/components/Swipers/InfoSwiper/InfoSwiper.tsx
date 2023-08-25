'use client';
import { useRef } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import './infoSwiper.scss';

import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import slide1 from '../../../../public/Travel/slide1.png';

export default function InfoSwiper() {
  const swiperRef = useRef<SwiperCore>();

  const info = [
    {
      id: 1,
      shore: 'Airlie Beach | Australia',
      arline: 'Virgin Australia',
      data: [
        {
          nameValue: 'destination',
          value: 'Queensland Australia',
        },
        {
          nameValue: 'distance',
          value: '7,065 Miles',
        },
        {
          nameValue: 'time',
          value: '23 Hours 5\u00A0Minutes',
        },
        {
          nameValue: 'price',
          value: '$1,976 USD',
        },
      ],
    },
    {
      id: 2,
      shore: 'Airlie Beach | Australia',
      arline: 'Virgin Australia',
      data: [
        {
          nameValue: 'destination',
          value: 'Queensland Australia',
        },
        {
          nameValue: 'distance',
          value: '7,065 Miles',
        },
        {
          nameValue: 'time',
          value: '23 Hours 5\u00A0Minutes',
        },
        {
          nameValue: 'price',
          value: '$1,976 USD',
        },
      ],
    },
  ];

  return (
    <section className="infoSwiper">
      <div className="infoSwiper__navigation">
        <button
          className="infoSwiper__navigation-btn"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={arrowLeft} width={25} height={20} alt="" />
        </button>
        <button
          className="infoSwiper__navigation-btn"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={arrowRight} width={25} height={20} alt="" />
        </button>
      </div>
      <div className="infoSwiper__swiper">
        <Swiper
          modules={[EffectFade, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {info.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="infoSwiper__slide">
                  <div className="infoSwiper__slide-img">
                    <Image src={slide1} fill={true} alt="" />
                  </div>
                  <div className="infoSwiper__desc">
                    <p className="infoSwiper__airline">Airline</p>
                    <p className="infoSwiper__airline-name">
                      {item.arline}
                    </p>
                  </div>
                  <div className="infoSwiper__info">
                    {item.data.map((elem, index) => {
                      return (
                        <div
                          key={index}
                          className="infoSwiper__block"
                        >
                          <p className="infoSwiper__nameValue">
                            {elem.nameValue}
                          </p>
                          <p className="infoSwiper__value">
                            {elem.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
