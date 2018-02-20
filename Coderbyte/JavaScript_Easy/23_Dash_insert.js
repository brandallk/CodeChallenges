/* Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each
two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count
zero as an odd number.  */

function DashInsert(str) {
    var dashedStr = ""
    for (var i = 0; i < str.length; i++) {
        var char = str[i]
        var nextChar = str[i+1]
        if (char !== "0" && nextChar) {
            if (Number(char) % 2 && Number(nextChar) % 2) {
                char += '-'
            }
        }
        dashedStr += char
    }
    return dashedStr           
}

console.log(DashInsert("99946")) // => "9-9-946"
console.log(DashInsert("56730")) // => "567-30"
