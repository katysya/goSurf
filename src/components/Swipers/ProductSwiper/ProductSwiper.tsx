'use client';
import { useRef } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

/* Picture */
import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';

export default function ProductSwiper() {
  const swiperRef = useRef<SwiperCore>();

  const shop = [
    {
      id: 1,
      name: 'North Nugget TT Surfboard',
      icon: '',
      price: '$799',
      img: '',
      nameDetails: 'Extras',
      details: [
        {
          id: 1,
          img: '',
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: '',
          name: 'Sex Wax',
          price: '$24.99',
        },
      ],
    },
    {
      id: 1,
      name: 'North Nugget TT Surfboard',
      icon: '',
      price: '$799',
      img: '',
      nameDetails: 'Extras',
      details: [
        {
          id: 1,
          img: '',
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: '',
          name: 'Sex Wax',
          price: '$24.99',
        },
      ],
    },
  ];
  return (
    <div>
      <Swiper
        modules={[EffectFade, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <div className="infoSwiper__navigation">
          <div className="container">
            <div className="swiper__navigation">
              <button
                className="swiper__navigation-btn"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Image
                  src={arrowLeft}
                  width={25}
                  height={20}
                  alt=""
                />
              </button>
              <button
                className="swiper__navigation-btn"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Image
                  src={arrowRight}
                  width={25}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        {shop.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="productSwiper__slide">Slide 1</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
