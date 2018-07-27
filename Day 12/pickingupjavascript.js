var num = 10
var bool = true
var string = "Hello"

var array = [1,2,3,4,5]
var array = new Array(1,2,3,4,5)  // Same thing, different syntax. Looks like we can shadow variables :D
array.push(6)
array.push(7)  // Adding to the end of the array
array.pop()
array.pop()  // Removing from the end of the array
array.shift()  // Removing from the beginning of the array
array.unshift(1)  // Adding to the beginning of the array
array.splice(0, 3)  // Removes the first three items of the array and returns them

console.log(10 + "10")  // Concatenates the integer 10 to the string of 10

switch(num) {
    case 9:
        console.log("Num is 9")
        break
    case 10:
        console.log("Num is 10")
        break
    case 11:
        console.log("Num is 11")
        break
}  // Switch statement, like in C or Java

for (i = 0; i < array.length; i++) {
    console.log(array[i])
}  // For-loops are just like Java

for (var i in array) {
    console.log(array[i])
}  // Same thing, different syntax

var i = 0
while (i < 100) {
    i++
}  // While-loops aren't crazy either

function fib(n) {
    if (n == 1 || n == 0) {
        return 1
    }
    return fib(n-1) + fib(n-2)
}  // And functions are nothing crazy either

console.log(fib(10))

var person = {
    name: "Jerry"
}  // Creates an object named "person" with one property "name"

person.lastName = "Jerryson"  // Attributes can be added after the fact
person["lastName"] = "Jerryson"  // Same thing, different syntax

for (var property in person) {
    console.log("Member \"" + property + "\" = " + person[property])
}  // Objects can be iterated over


class Person {  // Class syntax
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name)
    }
}

var person = new Person("Jerry")

function Personf(name) {
    this.name = name
}
var person = new Personf("Jerry")
// Same thing, different (weird!) syntax

function printName() {
    console.log(this.name)
}

printName.call(person)
printName.apply(person)
printName.bind(person)()
// These all do the same thing here, they just execute
// printName in the context of our person object

var person = new Person("Jerry")
person.printName()  // Ahh, much more familiar

function varArgs(arg1, arg2, arg3) {
    if (arg1 != undefined) {
        console.log(arg1)
    } if (arg2 != undefined) {
        console.log(arg2)
    } if (arg3 != undefined) {
        console.log(arg3)
    }
}

varArgs(1)
varArgs(1, 2)
varArgs(1, 2, 3)
varArgs(1, 2, 3, 4)
// Functions don't have to be supplied every argument, and can be supplied extra
// Neat, but seems a like it could become a problem
