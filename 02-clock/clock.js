const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const secondsDegrees = ((seconds/60)*360) + 90;
	const minutesDegrees = ((minutes/60)*360) + 90;
	//To hours degrees added  "minutesDegrees/2". Now hours hand moving along more like in real clock.
	const hoursDegrees = ((hours/12)*360) + 90 + minutesDegrees/12;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);