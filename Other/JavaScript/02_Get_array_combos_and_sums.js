/*  Use a function, getArrayCombos(arr), to get all unique combinations of numbers in an array
array of numbers. Use another function, getArrayComboSums(arr), to get an array of the respective
sums of each of the combinations. */


function isEmpty(arr) {
    return arr.length === 0;
}

function isLength(length, arr) {
    return arr.length === length;
}

function isNotOverLength(length, arr) {
    return arr.length <= length;
}

function getArrayCombos(arr) {

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

    return combos;
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

    return comboSums;
}


console.log(getArrayCombos([1,2]));       // => [ [ 1, 2 ], [ 1 ], [ 2 ] ]
console.log(getArrayComboSums([1,2]));    // => [ 3, 1, 2 ]
console.log(getArrayComboSums([8, 5, -1, 3]));    // => [ 15, 12, 16, 13, 10, 7, 11, 8, 4, 5, 2, -1, 3 ]
