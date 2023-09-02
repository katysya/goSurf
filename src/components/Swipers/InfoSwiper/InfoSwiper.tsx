'use client';
import { useRef } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import './infoSwiper.scss';

/* Picture */
import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import Subtitle from '@/components/UX/Subtitle/Subtitle';

/* Interface */
//Данные для нижнего блока
interface IData {
  nameValue: String;
  value: String;
}

//Данные для слайда
interface ISlide {
  id: Number;
  titleTop: String;
  nameTop: String;
  country: String;
  titleBottom: String;
  nameBottom: String;
  icon: String;
  slide: String;
  img: String;
  imgWidth: Number;
  imgHeight: Number;
  data: IData[];
}

//Interface для свойства (Props)
interface IInfo {
  info: ISlide[];
}

export default function InfoSwiper(props: IInfo) {
  const swiperRef = useRef<SwiperCore>();

  return (
    <section className="infoSwiper">
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
          {props.info.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="infoSwiper__slide">
                  <div className="infoSwiper__slide-data">
                    <Image
                      src={item.slide}
                      className="infoSwiper__slide-img"
                      fill={true}
                      alt=""
                    />
                    <div className="container">
                      <div className="infoSwiper__slide-block infoSwiper__slide-block--right">
                        <Subtitle
                          name={item.titleTop}
                          desc={item.nameTop}
                          country={item.country}
                          position={2}
                        />
                      </div>
                      <div className="infoSwiper__slide-block">
                        <p className="infoSwiper__slide-block-title">
                          {item.titleBottom}
                        </p>
                        <div className="infoSwiper__slide-block-icon">
                          <p className="infoSwiper__slide-block-name">
                            {item.nameBottom}
                          </p>
                          <Image
                            src={item.icon}
                            width={154}
                            height={22}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <Image
                      src={item.img}
                      className="infoSwiper__airline"
                      width={item.imgWidth}
                      height={item.imgHeight}
                      alt=""
                    />
                  </div>
                  <div className="infoSwiper__info">
                    <div className="container">
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
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
