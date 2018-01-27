/* Using the JavaScript language, have the function LetterCountI(str) take the str parameter
being passed and return the first word with the greatest number of repeated letters. For
example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and
2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating
letters return -1. Words will be separated by spaces. */


function LetterCountI(str) { 

    var words = str.split(" ");
    var repeatTest = /([a-z])\w*?\1/ig;

    var repeats = words.map( word => {      
        var matches = [], repeatLetterCount = 0;
        while( (matches = repeatTest.exec(word)) !== null ) {
            var testExp = new RegExp(matches[1], 'ig');
            while( testExp.exec(word) !== null ) {
                ++repeatLetterCount;
            }
        }
        return [word, repeatLetterCount];
    });

    var maxRepeatCount = Math.max(...repeats.map(word => word[1]) );  
    var mostRepeats = repeats.filter( word => word[1] === maxRepeatCount );
    var wordWithMostRepeats = mostRepeats[0][0];

    return (maxRepeatCount > 0) ? wordWithMostRepeats : -1;
}

console.log(LetterCountI("Hello apple pie"));      // => "Hello"
console.log(LetterCountI("No words"));             // => -1
console.log(LetterCountI("Hello appplee pie"));    // => "appplee"
