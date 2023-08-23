import Title from '@/components/UX/Title/Title';
import Subtitle from '@/components/UX/Subtitle/Subtitle';
import Image from 'next/image';
import './map.scss';

import map from '../../../../public/Map/map.png';

export default function Map() {
  return (
    <section className="map">
      <Title />
      <div className="container">
        <div className="map__subtitle">
          <Subtitle />
        </div>
        <div className="map__image">
          <Image
            src={map}
            fill
            alt=""
            sizes="100vw"
            className="beachSwiper__swiper-img"
          />
        </div>
      </div>
    </section>
  );
}
