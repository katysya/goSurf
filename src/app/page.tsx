import Banner from '@/components/Banner/Banner';
import MainSwiper from '@/components/Swipers/MainSwiper/MainSwiper';
import BeachSwiper from '@/components/Swipers/BeachSwiper/BeachSwiper';
import Map from '@/components/section/Map/Map';
import '../assets/styles/main.scss';

export default function Home() {
  return (
    <div>
      <Banner />
      <Map />
      <BeachSwiper />
    </div>
  );
}
