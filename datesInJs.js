var currentDT = new Date();
var currentTime = currentDT.getTime();
var currentFullYr = currentDT.getFullYear();
var currentMonth = currentDT.getMonth();
var currentDateString = currentDT.toDateString();
var currentDay = currentDT.getDay();
var milliSec = currentDT.getMilliseconds();
var getHour = currentDT.getHours();
var getSec = currentDT.getSeconds();
var utcString = currentDT.toUTCString();
var utcSec = currentDT.getUTCSeconds();
var tzOffest = currentDT.getTimezoneOffset();

console.log(currentTime);
console.log(currentDT);
console.log(currentDay);
console.log(currentMonth);
console.log(currentDateString);
console.log(currentFullYr);
console.log(Date().valueOf());
console.log(utcSec);
console.log(utcString);
console.log(tzOffest);
console.log(getSec);
console.log(milliSec);
console.log(getHour);
console.log(getSec);