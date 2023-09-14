import Link from 'next/link';
import Image from 'next/image';

import location from '../../../../public/Sidebar/location.svg';
import surf from '../../../../public/Sidebar/surf.svg';
import travel from '../../../../public/Sidebar/travel.svg';
import sleep from '../../../../public/Sidebar/sleep.svg';
import shop from '../../../../public/Sidebar/shop.svg';

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
            <a href="#map" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={surf} width={60} height={50} alt="" />
              </div>
              <p className="sidebar__link-name">Surf</p>
            </a>
          </li>
          <li>
            <a href="#travel" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={travel} width={50} height={32} alt="" />
              </div>
              <p className="">Travel</p>
            </a>
          </li>
          <li>
            <a href="#sleep" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={sleep} width={39} height={40} alt="" />
              </div>
              <p className="sidebar__link-name">Sleep</p>
            </a>
          </li>
          <li>
            <a href="#shop" className="sidebar__link">
              <div className="sidebar__link-img">
                <Image src={shop} width={22} height={44} alt="" />
              </div>
              <p className="sidebar__link-name">Shop</p>
            </a>
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
