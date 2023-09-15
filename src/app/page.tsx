import Banner from '@/components/section/Banner/Banner';
import BeachSwiper from '@/components/Swipers/BeachSwiper/BeachSwiper';
import Map from '@/components/section/Map/Map';
import Travel from '@/components/section/Travel/Travel';
import Sleep from '@/components/section/Sleep/Sleep';
import Shop from '@/components/section/Shop/Shop';
import Footer from '@/components/section/Footer/Footer';

import '../assets/styles/main.scss';

export default function Home() {
  return (
    <div>
      <Banner />
      <Map />
      {/* <BeachSwiper />
      <Travel />
      <Sleep />
      <Shop /> */}
      <Footer />
    </div>
  );
}
