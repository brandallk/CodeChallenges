/* Fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object. */


var Person = function(firstAndLast) {
    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[1];

    this.setFirstName = function(first) {
      firstName = String(first);
    };

    this.setLastName = function(last) {
      lastName = String(last);
    };

    this.setFullName = function(firstAndLast) {
      firstName = firstAndLast.split(" ")[0];
      lastName = firstAndLast.split(" ")[1];
    };

    this.getFirstName = function() {
      return firstName;
    };

    this.getLastName = function() {
      return lastName;
    };

    this.getFullName = function() {
      return firstName + " " + lastName;
    };
};

var bob = new Person('Bob Ross');

console.log(Object.keys(bob).length);     // => 6
console.log(bob instanceof Person);       // => true
console.log(bob.firstName);               // => undefined
console.log(bob.lastName);                // => undefined
console.log(bob.getFirstName());          // => "Bob"
console.log(bob.getLastName());           // => "Ross"
console.log(bob.getFullName());           // => "Bob Ross"

bob.setFirstName("Haskell");
console.log(bob.getFullName());           // => "Haskell Ross"

bob.setLastName("Curry");
console.log(bob.getFullName());           // => "Haskell Curry"

bob.setFullName("Haskell Curry");
console.log(bob.getFullName());           // => "Haskell Curry"

bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());          // => "Haskell"

bob.setFullName("Haskell Curry");
console.log(bob.getLastName());           // => "Curry"
