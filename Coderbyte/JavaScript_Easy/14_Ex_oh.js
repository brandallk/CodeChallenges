/* Using the JavaScript language, have the function ExOh(str) take the str parameter
being passed and return the string true if there is an equal number of x's and o's,
otherwise return the string false. Only these two letters will be entered in the string,
no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should
return false because there are 6 x's and 5 o's. */


function ExOh(str) { 
    var regExpX = /x/gi; 
    var regExpO = /o/gi;
    var xCount = 0;
    var oCount = 0;
    while (regExpX.exec(str) !== null) {
        xCount++;
    }
    while (regExpO.exec(str) !== null) {
        oCount++;
    }
    return xCount === oCount ? "true" : "false";
}

console.log(ExOh("xooxxo"));    // => "true"
console.log(ExOh("x"));         // => "false"
