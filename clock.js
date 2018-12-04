console.log("Javascript is running");
var secondHand = document.querySelector('#second');
var minuteHand = document.querySelector('#minute');
var hourHand = document.querySelector('#hour');
var secondDegrees = 0;
var minuteDegrees = 0;
var hourDegrees = 0;

setInterval(function(){
	console.log("Tick");
	tickSecond();
	tickMinute();
	tickHour();
}, 1000);

function tickSecond(){
	secondDegrees += 6;
	secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
}

function tickMinute(){
	minuteDegrees += .1;
	minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";
}

function tickHour(){
	hourDegrees += (.1/60);
	hourHand.style.transform = "rotate(" + hourDegrees + "deg)";

}