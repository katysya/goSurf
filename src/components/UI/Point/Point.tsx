import Image from 'next/image';

import './Point.scss';

import Surf from '../../../../public/Map/Surf.svg';
import Water from '../../../../public/Map/Water.svg';
import Winde from '../../../../public/Map/Wind.svg';
import Arrow from '../../../../public/Map/Arrow.svg';

interface IPoint {
  id: Number;
  position: Object;
  beach: String;
  place: String;
  surf: String;
  tide: String;
  wind: String;
}

export default function Point({
  id,
  position,
  beach,
  place,
  surf,
  tide,
  wind,
}: IPoint) {
  return (
    <div className="point" style={position}>
      <div className="point__info">
        <div className="point__beach">
          <div className="point__top">
            <div className="point__arrow">
              <div className="point__name">{beach}</div>
              <div className="point__arrow-img">
                <Image src={Arrow} alt="" fill />
              </div>
            </div>
            <div className="point__place">{place}</div>
          </div>
          <div className="point__data">
            <div className="point__data-block">
              <div className="point__data-block-img">
                <Image src={Surf} alt="" fill />
              </div>
              <p className="point__data-block-name">{surf}</p>
              <p className="point__data-block-desc">Surf (FT)</p>
            </div>
            <div className="point__data-block">
              <div className="point__data-block-img">
                <Image src={Water} alt="" fill />
              </div>
              <p className="point__data-block-name">{tide}</p>
              <p className="point__data-block-desc">Surf (FT)</p>
            </div>
            <div className="point__data-block">
              <div className="point__data-block-img">
                <Image src={Winde} alt="" fill />
              </div>
              <p className="point__data-block-name">{wind}</p>
              <p className="point__data-block-desc">Surf (FT)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="point__circle"></div>
    </div>
  );
}
