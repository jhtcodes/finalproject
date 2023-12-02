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
const squeezeBtn = document.querySelector('.squeeze-btn')
const relaxBtn = document.querySelector('.relax-btn')
const repetitionBtn = document.querySelector('.repetitions-btn')
const onRepeat = document.querySelector('#rep-number')
const transitionBar = document.querySelector('.timer-bar')
const transitionBarProgress = document.querySelector('.timer-bar-progress')
const timeSpan = document.querySelector('.time')

startBtn.addEventListener("click", function () {
	console.log("start button working")
	RepeatTheSet ()
})

function RepeatTheSet () {
	let RepeatCounter = onRepeat.value;
	RepeatCounter--;
	
	if (RepeatCounter =>1) {
		numbersDown ();
	} else {
		alert("completed task today")
	}
}

function numbersDown () {
	let intervalFirst = squeezeTime.value;
	const countDown = setInterval(() => {
		intervalFirst --;
		let transitionBarWidth = intervalFirst / squeezeTime.value * 100

		if (intervalFirst == 0) {
			clearInterval(countDown)
			transitionBar.style.width = "0%";
			timeSpan.innerHTML = "0s"
			numbersUp ()
		} else {if (intervalFirst >= 1) {
			transitionBar.style.width = transitionBarWidth + "%"
			timeSpan.innerHTML = intervalFirst + 's'
		}} 
}, 1000)}
;

function numbersUp () {
	let intervalSecond = relaxTime.value;
	let count = 0;
	const countUp = setInterval(() => {
		count++;
		let transitionBarWidth = count / relaxTime.value * 100
		if (count < intervalSecond) {
			transitionBar.style.width = transitionBarWidth + "%"
			timeSpan.innerHTML = intervalSecond + 's'
		} else if (count >= relaxTime.value) { 
			clearInterval(countUp)
			transitionBar.style.width = "100%";
			timeSpan.innerHTML = relaxTime.value + 's'
		} 
}, 1000);
}


squeezeBtn.addEventListener("click", addSqueezeTimeToSqueeze())
function addSqueezeTimeToSqueeze() {
	console.log('squeeze btn working')
}
relaxBtn.addEventListener("click", function () {
	console.log("relax button working")
})


repetitionBtn.addEventListener("click", function () {
	console.log("rep button working")
})


// function repetitionTimer () {
// 	if (currentRepetition >= repetitions) {
// 		return;
// 	}
// 	setTimeouut(() => {
// 		transitionBar.computedStyleMap.
// 	})
// }