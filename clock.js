console.log("Javascript is running");
var secondHand = document.querySelector('#second');
var minuteHand = document.querySelector('#minute');
var hourHand = document.querySelector('#hour');
var now = new Date();
var startSeconds = now.getSeconds();
var startMinutes = now.getMinutes()+(now.getSeconds()/60)
var startHours = now.getHours()+(now.getSeconds()/3600)
console.log(startHours, startMinutes, startSeconds)

secondHand.style.transform = "rotate(" + startSeconds*6 + "deg)";
minuteHand.style.transform = "rotate(" + startMinutes*6 + "deg)";
hourHand.style.transform = "rotate(" + startHours*30 + "deg)";

var secondDegrees = startSeconds*6;
var minuteDegrees = startMinutes*6;
var hourDegrees = startHours*30;

document.addEventListener('DOMContentLoaded',function(){
setInterval(function(){
	console.log("Tick");
	tickSecond();
	tickMinute();
	tickHour();
	var actualTime = new Date();
	console.log(actualTime)
}, 1000);
})

function tickSecond(){
	secondDegrees += 6;
	secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
}

function tickMinute(){
	minuteDegrees += .1;
	minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";
}

function tickHour(){
	hourDegrees += (.1/12);
	hourHand.style.transform = "rotate(" + hourDegrees + "deg)";

}