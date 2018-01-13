/* Compare and update the inventory stored in a 2D array against a second 2D array 
of a fresh delivery. Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item. */

// Example inventory lists
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

function updateInventory(arr1, arr2) {
    return sortByItem(combine(arr1, arr2));
}

function combine(arr1, arr2) {
  return combineMatchingItems(arr1.concat(arr2));
}

function combineMatchingItems(arr) {
  var combined = [];
  arr.forEach(function(item) {
    var itemType = item[1];
    var typesCombined = getItemTypes(combined);
    if (typesCombined.indexOf(itemType) === -1) {
      combined.push([getItemCount(arr, itemType), itemType]);
    }
  });
  return combined;
}

function getItemTypes(arr) {
  return arr.map(function(item) {
    var itemType = item[1];
    return itemType;
  });
}

function getItemCount(arr, type) {
  var itemCount = selectType(arr, type)
    .map(function(val) {
      var count = val[0];
      return count;
    })
    .reduce(function(acc, val) {
      var combinedCount = acc + val;
      return combinedCount;
    });
  return itemCount;
}

function selectType(arr, type) {
  return arr.filter(function(val) {
    var itemType = val[1];
    return itemType === type;
  });
}

function sortByItem(arr) {
  return arr.sort(function(item1, item2){
    var type1 = item1[1];
    var type2 = item2[1];
    return compareAcending(type1, type2);
  });
}

function compareAcending(str1, str2) {
  if (str1 < str2) {
    return -1;
  } else if (str2 < str1) {
    return 1;
  } else {
    return 0;
  }
}

console.log(updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]).length);
  // => 6

console.log(updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]));
  // => [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

console.log(updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ],
  []));
  // => [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]

console.log(updateInventory(
  [],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ]));
  // => [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]

console.log(updateInventory(
  [
    [0, "Bowling Ball"],
    [0, "Dirty Sock"],
    [0, "Hair Pin"],
    [0, "Microphone"]
  ],
  [
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [1, "Bowling Ball"],
    [1, "Toothpaste"]
  ]));
  // => [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]