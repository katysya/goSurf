import Banner from '@/components/Banner/Banner';
import BeachSwiper from '@/components/Swipers/BeachSwiper/BeachSwiper';
import Map from '@/components/section/Map/Map';
import Travel from '@/components/section/Travel/Travel';
import '../assets/styles/main.scss';

export default function Home() {
  return (
    <div>
      <Banner />
      <Map />
      <BeachSwiper />
      <Travel />
    </div>
  );
}
