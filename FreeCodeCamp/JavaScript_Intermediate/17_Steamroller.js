/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  var flattened = [];
  
  arr.forEach(function(elt) {
    
    // Flatten any array elements that are themselves arrays
    if (Array.isArray(elt)) {
      elt = steamrollArray(elt);  // Recursive function call
    }
    
    // Add each element (recursively flattened or not) to the return array
    flattened = flattened.concat(elt);
  });
  
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);   // => [1, 2, 3, 4]
