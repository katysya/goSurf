import Image from 'next/image';

import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import InfoLink from '@/components/UI/InfoLink/InfoLink';
import Title from '@/components/UI/Title/Title';

import { data } from './lib';
import glass from '../../../../public/Travel/glass.png';

import './travel.scss';

export default function Travel() {
  return (
    <section className="travel" id="travel">
      <div className="container">
        <Title title="Travel" />
      </div>
      <InfoSwiper info={data} />
      <div className="travel__bottom">
        <InfoLink link="#" leftText="Book" rightText="Flight" />
        <Image
          className="travel__img"
          src={glass}
          width={320}
          height={564}
          alt=""
        />
      </div>
    </section>
  );
}
