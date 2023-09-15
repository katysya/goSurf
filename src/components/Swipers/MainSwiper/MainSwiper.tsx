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
import { StaticImageData } from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MainSwiper.scss';

import arrowRight from '../../../../public/Swiper/swiperRight.svg';
import arrowLeft from '../../../../public/Swiper/swiperLeft.svg';
import map from '../../../../public/MainSwiper/map.png';

interface ISlide {
  id: Number;
  digit: String;
  name: String;
  abbreviation: String;
  picture: StaticImageData;
  condition: String;
}

interface IInfo {
  slides: Array<ISlide>;
}

export default function MainSwiper({ slides }: IInfo) {
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
          {slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="mainSwiper__map">
                  <Image src={map} fill alt="" />
                </div>
                <Image src={item.picture} fill={true} alt="" />
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
          {slides.map((item, index) => {
            return (
              <div key={index} className="mainSwiper__item">
                <div className="mainSwiper__number">{item.digit}</div>
                <div className="mainSwiper__beach"> {item.name} </div>
                <div className="mainSwiper__beach mainSwiper__beach-mobile">
                  {item.abbreviation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
