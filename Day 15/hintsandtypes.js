let jerry = {
    name: "Jerry",
    age: 52,
    [Symbol.toPrimitive](hint) {
        return hint === "string" ? `${this.name} is ${this.age} years old` : this.age
    }
}
// The brackets around "Symbol.toPrimitive" mean it's a "computed property name"
// It's the equivalent of person[Symbol.toPrimitive] = ...

// The idea here is there are three different kinds of "hints"
// that will be given to Symbol.toPrimitive on an object:
// "string"
// "number"
// "default"
// The behavior of the object depends on which hint it is given

console.log(+jerry)  // 52 ("number" hint)
console.log(jerry + 10)  // 62 ("number hint")
console.log(String(jerry))  // Jerry is 52 years old  ("string" hint)

// If there is no Symbol.toPrimitive method on the object,
// JavaScript will check the toString and valueOf methods for that object.
// The order in which it checks these is based on what the "hint" is.
// JavaScript provides these methods by default on our object.

// If the hint is "string", toString comes first
// If the hint is "number" or "default", valueOf comes first

console.log(jerry.toString())  // [object Object]
console.log(jerry.valueOf())  // { name: 'Jerry', age: 52, [Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]] }

let n = 1.23456
n = n.toFixed(2)
console.log(n)  // 1.23
// The point of this example is to show that even though primitives,
// like number, are primitives and not objects, they still have methods
// that can be called on them. All of the technical details of this are
// handled under the hood, so the programmer doesn't have to worry. But
// this does mean there's no need to use wrapper objects around primitives
// to call methods on them (unlike Java).

let oneMillion = 1e6  // Scientific notation
oneMillion === 1 * (10**6)  // True
let oneMillionth = 1e-6
let hex = 0xdeadbeef  // Hexadecimal
let fifteen = 0b1111
fifteen.toString(2)  // Represents 15 in binary as a string

let missingVal = NaN
isNaN(missingVal)  // true
missingVal === NaN  // false
let randnum = Math.random()  // Random number between 0 and 1

let array = [1,2,3,4,5]
for (let x of array) {
    console.log(x)
}
// Prints 1 through 5, just like a for-each loop in Java
array.slice(0, 3)  // Returns 1 through 3, doesn't mutate the array
array = array.concat([6,7,8], [9, 10])  // Concatenation, nothing new
array.includes(10)  // Returns "true", similar to "in" in Python
array.indexOf(10)  // Returns "9", since 9 is the index of 10

let evenNums = array.filter((x) => x % 2 === 0)
let arrayPlusOne = array.map((x) => x + 1)
let sumOfArray = array.reduce((x, y) => x + y)
// Map, filter, reduce

console.log(array.join(', ').split(', '))
// Joining the array into a string and then splitting it back
// (it does become an array of string in the process)
