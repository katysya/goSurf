import Image from 'next/image';
import arrow from '../../../../public/InfoLink/arrow.png';

import './CardLink.scss';

interface dataCardLink {
  link: string;
  leftText: string;
  rightText: string;
}

export default function CardLink({
  link,
  leftText,
  rightText,
}: dataCardLink) {
  return (
    <a href={link} className="cardLink">
      <div className="cardLink__left">{leftText}</div>
      <div className="cardLink__right">
        <div>{rightText}</div>
        <div className="cardLink__arrow">
          <Image src={arrow} fill alt="" />
        </div>
      </div>
    </a>
  );
}
