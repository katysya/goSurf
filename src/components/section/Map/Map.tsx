import Title from '@/components/UI/Title/Title';
import Subtitle from '@/components/UI/Subtitle/Subtitle';
import Image from 'next/image';
import './map.scss';

import map from '../../../../public/Map/map.png';
import points from '../../../../public/Map/Map.svg';

export default function Map() {
  return (
    <section className="map" id="map">
      <Title title="Surf" />
      <div className="map__subtitle">
        <Subtitle
          name="Current location"
          desc="California"
          country="USA"
          position={2}
        />
      </div>
      <div className="map__image">
        <Image
          src={map}
          fill
          alt=""
          sizes="100vw"
          className="map__back"
        />
        <div></div>
      </div>
    </section>
  );
}
