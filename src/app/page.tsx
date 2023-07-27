import Banner from '@/components/Banner/Banner';
import MainSwiper from '@/components/Swipers/MainSwiper/MainSwiper';
import BeachSwiper from '@/components/Swipers/BeachSwiper/BeachSwiper';
import '../assets/styles/main.scss';

export default function Home() {
  return (
    <div>
      <Banner />
      <MainSwiper />
      <BeachSwiper />
    </div>
  );
}
