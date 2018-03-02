/* For this challenge you will be determining the multiplicative persistence for a given number.

 Using the JavaScript language, have the function MultiplicativePersistence(num) take the num
 parameter being passed which will always be a positive integer and return its multiplicative
 persistence which is the number of times you must multiply the digits in num until you reach a
 single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27
 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
*/


function MultiplicativePersistence(num) {
  var count = 0
  while (!(num < 10)) {
      var numArr = String(num).split("").map(char => Number(char))
      num = numArr.reduce((a,b) => a * b)
      count++
  }
  return count
}

console.log(MultiplicativePersistence(4)) //=> 0
console.log(MultiplicativePersistence(12)) //=> 1
console.log(MultiplicativePersistence(25)) //=> 2
console.log(MultiplicativePersistence(39)) //=> 3
