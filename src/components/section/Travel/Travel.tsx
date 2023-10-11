'use client';
import Image from 'next/image';
import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import InfoLink from '@/components/UI/InfoLink/InfoLink';
import Title from '@/components/UI/Title/Title';
import { motion } from 'framer-motion';

/* Style */
// import './Travel.scss';

/* Picture */
import glass from '../../../../public/Travel/glass.png';
import Airline from '../../../../public/Travel/airline.png';

/* Data */
import { data } from './lib';

export default function Travel() {
  return (
    <section className="travel" id="travel">
      <div className="container">
        <Title title="Travel" />
      </div>
      <div className="travel__swiper">
        <InfoSwiper info={data} />
        <motion.div
          className="travel__airline"
          initial={{ right: '-50%', top: '10%' }}
          whileInView={{ right: '0%', top: '25%' }}
          transition={{ duration: 1.5 }}
        >
          <div className="travel__airline-img">
            <Image src={Airline} fill alt="" />
          </div>
        </motion.div>
      </div>
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
