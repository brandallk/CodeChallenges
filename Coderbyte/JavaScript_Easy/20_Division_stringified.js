/*  Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters
being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If
an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For
example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". */


function DivisionStringified(num1,num2) {
    var quotient = Math.round(num1 / num2);
    var revArr = String(quotient).split("").reverse();

    var numGroups = [];

    for (var i = 0; i < revArr.length; i += 3) {
        var numGroup = revArr[i] ? revArr[i] : "";
        numGroup = revArr[i+1] ? revArr[i+1] + numGroup : numGroup;
        numGroup = revArr[i+2] ? revArr[i+2] + numGroup : numGroup;
        numGroups.push(numGroup);
    }

    var commaSeparated = numGroups.reverse().join(",");

    return commaSeparated;
  }

  console.log(DivisionStringified(5, 2));                 // => "3"
  console.log(DivisionStringified(6874, 67));             // => "103"
  console.log(DivisionStringified(123456789, 10000));     // => "12,346"
