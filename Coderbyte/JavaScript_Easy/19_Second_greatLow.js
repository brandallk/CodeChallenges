/* Determine the second lowest and greatest numbers in an array. */


function SecondGreatLow(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var secLowest, secGreatest;

    var sorted = arr.sort( (a, b) => a - b );
    for (var i = 0; i < arr.length; i++) {
        if (sorted[i] > min) {
            secLowest = sorted[i];
            break;
        }
    }
    for (var i = arr.length; i >= 0; i--) {
        if (sorted[i] < max) {
            secGreatest = sorted[i];
            break;
        }
    }

    return `${secLowest} ${secGreatest}`;
}

console.log(SecondGreatLow([4, 6, 2, 7, 5, 9, 1]));                // => "2 7"
console.log(SecondGreatLow([4, 6, 2, 7, 1, 2, 9, 7, 5, 9, 1]));    // => "2 7"
console.log(SecondGreatLow([4, 90]));                              // => "90 2"