import ProductSwiper from '@/components/Swipers/ProductSwiper/ProductSwiper';
import Title from '../../UI/Title/Title';

/* Picture */
import surfBoard from '../../../../public/Shop/Surfboard.png';
import surfBoard1 from '../../../../public/Shop/Surfboard1.png';
import surfBoard2 from '../../../../public/Shop/Surfboard2.png';
import surfBoard3 from '../../../../public/Shop/Surfboard3.png';
import product1 from '../../../../public/Shop/product1.png';
import product2 from '../../../../public/Shop/product2.png';

export default function Shop() {
  const shop = [
    {
      id: 1,
      name: 'North Nugget Mint Surfboard',
      country: 'Australia',
      icon: '',
      price: '$699',
      img: surfBoard,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '60%',
            top: '10%',
          },
          desc: 'Nice mint color',
        },
        {
          id: 2,
          pos: {
            left: '50%',
            top: '40%',
          },
          desc: 'Double Concave with Vee Shape low point',
        },
        {
          id: 3,
          pos: {
            left: '13%',
            top: '60%',
          },
          desc: 'High level strength',
        },
      ],
      details: [
        {
          id: 1,
          img: product1,
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: product2,
          name: 'Pura Vida',
          price: '$27.99',
        },
      ],
    },
    {
      id: 2,
      name: 'North Nugget Gray Surfboard',
      country: 'Australia',
      icon: '',
      price: '$799',
      img: surfBoard1,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '30%',
            top: '8%',
          },
          desc: 'Elegant color without frills',
        },
        {
          id: 2,
          pos: {
            left: '70%',
            top: '40%',
          },
          desc: 'Triple Concave with Vee Shape low point',
        },
        {
          id: 3,
          pos: {
            left: '60%',
            top: '70%',
          },
          desc: 'Durable coating',
        },
      ],
      details: [
        {
          id: 1,
          img: product1,
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: product2,
          name: 'Pura Vida',
          price: '$27.99',
        },
      ],
    },
    {
      id: 3,
      name: 'North Nugget Blue Surfboard',
      country: 'Australia',
      icon: '',
      price: '$899',
      img: surfBoard2,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '30%',
            top: '7%',
          },
          desc: 'Bright color for bright emotions',
        },
        {
          id: 2,
          pos: {
            left: '70%',
            top: '40%',
          },
          desc: 'Warranty more than 1 year',
        },
        {
          id: 3,
          pos: {
            left: '20%',
            top: '50%',
          },
          desc: 'Durable coating',
        },
        {
          id: 4,
          pos: {
            left: '30%',
            top: '90%',
          },
          desc: 'Top quality',
        },
      ],
      details: [
        {
          id: 1,
          img: product1,
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: product2,
          name: 'Pura Vida',
          price: '$27.99',
        },
      ],
    },
    {
      id: 4,
      name: 'North Nugget Green Surfboard',
      country: 'Australia',
      icon: '',
      price: '$999',
      img: surfBoard3,
      link: '#',
      nameDetails: 'Extras',
      description: [
        {
          id: 1,
          pos: {
            left: '50%',
            top: '50%',
          },
          desc: 'Double Concave with Vee Shape low point',
        },
        {
          id: 2,
          pos: {
            left: '10%',
            top: '60%',
          },
          desc: 'High price',
        },
      ],
      details: [
        {
          id: 1,
          img: product1,
          name: 'Sex Wax',
          price: '$24.99',
        },
        {
          id: 2,
          img: product2,
          name: 'Pura Vida',
          price: '$27.99',
        },
      ],
    },
  ];

  return (
    <section className="shop" id="shop">
      <div className="container">
        <Title title="Shop" />
      </div>
      <ProductSwiper info={shop} />
    </section>
  );
}
