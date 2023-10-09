'use client';
import { useRef } from 'react';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import Subtitle from '@/components/UI/Subtitle/Subtitle';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

/* Style */
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductSwiper.scss';

/* Picture */
import arrowRight from '../../../../public/Swiper/swiperRight.svg';
import arrowLeft from '../../../../public/Swiper/swiperLeft.svg';
import icon from '../../../../public/Shop/Star.svg';
import InfoLink from '@/components/UI/InfoLink/InfoLink';
import background from '../../../../public/Shop/bg.png';
import ProductPoint from '@/components/UI/ProductPoint/ProductPoint';

/* Interface */
interface IDescription {
  id: Number;
  pos: Object;
  desc: String;
}

interface IDetails {
  id: Number;
  img: StaticImageData;
  name: String;
  price: String;
}

interface ISlide {
  id: Number;
  name: String;
  country: String;
  icon: String;
  price: String;
  img: StaticImageData;
  link: String;
  nameDetails: String;
  description: IDescription[];
  details: IDetails[];
}

interface IInfo {
  info: ISlide[];
}

export default function ProductSwiper({ info }: IInfo) {
  const swiperRef = useRef<SwiperCore>();

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
          <div className="container">
            {info.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="productSwiper__slide">
                    <div className="productSwiper__slide-left">
                      <div className="productSwiper__slide-top">
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
                      </div>
                      <div className="productSwiper__link">
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
                        {item.description?.map((info, index) => {
                          return (
                            <ProductPoint
                              key={index}
                              id={info.id}
                              position={info.pos}
                              desc={info.desc}
                            />
                          );
                        })}
                      </div>
                      <div className="productSwiper__details">
                        {item.details.map((elem, index) => {
                          return (
                            <div
                              className="productSwiper__slide-block"
                              key={index}
                            >
                              <div className="productSwiper__slide-block-img">
                                <Image src={elem.img} fill alt="" />
                              </div>
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
