/*  Using the JavaScript language, have the function Palindrome(str) take the str
parameter being passed and return the string true if the parameter is a palindrome,
(the string is the same forward as it is backward) otherwise return the string false.
For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not
be part of the string. */

function Palindrome(str) {

    // Remove everything but letters
    var filtered = str.split("").filter( (char) => {
        return /[a-zA-Z]/.test(char);
    });
    
    var reverse = filtered.slice().reverse();
    return reverse.join("") === filtered.join("") ? "true" : "false";
}

console.log(Palindrome("never odd or even"));    // => "true"
console.log(Palindrome("eye"));                  // => "true"
console.log(Palindrome("anna"));                 // => "true"
console.log(Palindrome("abc"));                  // => "false"
console.log(Palindrome("bow wob"));              // => "true"
