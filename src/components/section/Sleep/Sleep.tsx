import Image from 'next/image';
import Title from '@/components/UX/Title/Title';
import InfoSwiper from '@/components/Swipers/InfoSwiper/InfoSwiper';
import LinkInfo from '@/components/UX/LinkInfo/LinkInfo';

/* Picture */
import flower from '../../../../public/Sleep/flower.png';
import slide1 from '../../../../public/Sleep/slide1.png';
import slide2 from '../../../../public/Sleep/slide2.png';
import slide3 from '../../../../public/Sleep/slide3.png';
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
      countryBottom: 'Australia',
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
      titleTop: 'Resorts',
      nameTop: 'Auberge',
      country: 'Australia',
      titleBottom: 'Rating',
      nameBottom: 'Excellent',
      countryBottom: 'Australia',
      icon: iconImg,
      slide: slide2,
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
          value: '1 Nights',
        },
        {
          nameValue: '# of Guests',
          value: '2 Guests',
        },
        {
          nameValue: 'Pricing',
          value: '$590 USD',
        },
      ],
    },
    {
      id: 3,
      titleTop: 'Resorts',
      nameTop: 'Auberge',
      country: 'Australia',
      titleBottom: 'Rating',
      nameBottom: 'Excellent',
      countryBottom: 'Australia',
      icon: iconImg,
      slide: slide3,
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
          value: '2 Nights',
        },
        {
          nameValue: '# of Guests',
          value: '2 Guests',
        },
        {
          nameValue: 'Pricing',
          value: '$150 USD',
        },
      ],
    },
  ];

  return (
    <section className="sleep" id="sleep">
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
