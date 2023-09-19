import Image from 'next/image';
import Title from '@/components/UI/Title/Title';
import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import InfoLink from '@/components/UI/InfoLink/InfoLink';

/* Style */
import './Sleep.scss';

/* Picture */
import flower from '../../../../public/Sleep/flower.png';

/* Data */
import { data } from './lib';

export default function Sleep() {
  return (
    <section className="sleep" id="sleep">
      <div className="container">
        <Title title="Sleep" />
      </div>
      <InfoSwiper info={data} />
      <div className="sleep__bottom">
        <InfoLink link="#" leftText="Book" rightText="Stay" />
        <div className="sleep__img">
          <div className="sleep__img-container">
            <Image className="sleep__img" src={flower} fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
