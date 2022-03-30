// set the date we're counting down to
var countDownDate = new Date("March 6, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Outout the result in an element with id="demo"

var z =document.getElementsByClassName("offer-section");
for (var i = 0; i < z.length; i++) {
    z[i].innerHTML = 
    '<span id="day">'+
    days +
    "</span>" +
    '<span id="hours">'+
    hours +
    "</span>" + 
    '<span id="minutes">'+
    minutes +
    "</span>" + 
    '<span id="seconds">'+
    seconds +
    "</span>";
}

// If the count down is Over, write some text
if (distance < 0) {
    clearInterval(x);
   var y = document.getElementsByClassName("offer-section");
    for (var i = 0; i < z.length; i++) {
        y[i].innerHTML = "";
    }
    var e = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
        e[i].innerHTML = "what ever!";
    }
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
        t[i].style.filter = "blur:2px";
    }
 }
}, 1000);

