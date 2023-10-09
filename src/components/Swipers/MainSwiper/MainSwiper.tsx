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
          className="mainSwiper__navigation-btn navButton"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={arrowLeft} width={25} height={20} alt="" />
        </button>
        <button
          className="mainSwiper__navigation-btn navButton"
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
                <div className="animateMap">
                  <svg
                    width="595"
                    height="403"
                    viewBox="0 0 595 403"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2469_66)">
                      <g opacity="0.29827">
                        <path
                          className="path"
                          d="M692.079 48.4481L127.182 -471.858V-862.19L-287.89 -885C-291.096 -877.456 -311.633 -855.714 -308.428 -843.596C-304.57 -829.102 -285.161 -833.735 -279.522 -824.409C-272.934 -813.42 -284.271 -768.749 -287.654 -755.86C-294.124 -731.445 -308.903 -711.665 -313.178 -687.25C-320.36 -646.263 -305.818 -649.53 -278.276 -623.927C-231.859 -580.742 -269.076 -535.952 -257.382 -485.223C-247.885 -443.878 -206.395 -422.554 -191.2 -381.211C-179.447 -349.37 -163.303 -341.233 -138.254 -317.947C-138.847 -332.084 -151.49 -373.785 -127.747 -370.102C-104.183 -366.478 -113.264 -331.669 -108.753 -317.115C-104.955 -304.997 -78.0667 -280.761 -100.384 -269.593C-107.804 -265.91 -128.934 -280.582 -137.423 -284.503C-131.428 -265.791 -135.226 -246.367 -125.729 -228.487C-114.392 -207.162 -102.165 -215.359 -87.1472 -203.775C-71.6557 -191.836 -73.3171 -178.114 -80.2025 -160.055C-87.3847 -141.225 -94.8042 -144.135 -83.4078 -121.443C-75.1573 -105.049 -61.1499 -84.2579 -49.1001 -71.7836C-42.096 -64.5366 -34.4984 -62.8733 -27.494 -53.6068C-21.6771 -45.8845 -23.9326 -35.7858 -16.9879 -28.8362C-5.11666 -16.8963 15.0056 -16.718 24.3841 -1.09564C34.8308 16.3087 22.9595 29.4369 53.7062 27.8325C55.3089 62.6427 61.8974 94.185 61.5412 128.994C78.6951 135.825 106.414 127.687 124.399 124.063C142.266 148.18 165.355 131.429 185.774 144.558C194.678 150.26 192.837 164.517 198.239 169.506C209.339 179.723 217.529 173.308 231.301 176.872C241.51 179.486 249.404 186.97 259.138 189.703C268.338 192.257 283.475 186.258 290.301 194.396C298.492 204.138 284.78 221.958 297.127 229.799C307.395 236.333 322.115 220.77 332.088 223.027C343.721 225.7 377.079 256.174 385.271 266.212C394.59 277.677 403.969 299.062 409.25 313.793C417.501 336.841 416.373 348.127 433.408 364.998C444.27 375.75 433.942 376.522 451.63 379.67C463.204 381.749 478.518 373.374 490.212 372.067C514.549 369.394 539.122 374.027 563.102 369.453C585.421 365.176 606.729 358.166 629.64 354.899C649.465 352.048 684.367 354.246 701.936 344.801C720.989 334.643 722.711 311.654 695.169 315.932C692.973 301.26 702.767 281.003 691.845 270.847C707.041 250.056 712.561 235.384 714.934 209.959C716.003 198.792 716.478 186.436 721.998 177.05C727.399 167.783 742.595 162.259 745.562 154.299C750.133 141.943 742.832 136.419 737.253 129.528C733.691 125.073 723.541 127.212 720.632 123.291C715.231 116.103 720.573 108.678 717.605 101.431C708.939 80.4622 698.611 72.2049 692.081 48.444C692.26 52.424 692.438 56.4633 692.2 60.3839"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <path
                        className="path"
                        d="M413.114 -31.0606C404.546 -7.67918 424.614 0.52555 440.675 15.8074C445.434 20.3357 445.888 27.817 440.879 32.3424C430.107 42.0738 389.264 27.9168 391.854 40.7451C394.53 53.9943 429.061 72.5314 430.618 73.7994C444.284 84.9316 448.735 113.174 441.208 128.658C435.852 139.676 400.342 135.962 389.172 132.293C316.024 108.266 348.985 111.131 266.817 103.67C260.527 103.099 253.935 102.806 247.894 104.65C241.671 106.549 241.869 114.339 243.957 118.55C250.876 132.506 281.849 156.178 273.514 174.523C270.956 180.152 264.963 183.707 262.264 189.27C260.151 193.627 260.385 198.772 259.445 203.523"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M257.5 211C261.09 211 264 208.09 264 204.5C264 200.91 261.09 198 257.5 198C253.91 198 251 200.91 251 204.5C251 208.09 253.91 211 257.5 211Z"
                        fill="#4AF6CD"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M345 248C346.657 248 348 246.657 348 245C348 243.343 346.657 242 345 242C343.343 242 342 243.343 342 245C342 246.657 343.343 248 345 248Z"
                        fill="#4AF6CD"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M409 356C410.657 356 412 354.657 412 353C412 351.343 410.657 350 409 350C407.343 350 406 351.343 406 353C406 354.657 407.343 356 409 356Z"
                        fill="#4AF6CD"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M49 113C50.6569 113 52 111.657 52 110C52 108.343 50.6569 107 49 107C47.3431 107 46 108.343 46 110C46 111.657 47.3431 113 49 113Z"
                        fill="#4AF6CD"
                      />
                    </g>
                  </svg>
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
