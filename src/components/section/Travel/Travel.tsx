import Image from 'next/image';
import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import InfoLink from '@/components/UI/InfoLink/InfoLink';
import Title from '@/components/UI/Title/Title';

/* Style */
import './Travel.scss';

/* Picture */
import glass from '../../../../public/Travel/glass.png';

/* Data */
import { data } from './lib';

export default function Travel() {
  return (
    <section className="travel" id="travel">
      <div className="container">
        <Title title="Travel" />
      </div>
      <InfoSwiper info={data} />
      <div className="travel__bottom">
        <InfoLink link="#" leftText="Book" rightText="Flight" />
        <div className="travel__img">
          <div className="travel__img-container">
            <Image src={glass} fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
