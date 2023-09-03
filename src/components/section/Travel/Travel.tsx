import Image from 'next/image';

import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import LinkInfo from '@/components/UX/LinkInfo/LinkInfo';
import Title from '@/components/UX/Title/Title';

/* Pucture */
import glass from '../../../../public/Travel/glass.png';
import slide1 from '../../../../public/Travel/slide1.png';
import slide2 from '../../../../public/Travel/slide2.png';
import slide3 from '../../../../public/Travel/slide3.png';
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
      nameBottom: 'Virgin',
      countryBottom: 'Australia',
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
          value: '7,000Miles',
        },
        {
          nameValue: 'time',
          value: '3 Hours 5\u00A0Minutes',
        },
        {
          nameValue: 'price',
          value: '$1,111 USD',
        },
      ],
    },

    {
      id: 2,
      titleTop: 'Shore',
      nameTop: 'Airlie Beach | Australia',
      country: 'Australia',
      titleBottom: 'Airline',
      nameBottom: 'Virgin Australia',
      icon: iconImg,
      slide: slide2,
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
          value: '3,065 Miles',
        },
        {
          nameValue: 'time',
          value: '4 Hours 5\u00A0Minutes',
        },
        {
          nameValue: 'price',
          value: '$4,976 USD',
        },
      ],
    },

    {
      id: 3,
      titleTop: 'Shore',
      nameTop: 'Airlie Beach | Australia',
      country: 'Australia',
      titleBottom: 'Airline',
      nameBottom: 'Virgin Australia',
      icon: iconImg,
      slide: slide3,
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
          value: '5,055 Miles',
        },
        {
          nameValue: 'time',
          value: '2 Hours 5\u00A0Minutes',
        },
        {
          nameValue: 'price',
          value: '$1,006 USD',
        },
      ],
    },
  ];

  return (
    <section className="travel" id="travel">
      <div className="container">
        <Title title="Travel" />
      </div>
      <InfoSwiper info={data} />
      <div className="travel__bottom">
        <LinkInfo link="#" leftText="Book" rightText="Flight" />
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
