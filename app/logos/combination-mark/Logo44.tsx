import React from "react";

export default function Logo44({
  fill = "#231F20",
  width = "229",
  height = "68",
  stroke = "#D9D9D9",
}: {
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.7344 65.9999H66.0772V28.0947L42.3256 38.2983L35.7344 65.9999Z"
        fill={fill}
        stroke={stroke}
        stroke-width="4"
      />
      <path
        d="M2.03027 55.0156V65.9999H34.0329L40.589 38.458L2.03027 55.0156Z"
        fill={fill}
        stroke={stroke}
        stroke-width="4"
      />
      <mask
        id="mask0_209_377"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="35"
        width="44"
        height="33"
      >
        <path
          d="M2.03027 55.0156V65.9999H34.0329L40.589 38.458L2.03027 55.0156Z"
          fill="white"
          stroke="white"
          stroke-width="4"
        />
      </mask>
      <g mask="url(#mask0_209_377)"></g>
      <path
        d="M49.3651 33.0897L66.0465 26.0022V2H31.5957L49.3651 33.0897Z"
        fill={fill}
        stroke={stroke}
        stroke-width="4"
      />
      <mask
        id="mask1_209_377"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="28"
        y="0"
        width="41"
        height="36"
      >
        <path
          d="M49.3651 33.0897L66.0465 26.0022V2H31.5957L49.3651 33.0897Z"
          fill="white"
          stroke="white"
          stroke-width="4"
        />
      </mask>
      <g mask="url(#mask1_209_377)"></g>
      <path
        d="M47.3742 33.7742L29.5768 2.09338H2V53.256L47.3742 33.7742Z"
        fill={fill}
        stroke={stroke}
        stroke-width="4"
      />
      <path
        d="M79.4 33C79.4 30.2533 80.0133 27.8 81.24 25.64C82.4933 23.4533 84.1867 21.76 86.32 20.56C88.48 19.3333 90.8933 18.72 93.56 18.72C96.68 18.72 99.4133 19.52 101.76 21.12C104.107 22.72 105.747 24.9333 106.68 27.76H100.24C99.6 26.4267 98.6933 25.4267 97.52 24.76C96.3733 24.0933 95.04 23.76 93.52 23.76C91.8933 23.76 90.44 24.1467 89.16 24.92C87.9067 25.6667 86.92 26.7333 86.2 28.12C85.5067 29.5067 85.16 31.1333 85.16 33C85.16 34.84 85.5067 36.4667 86.2 37.88C86.92 39.2667 87.9067 40.3467 89.16 41.12C90.44 41.8667 91.8933 42.24 93.52 42.24C95.04 42.24 96.3733 41.9067 97.52 41.24C98.6933 40.5467 99.6 39.5333 100.24 38.2H106.68C105.747 41.0533 104.107 43.28 101.76 44.88C99.44 46.4533 96.7067 47.24 93.56 47.24C90.8933 47.24 88.48 46.64 86.32 45.44C84.1867 44.2133 82.4933 42.52 81.24 40.36C80.0133 38.2 79.4 35.7467 79.4 33ZM116.263 28.28C116.983 27.1067 117.916 26.1867 119.063 25.52C120.236 24.8533 121.57 24.52 123.063 24.52V30.4H121.583C119.823 30.4 118.49 30.8133 117.583 31.64C116.703 32.4667 116.263 33.9067 116.263 35.96V47H110.663V24.84H116.263V28.28ZM124.595 35.84C124.595 33.6 125.035 31.6133 125.915 29.88C126.822 28.1467 128.035 26.8133 129.555 25.88C131.102 24.9467 132.822 24.48 134.715 24.48C136.368 24.48 137.808 24.8133 139.035 25.48C140.288 26.1467 141.288 26.9867 142.035 28V24.84H147.675V47H142.035V43.76C141.315 44.8 140.315 45.6667 139.035 46.36C137.782 47.0267 136.328 47.36 134.675 47.36C132.808 47.36 131.102 46.88 129.555 45.92C128.035 44.96 126.822 43.6133 125.915 41.88C125.035 40.12 124.595 38.1067 124.595 35.84ZM142.035 35.92C142.035 34.56 141.768 33.4 141.235 32.44C140.702 31.4533 139.982 30.7067 139.075 30.2C138.168 29.6667 137.195 29.4 136.155 29.4C135.115 29.4 134.155 29.6533 133.275 30.16C132.395 30.6667 131.675 31.4133 131.115 32.4C130.582 33.36 130.315 34.5067 130.315 35.84C130.315 37.1733 130.582 38.3467 131.115 39.36C131.675 40.3467 132.395 41.1067 133.275 41.64C134.182 42.1733 135.142 42.44 136.155 42.44C137.195 42.44 138.168 42.1867 139.075 41.68C139.982 41.1467 140.702 40.4 141.235 39.44C141.768 38.4533 142.035 37.28 142.035 35.92ZM162.504 29.44H158.624V47H152.944V29.44H150.424V24.84H152.944V23.72C152.944 21 153.718 19 155.264 17.72C156.811 16.44 159.144 15.84 162.264 15.92V20.64C160.904 20.6133 159.958 20.84 159.424 21.32C158.891 21.8 158.624 22.6667 158.624 23.92V24.84H162.504V29.44ZM171.853 29.44V40.16C171.853 40.9067 172.027 41.4533 172.373 41.8C172.747 42.12 173.36 42.28 174.213 42.28H176.813V47H173.293C168.573 47 166.213 44.7067 166.213 40.12V29.44H163.573V24.84H166.213V19.36H171.853V24.84H176.813V29.44H171.853ZM200.641 35.44C200.641 36.24 200.588 36.96 200.481 37.6H184.281C184.415 39.2 184.975 40.4533 185.961 41.36C186.948 42.2667 188.161 42.72 189.601 42.72C191.681 42.72 193.161 41.8267 194.041 40.04H200.081C199.441 42.1733 198.215 43.9333 196.401 45.32C194.588 46.68 192.361 47.36 189.721 47.36C187.588 47.36 185.668 46.8933 183.961 45.96C182.281 45 180.961 43.6533 180.001 41.92C179.068 40.1867 178.601 38.1867 178.601 35.92C178.601 33.6267 179.068 31.6133 180.001 29.88C180.935 28.1467 182.241 26.8133 183.921 25.88C185.601 24.9467 187.535 24.48 189.721 24.48C191.828 24.48 193.708 24.9333 195.361 25.84C197.041 26.7467 198.335 28.04 199.241 29.72C200.175 31.3733 200.641 33.28 200.641 35.44ZM194.841 33.84C194.815 32.4 194.295 31.2533 193.281 30.4C192.268 29.52 191.028 29.08 189.561 29.08C188.175 29.08 187.001 29.5067 186.041 30.36C185.108 31.1867 184.535 32.3467 184.321 33.84H194.841ZM202.489 35.84C202.489 33.6 202.929 31.6133 203.809 29.88C204.715 28.1467 205.942 26.8133 207.489 25.88C209.035 24.9467 210.755 24.48 212.649 24.48C214.089 24.48 215.462 24.8 216.769 25.44C218.075 26.0533 219.115 26.88 219.889 27.92V17.4H225.569V47H219.889V43.72C219.195 44.8133 218.222 45.6933 216.969 46.36C215.715 47.0267 214.262 47.36 212.609 47.36C210.742 47.36 209.035 46.88 207.489 45.92C205.942 44.96 204.715 43.6133 203.809 41.88C202.929 40.12 202.489 38.1067 202.489 35.84ZM219.929 35.92C219.929 34.56 219.662 33.4 219.129 32.44C218.595 31.4533 217.875 30.7067 216.969 30.2C216.062 29.6667 215.089 29.4 214.049 29.4C213.009 29.4 212.049 29.6533 211.169 30.16C210.289 30.6667 209.569 31.4133 209.009 32.4C208.475 33.36 208.209 34.5067 208.209 35.84C208.209 37.1733 208.475 38.3467 209.009 39.36C209.569 40.3467 210.289 41.1067 211.169 41.64C212.075 42.1733 213.035 42.44 214.049 42.44C215.089 42.44 216.062 42.1867 216.969 41.68C217.875 41.1467 218.595 40.4 219.129 39.44C219.662 38.4533 219.929 37.28 219.929 35.92Z"
        fill={fill}
      />
    </svg>
  );
}
