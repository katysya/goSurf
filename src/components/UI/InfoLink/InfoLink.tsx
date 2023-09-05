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
        <Image src={arrow} width={25} height={20} alt="" />
      </div>
    </a>
  );
}
