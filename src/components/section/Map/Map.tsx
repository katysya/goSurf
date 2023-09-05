import Title from '@/components/UI/Title/Title';
import Subtitle from '@/components/UI/Subtitle/Subtitle';
import Image from 'next/image';
import './map.scss';

import map from '../../../../public/Map/map.png';
import Point from '@/components/UI/Point/Point';

export default function Map() {
  const points = [
    {
      id: 1,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '4 SE',
      position: {
        left: '0%',
        top: '49%',
      },
    },
    {
      id: 2,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '13%',
        top: '46%',
      },
    },
    {
      id: 3,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '28%',
        top: '50%',
      },
    },
    {
      id: 4,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '35%',
        top: '76%',
      },
    },
    {
      id: 5,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '45%',
        top: '35%',
      },
    },
    {
      id: 6,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '53%',
        top: '87%',
      },
    },
    {
      id: 7,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '66%',
        top: '61%',
      },
    },
    {
      id: 8,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '91%',
        top: '80%',
      },
    },
    {
      id: 9,
      beach: 'Airlie Beach',
      place: 'Australia',
      surf: '9 - 13',
      tide: '+2.3',
      wind: '+2.3',
      position: {
        left: '88%',
        top: '36%',
      },
    },
  ];
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
