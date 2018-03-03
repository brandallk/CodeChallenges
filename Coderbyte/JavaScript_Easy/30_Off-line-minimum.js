/* For this challenge you will be creating a subset of an array.

Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr
parameter being passed which will be an array of integers ranging from 1...n and the
letter "E" and return the correct subset based on the following rules. The input will be
in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers
and the E means take out the smallest integer currently in the whole set. When finished,
your program should return that new set with integers separated by commas. For example:
if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.
*/

// Tests are all failing: Think need to reconver output numbers in subArr to strings

function OffLineMinimum(strArr) { 
  var minInts = []
  for (var i = 0; i < strArr.length; i++) {
      var elt = strArr[i]      
      if (elt === "E") {
          var subArr = strArr.slice(0, i).filter(elt => elt !== 'E')
          var minInt = String(Math.min(...subArr))
          minInts.push(minInt)
          strArr.splice(strArr.indexOf(minInt), 1)
          i--
      }
  }  
  return minInts.join(',')
}

console.log(OffLineMinimum(["1","2","E","E","3"])) // => "1,2"
console.log(OffLineMinimum(["4","E","1","E","2","E","3","E"])) // => "4,1,2,3"
console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])) // => "4,1,5"
