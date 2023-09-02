import Image from 'next/image';
import Title from '@/components/UX/Title/Title';
import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import LinkInfo from '@/components/UX/LinkInfo/LinkInfo';

/* Picture */
import flower from '../../../../public/Sleep/flower.png';
import slide1 from '../../../../public/Sleep/slide1.png';
import hammock from '../../../../public/Sleep/sleep.png';
import iconImg from '../../../../public/Sleep/star.svg';

import './sleep.scss';

export default function Sleep() {
  const data = [
    {
      id: 1,
      titleTop: 'Resorts',
      nameTop: 'Auberge',
      country: 'Australia',
      titleBottom: 'Rating',
      nameBottom: 'Excellent',
      icon: iconImg,
      slide: slide1,
      img: hammock,
      imgWidth: 600,
      imgHeight: 400,
      data: [
        {
          nameValue: 'Resort',
          value: 'Auberge Australia',
        },
        {
          nameValue: '# of Nights',
          value: '5 Nights',
        },
        {
          nameValue: '# of Guests',
          value: '4 Guests',
        },
        {
          nameValue: 'Pricing',
          value: '$349 USD',
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
      img: hammock,
      imgWidth: 600,
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
    <section className="sleep">
      <div className="container">
        <Title title="Sleep" />
      </div>
      <InfoSwiper info={data} />
      <div className="sleep__bottom">
        <LinkInfo leftText="Book" rightText="Stay" />
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
