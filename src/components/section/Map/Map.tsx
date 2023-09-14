import Title from '@/components/UI/Title/Title';
import Subtitle from '@/components/UI/Subtitle/Subtitle';
import Point from '@/components/UI/Point/Point';
import Image from 'next/image';

/* Style */
import './Map.scss';

/* Picture */
import map from '../../../../public/Map/map.png';
import Flag from '../../../../public/Map/Flag.png';

/* Data */
import { points } from './lib';

export default function Map() {
  return (
    <section className="map" id="map">
      <Title title="Surf" />
      <div className="map__flag">
        <Image src={Flag} fill alt="" />
      </div>
      <div className="container">
        <div className="map__subtitle">
          <Subtitle
            name="Current location"
            desc="California"
            country="USA"
            position={2}
          />
        </div>
      </div>
      <div className="map__image">
        {points.map((item) => {
          return (
            <Point
              id={item.id}
              position={item.position}
              beach={item.beach}
              place={item.place}
              surf={item.surf}
              tide={item.tide}
              wind={item.wind}
              key={item.id}
            />
          );
        })}
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
