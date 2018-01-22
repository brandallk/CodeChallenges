/*  Using the JavaScript language, have the function WordCount(str) take the str
string parameter being passed and return the number of words the string contains
(e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated
by single spaces. */


 function WordCount(str) { 
  return str.split(" ").length;
}

console.log("Hello world");     // => 2
console.log("one 22 three");    // => 3