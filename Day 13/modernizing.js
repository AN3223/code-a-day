"use strict"
// Apparently this enables some language features later on

let x = 10
// The "var" keyword is apparently the old way of creating variables,
// and "let" is the new way

const HELLO_WORLD = "Hello World"
// Constant, just like in other languages

function y() {
    console.log(x)
}
y()
// Not sure how I feel about this

console.log(10 / 0)
// Returns "Infinity", similar to Haskell, nice :D

console.log(`x = ${x}`)
// Prints "x = 10", similar to f-strings in Python, nice

console.log(typeof x)
// Prints "number", similar to instanceof in Java, and isinstance in Python

console.log(Number("10") + Number("10"))  // Self explanatory
console.log(+"10" + +"10")  // Same thing, different syntax
// When the + operator is only supplied a single value it just
// converts that value to a number and returns it

10 === 10  // Strict comparison operator, similar to "is" in Python

let x = 5 < 10 ? 10 : 20  // ?: operator just like Java

false === !true  // ! "notk" operator just like Java

let array = [1,2,3]
let otherArray = [1,2,3]
outer: for (x in array) {
    for (y in otherArray) {
        if (array[x] == otherArray[y] && otherArray[y] == 2) {
            break outer
        }
        console.log(array[x], otherArray[y])
    }
}
/* Output:
1 1
1 2
1 3
2 1
*/
// Once it reaches "2 2" it breaks to the label "outer"
// Interesting, but doesn't seem all that useful
