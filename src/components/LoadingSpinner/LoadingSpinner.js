import React from "react";
import classes from "./LoadingSpinner.module.css";

const loadingSpinner = () => (
	<svg
		className="center-align"
		width="100%"
		height="100"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g className={classes.LoadingSpinner}>
			<g id="Group">
				<path
					className={classes.SpinThis}
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M316.655 403.2C373.525 355.579 399.653 263.631 373.525 191.843C337.596 93.133 228.065 42.053 129.349 77.982C119.001 81.748 108.952 86.414 99.474 91.853C96.133 93.771 94.51 97.861 96.013 101.409C97.806 105.644 102.82 107.237 106.678 105.014C115.489 99.937 124.842 95.585 134.48 92.077C149.397 86.648 164.583 83.389 179.694 82.113C148.3 96.27 114.351 117.116 90.79 141.631C56.139 177.685 31.545 220.064 19.257 264.05C17.314 211.831 38.703 159.904 79.212 124.609C82.282 121.934 82.87 117.222 80.302 114.062C77.614 110.755 72.747 110.354 69.558 113.125C40.777 138.131 20.33 170.892 10.428 207.867C0.295985 245.701 2.04598 285.221 15.49 322.155C28.074 356.73 50.163 386.692 79.37 408.803C107.811 430.333 141.576 443.453 177.016 446.743C179.527 446.98 182.634 445.584 184.262 442.56C185.123 440.961 185.425 439.072 184.952 437.319C184.158 434.381 181.611 432.105 178.403 431.807C149.02 429.079 121.332 418.952 97.536 403.126C96.745 389.55 97.813 375.107 100.555 360.299C158.353 400.336 230.769 415.101 298.018 398.743C284.993 408.263 270.437 416.131 254.534 421.92C240.722 426.948 226.373 430.233 211.888 431.686C207.766 432.099 204.76 435.775 205.173 439.896C205.402 442.763 208.741 446.92 213.384 446.61C229.11 445.033 244.68 441.469 259.664 436.015C269.763 432.339 279.362 427.891 288.421 422.764C293.044 419.536 313.605 405.754 316.655 403.2ZM121.944 295.981C195.279 343.917 293.301 347.822 363.777 303.129C365.617 296.413 367.066 289.576 368.102 282.653C294.637 312.178 211.247 301.967 143.324 258.65C135.263 270.567 128.094 283.124 121.944 295.981ZM152.054 246.437C218.702 288.717 301.74 296.641 369.801 265.577C370.309 255.488 369.939 245.284 368.652 235.07C346.44 241.887 323.184 245.277 299.746 245.277C259.692 245.273 216.042 234.883 180.276 214.71C169.587 225.161 160.469 235.333 152.054 246.437ZM319.009 178.125C329.448 178.086 339.878 177.315 350.132 175.848C343.286 162.698 334.918 150.707 325.332 140.012C298.093 143.812 271.106 152.845 245.547 166.498C258.517 170.718 271.781 173.825 285.143 175.751C288.559 176.244 291.104 178.967 291.515 182.233C291.685 183.584 291.395 184.966 290.79 186.186C289.115 189.561 285.71 190.997 283.002 190.598C264.52 187.934 246.225 183.14 228.571 176.382C215.802 184.443 203.482 193.682 191.769 204.019C246.344 232.192 310.649 237.802 366.105 220.16C364.431 212.391 362.223 204.646 359.43 196.972C358.575 194.623 357.664 192.311 356.72 190.021C344.233 192.052 331.47 193.097 318.703 193.126H318.686C314.234 193.126 310.686 189.247 311.244 184.679C311.71 180.861 315.162 178.14 319.009 178.125ZM60.862 370.609C67.398 378.268 74.572 385.342 82.285 391.761C82.786 329.26 118.304 255.706 162.954 210.861C205.498 166.593 258.081 137.15 312.308 126.949C303.094 118.631 293.057 111.344 282.391 105.181C229.688 114.091 178.007 142.634 136.664 185.732C118.299 204.878 102.799 226.033 90.593 248.61C89.237 251.12 86.655 252.545 83.989 252.545C82.784 252.545 81.563 252.254 80.429 251.641C76.785 249.67 75.428 245.12 77.398 241.476C90.244 217.714 106.542 195.466 125.84 175.348C164.355 135.197 211.528 107.004 260.551 94.484C247.16 89.035 233.086 85.228 218.655 83.198C182.4 94.444 132.429 119.951 101.604 152.024C58.431 196.946 31.715 252.018 26.327 307.153C30.919 322.647 37.881 337.536 45.849 350.202C47.071 325.211 52.636 299.338 62.302 274.211C63.788 270.346 68.127 268.415 71.994 269.904C75.861 271.391 77.789 275.731 76.302 279.597C64.621 309.963 59.308 341.381 60.862 370.609ZM104.097 344.437C109.54 348.391 115.191 352.17 120.966 355.676C184.458 394.222 260.804 401.071 325.258 374.026C338.359 359.339 348.857 342.589 356.386 324.571C281.388 363.356 186.916 355.514 115.752 309.83C110.993 321.31 107.085 332.922 104.097 344.437Z"
					fill="black"
				/>
				<g id="Vector">
					<path
						d="M327.353 71.986L336.858 77.308C344.965 81.848 351.651 88.534 356.192 96.642L361.515 106.147C363.536 109.756 367.363 111.999 371.5 111.999C375.637 111.999 379.464 109.756 381.486 106.146L386.808 96.642C391.349 88.534 398.035 81.848 406.143 77.308L415.646 71.986C419.256 69.965 421.5 66.138 421.5 62C421.5 57.862 419.257 54.035 415.647 52.014L406.142 46.692C398.035 42.152 391.349 35.466 386.808 27.358L381.485 17.853C379.464 14.243 375.638 12 371.5 12C367.362 12 363.536 14.243 361.514 17.853L356.192 27.357C351.651 35.465 344.965 42.151 336.857 46.691L327.354 52.013C323.744 54.034 321.5 57.861 321.5 61.999C321.5 66.137 323.742 69.964 327.353 71.986V71.986ZM344.186 59.779C354.708 53.886 363.386 45.21 369.28 34.686L371.501 30.72L373.722 34.686C379.616 45.21 388.293 53.887 398.815 59.779L402.779 62L398.814 64.221C388.292 70.114 379.614 78.79 373.72 89.314L371.5 93.28L369.279 89.314C363.385 78.79 354.708 70.113 344.186 64.221L340.221 62L344.186 59.779Z"
						fill="black"
					/>
					<path
						d="M327.353 71.986L336.858 77.308C344.965 81.848 351.651 88.534 356.192 96.642L361.515 106.147C363.536 109.756 367.363 111.999 371.5 111.999C375.637 111.999 379.464 109.756 381.486 106.146L386.808 96.642C391.349 88.534 398.035 81.848 406.143 77.308L415.646 71.986C419.256 69.965 421.5 66.138 421.5 62C421.5 57.862 419.257 54.035 415.647 52.014L406.142 46.692C398.035 42.152 391.349 35.466 386.808 27.358L381.485 17.853C379.464 14.243 375.638 12 371.5 12C367.362 12 363.536 14.243 361.514 17.853L356.192 27.357C351.651 35.465 344.965 42.151 336.857 46.691L327.354 52.013C323.744 54.034 321.5 57.861 321.5 61.999C321.5 66.137 323.742 69.964 327.353 71.986V71.986ZM344.186 59.779C354.708 53.886 363.386 45.21 369.28 34.686L371.501 30.72L373.722 34.686C379.616 45.21 388.293 53.887 398.815 59.779L402.779 62L398.814 64.221C388.292 70.114 379.614 78.79 373.72 89.314L371.5 93.28L369.279 89.314C363.385 78.79 354.708 70.113 344.186 64.221L340.221 62L344.186 59.779Z"
						fill="url(#paint0_linear)"
					/>
				</g>
				<g id="Vector_2">
					<path
						d="M74.621 450.824L67.354 446.755C61.437 443.441 56.558 438.562 53.246 432.647L49.176 425.378C47.318 422.061 43.802 420 40 420C36.198 420 32.682 422.061 30.823 425.379L26.754 432.646C23.442 438.562 18.563 443.44 12.647 446.754L5.38 450.823C2.062 452.681 0 456.197 0 460C0 463.802 2.061 467.318 5.379 469.176L12.646 473.245C18.563 476.559 23.442 481.438 26.754 487.353L30.824 494.622C32.682 497.939 36.198 500 40 500C43.802 500 47.318 497.939 49.177 494.621L53.246 487.354C56.558 481.438 61.437 476.56 67.353 473.246L74.62 469.177C77.938 467.319 80 463.803 80 460C80 456.197 77.938 452.681 74.621 450.824V450.824ZM60.024 460.159C51.692 464.826 44.823 471.695 40.158 480.026L40 480.308L39.842 480.025C35.177 471.695 28.308 464.825 19.975 460.158L19.692 460L19.975 459.841C28.307 455.174 35.176 448.305 39.841 439.974L40 439.692L40.158 439.975C44.823 448.305 51.692 455.175 60.025 459.842L60.308 460L60.024 460.159Z"
						fill="black"
					/>
					<path
						d="M74.621 450.824L67.354 446.755C61.437 443.441 56.558 438.562 53.246 432.647L49.176 425.378C47.318 422.061 43.802 420 40 420C36.198 420 32.682 422.061 30.823 425.379L26.754 432.646C23.442 438.562 18.563 443.44 12.647 446.754L5.38 450.823C2.062 452.681 0 456.197 0 460C0 463.802 2.061 467.318 5.379 469.176L12.646 473.245C18.563 476.559 23.442 481.438 26.754 487.353L30.824 494.622C32.682 497.939 36.198 500 40 500C43.802 500 47.318 497.939 49.177 494.621L53.246 487.354C56.558 481.438 61.437 476.56 67.353 473.246L74.62 469.177C77.938 467.319 80 463.803 80 460C80 456.197 77.938 452.681 74.621 450.824V450.824ZM60.024 460.159C51.692 464.826 44.823 471.695 40.158 480.026L40 480.308L39.842 480.025C35.177 471.695 28.308 464.825 19.975 460.158L19.692 460L19.975 459.841C28.307 455.174 35.176 448.305 39.841 439.974L40 439.692L40.158 439.975C44.823 448.305 51.692 455.175 60.025 459.842L60.308 460L60.024 460.159Z"
						fill="url(#paint1_linear)"
					/>
				</g>
				<g id="Vector_3">
					<path
						d="M5.379 76.176L12.646 80.245C18.563 83.559 23.442 88.438 26.754 94.353L30.824 101.622C32.682 104.939 36.198 107 40 107C43.802 107 47.318 104.939 49.177 101.621L53.246 94.354C56.558 88.438 61.437 83.56 67.353 80.246L74.62 76.177C77.938 74.319 80 70.803 80 67C80 63.197 77.938 59.681 74.621 57.824L67.354 53.755C61.437 50.441 56.558 45.562 53.246 39.647L49.176 32.378C47.318 29.061 43.802 27 40 27C36.198 27 32.682 29.061 30.823 32.379L26.754 39.646C23.442 45.562 18.563 50.44 12.647 53.754L5.38 57.823C2.062 59.681 0 63.197 0 67C0 70.802 2.061 74.318 5.379 76.176V76.176ZM19.976 66.841C28.308 62.174 35.177 55.305 39.842 46.974L40 46.692L40.158 46.975C44.823 55.305 51.692 62.175 60.025 66.842L60.308 67L60.025 67.159C51.693 71.826 44.824 78.695 40.159 87.026L40 87.308L39.842 87.025C35.177 78.695 28.308 71.825 19.975 67.158L19.692 67L19.976 66.841Z"
						fill="black"
					/>
					<path
						d="M5.379 76.176L12.646 80.245C18.563 83.559 23.442 88.438 26.754 94.353L30.824 101.622C32.682 104.939 36.198 107 40 107C43.802 107 47.318 104.939 49.177 101.621L53.246 94.354C56.558 88.438 61.437 83.56 67.353 80.246L74.62 76.177C77.938 74.319 80 70.803 80 67C80 63.197 77.938 59.681 74.621 57.824L67.354 53.755C61.437 50.441 56.558 45.562 53.246 39.647L49.176 32.378C47.318 29.061 43.802 27 40 27C36.198 27 32.682 29.061 30.823 32.379L26.754 39.646C23.442 45.562 18.563 50.44 12.647 53.754L5.38 57.823C2.062 59.681 0 63.197 0 67C0 70.802 2.061 74.318 5.379 76.176V76.176ZM19.976 66.841C28.308 62.174 35.177 55.305 39.842 46.974L40 46.692L40.158 46.975C44.823 55.305 51.692 62.175 60.025 66.842L60.308 67L60.025 67.159C51.693 71.826 44.824 78.695 40.159 87.026L40 87.308L39.842 87.025C35.177 78.695 28.308 71.825 19.975 67.158L19.692 67L19.976 66.841Z"
						fill="url(#paint2_linear)"
					/>
				</g>
				<g id="Vector_4">
					<path
						d="M431.641 165.772L437.791 169.216C442.611 171.915 446.586 175.89 449.285 180.71L452.728 186.859C454.503 190.03 457.865 192.001 461.499 192.001C465.133 192.001 468.495 190.031 470.27 186.859L473.713 180.71C476.412 175.89 480.387 171.915 485.208 169.216L491.357 165.772C494.528 163.996 496.498 160.635 496.498 157.001C496.498 153.367 494.528 150.006 491.357 148.23L485.207 144.786C480.387 142.087 476.412 138.112 473.713 133.292L470.27 127.143C468.495 123.972 465.133 122.001 461.499 122.001C457.865 122.001 454.503 123.971 452.728 127.143L449.285 133.292C446.586 138.112 442.611 142.087 437.79 144.786L431.641 148.23C428.47 150.006 426.5 153.367 426.5 157.001C426.5 160.635 428.47 163.995 431.641 165.772V165.772ZM461.5 142.11C465.215 148.185 470.315 153.285 476.391 157C470.316 160.714 465.215 165.815 461.5 171.89C457.785 165.815 452.685 160.715 446.609 157C452.685 153.286 457.785 148.185 461.5 142.11V142.11Z"
						fill="black"
					/>
					<path
						d="M431.641 165.772L437.791 169.216C442.611 171.915 446.586 175.89 449.285 180.71L452.728 186.859C454.503 190.03 457.865 192.001 461.499 192.001C465.133 192.001 468.495 190.031 470.27 186.859L473.713 180.71C476.412 175.89 480.387 171.915 485.208 169.216L491.357 165.772C494.528 163.996 496.498 160.635 496.498 157.001C496.498 153.367 494.528 150.006 491.357 148.23L485.207 144.786C480.387 142.087 476.412 138.112 473.713 133.292L470.27 127.143C468.495 123.972 465.133 122.001 461.499 122.001C457.865 122.001 454.503 123.971 452.728 127.143L449.285 133.292C446.586 138.112 442.611 142.087 437.79 144.786L431.641 148.23C428.47 150.006 426.5 153.367 426.5 157.001C426.5 160.635 428.47 163.995 431.641 165.772V165.772ZM461.5 142.11C465.215 148.185 470.315 153.285 476.391 157C470.316 160.714 465.215 165.815 461.5 171.89C457.785 165.815 452.685 160.715 446.609 157C452.685 153.286 457.785 148.185 461.5 142.11V142.11Z"
						fill="url(#paint3_linear)"
					/>
				</g>
			</g>
		</g>
		<defs>
			<linearGradient
				id="paint0_linear"
				x1="371.5"
				y1="12"
				x2="371.5"
				y2="111.999"
				gradientUnits="userSpaceOnUse"
			>
				<stop />
				<stop offset="1" stop-color="white" stop-opacity="0" />
			</linearGradient>
			<linearGradient
				id="paint1_linear"
				x1="40"
				y1="420"
				x2="40"
				y2="500"
				gradientUnits="userSpaceOnUse"
			>
				<stop />
				<stop offset="1" stop-color="white" stop-opacity="0" />
			</linearGradient>
			<linearGradient
				id="paint2_linear"
				x1="40"
				y1="27"
				x2="40"
				y2="107"
				gradientUnits="userSpaceOnUse"
			>
				<stop />
				<stop offset="1" stop-color="white" stop-opacity="0" />
			</linearGradient>
			<linearGradient
				id="paint3_linear"
				x1="461.499"
				y1="122.001"
				x2="461.499"
				y2="192.001"
				gradientUnits="userSpaceOnUse"
			>
				<stop />
				<stop offset="1" stop-color="white" stop-opacity="0" />
			</linearGradient>
		</defs>
	</svg>
);

export default loadingSpinner;
