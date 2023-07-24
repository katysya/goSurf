import Link from 'next/link';
import Image from 'next/image';

import location from '../../../assets/images/banner/location.svg';
import surf from '../../../assets/images/banner/surf.svg';
import travel from '../../../assets/images/banner/travel.svg';
import sleep from '../../../assets/images/banner/sleep.svg';
import shop from '../../../assets/images/banner/shop.svg';

import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link href="/" className="sidebar__logo">
        <div className="sidebar__logo-top">
          <p className="sidebar__logo-text">surf</p>
        </div>
        <div className="sidebar__logo-bottom">
          <p className="sidebar__logo-text">Go</p>
        </div>
      </Link>
      <div className="sidebar__navigation">
        <ul className="sidebar__list">
          <li>
            <Link href="/" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={surf} width={60} height={50} alt="" />
              </div>
              <p className="sidebar__link-name">Surf</p>
            </Link>
          </li>
          <li>
            <Link href="/" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={travel} width={50} height={32} alt="" />
              </div>
              <p className="">Travel</p>
            </Link>
          </li>
          <li>
            <Link href="/" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={sleep} width={39} height={40} alt="" />
              </div>
              <p className="sidebar__link-name">Sleep</p>
            </Link>
          </li>
          <li>
            <Link href="/" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={shop} width={22} height={44} alt="" />
              </div>
              <p className="sidebar__link-name">Shop</p>
            </Link>
          </li>
        </ul>
        <div className="sidebar__date">
          <div className="sidebar__date-number">20</div>
          <div className="sidebar__date-monthAndYear">06 | 2023</div>
        </div>
        <div className="sidebar__location">
          <div className="sidebar__location-icon">
            <Image src={location} width={11} height={14} alt="" />
          </div>
          <div className="sidebar__location-city">California</div>
        </div>
      </div>
    </div>
  );
}
