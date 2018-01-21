/* Using the JavaScript language, have the function TimeConvert(num) take the num parameter
being passed and return the number of hours and minutes the parameter converts to (ie. if
num = 63 then the output should be 1:3). Separate the number of hours and minutes with a
colon. */


function TimeConvert(num) {
  var hrs = Math.floor(num/60);
  var mins = num % 60;
  return hrs + ":" + mins;
}

console.log(TimeConvert(126));    // => "2:6"
console.log(TimeConvert(45));     // => "0:45"
