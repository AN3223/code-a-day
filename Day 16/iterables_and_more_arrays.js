let range = {
    from: 0,
    to: 10,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ }
                } else {
                    return { done: true }
                }
            }
        }
    }
}
// Making an iterable

for (let x of range) {
    console.log(x)
}  // Iterates over "range" and prints 0 through 10

let iterator = range[Symbol.iterator]()

while (true) {
    let item = iterator.next()
    if (item.done) break
    console.log(item.value)
}
// Same thing as before, just reaching into the internals of the iterator

let arrayLike = {
    0: "asdf",
    1: "fdsa",
    length: 2
}
let array = Array.from(arrayLike)
console.log(array)  // [ 'asdf', 'fdsa' ]
// Array.from converts any object with a length and an "index" into an array
console.log(Array.from("hello"))  // Like strings

let map = new Map()
map.set('key', 'value')
console.log(map.get('key'))
// Like HashMap in Java, or dictionaries in Python
// The advantage of Maps are they don't convert keys to strings,
// which opens up a lot of doors. Even objects can be keys.

map = new Map([["key", "value"], ["otherKey", "otherValue"]])
// Self-explanatory

map.keys()  // Iterator representing the map's keys
map.values()  // Same, but for values
map.entries()  // Same, but for [key, value] pairs

set = new Set([1,2,1,2,3,4,4,5])  // Creates a Set from an iterable
set.has(2)  // true

let weakMap = new WeakMap()
weakMap.set(map, "asdf")
// WeakMap is a type of Map that can only hold objects as keys, and the
// methods available are limited. However, unlike normal Map, the objects
// can be freed from memory by the GC

// There's also a WeakSet, which follows the same principle, but for sets
