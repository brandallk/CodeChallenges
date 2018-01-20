/* Using the JavaScript language, have the function SimpleSymbols(str) take the str
parameter being passed and determine if it is an acceptable sequence by either
returning the string true or false. The str parameter will be composed of + and =
symbols with several letters between them (ie. ++d+===+c++==a) and for the string
to be true each letter must be surrounded by a + symbol. So the string to the left
would be false. The string will not be empty and will have at least one letter. */


function SimpleSymbols(str) { 
    var execResults, letterIndices = [], plusIndices = [];

    // Get an array of letters' indices in the string
    var regExp = /[a-z]/ig;
    while( (execResults = regExp.exec(str)) !== null ) {
        letterIndices.push(execResults.index);
    }

    // Get an array of "+" characters' indices in the string
    regExp = /\+/g;
    while( (execResults = regExp.exec(str)) !== null ) {
        plusIndices.push(execResults.index);
    }

    // Only return "true" if each letter in the string has a "+" character at the
    // index before it and following it
    for (var i = 0; i < letterIndices.length; i++) {
      if (!plusIndices.includes(letterIndices[i] - 1) ||
          !plusIndices.includes(letterIndices[i] + 1)) {
        return "false";
      }
    }

    return "true";    
}

console.log(SimpleSymbols("+d+=3=+s+"));    // => "true"
console.log(SimpleSymbols("f++d+"));        // => "false"
