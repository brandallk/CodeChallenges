/* Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers
stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic
pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow
either pattern return -1. An arithmetic sequence is one where the difference between each of
the numbers is consistent, where as in a geometric sequence, each term after the first is
multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric
example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered,
and no array will contain all the same elements. */


function ArithGeo(arr) {

    function isArithSeq(arr) {
        var commonDiff = arr[1] - arr[0];
        for (var i = 0; i < arr.length -1; i++) {
            if (arr[i+1] !== arr[i] + commonDiff) {
                return false;
            }
        }
        return true;
    }

    function isGeoSeq(arr) {
        var commonFac = arr[1] / arr[0];
        for (var i = 0; i < arr.length -1; i++) {
            if (arr[i+1] !== arr[i] * commonFac) {
                return false;
            }
        }
        return true;
    }

    if (isArithSeq(arr)) {
        return "Arithmetic";
    } else if (isGeoSeq(arr)) {
        return "Geometric";
    } else {
        return "false";
    }

}

console.log(ArithGeo([1,3,5,7,9]));       // => "Arithmetic"
console.log(ArithGeo([1,2,4,8,16]));      // => "Geometric"
console.log(ArithGeo([1,2,5,8]));         // => "false"
console.log(ArithGeo([5,10,15]));         // => "Arithmetic"
console.log(ArithGeo([2,4,16,24]));       // => "false"
