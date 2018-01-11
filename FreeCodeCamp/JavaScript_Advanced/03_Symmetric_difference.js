/* Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). */

// Get an array of elements common to a given pair of arrays
function getSharedElts(array1, array2) {
  return array1.filter(function(elt) {
    return array2.indexOf(elt) !== -1;
  });
}

// Combine a pair of arrays
function combine(array1, array2) {
  return array1.concat(array2);
}

// Remove shared elements from a pair of arrays
function removeSharedElts(array1, array2) {
  return combine(array1, array2).filter(function(elt) {
    return getSharedElts(array1, array2).indexOf(elt) === -1;
  });
}

// Remove repeated elements from an array
function removeRepeatElts(array) {
  return array.filter(function(elt, index) {
    return array.slice(0, index).indexOf(elt) === -1;
  });
}

// Get the symmetric difference of the given arrays
function sym(args) {
  var argArray = Array.from(arguments);
  return argArray.reduce(function(acc, arr) {
    return removeRepeatElts(removeSharedElts(acc, arr));
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);                     // => [3, 5, 4]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);    // => [1, 1, 4, 5, 5]
