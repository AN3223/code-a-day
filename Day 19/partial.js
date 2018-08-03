function add(x, y) {
    return x + y
}

let addOne = add.bind(null, 1)
console.log(addOne(1))
// We can do partial application with the bind method of functions, nice.

function unusedArg(x, y, z) {
    return x * y
}

let timesTwo = unusedArg.bind(null, 2)
console.log(timesTwo(5))
// We don't even have to supply all of the arguments, nice
