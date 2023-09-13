'use client';
import { useRef } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Subtitle from '@/components/UI/Subtitle/Subtitle';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import './productSwiper.scss';

/* Picture */
import arrowRight from '../../../assets/images/mainSwiper/swiperRight.svg';
import arrowLeft from '../../../assets/images/mainSwiper/swiperLeft.svg';
import icon from '../../../../public/Shop/Star.svg';
import InfoLink from '@/components/UI/InfoLink/InfoLink';
import background from '../../../../public/Shop/bg.png';
import surfBoard from '../../../../public/Shop/Surfboard.png';
import surfBoard1 from '../../../../public/Shop/Surfboard1.png';
import surfBoard2 from '../../../../public/Shop/Surfboard2.png';
import surfBoard3 from '../../../../public/Shop/Surfboard3.png';
import product1 from '../../../../public/Shop/product1.png';
import product2 from '../../../../public/Shop/product2.png';
import ProductPoint from '@/components/UI/ProductPoint/ProductPoint';

export default function ProductSwiper() {
  const swiperRef = useRef<SwiperCore>();

  const shop = [
    {
      id: 1,
      name: 'North Nugget Mint Surfboard',
      country: 'Australia',
      icon: '',
      price: '$699',
      img: surfBoard,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '60%',
            top: '10%',
          },
          desc: 'Nice mint color',
        },
        {
          id: 2,
          pos: {
            left: '50%',
            top: '40%',
          },
          desc: 'Double Concave with Vee Shape low point',
        },
        {
          id: 3,
          pos: {
            left: '13%',
            top: '60%',
          },
          desc: 'High level strength',
        },
      ],
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
      name: 'North Nugget Gray Surfboard',
      country: 'Australia',
      icon: '',
      price: '$799',
      img: surfBoard1,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '30%',
            top: '8%',
          },
          desc: 'Elegant color without frills',
        },
        {
          id: 2,
          pos: {
            left: '70%',
            top: '40%',
          },
          desc: 'Triple Concave with Vee Shape low point',
        },
        {
          id: 3,
          pos: {
            left: '60%',
            top: '70%',
          },
          desc: 'Durable coating',
        },
      ],
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
      id: 3,
      name: 'North Nugget Blue Surfboard',
      country: 'Australia',
      icon: '',
      price: '$899',
      img: surfBoard2,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '30%',
            top: '7%',
          },
          desc: 'Bright color for bright emotions',
        },
        {
          id: 2,
          pos: {
            left: '70%',
            top: '40%',
          },
          desc: 'Warranty more than 1 year',
        },
        {
          id: 3,
          pos: {
            left: '20%',
            top: '50%',
          },
          desc: 'Durable coating',
        },
        {
          id: 4,
          pos: {
            left: '30%',
            top: '90%',
          },
          desc: 'Top quality',
        },
      ],
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
      id: 4,
      name: 'North Nugget Green Surfboard',
      country: 'Australia',
      icon: '',
      price: '$999',
      img: surfBoard3,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '50%',
            top: '50%',
          },
          desc: 'Double Concave with Vee Shape low point',
        },
        {
          id: 2,
          pos: {
            left: '10%',
            top: '60%',
          },
          desc: 'High price',
        },
      ],
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
                        country={item.country}
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
                        <InfoLink
                          link=""
                          leftText="Drop"
                          rightText="In"
                        />
                      </div>
                    </div>
                    <div className="productSwiper__slide-right">
                      <div className="productSwiper__img">
                        <Image src={item.img} fill alt="" />
                        {item.description?.map((info) => {
                          return (
                            <ProductPoint
                              key={info.id}
                              id={info.id}
                              position={info.pos}
                              desc={info.desc}
                            />
                          );
                        })}
                      </div>
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
