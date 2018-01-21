/* Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. */


function ABCheck(str) {
  for (var i = 0; i <= str.length; i++) {
      var currentChar = str.charAt(i);
      var char3Away = str.charAt(i + 4);
      if ((currentChar === "a" && char3Away === "b") ||
         (currentChar === "b" && char3Away === "a")) {
          return "true";
      }
  }
  return "false";
}

console.log(ABCheck("after badly"));    // => "false"
console.log(ABCheck("Laura sobs"));     // => "true"
console.log(ABCheck("bzzza"));          // => "true"
