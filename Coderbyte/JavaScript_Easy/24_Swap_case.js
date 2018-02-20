/* Using the JavaScript language, have the function SwapCase(str) take the str parameter
and swap the case of each character. For example: if str is "Hello World" the output
should be hELLO wORLD. Let numbers and symbols stay the way they are. */

function SwapCase(str) {
    var swapped = ""
    for (var i = 0; i < str.length; i++) {
        var char = str[i]
        if (char === char.toLowerCase()) {
            char = char.toUpperCase()
        } else if (char === char.toUpperCase()) {
            char = char.toLowerCase()
        }
        swapped += char
    }
    return swapped         
}

console.log(SwapCase("Hello-LOL")) // => "hELLO-lol"
console.log(SwapCase("Sup DUDE!!?")) // => "sUP dude!!?"
