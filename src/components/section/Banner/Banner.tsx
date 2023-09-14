import MainSwiper from '../../Swipers/MainSwiper/MainSwiper';
import Sidebar from '../../layout/Sidebar/Sidebar';

/* Style */
import './Banner.scss';

/* Data */
import { beach } from './lib';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__text">go surf</div>
      <Sidebar />
      <MainSwiper slides={beach} />
    </section>
  );
}
