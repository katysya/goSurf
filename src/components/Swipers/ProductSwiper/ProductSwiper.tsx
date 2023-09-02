'use client';
import { useRef } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Subtitle from '@/components/UX/Subtitle/Subtitle';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import './productSwiper.scss';

/* Picture */
import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import icon from '../../../../public/Shop/Star.svg';
import LinkInfo from '@/components/UX/LinkInfo/LinkInfo';
import background from '../../../../public/Shop/bg.png';
import surfBoard from '../../../../public/Shop/Surfboard.png';
import product1 from '../../../../public/Shop/product1.png';
import product2 from '../../../../public/Shop/product2.png';

export default function ProductSwiper() {
  const swiperRef = useRef<SwiperCore>();

  const shop = [
    {
      id: 1,
      name: 'North Nugget TT Surfboard',
      icon: '',
      price: '$799',
      img: surfBoard,
      link: '#',
      nameDetails: 'Extras',
      details: [
        {
          id: 1,
          img: product1,
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: product2,
          name: 'Pura Vida',
          price: '$27.99',
        },
      ],
    },
    {
      id: 2,
      name: 'North Nugget TT Surfboard',
      icon: '',
      price: '$799',
      img: surfBoard,
      link: '#',
      nameDetails: 'Extras',
      details: [
        {
          id: 1,
          img: product1,
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: product2,
          name: 'Pura Vida',
          price: '$27.99',
        },
      ],
    },
  ];
  return (
    <div className="productSwiper">
      <div className="container">
        <Swiper
          modules={[EffectFade, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <div className="productSwiper__navigation">
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
          <div className="container">
            {shop.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="productSwiper__slide">
                    <div className="productSwiper__slide-left">
                      <Subtitle
                        name="Style"
                        desc={item.name}
                        position={1}
                      />
                      <div className="productSwiper__price">
                        <div className="productSwiper__icon">
                          <Image
                            src={icon}
                            width={80}
                            height={22}
                            alt=""
                          />
                        </div>
                        <div className="productSwiper__cost">
                          {item.price}
                        </div>
                      </div>
                      <div>
                        <LinkInfo
                          link=""
                          leftText="Drop"
                          rightText="In"
                        />
                      </div>
                    </div>
                    <div className="productSwiper__slide-right">
                      <Image
                        src={surfBoard}
                        width={228}
                        height={695}
                        alt=""
                      />
                      {item.details.map((elem) => {
                        return (
                          <div
                            className="productSwiper__slide-block"
                            key={elem.id}
                          >
                            <Image
                              src={elem.img}
                              width={105}
                              height={105}
                              alt=""
                            />
                            <div className="productSwiper__slide-block-desc">
                              <p className="productSwiper__slide-block-name">
                                {elem.name}
                              </p>
                              <p className="productSwiper__slide-block-price">
                                {elem.price}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <Image
        className="productSwiper__bg"
        src={background}
        width={1454}
        height={790}
        alt=""
      />
    </div>
  );
}
