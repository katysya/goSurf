import Image from 'next/image';
import './banner.scss';

export default function Banner() {
  return (
    <section className="banner">
      {/* <Image
      src="banner.jpg"
      width={500}
      height={500}
      alt="Banner"
    /> */}

      <div className="banner__bottom">
        <div className="banner__bottom-block">
          <div className="banner__name">
            <p className="banner__subtitle">Surf</p>
            <h1 className="banner__title">West Shore</h1>
          </div>
          <div className="banner__next">
            <p className="banner__subtitle">Condition</p>
            <p className="banner__text">Radical</p>
            <button className="banner__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="21"
                viewBox="0 0 25 21"
                fill="none"
              >
                <path
                  d="M15.3688 19.5874L23.5824 11.4366C24.3348 10.6854 24.3348 9.46621 23.5824 8.71758L15.3688 0.561968C14.6101 -0.189173 13.3821 -0.185404 12.6234 0.561968C11.8723 1.31437 11.8723 2.52856 12.6234 3.28096L17.4285 8.04838L2.01437 8.04838C0.900866 8.04838 -1.90735e-05 8.94802 -1.90735e-05 10.0615C-1.90735e-05 11.1738 0.900866 12.0747 2.01437 12.0747L17.4575 12.0747L12.6234 16.8672C11.8723 17.6183 11.8723 18.8338 12.6234 19.5849C13.3809 20.3373 14.6089 20.3386 15.3688 19.5875V19.5874Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="banner__shores">
          <div className="banner__shores-item">
            <div className="banner__shores-bar"></div>
            <div className="banner__shores-info">
              <p className="banner__shores-number">01</p>
              <p className="banner__shores-name">North Shore</p>
            </div>
          </div>

          <div className="banner__shores-item">
            <div className="banner__shores-bar"></div>
            <div className="banner__shores-info">
              <p className="banner__shores-number">02</p>
              <p className="banner__shores-name">South Shore</p>
            </div>
          </div>

          <div className="banner__shores-item">
            <div className="banner__shores-bar"></div>
            <div className="banner__shores-info">
              <p className="banner__shores-number">03</p>
              <p className="banner__shores-name">West Shore</p>
            </div>
          </div>

          <div className="banner__shores-item">
            <div className="banner__shores-bar"></div>
            <div className="banner__shores-info">
              <p className="banner__shores-number">04</p>
              <p className="banner__shores-name">East Shore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
