import MainSwiper from '../Swipers/MainSwiper/MainSwiper';
import Sidebar from '../layout/Sidebar/Sidebar';

import './banner.scss';

export default function Banner() {
  return (
    <section className="banner">
      <Sidebar />
      <MainSwiper />
    </section>
  );
}
