import Image from 'next/image';
import './InfoLink.scss';

import arrow from '../../../../public/InfoLink/arrow.png';

interface dataLink {
  link: string;
  leftText: string;
  rightText: string;
}

export default function InfoLink({
  link,
  leftText,
  rightText,
}: dataLink) {
  return (
    <a href={link} className="linkInfo">
      <div className="linkInfo__left">{leftText}</div>
      <div className="linkInfo__right">
        {rightText}
        <div className="linkInfo__img">
          <Image src={arrow} fill alt="" />
        </div>
      </div>
    </a>
  );
}
