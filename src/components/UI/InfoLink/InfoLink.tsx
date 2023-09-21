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
      <div className="linkInfo__right button" data-text="Awesome">
        <div className="actual-text">
          <div>&nbsp;{rightText}</div>
          <div className="linkInfo__img down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
            >
              <path
                d="M15.3689 19.5872L23.5825 11.4365C24.3349 10.6853 24.3349 9.46609 23.5825 8.71746L15.3689 0.561846C14.6102 -0.189295 13.3821 -0.185526 12.6235 0.561846C11.8723 1.31424 11.8723 2.52844 12.6235 3.28084L17.4286 8.04826L2.0144 8.04826C0.900896 8.04826 1.14441e-05 8.94789 1.14441e-05 10.0614C1.14441e-05 11.1736 0.900896 12.0745 2.0144 12.0745L17.4576 12.0745L12.6235 16.8671C11.8723 17.6182 11.8723 18.8337 12.6235 19.5848C13.3809 20.3372 14.6089 20.3385 15.3689 19.5873V19.5872Z"
                fill="transparent"
              />
            </svg>
          </div>
          &nbsp;
        </div>
        <div className="hover-text" aria-hidden="true">
          <div>&nbsp;{rightText}</div>
          <div className="linkInfo__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
            >
              <path
                d="M15.3689 19.5872L23.5825 11.4365C24.3349 10.6853 24.3349 9.46609 23.5825 8.71746L15.3689 0.561846C14.6102 -0.189295 13.3821 -0.185526 12.6235 0.561846C11.8723 1.31424 11.8723 2.52844 12.6235 3.28084L17.4286 8.04826L2.0144 8.04826C0.900896 8.04826 1.14441e-05 8.94789 1.14441e-05 10.0614C1.14441e-05 11.1736 0.900896 12.0745 2.0144 12.0745L17.4576 12.0745L12.6235 16.8671C11.8723 17.6182 11.8723 18.8337 12.6235 19.5848C13.3809 20.3372 14.6089 20.3385 15.3689 19.5873V19.5872Z"
                fill="#4af6cd"
              />
            </svg>
          </div>
          &nbsp;
        </div>
      </div>
    </a>
  );
}
