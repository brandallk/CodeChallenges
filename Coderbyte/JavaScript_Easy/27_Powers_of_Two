/* Description: For this challenge you will be determining whether or not a
number is a power of two.

Using the JavaScript language, have the function PowersofTwo(num) take the num
parameter being passed which will be an integer and return the string true if
it's a power of two. If it's not return the string false. For example if the input
is 16 then your program should return the string true but if the input is 22 then
the output should be the string false.
*/

function PowersofTwo(num) { 

  var num2 = num
  while (!(num2 / 2 < 2)) {
      num2 = num2 / 2
      if (num2 === 2) {
          return "true"
      }
  }
  
  return "false"
         
}

console.log(PowersofTwo(16)) // => "true"
console.log(PowersofTwo(22)) // => "false"
console.log(PowersofTwo(4)) // => "true"
console.log(PowersofTwo(124)) // => "false"
