/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

// A more verbose alternative for converting binary -> denary:
// function getDenaryFromBinary(binaryStr) {
//   // Split an 8-character string of binary code into an array of 8 digits
//   var binaryDigits = binaryStr.split("");

//   // Parse the array of binary digits, summing the denary value of each digit
//   var denaryInteger = 0;
//   for (var i = 0, j = 7; i < 8; i++) {
//     denaryInteger += binaryDigits[i] * Math.pow(2, j--);
//   }

//   return denaryInteger;
// }

function getDenaryFromBinary(binaryStr) {
  return parseInt(binaryStr, 2);
}

function binaryAgent(str) {  
  // Split 'str' into an array of character elements and translate each from binary
  var translated = str.split(" ").map(function(char) {
    return String.fromCharCode(getDenaryFromBinary(char));
  });
  
  // Join the array of translated characters into a string
  return translated.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));   // => "Aren\'t bonfires fun!?"
