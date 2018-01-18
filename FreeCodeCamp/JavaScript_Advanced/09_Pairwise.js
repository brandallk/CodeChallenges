/* Given an array arr, find element pairs whose sum equal the second argument
arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different
indices, return the smallest sum of indices. Once an element has been used, it
cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to
20 are [7, 13] and [9, 11]. We can then write out the array with their indices
and values.

Index  0   1   2   3   4
Value  7   9  11  13  15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6 */


function pairwise(arr, arg) {
  // Reformat the 'arr' array to keep a record of each element's original index value
  var mappedArr = makeMap(arr);
  
  var pairs = []; // Will hold a growing list of number pairs whose sum == arg

  mappedArr.forEach(function(numObj) {

    // Get a subset of mappedArr that doesn't include the element currently being iterated
    var otherNums = purgeElt(numObj, mappedArr);

    // Look for test-passing pairings between otherNums and the element currently being
    // iterated. Add any found to the 'pairs' array
    pairs = findPairs(numObj, otherNums, arg, pairs);
  });

  return addIndices(pairs);
}

// Convert an array into an array of objects that preserves each element's
// index value as a an 'idx' property on the object at that index
function makeMap(arr) {
  return arr.map(function(number, index) {
    return {idx: index, val: number};
  });
}

// Eliminate the given object from an array of objects
function purgeElt(obj, objArr) {
  var purged = objArr.slice();              // clone the array
  purged.splice(objArr.indexOf(obj), 1);    // remove the object
  return purged; 
}

// Sum the 'idx' properties of all objects in an array of object-pairs
function addIndices(pairs) {
  return pairs.reduce(function(acc, pair) {
    return acc + pair[0].idx + pair[1].idx;
  }, 0);
}

// Find pairs of the given 'numObj' object and objects from the 'objArr' array whose
// 'val' properties sum to 'targetVal'. Add any found to the list of pairs, unless the
// list already contains a matching pair.
function findPairs(numObj, objArr, targetVal, existingPairs) {
  objArr.forEach(function(obj) {
    if (sumIsTarget(numObj.val, obj.val, targetVal)) {
      // Combine the pair of objects into an array
      var prospect = [{idx: numObj.idx, val: numObj.val}, {idx: obj.idx, val: obj.val}];

      // If the prospective new pair doesn't match any already found, add it to the pairs list
      if (!matchExisting(prospect, existingPairs)) {
        existingPairs.push(prospect);

      // Otherwise, replace the matching pair if its index-sum is larger
      } else {
        var match = matchExisting(prospect, existingPairs);
        var hasSmallerIdx = getSmallerIdxSum(prospect, match);

        if (!matchExisting(hasSmallerIdx, existingPairs)) {
          existingPairs.push(prospect);
        }
      }
    }
  });

  return existingPairs;
}

// Determine if a pair of numbers add up to a given target value
function sumIsTarget(num1, num2, target) {
  return num1 + num2 === target;
}

// Determine if a given object matches any elements in an array of objects. If so,
// return the matching object.
function matchExisting(prospect, pairs) {
  var matches = pairs.filter(function(pair) {

      // For a match, each pair must share the same 'val' (value) properties, in any order
    return ( (prospect[0].val === pair[0].val && prospect[1].val === pair[1].val) ||
             (prospect[0].val === pair[1].val && prospect[1].val === pair[0].val) ) &&
      // ...and matching pairs must share at least one 'idx' (index) property
           ( (prospect[0].idx === pair[0].idx || prospect[0].idx === pair[1].idx) ||
             (prospect[1].idx === pair[0].idx || prospect[1].idx === pair[1].idx) );
  });

  var matchExists = matches.length;
  var match = matchExists ? matches[0] : false;

  return match;
}

// Compare the 'idx' property sums of two object-pairs. Return the pair with the smaller sum.
function getSmallerIdxSum(pair1, pair2) {
  var pair1IdxSum = pair1[0].idx + pair1[1].idx;
  var pair2IdxSum = pair2[0].idx + pair2[1].idx;
  return (pair1IdxSum < pair2IdxSum) ? pair1 : pair2;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));    // => 11
console.log(pairwise([1, 3, 2, 4], 4));          // => 1
console.log(pairwise([1, 1, 1], 2));             // => 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));    // => 10
console.log(pairwise([], 100));                  // => 0
