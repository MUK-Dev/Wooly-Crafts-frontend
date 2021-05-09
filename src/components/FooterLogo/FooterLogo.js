import React from "react";
import classes from "./FooterLogo.module.css";

const navlogo = (props) => (
	<svg
		id="logo"
		width="220"
		height="60"
		className={["flex-center", classes.Logo].join(" ")}
		viewBox="0 0 661 120"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="661" height="120" fill="transparent" />
		<mask
			id="path-1-outside-1"
			maskUnits="userSpaceOnUse"
			x="8"
			y="19"
			width="646"
			height="83"
			fill="black"
		>
			<rect fill="white" x="8" y="19" width="646" height="83" />
			<path d="M59.288 94.96C55.256 94.96 51.672 93.488 48.536 90.544C45.4 87.536 42.712 83.472 40.472 78.352C39.192 83.408 37.144 87.184 34.328 89.68C31.512 92.112 28.408 93.328 25.016 93.328C20.216 93.328 16.664 89.2 14.36 80.944C12.12 72.688 11 62.8 11 51.28C11 47.952 11.256 45.328 11.768 43.408C12.28 41.424 13.24 40.432 14.648 40.432C15.224 40.432 15.672 41.52 15.992 43.696C16.376 45.872 16.568 48.624 16.568 51.952C16.568 75.888 19.64 87.856 25.784 87.856C28.088 87.856 30.04 87.216 31.64 85.936C33.24 84.656 34.744 82.576 36.152 79.696C36.856 77.968 37.208 75.12 37.208 71.152L37.112 65.104C37.432 64.528 38.008 64.24 38.84 64.24C39.416 64.24 39.96 64.4 40.472 64.72C41.048 64.976 41.432 65.424 41.624 66.064C42.072 69.456 42.968 72.912 44.312 76.432C45.72 79.888 47.576 82.832 49.88 85.264C52.248 87.632 55.032 88.816 58.232 88.816C62.648 88.816 65.784 87.856 67.64 85.936C69.496 83.952 70.424 81.296 70.424 77.968C70.424 70.736 69.912 64.944 68.888 60.592C67.928 56.176 66.648 52.016 65.048 48.112C64.344 46.256 63.832 44.88 63.512 43.984C63.256 43.088 63.128 42.16 63.128 41.2C63.576 40.176 64.184 39.664 64.952 39.664C66.36 39.664 67.896 41.36 69.56 44.752C71.288 48.144 72.76 52.72 73.976 58.48C75.192 64.176 75.8 70.32 75.8 76.912C75.8 80.56 75.032 83.76 73.496 86.512C72.024 89.2 70.008 91.28 67.448 92.752C64.952 94.224 62.232 94.96 59.288 94.96Z" />
			<path d="M113.086 95.056C107.774 95.056 103.005 93.968 98.7815 91.792C94.6215 89.616 91.3575 86.544 88.9895 82.576C86.6215 78.608 85.4375 74.032 85.4375 68.848C85.4375 65.328 86.1415 62.096 87.5495 59.152C88.9575 56.208 91.0055 53.872 93.6935 52.144C96.3815 50.352 99.5495 49.456 103.197 49.456C110.109 49.456 116.254 50.64 121.63 53.008C127.07 55.312 131.293 58.64 134.301 62.992C137.374 67.344 138.91 72.368 138.91 78.064C138.91 81.84 137.502 85.008 134.686 87.568C131.934 90.128 128.542 92.016 124.509 93.232C120.541 94.448 116.734 95.056 113.086 95.056ZM111.261 90.064C117.661 90.064 123.037 89.104 127.389 87.184C131.805 85.264 134.014 82.064 134.014 77.584C134.014 69.776 131.006 63.92 124.99 60.016C118.974 56.048 111.294 54.064 101.95 54.064C97.4695 54.064 94.3015 55.408 92.4455 58.096C90.6535 60.72 89.7575 64.304 89.7575 68.848C89.7575 72.624 90.6535 76.144 92.4455 79.408C94.3015 82.608 96.8615 85.2 100.125 87.184C103.389 89.104 107.101 90.064 111.261 90.064Z" />
			<path d="M176.179 95.056C170.867 95.056 166.099 93.968 161.875 91.792C157.715 89.616 154.451 86.544 152.083 82.576C149.715 78.608 148.531 74.032 148.531 68.848C148.531 65.328 149.235 62.096 150.643 59.152C152.051 56.208 154.099 53.872 156.787 52.144C159.475 50.352 162.643 49.456 166.291 49.456C173.203 49.456 179.347 50.64 184.723 53.008C190.163 55.312 194.387 58.64 197.395 62.992C200.467 67.344 202.003 72.368 202.003 78.064C202.003 81.84 200.595 85.008 197.779 87.568C195.027 90.128 191.635 92.016 187.603 93.232C183.635 94.448 179.827 95.056 176.179 95.056ZM174.355 90.064C180.755 90.064 186.131 89.104 190.483 87.184C194.899 85.264 197.107 82.064 197.107 77.584C197.107 69.776 194.099 63.92 188.083 60.016C182.067 56.048 174.387 54.064 165.043 54.064C160.563 54.064 157.395 55.408 155.539 58.096C153.747 60.72 152.851 64.304 152.851 68.848C152.851 72.624 153.747 76.144 155.539 79.408C157.395 82.608 159.955 85.2 163.219 87.184C166.483 89.104 170.195 90.064 174.355 90.064Z" />
			<path d="M231.977 95.152C225.577 95.152 220.745 94.064 217.481 91.888C214.217 89.648 212.585 85.616 212.585 79.792C213.865 47.792 215.913 32.528 218.729 34C220.137 34.064 220.841 36.24 220.841 40.528C220.841 43.152 220.393 48.688 219.497 57.136C218.345 66.864 217.769 74 217.769 78.544L217.865 81.328C217.865 82.736 218.281 84.144 219.113 85.552C220.009 86.96 221.129 87.728 222.473 87.856L241.289 89.488C241.993 89.552 242.345 90.224 242.345 91.504C242.345 92.656 242.057 93.456 241.481 93.904C240.969 94.352 240.041 94.704 238.697 94.96L231.977 95.152Z" />
			<path d="M280.276 39.76C280.276 39.44 280.66 39.152 281.428 38.896C282.196 38.576 282.932 38.416 283.636 38.416C284.148 38.416 284.532 38.544 284.788 38.8C285.044 38.992 285.044 39.312 284.788 39.76C284.276 40.784 283.124 42.96 281.332 46.288C278.644 51.28 276.5 55.632 274.9 59.344C273.3 63.056 271.924 67.568 270.772 72.88C269.62 78.192 269.044 84.272 269.044 91.12L269.14 96.592C269.14 97.232 268.852 97.712 268.276 98.032C267.764 98.352 267.092 98.512 266.26 98.512C265.62 98.512 265.204 98.416 265.012 98.224C264.884 98.032 264.82 97.744 264.82 97.36C264.82 96.976 264.82 96.688 264.82 96.496C264.628 94 264.532 91.632 264.532 89.392C264.532 84.336 264.98 79.504 265.876 74.896C262.036 70.16 258.9 66.128 256.468 62.8C254.1 59.408 251.86 55.664 249.748 51.568C247.636 47.472 245.652 42.736 243.796 37.36C243.924 37.424 244.564 37.392 245.716 37.264C246.868 37.136 247.508 37.072 247.636 37.072L250.708 42.928C254.356 49.84 257.268 55.12 259.444 58.768C261.62 62.352 264.18 65.84 267.124 69.232C268.468 64.112 270.1 59.504 272.02 55.408C274.004 51.248 276.34 46.768 279.028 41.968L280.276 39.76Z" />
			<path d="M336.147 96.016C331.731 96.016 327.955 94.8 324.819 92.368C321.683 89.936 319.283 86.608 317.619 82.384C316.019 78.16 315.219 73.36 315.219 67.984C315.219 61.968 316.627 56.272 319.443 50.896C322.259 45.456 325.939 41.104 330.483 37.84C335.091 34.512 339.859 32.848 344.787 32.848C348.947 32.848 352.147 33.776 354.387 35.632C356.627 37.488 357.747 39.664 357.747 42.16C357.747 43.632 357.299 44.976 356.403 46.192C355.571 47.408 354.355 48.336 352.755 48.976C352.563 48.592 352.467 47.984 352.467 47.152C352.467 46.384 352.563 45.616 352.755 44.848C352.883 43.824 352.947 43.088 352.947 42.64C352.947 42 352.851 41.456 352.659 41.008C351.763 38.768 349.331 37.648 345.363 37.648C344.275 37.648 342.995 37.744 341.523 37.936C338.131 38.384 334.771 40.08 331.443 43.024C328.115 45.904 325.395 49.52 323.283 53.872C321.171 58.224 320.115 62.672 320.115 67.216C320.115 71.184 320.755 74.96 322.035 78.544C323.379 82.064 325.299 84.912 327.795 87.088C330.291 89.264 333.267 90.352 336.723 90.352C341.203 90.352 344.915 89.808 347.859 88.72C350.867 87.632 353.811 85.968 356.691 83.728C357.011 83.472 357.363 83.344 357.747 83.344C358.451 83.344 358.931 83.76 359.187 84.592C359.507 86.128 358.483 87.792 356.115 89.584C353.747 91.376 350.675 92.912 346.899 94.192C343.123 95.408 339.539 96.016 336.147 96.016Z" />
			<path d="M415.33 98.224C414.882 98.736 414.242 98.992 413.41 98.992C410.402 98.992 405.602 96.24 399.01 90.736C392.482 85.168 386.69 79.632 381.634 74.128C381.954 75.856 382.562 78.768 383.458 82.864C383.842 84.464 384.162 86 384.418 87.472C384.738 88.944 384.898 90.096 384.898 90.928C384.898 92.784 384.226 93.904 382.882 94.288C382.562 95.12 381.698 93.04 380.29 88.048C378.946 83.056 377.666 77.296 376.45 70.768C375.298 64.176 374.722 58.672 374.722 54.256C374.722 52.016 374.914 50.192 375.298 48.784C376.13 48.144 376.834 47.824 377.41 47.824C378.562 47.824 379.362 48.816 379.81 50.8C380.258 52.72 380.674 55.76 381.058 59.92L381.25 62.128C383.746 62 387.138 61.456 391.426 60.496C395.778 59.536 399.65 58.224 403.042 56.56C406.498 54.832 408.226 52.784 408.226 50.416C408.226 49.136 407.298 47.728 405.442 46.192C403.65 44.592 400.866 43.248 397.09 42.16C393.378 41.072 388.802 40.528 383.362 40.528H380.29C376.642 40.528 373.794 41.136 371.746 42.352C369.698 43.504 368.674 46 368.674 49.84C367.714 49.84 366.85 49.232 366.082 48.016C365.314 46.8 364.93 45.68 364.93 44.656C364.93 40.688 366.818 38.096 370.594 36.88C374.434 35.664 379.938 35.056 387.106 35.056C390.882 35.056 394.818 35.664 398.914 36.88C403.01 38.096 406.466 40.016 409.282 42.64C412.098 45.2 413.506 48.4 413.506 52.24C413.506 54.864 412.322 57.04 409.954 58.768C407.65 60.496 404.93 61.84 401.794 62.8C398.658 63.76 394.818 64.752 390.274 65.776C386.498 66.608 384.034 67.216 382.882 67.6C387.81 74.256 392.546 79.44 397.09 83.152C401.698 86.864 406.498 90.224 411.49 93.232C413.218 94.256 414.434 95.024 415.138 95.536C415.842 96.048 416.194 96.528 416.194 96.976C416.194 97.424 415.906 97.84 415.33 98.224Z" />
			<path d="M465.129 95.056C464.361 95.056 463.817 94.864 463.497 94.48C463.241 94.096 463.113 93.552 463.113 92.848C463.113 91.44 463.433 89.264 464.073 86.32C464.777 83.632 465.129 81.424 465.129 79.696C465.129 74.704 464.745 70.896 463.977 68.272H461.001C458.377 68.272 454.953 68.208 450.729 68.08L441.705 67.984H428.745L428.937 71.728C428.937 74.672 429.417 78.352 430.377 82.768C430.697 84.56 430.985 86.384 431.241 88.24C431.561 90.032 431.721 91.664 431.721 93.136V94C431.081 94.64 430.409 94.96 429.705 94.96C428.041 94.96 426.729 93.008 425.769 89.104C424.809 85.136 424.329 80.368 424.329 74.8C424.329 72.56 424.425 70.352 424.617 68.176C423.209 68.112 422.249 67.888 421.737 67.504C421.225 67.056 420.969 66.384 420.969 65.488C420.969 64.784 421.161 64.304 421.545 64.048C421.993 63.792 422.761 63.6 423.849 63.472L423.753 60.88L424.041 56.464C424.489 49.232 425.161 43.344 426.057 38.8C426.953 34.256 428.873 30.32 431.817 26.992C434.761 23.664 439.177 22 445.065 22C451.785 22 457.033 25.616 460.809 32.848C464.585 40.08 467.145 48.144 468.489 57.04C469.833 65.936 470.505 73.584 470.505 79.984C470.505 82.288 470.441 84.304 470.313 86.032C470.185 87.696 469.929 89.776 469.545 92.272C468.073 94.128 466.601 95.056 465.129 95.056ZM463.593 64.528C462.377 52.688 460.201 43.408 457.065 36.688C453.929 29.904 449.225 26.512 442.953 26.512C438.281 26.512 434.825 28.688 432.585 33.04C430.409 37.328 429.097 41.936 428.649 46.864C428.201 51.792 427.977 57.328 427.977 63.472L463.593 64.528Z" />
			<path d="M499.709 93.808C498.685 93.68 497.725 93.616 496.829 93.616C495.997 93.552 495.421 93.52 495.101 93.52C494.845 93.456 494.717 93.328 494.717 93.136C494.269 91.088 493.949 89.296 493.757 87.76C493.565 86.16 493.437 84.688 493.373 83.344C493.309 81.424 493.149 79.536 492.893 77.68C492.701 75.76 492.253 73.232 491.549 70.096C487.965 70.672 485.565 70.96 484.349 70.96C483.069 70.96 482.109 70.736 481.469 70.288C480.829 69.776 480.509 68.976 480.509 67.888C480.509 67.248 480.861 66.928 481.565 66.928L484.445 66.64C484.893 66.576 486.941 66.32 490.589 65.872C490.461 64.016 490.205 60.208 489.821 54.448C489.629 49.84 489.341 46.16 488.957 43.408L476.957 44.464C476.061 45.04 475.357 45.328 474.845 45.328C474.077 44.752 473.597 44.016 473.405 43.12C474.941 41.456 478.621 40.08 484.445 38.992C490.333 37.904 496.701 37.36 503.549 37.36C512.125 37.36 519.485 38.288 525.629 40.144C531.773 41.936 535.101 44.72 535.613 48.496C533.629 48.496 531.709 48.272 529.853 47.824C527.997 47.376 525.661 46.704 522.845 45.808C519.261 44.592 515.965 43.664 512.957 43.024C510.013 42.384 506.685 42.064 502.973 42.064C500.605 42.064 498.013 42.256 495.197 42.64C495.197 48.592 495.357 56.112 495.677 65.2L499.037 64.912C509.277 64.08 515.261 63.664 516.989 63.664C517.821 63.664 518.397 63.728 518.717 63.856C519.037 63.92 519.293 64.048 519.485 64.24C519.549 66.16 517.725 67.536 514.013 68.368C510.301 69.136 504.413 69.68 496.349 70C496.669 73.136 497.277 77.232 498.173 82.288C499.005 87.024 499.517 90.864 499.709 93.808Z" />
			<path d="M571.079 95.056C569.287 95.056 568.039 94.128 567.335 92.272C566.631 90.416 566.055 87.92 565.607 84.784L565.319 82.384C564.359 77.264 563.591 72.176 563.015 67.12C562.439 62 561.863 55.824 561.287 48.592L560.711 41.488C556.871 41.552 551.399 41.392 544.295 41.008L542.375 40.912C541.479 40.848 540.839 40.432 540.455 39.664C540.135 38.832 539.975 37.712 539.975 36.304H546.599C557.735 36.304 567.783 36.72 576.743 37.552C585.703 38.384 590.183 40.08 590.183 42.64C590.183 43.344 590.055 43.824 589.799 44.08C589.607 44.336 589.159 44.464 588.455 44.464C585.895 44.272 581.927 43.728 576.551 42.832C575.335 42.64 573.863 42.416 572.135 42.16C570.407 41.904 568.455 41.648 566.279 41.392C566.279 50.672 567.655 64.944 570.407 84.208C570.535 85.168 570.983 86.544 571.751 88.336C572.071 89.104 572.359 89.936 572.615 90.832C572.935 91.664 573.095 92.432 573.095 93.136C573.095 94.032 572.967 94.576 572.711 94.768C572.455 94.96 572.135 95.056 571.751 95.056C571.431 95.056 571.207 95.056 571.079 95.056Z" />
			<path d="M627.742 91.312C632.99 91.312 637.054 90.576 639.934 89.104C642.814 87.632 644.254 85.488 644.254 82.672C644.254 80.176 643.39 78.032 641.662 76.24C639.934 74.384 637.79 72.816 635.23 71.536C632.67 70.256 629.182 68.752 624.766 67.024C624.382 66.896 623.454 66.544 621.982 65.968C615.966 63.536 611.326 61.104 608.062 58.672C604.862 56.24 603.262 53.104 603.262 49.264C603.262 44.976 604.958 41.744 608.35 39.568C611.742 37.392 616.094 36.304 621.406 36.304C625.31 36.304 628.894 36.816 632.158 37.84C635.486 38.8 638.11 40.144 640.03 41.872C642.014 43.6 643.006 45.552 643.006 47.728C642.238 48.112 641.502 48.304 640.798 48.304C640.03 48.304 639.23 48.144 638.398 47.824C637.63 47.44 636.478 46.832 634.942 46C632.446 44.656 630.11 43.6 627.934 42.832C625.758 42 623.198 41.584 620.254 41.584C616.542 41.584 613.534 42.224 611.23 43.504C608.926 44.784 607.774 46.576 607.774 48.88C607.774 50.672 608.542 52.304 610.078 53.776C611.678 55.248 613.662 56.56 616.03 57.712C618.462 58.8 621.694 60.112 625.726 61.648C630.846 63.632 635.07 65.488 638.398 67.216C641.726 68.944 644.542 71.152 646.846 73.84C649.214 76.464 650.398 79.6 650.398 83.248C650.398 87.536 648.35 90.864 644.254 93.232C640.158 95.536 635.07 96.688 628.99 96.688C624.19 96.688 619.454 95.984 614.782 94.576C610.11 93.168 606.11 91.088 602.782 88.336C599.454 85.52 597.342 82.16 596.446 78.256C596.446 76.528 596.926 75.056 597.886 73.84C598.846 72.56 600.03 71.92 601.438 71.92C601.438 76.08 602.59 79.632 604.894 82.576C607.262 85.456 610.43 87.632 614.398 89.104C618.43 90.576 622.878 91.312 627.742 91.312Z" />
		</mask>
		<path
			d="M59.288 94.96C55.256 94.96 51.672 93.488 48.536 90.544C45.4 87.536 42.712 83.472 40.472 78.352C39.192 83.408 37.144 87.184 34.328 89.68C31.512 92.112 28.408 93.328 25.016 93.328C20.216 93.328 16.664 89.2 14.36 80.944C12.12 72.688 11 62.8 11 51.28C11 47.952 11.256 45.328 11.768 43.408C12.28 41.424 13.24 40.432 14.648 40.432C15.224 40.432 15.672 41.52 15.992 43.696C16.376 45.872 16.568 48.624 16.568 51.952C16.568 75.888 19.64 87.856 25.784 87.856C28.088 87.856 30.04 87.216 31.64 85.936C33.24 84.656 34.744 82.576 36.152 79.696C36.856 77.968 37.208 75.12 37.208 71.152L37.112 65.104C37.432 64.528 38.008 64.24 38.84 64.24C39.416 64.24 39.96 64.4 40.472 64.72C41.048 64.976 41.432 65.424 41.624 66.064C42.072 69.456 42.968 72.912 44.312 76.432C45.72 79.888 47.576 82.832 49.88 85.264C52.248 87.632 55.032 88.816 58.232 88.816C62.648 88.816 65.784 87.856 67.64 85.936C69.496 83.952 70.424 81.296 70.424 77.968C70.424 70.736 69.912 64.944 68.888 60.592C67.928 56.176 66.648 52.016 65.048 48.112C64.344 46.256 63.832 44.88 63.512 43.984C63.256 43.088 63.128 42.16 63.128 41.2C63.576 40.176 64.184 39.664 64.952 39.664C66.36 39.664 67.896 41.36 69.56 44.752C71.288 48.144 72.76 52.72 73.976 58.48C75.192 64.176 75.8 70.32 75.8 76.912C75.8 80.56 75.032 83.76 73.496 86.512C72.024 89.2 70.008 91.28 67.448 92.752C64.952 94.224 62.232 94.96 59.288 94.96Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M113.086 95.056C107.774 95.056 103.005 93.968 98.7815 91.792C94.6215 89.616 91.3575 86.544 88.9895 82.576C86.6215 78.608 85.4375 74.032 85.4375 68.848C85.4375 65.328 86.1415 62.096 87.5495 59.152C88.9575 56.208 91.0055 53.872 93.6935 52.144C96.3815 50.352 99.5495 49.456 103.197 49.456C110.109 49.456 116.254 50.64 121.63 53.008C127.07 55.312 131.293 58.64 134.301 62.992C137.374 67.344 138.91 72.368 138.91 78.064C138.91 81.84 137.502 85.008 134.686 87.568C131.934 90.128 128.542 92.016 124.509 93.232C120.541 94.448 116.734 95.056 113.086 95.056ZM111.261 90.064C117.661 90.064 123.037 89.104 127.389 87.184C131.805 85.264 134.014 82.064 134.014 77.584C134.014 69.776 131.006 63.92 124.99 60.016C118.974 56.048 111.294 54.064 101.95 54.064C97.4695 54.064 94.3015 55.408 92.4455 58.096C90.6535 60.72 89.7575 64.304 89.7575 68.848C89.7575 72.624 90.6535 76.144 92.4455 79.408C94.3015 82.608 96.8615 85.2 100.125 87.184C103.389 89.104 107.101 90.064 111.261 90.064Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M176.179 95.056C170.867 95.056 166.099 93.968 161.875 91.792C157.715 89.616 154.451 86.544 152.083 82.576C149.715 78.608 148.531 74.032 148.531 68.848C148.531 65.328 149.235 62.096 150.643 59.152C152.051 56.208 154.099 53.872 156.787 52.144C159.475 50.352 162.643 49.456 166.291 49.456C173.203 49.456 179.347 50.64 184.723 53.008C190.163 55.312 194.387 58.64 197.395 62.992C200.467 67.344 202.003 72.368 202.003 78.064C202.003 81.84 200.595 85.008 197.779 87.568C195.027 90.128 191.635 92.016 187.603 93.232C183.635 94.448 179.827 95.056 176.179 95.056ZM174.355 90.064C180.755 90.064 186.131 89.104 190.483 87.184C194.899 85.264 197.107 82.064 197.107 77.584C197.107 69.776 194.099 63.92 188.083 60.016C182.067 56.048 174.387 54.064 165.043 54.064C160.563 54.064 157.395 55.408 155.539 58.096C153.747 60.72 152.851 64.304 152.851 68.848C152.851 72.624 153.747 76.144 155.539 79.408C157.395 82.608 159.955 85.2 163.219 87.184C166.483 89.104 170.195 90.064 174.355 90.064Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M231.977 95.152C225.577 95.152 220.745 94.064 217.481 91.888C214.217 89.648 212.585 85.616 212.585 79.792C213.865 47.792 215.913 32.528 218.729 34C220.137 34.064 220.841 36.24 220.841 40.528C220.841 43.152 220.393 48.688 219.497 57.136C218.345 66.864 217.769 74 217.769 78.544L217.865 81.328C217.865 82.736 218.281 84.144 219.113 85.552C220.009 86.96 221.129 87.728 222.473 87.856L241.289 89.488C241.993 89.552 242.345 90.224 242.345 91.504C242.345 92.656 242.057 93.456 241.481 93.904C240.969 94.352 240.041 94.704 238.697 94.96L231.977 95.152Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M280.276 39.76C280.276 39.44 280.66 39.152 281.428 38.896C282.196 38.576 282.932 38.416 283.636 38.416C284.148 38.416 284.532 38.544 284.788 38.8C285.044 38.992 285.044 39.312 284.788 39.76C284.276 40.784 283.124 42.96 281.332 46.288C278.644 51.28 276.5 55.632 274.9 59.344C273.3 63.056 271.924 67.568 270.772 72.88C269.62 78.192 269.044 84.272 269.044 91.12L269.14 96.592C269.14 97.232 268.852 97.712 268.276 98.032C267.764 98.352 267.092 98.512 266.26 98.512C265.62 98.512 265.204 98.416 265.012 98.224C264.884 98.032 264.82 97.744 264.82 97.36C264.82 96.976 264.82 96.688 264.82 96.496C264.628 94 264.532 91.632 264.532 89.392C264.532 84.336 264.98 79.504 265.876 74.896C262.036 70.16 258.9 66.128 256.468 62.8C254.1 59.408 251.86 55.664 249.748 51.568C247.636 47.472 245.652 42.736 243.796 37.36C243.924 37.424 244.564 37.392 245.716 37.264C246.868 37.136 247.508 37.072 247.636 37.072L250.708 42.928C254.356 49.84 257.268 55.12 259.444 58.768C261.62 62.352 264.18 65.84 267.124 69.232C268.468 64.112 270.1 59.504 272.02 55.408C274.004 51.248 276.34 46.768 279.028 41.968L280.276 39.76Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M336.147 96.016C331.731 96.016 327.955 94.8 324.819 92.368C321.683 89.936 319.283 86.608 317.619 82.384C316.019 78.16 315.219 73.36 315.219 67.984C315.219 61.968 316.627 56.272 319.443 50.896C322.259 45.456 325.939 41.104 330.483 37.84C335.091 34.512 339.859 32.848 344.787 32.848C348.947 32.848 352.147 33.776 354.387 35.632C356.627 37.488 357.747 39.664 357.747 42.16C357.747 43.632 357.299 44.976 356.403 46.192C355.571 47.408 354.355 48.336 352.755 48.976C352.563 48.592 352.467 47.984 352.467 47.152C352.467 46.384 352.563 45.616 352.755 44.848C352.883 43.824 352.947 43.088 352.947 42.64C352.947 42 352.851 41.456 352.659 41.008C351.763 38.768 349.331 37.648 345.363 37.648C344.275 37.648 342.995 37.744 341.523 37.936C338.131 38.384 334.771 40.08 331.443 43.024C328.115 45.904 325.395 49.52 323.283 53.872C321.171 58.224 320.115 62.672 320.115 67.216C320.115 71.184 320.755 74.96 322.035 78.544C323.379 82.064 325.299 84.912 327.795 87.088C330.291 89.264 333.267 90.352 336.723 90.352C341.203 90.352 344.915 89.808 347.859 88.72C350.867 87.632 353.811 85.968 356.691 83.728C357.011 83.472 357.363 83.344 357.747 83.344C358.451 83.344 358.931 83.76 359.187 84.592C359.507 86.128 358.483 87.792 356.115 89.584C353.747 91.376 350.675 92.912 346.899 94.192C343.123 95.408 339.539 96.016 336.147 96.016Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M415.33 98.224C414.882 98.736 414.242 98.992 413.41 98.992C410.402 98.992 405.602 96.24 399.01 90.736C392.482 85.168 386.69 79.632 381.634 74.128C381.954 75.856 382.562 78.768 383.458 82.864C383.842 84.464 384.162 86 384.418 87.472C384.738 88.944 384.898 90.096 384.898 90.928C384.898 92.784 384.226 93.904 382.882 94.288C382.562 95.12 381.698 93.04 380.29 88.048C378.946 83.056 377.666 77.296 376.45 70.768C375.298 64.176 374.722 58.672 374.722 54.256C374.722 52.016 374.914 50.192 375.298 48.784C376.13 48.144 376.834 47.824 377.41 47.824C378.562 47.824 379.362 48.816 379.81 50.8C380.258 52.72 380.674 55.76 381.058 59.92L381.25 62.128C383.746 62 387.138 61.456 391.426 60.496C395.778 59.536 399.65 58.224 403.042 56.56C406.498 54.832 408.226 52.784 408.226 50.416C408.226 49.136 407.298 47.728 405.442 46.192C403.65 44.592 400.866 43.248 397.09 42.16C393.378 41.072 388.802 40.528 383.362 40.528H380.29C376.642 40.528 373.794 41.136 371.746 42.352C369.698 43.504 368.674 46 368.674 49.84C367.714 49.84 366.85 49.232 366.082 48.016C365.314 46.8 364.93 45.68 364.93 44.656C364.93 40.688 366.818 38.096 370.594 36.88C374.434 35.664 379.938 35.056 387.106 35.056C390.882 35.056 394.818 35.664 398.914 36.88C403.01 38.096 406.466 40.016 409.282 42.64C412.098 45.2 413.506 48.4 413.506 52.24C413.506 54.864 412.322 57.04 409.954 58.768C407.65 60.496 404.93 61.84 401.794 62.8C398.658 63.76 394.818 64.752 390.274 65.776C386.498 66.608 384.034 67.216 382.882 67.6C387.81 74.256 392.546 79.44 397.09 83.152C401.698 86.864 406.498 90.224 411.49 93.232C413.218 94.256 414.434 95.024 415.138 95.536C415.842 96.048 416.194 96.528 416.194 96.976C416.194 97.424 415.906 97.84 415.33 98.224Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M465.129 95.056C464.361 95.056 463.817 94.864 463.497 94.48C463.241 94.096 463.113 93.552 463.113 92.848C463.113 91.44 463.433 89.264 464.073 86.32C464.777 83.632 465.129 81.424 465.129 79.696C465.129 74.704 464.745 70.896 463.977 68.272H461.001C458.377 68.272 454.953 68.208 450.729 68.08L441.705 67.984H428.745L428.937 71.728C428.937 74.672 429.417 78.352 430.377 82.768C430.697 84.56 430.985 86.384 431.241 88.24C431.561 90.032 431.721 91.664 431.721 93.136V94C431.081 94.64 430.409 94.96 429.705 94.96C428.041 94.96 426.729 93.008 425.769 89.104C424.809 85.136 424.329 80.368 424.329 74.8C424.329 72.56 424.425 70.352 424.617 68.176C423.209 68.112 422.249 67.888 421.737 67.504C421.225 67.056 420.969 66.384 420.969 65.488C420.969 64.784 421.161 64.304 421.545 64.048C421.993 63.792 422.761 63.6 423.849 63.472L423.753 60.88L424.041 56.464C424.489 49.232 425.161 43.344 426.057 38.8C426.953 34.256 428.873 30.32 431.817 26.992C434.761 23.664 439.177 22 445.065 22C451.785 22 457.033 25.616 460.809 32.848C464.585 40.08 467.145 48.144 468.489 57.04C469.833 65.936 470.505 73.584 470.505 79.984C470.505 82.288 470.441 84.304 470.313 86.032C470.185 87.696 469.929 89.776 469.545 92.272C468.073 94.128 466.601 95.056 465.129 95.056ZM463.593 64.528C462.377 52.688 460.201 43.408 457.065 36.688C453.929 29.904 449.225 26.512 442.953 26.512C438.281 26.512 434.825 28.688 432.585 33.04C430.409 37.328 429.097 41.936 428.649 46.864C428.201 51.792 427.977 57.328 427.977 63.472L463.593 64.528Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M499.709 93.808C498.685 93.68 497.725 93.616 496.829 93.616C495.997 93.552 495.421 93.52 495.101 93.52C494.845 93.456 494.717 93.328 494.717 93.136C494.269 91.088 493.949 89.296 493.757 87.76C493.565 86.16 493.437 84.688 493.373 83.344C493.309 81.424 493.149 79.536 492.893 77.68C492.701 75.76 492.253 73.232 491.549 70.096C487.965 70.672 485.565 70.96 484.349 70.96C483.069 70.96 482.109 70.736 481.469 70.288C480.829 69.776 480.509 68.976 480.509 67.888C480.509 67.248 480.861 66.928 481.565 66.928L484.445 66.64C484.893 66.576 486.941 66.32 490.589 65.872C490.461 64.016 490.205 60.208 489.821 54.448C489.629 49.84 489.341 46.16 488.957 43.408L476.957 44.464C476.061 45.04 475.357 45.328 474.845 45.328C474.077 44.752 473.597 44.016 473.405 43.12C474.941 41.456 478.621 40.08 484.445 38.992C490.333 37.904 496.701 37.36 503.549 37.36C512.125 37.36 519.485 38.288 525.629 40.144C531.773 41.936 535.101 44.72 535.613 48.496C533.629 48.496 531.709 48.272 529.853 47.824C527.997 47.376 525.661 46.704 522.845 45.808C519.261 44.592 515.965 43.664 512.957 43.024C510.013 42.384 506.685 42.064 502.973 42.064C500.605 42.064 498.013 42.256 495.197 42.64C495.197 48.592 495.357 56.112 495.677 65.2L499.037 64.912C509.277 64.08 515.261 63.664 516.989 63.664C517.821 63.664 518.397 63.728 518.717 63.856C519.037 63.92 519.293 64.048 519.485 64.24C519.549 66.16 517.725 67.536 514.013 68.368C510.301 69.136 504.413 69.68 496.349 70C496.669 73.136 497.277 77.232 498.173 82.288C499.005 87.024 499.517 90.864 499.709 93.808Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M571.079 95.056C569.287 95.056 568.039 94.128 567.335 92.272C566.631 90.416 566.055 87.92 565.607 84.784L565.319 82.384C564.359 77.264 563.591 72.176 563.015 67.12C562.439 62 561.863 55.824 561.287 48.592L560.711 41.488C556.871 41.552 551.399 41.392 544.295 41.008L542.375 40.912C541.479 40.848 540.839 40.432 540.455 39.664C540.135 38.832 539.975 37.712 539.975 36.304H546.599C557.735 36.304 567.783 36.72 576.743 37.552C585.703 38.384 590.183 40.08 590.183 42.64C590.183 43.344 590.055 43.824 589.799 44.08C589.607 44.336 589.159 44.464 588.455 44.464C585.895 44.272 581.927 43.728 576.551 42.832C575.335 42.64 573.863 42.416 572.135 42.16C570.407 41.904 568.455 41.648 566.279 41.392C566.279 50.672 567.655 64.944 570.407 84.208C570.535 85.168 570.983 86.544 571.751 88.336C572.071 89.104 572.359 89.936 572.615 90.832C572.935 91.664 573.095 92.432 573.095 93.136C573.095 94.032 572.967 94.576 572.711 94.768C572.455 94.96 572.135 95.056 571.751 95.056C571.431 95.056 571.207 95.056 571.079 95.056Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
		<path
			d="M627.742 91.312C632.99 91.312 637.054 90.576 639.934 89.104C642.814 87.632 644.254 85.488 644.254 82.672C644.254 80.176 643.39 78.032 641.662 76.24C639.934 74.384 637.79 72.816 635.23 71.536C632.67 70.256 629.182 68.752 624.766 67.024C624.382 66.896 623.454 66.544 621.982 65.968C615.966 63.536 611.326 61.104 608.062 58.672C604.862 56.24 603.262 53.104 603.262 49.264C603.262 44.976 604.958 41.744 608.35 39.568C611.742 37.392 616.094 36.304 621.406 36.304C625.31 36.304 628.894 36.816 632.158 37.84C635.486 38.8 638.11 40.144 640.03 41.872C642.014 43.6 643.006 45.552 643.006 47.728C642.238 48.112 641.502 48.304 640.798 48.304C640.03 48.304 639.23 48.144 638.398 47.824C637.63 47.44 636.478 46.832 634.942 46C632.446 44.656 630.11 43.6 627.934 42.832C625.758 42 623.198 41.584 620.254 41.584C616.542 41.584 613.534 42.224 611.23 43.504C608.926 44.784 607.774 46.576 607.774 48.88C607.774 50.672 608.542 52.304 610.078 53.776C611.678 55.248 613.662 56.56 616.03 57.712C618.462 58.8 621.694 60.112 625.726 61.648C630.846 63.632 635.07 65.488 638.398 67.216C641.726 68.944 644.542 71.152 646.846 73.84C649.214 76.464 650.398 79.6 650.398 83.248C650.398 87.536 648.35 90.864 644.254 93.232C640.158 95.536 635.07 96.688 628.99 96.688C624.19 96.688 619.454 95.984 614.782 94.576C610.11 93.168 606.11 91.088 602.782 88.336C599.454 85.52 597.342 82.16 596.446 78.256C596.446 76.528 596.926 75.056 597.886 73.84C598.846 72.56 600.03 71.92 601.438 71.92C601.438 76.08 602.59 79.632 604.894 82.576C607.262 85.456 610.43 87.632 614.398 89.104C618.43 90.576 622.878 91.312 627.742 91.312Z"
			stroke="white"
			strokeWidth="8"
			mask="url(#path-1-outside-1)"
		/>
	</svg>
);

export default navlogo;
