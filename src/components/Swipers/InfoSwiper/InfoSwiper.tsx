'use client';
import { useRef } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

/* Style */
import 'swiper/css';
import 'swiper/css/navigation';
import './InfoSwiper.scss';

/* Picture */
import arrowRight from '../../../../public/Swiper/swiperRight.svg';
import arrowLeft from '../../../../public/Swiper/swiperLeft.svg';
import Subtitle from '@/components/UI/Subtitle/Subtitle';

/* Interface */
interface IData {
  nameValue: String;
  value: String;
}

interface ISlide {
  id: Number;
  titleTop: String;
  nameTop: String;
  country: String;
  titleBottom: String;
  nameBottom: String;
  countryBottom: String;
  icon: any;
  slide: StaticImageData;
  img: StaticImageData;
  data: IData[];
}

interface IInfo {
  info: ISlide[];
}

export default function InfoSwiper({ info }: IInfo) {
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
                  className="swiper__navigation-btn navButton"
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
                  className="swiper__navigation-btn navButton"
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
          {info.map((item, index) => {
            return (
              <SwiperSlide key={index}>
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
                        <Subtitle
                          name={item.titleBottom}
                          desc={item.nameBottom}
                          country={item.countryBottom}
                          position={1}
                        />
                        <Image
                          className="infoSwiper__slide-block-icon"
                          src={item.icon}
                          width={154}
                          height={22}
                          alt=""
                        />
                      </div>
                    </div>
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
