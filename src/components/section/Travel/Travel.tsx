import Image from 'next/image';

import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import LinkInfo from '@/components/UX/LinkInfo/LinkInfo';
import Title from '@/components/UX/Title/Title';

/* Pucture */
import glass from '../../../../public/Travel/glass.png';
import slide1 from '../../../../public/Travel/slide1.png';
import airline from '../../../../public/Travel/airline.png';
import iconImg from '../../../../public/Travel/star.svg';

import './travel.scss';

export default function Travel() {
  const data = [
    {
      id: 1,
      titleTop: 'Shore',
      nameTop: 'Airlie Beach',
      country: 'Australia',
      titleBottom: 'Airline',
      nameBottom: 'Virgin Australia',
      icon: iconImg,
      slide: slide1,
      img: airline,
      imgWidth: 900,
      imgHeight: 400,
      data: [
        {
          nameValue: 'destination',
          value: 'Queensland Australia',
        },
        {
          nameValue: 'distance',
          value: '7,065 Miles',
        },
        {
          nameValue: 'time',
          value: '23 Hours 5\u00A0Minutes',
        },
        {
          nameValue: 'price',
          value: '$1,976 USD',
        },
      ],
    },

    {
      id: 2,
      titleTop: 'Shore',
      nameTop: 'Airlie Beach | Australia',
      titleBottom: 'Airline',
      nameBottom: 'Virgin Australia',
      icon: iconImg,
      slide: slide1,
      img: airline,
      imgWidth: 900,
      imgHeight: 400,
      data: [
        {
          nameValue: 'destination',
          value: 'Queensland Australia',
        },
        {
          nameValue: 'distance',
          value: '7,065 Miles',
        },
        {
          nameValue: 'time',
          value: '23 Hours 5\u00A0Minutes',
        },
        {
          nameValue: 'price',
          value: '$1,976 USD',
        },
      ],
    },
  ];

  return (
    <section className="travel">
      <div className="container">
        <Title title="Travel" />
      </div>
      <InfoSwiper info={data} />
      <div className="travel__bottom">
        <LinkInfo leftText="Book" rightText="Flight" />
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
