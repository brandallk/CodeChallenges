/* Using the JavaScript language, have the function LetterCapitalize(str) take the str
parameter being passed and capitalize the first letter of each word. Words will be
separated by only one space. */


// First solution:
// function LetterCapitalize(str) { 
//     function getUpperCase(letter) {
//         return letter.toUpperCase();
//     }
//     return str.split(" ")
//               .map( word => word.replace(/\b\w/, getUpperCase) )
//               .join(" ");
// }

// More concise version:
function LetterCapitalize(str) { 
    return str.split(" ")
              .map( word => word.charAt(0).toUpperCase() + word.substring(1) )
              .join(" ");
}

console.log(LetterCapitalize("hello world"));    // => "Hello World"
console.log(LetterCapitalize("i ran there"));    // => "I Ran There"
