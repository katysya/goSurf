import Image from 'next/image';
import Title from '@/components/UI/Title/Title';
import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import InfoLink from '@/components/UI/InfoLink/InfoLink';

import { data } from './lib';

/* Picture */
import flower from '../../../../public/Sleep/flower.png';

import './sleep.scss';

export default function Sleep() {
  return (
    <section className="sleep" id="sleep">
      <div className="container">
        <Title title="Sleep" />
      </div>
      <InfoSwiper info={data} />
      <div className="sleep__bottom">
        <InfoLink link="#" leftText="Book" rightText="Stay" />
        <Image
          className="sleep__img"
          src={flower}
          width={280}
          height={400}
          alt=""
        />
      </div>
    </section>
  );
}
