/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3. */

// Get an array filled with integers between the two given numbers
function getRangeBetween(num1, num2) {
  var min   = Math.min(num1, num2);
  var max   = Math.max(num1, num2);
  var range = [];
  
  for (var i = min; i <= max; i++) {
    range.push(i);
  }
  
  return range;
}

// Given a multiple of two numbers, get the next-highest multiple
function getNextMultiple(num1, num2, lastMultiple) {
  return lastMultiple + num1 * num2;
}

// Decide if the context number is divisible by all numbers in the given range array
function isDivisibleBy(range) {
  var ctxNum = this; // The context number
  
  // The 'acc' value will become 0 (i.e. false) if any number in the range does not
  // cleanly divide the context number with no remainder
  return !!range.reduce(function(acc, num) {
    return ctxNum % num == 0 ? (acc * 1) : (acc * 0);
  }, 1);
}

// Find the smallest common multiple of the two numbers in the array
function smallestCommons(arr) {
  var range = getRangeBetween(arr[0], arr[1]);
  
  var multiple = arr[0] * arr[1];
  while (!isDivisibleBy.call(multiple, range)) {
    multiple = getNextMultiple(arr[0], arr[1], multiple);
  }
  
  return multiple;
}

smallestCommons([1,5]);   // => 60

