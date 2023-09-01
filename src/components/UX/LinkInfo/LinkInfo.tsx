import Image from 'next/image';
import './linkinfo.scss';

import arrow from '../../../../public/LinkInfo/arrow.png';

interface dataLink {
  link: string;
  leftText: string;
  rightText: string;
}

export default function LinkInfo(props: dataLink) {
  return (
    <a href={props.link} className="linkInfo">
      <div className="linkInfo__left">{props.leftText}</div>
      <div className="linkInfo__right">
        {props.rightText}
        <Image src={arrow} width={25} height={20} alt="" />
      </div>
    </a>
  );
}
