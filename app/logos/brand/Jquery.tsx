export default function Jquery({
  width = "200",
  height = "200",
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M765.851 322.884L799.32 323.069C799.32 323.069 737.095 407.387 732.014 414.259C730.364 416.484 727.858 418.884 726.586 421.859C723.372 429.337 720.072 445.742 720.072 445.742L689.448 445.895C689.448 445.895 694.214 428.795 694.017 419.687C693.845 411.731 689.782 403.784 687.504 395.805C685.201 387.726 682.075 371.92 682.075 371.92H713.559L717.901 389.291L765.851 322.884Z"
        fill="#1A1918"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M702.475 340.667C708.651 344.391 712.442 364.931 712.442 364.931C712.442 364.931 680.123 365.408 662.536 365.408H647.337L628.881 445.742H600.656C600.656 445.742 618.221 358.439 622.368 342.611C623.712 337.486 631.575 338.366 644.851 338.366H666.053C679.743 338.366 695.745 336.617 702.475 340.667ZM571.073 379.792C571.073 379.792 571.953 374.636 568.089 368.664C564.787 363.573 561.739 362.389 553.053 362.117C528.529 361.347 529.006 379.52 529.006 379.52L571.073 379.792ZM597.67 358.98C601.264 371.944 594.414 402.405 594.414 402.405C594.414 402.405 558.642 401.808 539.048 402.405C532.956 402.591 525.664 401.742 523.85 404.577C521.298 408.548 524.782 414.662 527.736 417.245C531.134 420.219 537.754 420.558 540.134 420.859C556.037 422.88 589.321 421.381 589.321 421.381L583.556 446.912C583.556 446.912 536.52 449.272 512.993 443.656C508.348 442.55 503.993 440.314 501.051 437.144C500.248 436.277 499.551 435.094 498.792 434.072C498.185 433.256 496.417 430.577 495.623 428.458C490.25 414.139 496.253 386.708 502.137 372.008C502.82 370.305 503.678 368.144 504.581 366.308C505.709 364.019 506.664 361.434 507.565 360.066C508.171 359.122 508.923 358.514 509.553 357.623C510.279 356.57 511.125 355.55 511.907 354.639C514.079 352.12 516.543 350.339 519.507 348.127C529.309 340.786 547.048 335.087 568.359 337.269C576.382 338.094 588.5 340.959 594.414 349.211C595.998 351.414 596.781 355.787 597.67 358.98ZM468.212 338.266L495.581 338.105C495.581 338.105 480.328 410.459 472.554 445.742H441.07C419.067 445.742 399.471 448.467 391.134 432.714C383.046 417.419 390.765 392.266 394.39 375.177C396.953 363.083 402.35 338.364 402.35 338.364L430.706 338.105C430.706 338.105 422.693 376.589 419.359 395.805C418.165 402.687 415.703 409.169 418.275 414.258C420.717 419.102 424.137 419.448 434.557 419.687C437.859 419.766 448.671 419.687 448.671 419.687L468.212 338.266ZM340.111 390.375C342.976 380.194 347.156 369.153 346.625 359.978C346.05 350.166 337.821 341.231 332.512 339.353C316.521 333.708 301.551 341.6 295.601 348.037C287.904 356.375 285.298 366.114 282.573 379.522C280.545 389.475 278.882 399.983 282.573 407.745C289.107 421.469 309.486 418.472 331.426 418.603C334.682 409.875 337.375 400.072 340.111 390.375ZM378.107 350.209C381.232 372.941 369.239 398.031 360.976 419.85C369.401 420.611 376.784 419.733 377.315 420.361C377.868 421.175 371.668 446.405 369.507 446.47C362.821 446.644 340.665 446.828 331.426 446.828C301.278 446.828 273.075 448.792 258.692 433.802C252.851 427.711 248.812 417.266 247.834 409.917C246.206 397.65 248.246 384.144 251.092 373.008C253.665 362.953 256.964 353.466 261.948 344.78C274.617 322.667 296.654 306.253 333.596 310.042C340.762 310.78 351.053 313.917 357.481 317.641C357.925 317.902 359.479 319.139 359.835 319.356C368.521 324.883 376.436 338.072 378.107 350.209ZM244.718 338.397C242.895 346.702 241.071 356.116 239.15 364.322H208.753C211.107 355.225 212.91 346.181 215.267 338.267C224.993 338.267 234.037 338.397 244.72 338.397M207.667 371.922H236.979C233.146 393.134 225.557 427.352 219.609 451.17C215.886 466.077 213.4 476.953 203.325 484.823C202.423 485.53 201.903 485.194 201.153 485.909C199.296 487.68 190.709 489.733 185.956 490.252C178.226 491.089 169.487 490.361 159.987 490.166C162.473 481.08 165.286 470.169 167.501 462.025C190.657 464.828 191.243 442.941 195.726 421.859C198.32 409.678 206.181 376.806 207.667 371.922Z"
        fill="#1A1918"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M139.273 427.287L138.645 428.915C127.942 449.759 108.975 462.547 81.9215 463.111C69.2746 463.372 57.2246 460.126 49.3528 456.598C32.3653 448.965 18.0762 434.811 10.2731 419.687C-0.920681 398.008 -2.93943 367.85 20.3356 345.325C20.6949 345.325 17.5121 350.209 17.8715 350.209L17.2309 352.293C0.459006 404.803 52.1324 449.803 102.364 444.656C114.436 443.418 129.829 436.808 139.273 427.287Z"
        fill="#21609B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M108.876 405.575C121.514 405.661 134.714 399.755 142.531 391.462C135.692 408.822 115.89 419.98 89.3372 416.431C67.1029 413.456 45.9232 391.083 43.7419 368.664C42.1466 352.348 47.8326 342.611 57.2029 330.798C53.9466 336.976 52.7294 341.741 52.4263 344.78C48.8669 380.073 80.6201 405.389 108.876 405.575Z"
        fill="#21609B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M141.261 361.737C139.297 366.244 127.986 374.753 122.99 375.817C103.211 380.031 90.5435 370.651 83.9075 359.978C82.9216 358.384 81.0982 354.031 80.7716 352.923C78.1982 344.173 79.381 330.939 87.0575 324.089C84.745 330.603 84.4075 338.169 85.6247 343.087C86.3622 346.061 88.6091 351.253 90.8575 354.519C94.9482 360.467 97.5435 361.912 102.798 365.072C105.165 366.494 107.704 367.634 108.801 367.947C113.784 369.414 124.303 373.278 141.261 361.737Z"
        fill="#21609B"
      />
    </svg>
  );
}