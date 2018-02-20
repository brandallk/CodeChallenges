/* Using the JavaScript language, have the function NumberSearch(str) take the str parameter,
search for all the numbers in the string, add them together, then return that final number.
For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate
between single digit numbers and multiple digit numbers like in the example above. So "55Hello"
and "5Hello 5" should return two different answers. Each string will contain at least one letter
or symbol.  */

function NumberAddition(str) {
    var sum = 0
    var nums = [0,1,2,3,4,5,6,7,8,9]
    for (var i = 0; i < str.length; i++) {
        var j = i, num = "", counter = -1
        while (nums.includes(Number(str[j])) && str[j] !== " ") {
            num += str[j]
            j++
            counter++
            i += counter
        }
        sum += Number(num)
    }
    return sum         
}

console.log(NumberAddition("75Number9")) // => 84
console.log(NumberAddition("10 2One Number*1*")) // => 13
