/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation. */

function truthCheck(collection, pre) {
  
  // The 'acc' switches from 1 (true) to 0 (false), and remains 0
  // if any object[pre] in the collection has a falsy value
  return !!collection.reduce(function(acc, obj) {
    return obj[pre] ? (acc * 1) : (acc * 0);
  }, 1);  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");   // => true
