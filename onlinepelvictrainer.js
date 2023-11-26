
// document.getElementById("timer-app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
//     </g>
//   </svg>
//   <span>
//     <!-- Remaining time label -->
//   </span>
// </div>
// `;

// function formatTimeLeft(time) {
//     const minutes = Math.floor(time/60);
//     let seconds = time % 60;
//     if (sectionds <10) {
//         seconds = '0${seconds}';
//     }
//     return '$(minutes):${seconds}';
// }


// let timeLeft = 10; // Countdown from 10 seconds

// function countdown() {
// 	if (timeLeft == 0) {
// 		clearTimeout(timerId1);
// 		console.log("Countdown finished!");
// 	} else if (timeLeft == 5) {
//     clearTimeout(timerId2);
//     timeLeft--;
//     console.log("second timer stopped")
//   }
//   else {
// 		console.log(timeLeft + " seconds remaining");
// 		timeLeft--;
// 	}
// }

// const timerId1 = setInterval(countdown, 1000);
// const timerId2 = setInterval(countdown, 1500);

let timeLeft = 10;

function countdown() {
	if (timeLeft == 0) {
		clearTimeout(timerId1);
		console.log("Countdown finished!");
    // const timerId2 = setInterval (countdown, 1000);
	} else {
		console.log(timeLeft + " seconds remaining");
		timeLeft--;
	}
}

const timerId1 = setInterval(countdown, 1000);