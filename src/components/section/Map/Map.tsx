import Title from '@/components/UX/Title/Title';
import Subtitle from '@/components/UX/Subtitle/Subtitle';
import Image from 'next/image';
import './map.scss';

import map from '../../../../public/Map/map.png';
import points from '../../../../public/Map/Map.svg';

export default function Map() {
  return (
    <section className="map" id="map">
      <Title title="Surf" />
      <div className="container">
        <div className="map__subtitle">
          <Subtitle
            name="Current location"
            desc="California"
            country="USA"
            position={2}
          />
        </div>
        <div className="map__image">
          <Image
            src={map}
            fill
            alt=""
            sizes="100vw"
            className="map__back"
          />
          {/* <Image
            src={points}
            fill
            alt=""
            sizes="100vw"
            className="map__front"
          /> */}
          <svg
            className="points"
            width="100%"
            height="100%"
            viewBox="0 0 1303 637"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2220_6)">
              <g filter="url(#filter0_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1177.36 528C1184.23 528 1189.8 522.627 1189.8 516C1189.8 509.373 1184.23 504 1177.36 504C1170.48 504 1164.91 509.373 1164.91 516C1164.91 522.627 1170.48 528 1177.36 528Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter1_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1104.76 329C1111.63 329 1117.2 323.627 1117.2 317C1117.2 310.373 1111.63 305 1104.76 305C1097.88 305 1092.31 310.373 1092.31 317C1092.31 323.627 1097.88 329 1104.76 329Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter2_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M597.603 239C604.477 239 610.049 233.627 610.049 227C610.049 220.373 604.477 215 597.603 215C590.73 215 585.158 220.373 585.158 227C585.158 233.627 590.73 239 597.603 239Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter3_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M875.552 422C882.426 422 887.998 416.627 887.998 410C887.998 403.373 882.426 398 875.552 398C868.679 398 863.107 403.373 863.107 410C863.107 416.627 868.679 422 875.552 422Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter4_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M708.575 582C715.449 582 721.021 576.627 721.021 570C721.021 563.373 715.449 558 708.575 558C701.702 558 696.13 563.373 696.13 570C696.13 576.627 701.702 582 708.575 582Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter5_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M476.26 528C483.133 528 488.705 522.627 488.705 516C488.705 509.373 483.133 504 476.26 504C469.386 504 463.814 509.373 463.814 516C463.814 522.627 469.386 528 476.26 528Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter6_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M398.476 345C405.349 345 410.921 339.627 410.921 333C410.921 326.373 405.349 321 398.476 321C391.602 321 386.03 326.373 386.03 333C386.03 339.627 391.602 345 398.476 345Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter7_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.4455 357C41.3189 357 46.891 351.627 46.891 345C46.891 338.373 41.3189 333 34.4455 333C27.572 333 22 338.373 22 345C22 351.627 27.572 357 34.4455 357Z"
                  fill="#4AF6CD"
                />
              </g>
              <g filter="url(#filter8_d_2220_6)" className="point">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M188.977 317C195.85 317 201.422 311.627 201.422 305C201.422 298.373 195.85 293 188.977 293C182.103 293 176.531 298.373 176.531 305C176.531 311.627 182.103 317 188.977 317Z"
                  fill="#4AF6CD"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2220_6"
                x="1129.91"
                y="469"
                width="94.8909"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_2220_6"
                x="1057.31"
                y="270"
                width="94.8909"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_2220_6"
                x="550.158"
                y="180"
                width="94.8909"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_d_2220_6"
                x="828.107"
                y="363"
                width="94.891"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_d_2220_6"
                x="661.13"
                y="523"
                width="94.891"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_d_2220_6"
                x="428.814"
                y="469"
                width="94.891"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_d_2220_6"
                x="351.03"
                y="286"
                width="94.891"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_d_2220_6"
                x="-13"
                y="298"
                width="94.891"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <filter
                id="filter8_d_2220_6"
                x="141.531"
                y="258"
                width="94.891"
                height="94"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.289399 0 0 0 0 0.964817 0 0 0 0 0.803534 0 0 0 0.837777 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2220_6"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2220_6"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_2220_6">
                <rect width="1303" height="637" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
