/* Using the JavaScript language, have the function VowelCount(str) take the str string
parameter being passed and return the number of vowels the string contains (ie. "All cows
eat grass and moo" would return 8). Do not count y as a vowel for this challenge. */


// First solution:
// function VowelCount(str) {
//     var count = 0;
//     str.split("").forEach( letter => {
//         if (letter.search(/[aeiou]/i) !== -1) {
//             count++;
//         }
//     });
//     return count;
// }

// More concise version:
function VowelCount(str) {
    var count  = 0,
        regExp = /[aeiou]/ig;
    while (regExp.exec(str) !== null) {
        count++;
    }
    return count;
}

console.log(VowelCount("hello"));         // => 2
console.log(VowelCount("coderbyte"));     // => 3
