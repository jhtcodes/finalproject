// steps:
// 1. click start button - done
// 2. get squeezeTimer to start counting from the number of seconds written in squeeze input
// 3. get relaxTimer to start counting from teh umber of seconds wrriten in relax input
// 4. get squeeze timer and relax timer to continue to repeat for the number of reps written in repetition time
// 5. end with a prompt that says "Good work on completing your pelvic floor exercises! See you for the next round!"

// other things taht can be done - button for set time squeeze/ relax/ rept time


const startBtn = document.querySelector('.start-button');
const squeezeTime = document.querySelector('#squeeze-number')
const relaxTime = document.querySelector('#relax-number')
const repetitions = document.querySelector('#rep-number')


startBtn.addEventListener('click', function() {
	console.log('start button working')
	squeezeTimer();
})

function squeezeTimer () {
	let timeLeft = squeezeTime.value;

	function countdown() {
		if (timeLeft == 0) {
			clearTimeout(timerId);
			console.log("Squeeze Timer finished!");
			relaxTimer ()
		} else {
			console.log(timeLeft + " seconds remaining");
			timeLeft--;
		}
	}
	
	let timerId = setInterval(countdown, 1000);}

function relaxTimer () {
	let timeLeft = relaxTime.value;

	function countdown() {
		if (timeLeft == 0) {
			clearTimeout(timerId);
			console.log("Relax Timer finished!");
		} else {
			console.log(timeLeft + " seconds remaining");
			timeLeft--;
		}
	}
	
	let timerId = setInterval(countdown, 1000);}