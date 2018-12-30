var currentDate = new Date();

console.log(currentDate.toString());


console.log(currentDate.getDay() );



var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);


console.log(currentDate.getTime());