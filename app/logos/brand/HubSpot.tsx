import React from "react";

export default function HubSpot({
  width = "100",
  height = "31",
  className,
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
      viewBox="0 0 100 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8302 5.63599V13.6312H3.48491V5.63599H0V24.7218H3.48585V16.986H10.8292V24.7218H14.316V5.63599H10.8302ZM25.4736 18.5529C25.4736 19.3179 25.1697 20.0516 24.6288 20.5926C24.0878 21.1335 23.3542 21.4374 22.5892 21.4374C21.8242 21.4374 21.0905 21.1335 20.5495 20.5926C20.0086 20.0516 19.7047 19.3179 19.7047 18.5529V10.3775H16.3981V18.5529C16.3981 20.1933 17.0497 21.7664 18.2096 22.9263C19.3695 24.0863 20.9426 24.7379 22.583 24.7379C24.2234 24.7379 25.7965 24.0863 26.9564 22.9263C28.1163 21.7664 28.7679 20.1933 28.7679 18.5529V10.3775H25.4736V18.5529ZM49.9745 11.2199C49.9745 9.54351 51.083 9.0124 52.2972 9.0124C53.2764 9.0124 54.5689 9.75767 55.4151 10.6614L57.5802 8.10863C56.4991 6.64636 54.3066 5.63599 52.5113 5.63599C48.9236 5.63599 46.3292 7.73693 46.3292 11.2199C46.3292 17.6822 54.2274 15.6312 54.2274 19.2482C54.2274 20.3633 53.1443 21.3482 51.9047 21.3482C49.9491 21.3482 49.3151 20.3926 48.417 19.3813L46.0132 21.8803C47.5509 23.7671 49.4472 24.7256 51.7179 24.7256C55.1264 24.7256 57.8679 22.5992 57.8679 19.2746C57.8679 12.1011 49.9689 14.3303 49.9689 11.2199H49.9745ZM98.8368 21.6728C96.883 21.6728 96.3274 20.8275 96.3274 19.5331V13.802H99.3651V10.8982H96.3274V7.06712L92.9745 8.57183V20.2454C92.9745 23.2313 95.0349 24.736 97.8594 24.736C98.3028 24.7435 98.7462 24.7077 99.1821 24.6303L100 21.619C99.6311 21.6445 99.2075 21.6699 98.8368 21.6699V21.6728ZM38.0604 10.4728C36.4226 10.4728 35.2792 10.9482 34.1736 12.0322V5.75014H30.8623V17.3945C30.8623 21.7529 34.0132 24.7397 37.5547 24.7397C41.483 24.7397 44.9387 21.7001 44.9387 17.6077C44.9387 13.5662 41.7585 10.4756 38.0604 10.4756V10.4728ZM38.0396 21.4067C37.5461 21.4067 37.0575 21.3096 36.6015 21.1207C36.1456 20.9318 35.7312 20.655 35.3823 20.3061C35.0333 19.9571 34.7565 19.5428 34.5676 19.0868C34.3788 18.6309 34.2816 18.1422 34.2816 17.6487C34.2816 17.1552 34.3788 16.6665 34.5676 16.2106C34.7565 15.7546 35.0333 15.3404 35.3823 14.9914C35.7312 14.6425 36.1456 14.3656 36.6015 14.1767C37.0575 13.9879 37.5461 13.8907 38.0396 13.8907C39.0363 13.8907 39.9922 14.2866 40.697 14.9914C41.4017 15.6962 41.7976 16.652 41.7976 17.6487C41.7976 18.6454 41.4017 19.6013 40.697 20.3061C39.9922 21.0108 39.0363 21.4067 38.0396 21.4067ZM74.0226 17.4341C74.0226 13.3341 70.5745 10.302 66.6387 10.302C63.0981 10.302 59.9462 13.2879 59.9462 17.6473V29.2982H63.2575V23.0077C64.3613 24.0897 65.5066 24.5671 67.1424 24.5671C70.8406 24.5671 74.0217 21.4765 74.0217 17.4341H74.0226ZM70.8868 17.3926C70.8868 18.3893 70.4908 19.3451 69.7861 20.0499C69.0813 20.7546 68.1255 21.1506 67.1288 21.1506C66.1321 21.1506 65.1762 20.7546 64.4714 20.0499C63.7667 19.3451 63.3708 18.3893 63.3708 17.3926C63.3708 16.3959 63.7667 15.44 64.4714 14.7353C65.1762 14.0305 66.1321 13.6346 67.1288 13.6346C68.1255 13.6346 69.0813 14.0305 69.7861 14.7353C70.4908 15.44 70.8868 16.3959 70.8868 17.3926Z"
        fill="#33475B"
      />
      <path
        d="M84.7225 10.1416V6.81429C85.1622 6.60879 85.5344 6.28263 85.7959 5.87379C86.0575 5.46493 86.1975 4.9902 86.1998 4.50486V4.42845C86.1998 3.01335 85.0526 1.86618 83.6375 1.86618H83.5611C82.8816 1.86618 82.2298 2.13612 81.7493 2.61664C81.2688 3.09716 80.9989 3.74889 80.9989 4.42845V4.50486C81.0011 4.9902 81.1411 5.46493 81.4026 5.87379C81.6642 6.28263 82.0365 6.60879 82.4762 6.81429V10.1416C81.2125 10.3352 80.0223 10.8592 79.0262 11.6605L69.9008 4.55297C69.9658 4.31807 69.9998 4.07656 70.0036 3.83411C70.0047 3.26307 69.8364 2.70453 69.5201 2.22914C69.2037 1.75375 68.7535 1.38286 68.2263 1.16339C67.6991 0.943908 67.1187 0.885716 66.5585 0.996162C65.9982 1.1066 65.4833 1.38072 65.0789 1.78384C64.6744 2.18696 64.3986 2.70097 64.2863 3.26086C64.1741 3.82075 64.2304 4.40136 64.4481 4.92925C64.6658 5.45713 65.0353 5.90859 65.5096 6.22649C65.984 6.5444 66.542 6.71448 67.113 6.71524C67.6125 6.71288 68.1028 6.57951 68.5347 6.32844L77.5206 13.3209C76.7133 14.5404 76.2922 15.9748 76.3121 17.4371C76.3319 18.8994 76.7918 20.3219 77.6319 21.519L74.8989 24.2529C74.6779 24.1824 74.4477 24.1448 74.2158 24.1416C73.7471 24.142 73.289 24.2813 72.8994 24.542C72.5098 24.8026 72.2062 25.1729 72.0271 25.606C71.8478 26.0392 71.801 26.5157 71.8926 26.9754C71.9841 27.4351 72.2099 27.8574 72.5413 28.1888C72.8728 28.5202 73.295 28.7459 73.7547 28.8375C74.2144 28.9291 74.6909 28.8823 75.1241 28.703C75.5573 28.5239 75.9274 28.2203 76.1881 27.8307C76.4488 27.4411 76.5881 26.983 76.5885 26.5142C76.5855 26.2824 76.5479 26.0522 76.4772 25.8312L79.1809 23.1265C80.0626 23.8054 81.0879 24.2733 82.1784 24.4946C83.2689 24.7159 84.3956 24.6846 85.4721 24.4032C86.5486 24.1219 87.5465 23.5977 88.3892 22.8711C89.2319 22.1445 89.8971 21.2347 90.3339 20.2113C90.7706 19.1879 90.9673 18.0781 90.9089 16.967C90.8505 15.8558 90.5385 14.7727 89.9969 13.8008C89.4552 12.8288 88.6983 11.9937 87.7841 11.3594C86.8698 10.7252 85.8225 10.3086 84.7225 10.1416ZM83.6017 21.085C83.102 21.0988 82.6046 21.0123 82.139 20.8305C81.6733 20.6488 81.2488 20.3756 80.8905 20.027C80.5322 19.6784 80.2474 19.2616 80.0529 18.801C79.8584 18.3406 79.7582 17.8458 79.7582 17.3458C79.7582 16.846 79.8584 16.3512 80.0529 15.8908C80.2474 15.4302 80.5322 15.0134 80.8905 14.6648C81.2488 14.3162 81.6733 14.043 82.139 13.8612C82.6046 13.6795 83.102 13.593 83.6017 13.6067C84.5702 13.6407 85.4876 14.0491 86.1609 14.746C86.8342 15.443 87.2108 16.3741 87.2113 17.3431C87.2118 18.3122 86.8362 19.2436 86.1636 19.9412C85.491 20.6389 84.5739 21.0483 83.6055 21.0831"
        fill="#FF7A59"
      />
    </svg>
  );
}