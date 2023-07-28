'use client';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './beachSwiper.scss';

import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import Slide1 from '../../../assets/images/beachSwiper/img1.jpg';
import Slide2 from '../../../assets/images/beachSwiper/img2.jpg';
import Slide3 from '../../../assets/images/beachSwiper/img3.jpg';
import Slide4 from '../../../assets/images/beachSwiper/img4.jpg';

export default function BeachSwiper() {
  const swiperRef = useRef<SwiperCore>();

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
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          // modules={[Autoplay, EffectFade, Navigation, Pagination]}
          modules={[EffectFade, Navigation, Pagination]}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Malibu Beach
              </div>
              <Image
                src={Slide1}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  California | USA
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Airlie Beach
              </div>
              <Image
                src={Slide2}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  Queensland | Australia
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Cloud Nine
              </div>
              <Image
                src={Slide3}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  Siargao | Philippines
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Vieux Boucau
              </div>
              <Image
                src={Slide4}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  Hossegor | France
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Malibu Beach
              </div>
              <Image
                src={Slide1}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  California | USA
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Airlie Beach
              </div>
              <Image
                src={Slide2}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  Siargao | Philippines
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Cloud Nine
              </div>
              <Image
                src={Slide3}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  Siargao | Philippines
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <div className="beachSwiper__swiper-name">
                Vieux Boucau
              </div>
              <Image
                src={Slide4}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <div className="beachSwiper__swiper-block">
                <div className="beachSwiper__swiper-place">
                  Siargao | Philippines
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
