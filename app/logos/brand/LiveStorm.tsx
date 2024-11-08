import React from "react";
export default function LiveStorm({
  width = "100",
  height = "17",
  className = "",
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_401_1864)">
        <path
          d="M23.2373 3.17432V14.3314H30.9312V12.1062H25.8385V3.17432H23.2373Z"
          fill="#12262B"
        />
        <path
          d="M32.4801 4.81949C32.7309 5.07021 33.0756 5.19558 33.4831 5.19558C33.8904 5.19558 34.2195 5.07021 34.4859 4.81949C34.7366 4.56878 34.8776 4.2397 34.8776 3.83228C34.8776 3.44053 34.7366 3.11147 34.4859 2.86074C34.2195 2.61002 33.8904 2.46899 33.4831 2.46899C33.0756 2.46899 32.7309 2.61002 32.4801 2.86074C32.2138 3.11147 32.0884 3.44053 32.0884 3.83228C32.0884 4.2397 32.2138 4.56878 32.4801 4.81949ZM32.3234 6.30814V14.3312H34.6426V6.30814H32.3234Z"
          fill="#12262B"
        />
        <path
          d="M35.6997 6.30811L38.489 14.3312H41.8423L44.6317 6.30811H42.2027L40.2441 12.4351H40.0873L38.1443 6.30811H35.6997Z"
          fill="#12262B"
        />
        <path
          d="M47.115 14.0491C47.7889 14.4095 48.5567 14.5818 49.4186 14.5818C50.3901 14.5818 51.2363 14.3781 51.9571 13.9707C52.6779 13.5633 53.1637 12.9835 53.4145 12.2627L51.44 11.7612C51.252 12.106 51.0012 12.3724 50.6722 12.5604C50.3274 12.7641 49.9513 12.8582 49.5126 12.8582C48.9484 12.8582 48.4627 12.7014 48.0866 12.3568C47.7106 12.0277 47.4754 11.5732 47.3815 10.9934H53.6809C53.6965 10.8838 53.7122 10.6487 53.7122 10.2883C53.7122 9.45776 53.5241 8.72128 53.1637 8.0788C52.8033 7.452 52.3019 6.95056 51.6438 6.59015C50.9856 6.24541 50.2491 6.05737 49.4029 6.05737C48.541 6.05737 47.7733 6.24541 47.115 6.59015C46.4413 6.93489 45.9241 7.43633 45.5481 8.06313C45.172 8.70561 44.9839 9.44209 44.9839 10.2569C44.9839 11.1031 45.172 11.8552 45.5481 12.5134C45.9241 13.1715 46.4413 13.6886 47.115 14.0491ZM51.346 9.55179H47.3658C47.4598 9.019 47.6792 8.58025 48.0239 8.26684C48.3687 7.95345 48.8074 7.78107 49.3402 7.78107C49.873 7.78107 50.3118 7.95345 50.6878 8.28251C51.0482 8.61158 51.2676 9.03467 51.346 9.55179Z"
          fill="#12262B"
        />
        <path
          d="M55.8271 13.8297C56.501 14.3626 57.4411 14.6132 58.6321 14.6132C59.8074 14.6132 60.7319 14.3782 61.4057 13.8924C62.0795 13.4223 62.4242 12.7486 62.4242 11.8867C62.4242 11.2912 62.2519 10.8368 61.9385 10.4921C61.6251 10.1473 61.2333 9.91228 60.7633 9.77125C60.2931 9.63022 59.7603 9.52053 59.1493 9.44218C58.5851 9.3795 58.1777 9.33249 57.9426 9.28548C57.7076 9.25414 57.5038 9.17579 57.3159 9.05043C57.1278 8.92507 57.0494 8.7527 57.0494 8.51765C57.0494 8.23559 57.1748 8.00054 57.4411 7.82817C57.6919 7.6558 58.0367 7.56177 58.4754 7.56177C58.9455 7.56177 59.3216 7.67147 59.6036 7.89085C59.8857 8.11023 60.0424 8.39228 60.0581 8.73702H62.1736C62.1736 8.20425 62.0168 7.71848 61.7034 7.31106C61.39 6.90364 60.9513 6.57457 60.3871 6.35519C59.823 6.13581 59.1806 6.02612 58.4754 6.02612C57.3942 6.02612 56.5323 6.27684 55.8742 6.76261C55.2161 7.24838 54.9026 7.89085 54.9026 8.70569C54.9026 9.34816 55.075 9.83393 55.4198 10.1787C55.7645 10.5234 56.1562 10.7585 56.6264 10.8838C57.0964 11.0092 57.6605 11.1032 58.35 11.1658C58.9612 11.2285 59.4156 11.3226 59.7134 11.4322C59.9954 11.542 60.1521 11.7613 60.1521 12.0905C60.1521 12.4038 60.0111 12.6388 59.7447 12.8112C59.4783 12.9992 59.1335 13.0777 58.6948 13.0777C58.1306 13.0777 57.6763 12.9523 57.3472 12.6859C57.0181 12.4351 56.8614 12.0905 56.8614 11.6516H54.8086C54.8086 12.5761 55.1377 13.297 55.8271 13.8297Z"
          fill="#12262B"
        />
        <path
          d="M65.223 13.7986C65.6932 14.3314 66.3356 14.582 67.1505 14.582C67.3855 14.582 67.6519 14.5664 67.9496 14.5195C68.2317 14.4724 68.4981 14.4097 68.7175 14.3314V12.6703C68.4041 12.7487 68.1221 12.7801 67.887 12.7801C67.558 12.7801 67.2915 12.686 67.1035 12.4822C66.9155 12.2786 66.8214 11.9966 66.8214 11.6518V8.00068H68.6548V6.30831H66.8214L66.837 3.76978H65.0194L64.5649 6.30831H63.374V8.00068H64.5022V11.7458C64.5022 12.592 64.7373 13.2815 65.223 13.7986Z"
          fill="#12262B"
        />
        <path
          d="M71.7057 14.0648C72.3639 14.4095 73.1474 14.5818 74.0405 14.5818C74.9181 14.5818 75.686 14.4095 76.3597 14.0648C77.0336 13.72 77.5506 13.2186 77.9268 12.5761C78.3028 11.9337 78.4909 11.1815 78.4909 10.3196C78.4909 9.47344 78.3028 8.72128 77.9268 8.0788C77.5506 7.43633 77.0336 6.93489 76.3597 6.59015C75.686 6.24541 74.9181 6.05737 74.0405 6.05737C73.1474 6.05737 72.3639 6.24541 71.7057 6.59015C71.032 6.93489 70.5148 7.43633 70.1387 8.0788C69.7627 8.72128 69.5903 9.47344 69.5903 10.3196C69.5903 11.1815 69.7627 11.9337 70.1387 12.5761C70.5148 13.2186 71.032 13.72 71.7057 14.0648ZM75.5606 11.965C75.1531 12.4037 74.6517 12.6074 74.0405 12.6074C73.4138 12.6074 72.8966 12.4037 72.5049 11.965C72.0975 11.5419 71.9094 10.9934 71.9094 10.3196C71.9094 9.66147 72.0975 9.11302 72.5049 8.68993C72.8966 8.26684 73.4138 8.04746 74.0405 8.04746C74.6517 8.04746 75.1531 8.26684 75.5606 8.68993C75.9524 9.11302 76.1561 9.66147 76.1561 10.3196C76.1561 10.9934 75.9524 11.5419 75.5606 11.965Z"
          fill="#12262B"
        />
        <path
          d="M79.8979 6.30829V14.3314H82.217V10.2258C82.217 9.61467 82.3738 9.11324 82.6872 8.72149C83.0006 8.34541 83.408 8.14169 83.9251 8.14169C84.0975 8.14169 84.3012 8.17303 84.552 8.22004C84.8026 8.28272 85.022 8.34541 85.2414 8.43943V6.35531C84.9593 6.22995 84.6616 6.15161 84.3326 6.15161C83.9094 6.15161 83.5177 6.27696 83.1573 6.49634C82.7969 6.73138 82.5305 7.02913 82.3581 7.40521H82.1857V6.30829H79.8979Z"
          fill="#12262B"
        />
        <path
          d="M86.4624 6.30809V14.3312H88.7815V9.7555C88.7815 9.25405 88.9069 8.83096 89.189 8.51757C89.4553 8.20416 89.8158 8.04746 90.2858 8.04746C90.7247 8.04746 91.0693 8.20416 91.3357 8.51757C91.5865 8.83096 91.7275 9.23838 91.7275 9.7555V14.3312H94.0623V9.7555C94.0623 9.25405 94.2034 8.84664 94.4854 8.53323C94.7675 8.21984 95.1435 8.04746 95.598 8.04746C96.0368 8.06313 96.3972 8.23551 96.6792 8.5489C96.9613 8.86231 97.1023 9.26973 97.1023 9.7555V14.3312H99.4215V9.36374C99.4215 8.73694 99.2804 8.15716 99.0298 7.65571C98.7634 7.15427 98.403 6.7782 97.9485 6.49614C97.4785 6.21408 96.9613 6.07305 96.3815 6.07305C95.8174 6.07305 95.316 6.21408 94.8772 6.48046C94.4384 6.74685 94.1094 7.10726 93.8586 7.57736H93.7019C93.4826 7.12294 93.1535 6.76252 92.6991 6.48046C92.2446 6.1984 91.7588 6.05737 91.2417 6.05737C90.7403 6.05737 90.2858 6.1984 89.8785 6.44912C89.471 6.71552 89.1419 7.06026 88.9226 7.49901H88.7659V6.30809H86.4624Z"
          fill="#12262B"
        />
        <path
          d="M16.8101 8.40492C16.8101 10.7266 16.888 13.4302 15.1599 15.1641C13.4319 16.898 10.7268 16.8098 8.40517 16.8098C6.08353 16.8098 3.37985 16.8877 1.64598 15.1597C-0.0879004 13.4317 0.00026293 10.7266 0.00026293 8.40492C0.00026293 6.08329 -0.0761453 3.37961 1.65186 1.64573C3.37985 -0.0881445 6.08501 1.87939e-05 8.40517 1.87939e-05C10.7253 1.87939e-05 13.4305 -0.0763894 15.1644 1.65161C16.8982 3.37962 16.8101 6.08476 16.8101 8.40492Z"
          fill="#12262B"
        />
        <path
          d="M9.35279 4.01147H3.9763C3.50074 4.01147 3.11523 4.39698 3.11523 4.87254C3.11523 5.34809 3.50074 5.7336 3.9763 5.7336H9.35279C9.82835 5.7336 10.2139 5.34809 10.2139 4.87254C10.2139 4.39698 9.82835 4.01147 9.35279 4.01147Z"
          fill="white"
        />
        <path
          d="M11.113 7.5437H5.73656C5.26102 7.5437 4.87549 7.92921 4.87549 8.40476C4.87549 8.88032 5.26102 9.26583 5.73656 9.26583H11.113C11.5886 9.26583 11.9741 8.88032 11.9741 8.40476C11.9741 7.92921 11.5886 7.5437 11.113 7.5437Z"
          fill="white"
        />
        <path
          d="M9.35264 11.0776H7.49681C7.02125 11.0776 6.63574 11.4632 6.63574 11.9387C6.63574 12.4143 7.02125 12.7998 7.49681 12.7998H9.35264C9.82819 12.7998 10.2137 12.4143 10.2137 11.9387C10.2137 11.4632 9.82819 11.0776 9.35264 11.0776Z"
          fill="white"
        />
        <path
          d="M13.6962 4.87254C13.6962 4.39698 13.3107 4.01147 12.8352 4.01147C12.3596 4.01147 11.9741 4.39698 11.9741 4.87254C11.9741 5.34809 12.3596 5.7336 12.8352 5.7336C13.3107 5.7336 13.6962 5.34809 13.6962 4.87254Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_1864">
          <rect width="100" height="16.8113" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
