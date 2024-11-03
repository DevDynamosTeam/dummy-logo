export default function Linkedin({
  width = "100",
  height = "16",
}: {
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
      <g clip-path="url(#clip0_401_1897)">
        <path
          d="M96.1266 21.564H92.3766V15.6913C92.3766 14.2909 92.3516 12.4882 90.4262 12.4882C88.473 12.4882 88.1742 14.014 88.1742 15.5894V21.5636H84.4242V9.48702H88.0242V11.1374H88.0746C88.4348 10.5214 88.9555 10.0147 89.5809 9.67116C90.2066 9.3276 90.9133 9.16018 91.6266 9.18663C95.4273 9.18663 96.1281 11.6866 96.1281 14.939L96.1266 21.564ZM80.193 7.83624C79.7625 7.83631 79.3418 7.70878 78.984 7.46971C78.6258 7.23065 78.3469 6.89085 78.182 6.49323C78.0176 6.09561 77.9742 5.65807 78.0582 5.23592C78.1422 4.81378 78.3492 4.42596 78.6535 4.12155C78.9578 3.81717 79.3457 3.60984 79.7676 3.52579C80.1898 3.44175 80.6273 3.48477 81.025 3.6494C81.4227 3.81404 81.7625 4.09292 82.002 4.45073C82.241 4.80854 82.3688 5.22928 82.3688 5.65967C82.3688 5.94545 82.3125 6.22846 82.2031 6.49249C82.0938 6.75655 81.9336 6.99647 81.7316 7.19858C81.5297 7.40069 81.2898 7.56104 81.0258 7.67045C80.7617 7.77987 80.4789 7.8362 80.193 7.83624ZM82.068 21.564H78.3141V9.48702H82.068V21.564ZM97.9961 0.00147951H76.4297C75.9402 -0.00404446 75.4684 0.184993 75.1184 0.527052C74.768 0.869111 74.568 1.33621 74.5621 1.8257V23.4815C74.568 23.9713 74.768 24.4387 75.118 24.7811C75.4684 25.1235 75.9398 25.313 76.4297 25.3077H97.9961C98.4867 25.3139 98.9598 25.125 99.3113 24.7826C99.6629 24.4402 99.8645 23.9723 99.8711 23.4815V1.82413C99.8641 1.33367 99.6625 0.866048 99.3109 0.523997C98.9594 0.181946 98.4867 -0.00655161 97.9961 -8.29886e-05V0.00147951ZM64.3555 12.4019C62.4805 12.4019 61.3555 13.6538 61.3555 15.478C61.3555 17.3023 62.4801 18.5554 64.3555 18.5554C66.2309 18.5554 67.3582 17.3054 67.3582 15.478C67.3582 13.6507 66.2328 12.4019 64.3555 12.4019ZM70.8105 21.5569H67.3582V19.9554H67.307C66.8738 20.5379 66.3121 21.0126 65.6656 21.3424C65.0188 21.6723 64.3047 21.8483 63.5789 21.8569C59.9758 21.8569 57.6023 19.2565 57.6023 15.5792C57.6023 12.2019 59.7027 9.10069 63.1555 9.10069C64.7074 9.10069 66.157 9.5253 67.0074 10.7023H67.0566V3.74093H70.8102L70.8105 21.5569ZM52.7875 14.1163C52.7945 13.8121 52.7398 13.5096 52.627 13.2271C52.5137 12.9446 52.3441 12.688 52.1289 12.4729C51.9137 12.2578 51.657 12.0886 51.3746 11.9756C51.0918 11.8626 50.7895 11.8081 50.4852 11.8155C49.8301 11.7748 49.1848 11.9931 48.6891 12.4235C48.1934 12.8539 47.8867 13.4619 47.8352 14.1163H52.7875ZM55.9641 19.4679C55.341 20.2235 54.5574 20.8312 53.6707 21.2467C52.7836 21.6623 51.8152 21.8754 50.8359 21.8706C47.0859 21.8706 44.0836 19.3675 44.0836 15.4913C44.0836 11.6151 47.0855 9.11319 50.8359 9.11319C54.341 9.11319 56.5391 11.6132 56.5391 15.4913V16.6671H47.8352C47.9434 17.3339 48.2891 17.9391 48.8086 18.3712C49.3277 18.8032 49.9859 19.0331 50.6613 19.0183C51.1949 19.015 51.7195 18.8782 52.1871 18.6205C52.6543 18.3627 53.05 17.9921 53.3375 17.5425L55.9641 19.4679ZM18.6852 9.48389H22.2863V11.1343H22.3375C22.6972 10.518 23.2175 10.011 23.8429 9.66749C24.4683 9.32389 25.1752 9.15663 25.8883 9.1835C29.691 9.1835 30.391 11.6855 30.391 14.9358V21.5585H26.641V15.687C26.641 14.2855 26.6152 12.4839 24.6879 12.4839C22.7387 12.4839 22.4379 14.0101 22.4379 15.5851V21.5569H18.6879L18.6852 9.48389ZM32.2926 3.7421H36.0426V14.3925L40.2926 9.47725H44.8902L39.9684 15.0683L44.7867 21.5644H40.0734L36.0926 15.5948H36.0434V21.5636H32.2934L32.2926 3.7421ZM12.8559 9.48272H16.6059V21.5593H12.8559V9.48272ZM14.7309 3.47882C15.1611 3.4789 15.5816 3.60655 15.9393 3.84563C16.297 4.08471 16.5758 4.42448 16.7404 4.82202C16.905 5.21952 16.948 5.6569 16.864 6.07885C16.78 6.50081 16.5728 6.88838 16.2686 7.1926C15.9643 7.49678 15.5767 7.70393 15.1547 7.78784C14.7327 7.87174 14.2954 7.82862 13.8979 7.66397C13.5004 7.49932 13.1607 7.22049 12.9217 6.86276C12.6827 6.50502 12.5551 6.08444 12.5551 5.6542C12.5551 5.3685 12.6114 5.08561 12.7207 4.82163C12.83 4.55768 12.9903 4.31784 13.1924 4.11585C13.3944 3.91385 13.6343 3.7536 13.8982 3.6443C14.1622 3.535 14.4452 3.47877 14.7309 3.47882ZM0 3.74484H3.90352V17.9636H11.1301V21.5659H0V3.74484Z"
          fill="#0A66C2"
        />
      </g>
      <defs>
        <clipPath id="clip0_401_1897">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
