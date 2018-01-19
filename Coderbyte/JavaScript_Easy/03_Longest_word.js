/* Have the function LongestWord(sen) take the sen parameter being passed and
return the largest word in the string. If there are two or more words that are
the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.  */


function LongestWord(sen) {

  var regExp = /\w+/g;  // tests for words

  var search, words = [];

  // Create an array of words, separated from spaces or punctuation, etc.
  while ((search = regExp.exec(sen)) !== null) {
      // (On each iteration, exec() returns an array where the first elt is the match)
      words.push(search[0]);
  }

  // Reduce the array to the longest word it contains
  var longestWord = words.reduce( (longest, word) => {
    return (word.length > longest.length) ? word : longest;
  }, "");

  return longestWord;
}

console.log(LongestWord("I love cats"));              // => 'love'
console.log(LongestWord("*/you..,will$"));            // => 'will'
console.log(LongestWord("Arguments appear here"));    // => 'Arguments'
