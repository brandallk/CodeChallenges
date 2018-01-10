/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
  
  // Split 'str' into an array of character elements and translate each from binary
  var translated = str.split(" ").map(function(elt) {
    
    // Split each character's binary code into an array of 8 digits
    var base2 = elt.split("");
    
    // Prepare a var to hold the binary number converted to denary
    var base10 = 0;
    
    // Parse the array of binary digits, summing the denary value of each digit
    for (var i = 7; i >= 0; i--) {
      base10 += base2[7-i] * Math.pow(2, i);
    }
    
    // Convert the denary number (as Unicode decimal equivalent) to a character
    return String.fromCharCode(base10);
  });
  
  // Join the array of translated characters into a string
  return translated.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");   // => "Aren\'t bonfires fun!?"
