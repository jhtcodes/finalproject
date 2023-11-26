

let timeLeft1 = 10;
let timeLeft2 = 9;

function countdown1() {
	if (timeLeft1 == 0) {
		clearTimeout(timerId1);
		console.log("Countdown finished!");
		const timerId2 = setInterval(coountdown2, 1000);
	} else {
		console.log(timeLeft + " seconds remaining");
		timeLeft1--;
	}
}

function countdown2() {
	if (timeLeft2 === 0) {
		clearTimeout(timerId2);
		console.log("Countdown 2 Finished!");
	} else {
		console.log("Countdown 2: "+ timeLeft2 + " seconds remaining");
		timeLeft2--;
	}
}

const timerId1 = setInterval(countdown, 1000);
const timerId2 = setInterval(countdown, 1000);
