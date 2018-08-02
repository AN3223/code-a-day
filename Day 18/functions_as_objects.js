function test() {}

let testVar = test
// Not necessary, but I think it helps distinguishes
// the actual function from the function name

console.log(testVar.name)
// Prints "test" since it is accessing test's name attribute

console.log(testVar.length)
// Prints "0", since the length of a function actually
// represents the amount of arguments it takes. Really
// neat to have that in the core language.

function twoArgs(one, two) {}
console.log(twoArgs.length)  // 2, as expected

twoArgs.coolness = "very cool"
console.log(twoArgs.coolness)  // Prints "very cool"
delete twoArgs.coolness
console.log(twoArgs.coolness)  // Prints "undefined"
// Shows that functions are just like any other object,
// attributes can be added, deleted, mutated, etc.

let arrowVar = () => {}
console.log(arrowVar.name)
// Prints "arrowVar". This is because it's what's known
// as a "Named Function Expression". As an expression,
// it's anonymous. But assigning it to a variable gave
// a name in its name attribute.
