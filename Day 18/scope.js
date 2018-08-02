function printArgs() {
    console.log(arguments)
}

printArgs("arg1", "arg2", 3, 4)
// [Arguments] { '0': 'arg1', '1': 'arg2', '2': 3, '3': 4 }
// Useful if you can't use the "..." argument syntax

// What if we have a sequence of arguments, how can we
// collect those arguments into the function?

printArgs(...["arg1", "arg2", 3, 4])
// [Arguments] { '0': 'arg1', '1': 'arg2', '2': 3, '3': 4 }
// The "..." operator saves the day. It's very similar to
// *args in Python

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log(arr3)  // [ 1, 2, 3, 4, 5, 6 ]
// Concatenating iterables, nice

for (let i = 0; i < 10; i++) {}
// console.log(i) would throw an exception here,
// since "i" went out of scope at the end of the for loop

for (var i = 0; i < 10; i++) {}
console.log(i)
// Prints 10, because the var keyword doesn't care about
// code blocks. "let" is what is called "block scoped",
// so variables assigned with "let" as part of a code block,
// like "i", are unreachable outside of that code block.
