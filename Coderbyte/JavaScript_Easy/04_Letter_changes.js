/* Have the function LetterChanges(str) take the str parameter being passed and modify
it using the following algorithm. Replace every letter in the string with the letter following
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new
string (a, e, i, o, u) and finally return this modified string.  */


function LetterChanges(str) {
  var a   = "a".charCodeAt(0);  // Get the letter's corresponding character code
  var z   = "z".charCodeAt(0);
  var A   = "A".charCodeAt(0);
  var Z   = "Z".charCodeAt(0);
  var arr = str.split("");  // Process the string as an array of characters

  var newArr = arr.map(function(char) {
      var newChar = char;
      var charCode = char.charCodeAt(0);
      if ((charCode >= a && charCode < z) || (charCode >= A && charCode < Z)) {
          newChar = String.fromCharCode(charCode + 1);  // "a" -> "b", "B" -> "C", etc.
      } else if (charCode === z || charCode === Z) {
          newChar = String.fromCharCode(charCode - 25);  // "z" -> "a", "Z" -> "A"
      }
      if (["a", "e", "i", "o", "u"].indexOf(newChar) != -1) {  // Find vowels
          newChar = newChar.toUpperCase();  // ...and capitalize them
      }
      return newChar;
  });
  return newArr.join("");    
}

console.log(LetterChanges("hello*3"));       // => 'Ifmmp*3'
console.log(LetterChanges("fun times!"));    // => 'gvO Ujnft!'
