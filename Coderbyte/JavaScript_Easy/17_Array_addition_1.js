/*  Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers
stored in arr and return the string true if any combination of numbers in the array can be added
up to equal the largest number in the array, otherwise return the string false. For example: if arr
contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array
will not be empty, will not contain all the same elements, and may contain negative numbers. */


function ArrayAdditionI(arr) {

    var largest = Math.max.apply(null, arr);
    var remainder = purgeIndex(arr, arr.indexOf(largest));

    var match = false;
    remainder.forEach( elt => {
        
        var siblingElts = purgeIndex(remainder, remainder.indexOf(elt));

        siblingElts.forEach( siblingElt => {
            if (elt + siblingElt === largest) {
                match = true;
            }
        });

        var siblingComboSums = getArrayComboSums(siblingElts);

        siblingComboSums.forEach( comboSum => {
            if (elt + comboSum === largest) {
                match = true;
            }
        });

    });

    return match;
}


function getArrayComboSums(arr) {

    var maxLength = arr.length;
    var combos = [];
    var comboSums = [];
    findCombos([], arr);

    function findCombos(subArr1, subArr2) {
        isMaxLength = isLength.bind(null, maxLength);
        isNotOverMaxLength = isNotOverLength.bind(null, maxLength);

        if ( isMaxLength(subArr1, maxLength) ||
            (isNotOverMaxLength(subArr1, maxLength) && isEmpty(subArr2))) {
            
            if (!isEmpty(subArr1)) {

                // Get the sum of this combination
                var comboSum = subArr1.reduce( (acc, val) => {
                    return acc + val;
                }, 0);

                // If this combination is unique, add it to the list(s)
                if (!comboSums.includes(comboSum)) {
                    comboSums.push(comboSum);
                    combos.push(subArr1);
                }
            }

        } else {

            // Recursive function calls
            findCombos(subArr1.concat(subArr2[0]), subArr2.slice(1));
            findCombos(subArr1, subArr2.slice(1));
        }
    }

    function isEmpty(arr) {
        return arr.length === 0;
    }

    function isLength(length, arr) {
        return arr.length === length;
    }

    function isNotOverLength(length, arr) {
        return arr.length <= length;
    }

    return comboSums;
}

function purgeIndex(arr, index) {
    var purged = arr.slice();   // Clone the array
    purged.splice(index, 1);    // remove arr[index]
    return purged; 
}

console.log(ArrayAdditionI([17, 8, 6, 3, 2, 1]));  // => "true"
console.log(ArrayAdditionI([5,7,16,1,2]));         // => "false"
console.log(ArrayAdditionI([3,5,-1,8,12]));        // => "true"
