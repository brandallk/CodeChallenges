/* Description: For this challenge you will determine the third largest string within
an array.

Using the JavaScript language, have the function ThirdGreatest(strArr) take the array
of strings stored in strArr and return the third largest word within in. So for example:
if strArr is ["hello", "world", "before", "all"] your output should be world because
"before" is 6 letters long, and "hello" and "world" are both 5, but the output should
be world because it appeared as the last 5 letter word in the array. If strArr was
["hello", "world", "after", "all"] the output should be after because the first three
words are all 5 letters long, so return the last one. The array will have at least three
strings and each string will only contain letters.

*/

function ThirdGreatest(strArr) {

  var strObjs = strArr.map(str => {
    return {str: str, length: str.length}
  })

  var descLengthSort = strObjs.sort((a,b) => b.length - a.length)
  
  return descLengthSort[2].str
}

console.log(ThirdGreatest(["hello", "world", "before", "all"])) // => "world"
console.log(ThirdGreatest(["hello", "world", "after", "all"])) // => "after"
console.log(ThirdGreatest(["coder","byte","code"])) // => "code"
console.log(ThirdGreatest(["abc","defg","z","hijk"])) // => "abc"
