var past = new Date("Jan 01, 1998");
//console.log(current.getTime());
var currentDate  = new Date();

console.log( (( ((currentDate.getTime() - past.getTime()) / 1000 )/60)/60 )/24/30/12 );
