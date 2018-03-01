/* For this challenge you will be determining the additive persistence for a given number.

 Using the JavaScript language, have the function AdditivePersistence(num) take the num
 parameter being passed which will always be a positive integer and return its additive
 persistence which is the number of times you must add the digits in num until you reach a
 single digit. For example: if num is 2718 then your program should return 2 because
 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
*/

function AdditivePersistence(num) {
  var counter = 0
  function addArr(arr) {
      var nextSum = arr.reduce((a,b) => a+b)
      counter++
      if (nextSum > 9) {
          return addArr(String(nextSum).split("").map(char => Number(char)))
      }
      return nextSum
  }
  if (num > 9) {
    addArr(String(num).split("").map(char => Number(char)))
  }
  return counter
}

console.log(AdditivePersistence(2718)) // => 2
console.log(AdditivePersistence(19)) // => 2
console.log(AdditivePersistence(18)) // => 1
console.log(AdditivePersistence(4)) // => 0
