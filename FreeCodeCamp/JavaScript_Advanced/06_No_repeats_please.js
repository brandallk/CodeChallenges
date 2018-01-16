/* Return the number of total permutations of the provided string that
don't have repeated consecutive letters. Assume that all characters in
the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't
have the same letter (in this case a) repeating. */

function permAlone(str) {
  var permutations = getPermutations(str.split(""));
  var purged = purgeRepeats(permutations);
  return purged.length;
}

/* Given an array of elements, get a new array that contains a joined string for
 * each permutation of the original array's elements:
 * getPermutations(['a']) => ['a']
 * getPermutations(['a', 'b']) => ['ab', 'ba']
 * getPermutations(['a', 'b', 'c']) => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 */
function getPermutations(arr) {
  var permutations = []; // var to store a growing list of permutations

  arr.forEach(function(elt, index) {
    // Get an array containing all 'arr' elements except the one currently iterating
    var remainingElts = (arr.length > 1) ? purgeIndex(arr, index) : [];

    if (remainingElts.length === 0) {
      // Break or don't start the recursive loop: Only add 'elt' to permutations list
      permutations.push(String(elt));

    } else {
      // Start or continue recursive loop: Get permutations of the 'remainingElts'
      // and join each to the element currently iterating
      var permsForElt = getPermutations(remainingElts).map(function(str) {
        return String(elt) + str;
      });

      // Add new permutations to the list
      permutations = permutations.concat(permsForElt);
    }
  });

  return permutations;
}

// Remove an element at the given index from the given array
function purgeIndex(arr, index) {
  var purged = arr.slice();   // Clone the array
  purged.splice(index, 1);    // remove arr[index]
  return purged; 
}

// Remove from an array of strings any element(s) with repeated characters
function purgeRepeats(arr) {
  return arr.filter(function(elt) {
    return !hasRepeats(elt);
  });
}

// Use a regular expression to determine if a given string contains repeated letters
function hasRepeats(str) {
  var regExp = /(\w)\1/g;
  return regExp.test(str);
}

console.log(permAlone("aab"));         // => 2
console.log(permAlone("aaa"));         // => 0
console.log(permAlone("aabb"));        // => 8
console.log(permAlone("abcdefa"));     // => 3600
console.log(permAlone("abfdefa"));     // => 2640
console.log(permAlone("zzzzzzzz"));    // => 0
console.log(permAlone("a"));           // => 1
console.log(permAlone("aaab"));        // => 0
console.log(permAlone("aaabb"));       // => 12
