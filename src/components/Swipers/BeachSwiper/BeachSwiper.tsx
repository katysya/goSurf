'use client';
import React, { useState } from 'react';
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
import Logo from '@/components/UX/Logo/Logo';

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

  const [dataSwiper, setDataSwiper] = useState([
    {
      id: 1,
      nameBeach: 'Malibu Beach',
      textBeach: 'California | USA',
      picture: Slide1,
      href: '#',
    },
    {
      id: 2,
      nameBeach: ' Airlie Beach',
      textBeach: 'Queensland | Australia',
      picture: Slide2,
      href: '#',
    },
    {
      id: 3,
      nameBeach: 'Cloud Nine',
      textBeach: 'Siargao | Philippines',
      picture: Slide3,
      href: '#',
    },
    {
      id: 4,
      nameBeach: 'Vieux Boucau',
      textBeach: 'Hossegor | France',
      picture: Slide4,
      href: '#',
    },
    {
      id: 5,
      nameBeach: 'Malibu Beach',
      textBeach: 'California | USA',
      picture: Slide1,
      href: '#',
    },
    {
      id: 6,
      nameBeach: ' Airlie Beach',
      textBeach: 'Queensland | Australia',
      picture: Slide2,
      href: '#',
    },
    {
      id: 7,
      nameBeach: 'Cloud Nine',
      textBeach: 'Siargao | Philippines',
      picture: Slide3,
      href: '#',
    },
    {
      id: 8,
      nameBeach: 'Vieux Boucau',
      textBeach: 'Hossegor | France',
      picture: Slide4,
      href: '#',
    },
  ]);

  const container = {
    margin: -50,
  };

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
                      <div className="beachSwiper__swiper-logo">
                        <Logo leftText="View" rightText="Surf" />
                      </div>
                    </div>
                  </div>
                  <div className="beachSwiper__swiper-place">
                    {item.textBeach}
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide1}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Malibu Beach
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                California | USA
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide2}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Airlie Beach
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                Queensland | Australia
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide3}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Cloud Nine
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                Siargao | Philippines
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide4}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Vieux Boucau
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                Hossegor | France
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide1}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Malibu Beach
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                California | USA
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide2}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Airlie Beach
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                Queensland | Australia
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide3}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Cloud Nine
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                Siargao | Philippines
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              target="_blank"
              className="beachSwiper__swiper-slide"
            >
              <Image
                src={Slide4}
                fill
                alt=""
                sizes="100vw"
                className="beachSwiper__swiper-img"
              />
              <div className="beachSwiper__swiper-content">
                <div className="beachSwiper__swiper-name">
                  Vieux Boucau
                </div>
                <div className="beachSwiper__swiper-bottom">
                  <div className="beachSwiper__swiper-logo">
                    <Logo leftText="View" rightText="Surf" />
                  </div>
                </div>
              </div>
              <div className="beachSwiper__swiper-place">
                Hossegor | France
              </div>
            </a>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
