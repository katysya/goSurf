import MainSwiper from '../../Swipers/MainSwiper/MainSwiper';
import Sidebar from '../../layout/Sidebar/Sidebar';

import './Banner.scss';

import { beach } from './lib';

export default function Banner() {
  return (
    <section className="banner">
      <Sidebar />
      <MainSwiper slides={beach} />
    </section>
  );
}
