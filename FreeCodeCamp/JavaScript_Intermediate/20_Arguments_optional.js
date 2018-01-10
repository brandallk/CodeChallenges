/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
  var arg1 = arguments[0], arg2 = arguments[1];
  
  // If first argument is not of type 'number', return undefined
  if (typeof arg1 !== 'number') {
    return undefined;
  }
  
  if (arg1 && arg2) {
    // If second argument is not of type 'number', return undefined.
    // Otherwise, return the sum of the two arguments.
    return (typeof arg2 === 'number') ? arg1 + arg2 : undefined;
    
  } else if (arg1) {
    // If only one argument given, return a function
    var adder = function(num) {
      return (typeof num === 'number') ? arg1 + num : undefined;
    };
    
    return adder;
  }
}

addTogether(2,3);                      // => 5
addTogether(2)(3);                     // => 5
addTogether("http://bit.ly/IqT6zt");   // => undefined
addTogether(2, "3");                   // => undefined
addTogether(2)([3]);                   // => undefined
