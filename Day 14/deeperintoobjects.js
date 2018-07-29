let x = function() {
    return 10
}
// Anonymous function

// let x = () => 10
// Same thing, different (much better) syntax

class MyClass {
    constructor() {}
    set thing(_thing) {
        this._thing = _thing
    }
    get thing() {
        return this._thing
    }
}

let m = new MyClass()
m.thing = 10
m.thing == 10
// Getter and setter syntax

delete m._thing
// Delete keyword, self-explanatory

function coolObject(a, b, c, d) {
    return {a, b, c, d}
    // Short hand for adding properties to an object
    // Equivalent to "a: a, b: b ..."
}

let obj = coolObject("a", "b", "c", "d")
console.log(obj)
// { a: 'a', b: 'b', c: 'c', d: 'd' }

console.log("a" in obj)
// Returns true since there is a property named "a" in obj
// (the value of the property is unrelated here)

let otherObj = obj
otherObj.a += "aaaa"
console.log(obj.a)  // Prints "aaaaa"
// This is because objects are stored as references

const otherOtherObj = obj
otherOtherObj.a += "abbbbbbbb"
console.log(obj.a)  // Prints "aaaaaabbbbbbbb"
// We're allowed to mutate this const because it's only aware
// of the reference it has to the object. It's not concerned
// about whether the object gets mutated or not, it only
// assures that the reference stays the same

function copyObject(obj) {
    /*
    Creates a duplicate object by copying every member
    of the original object. If the member is an object
    itself, it will get copied also.
    */
    duplicateObj = {}
    for (member in obj) {
        if (obj[member] instanceof Object) {
            duplicateObj[member] = copyObj(obj[member])
        } else {
            duplicateObj[member] = obj[member]
        }
    }
    return duplicateObj
}

otherObj = copyObject(obj)
console.log(otherObj.a === obj.a)
otherObj.a = "z"
console.log(otherObj.a === obj.a)
// Testing our copy function, looks like it works :D

let id = Symbol("asdf")
obj = {}
obj[id] = "muahaha this is my hidden string"
for (member in obj) {
    console.log(obj[member])  // Prints nothing
}
console.log(obj[id])  // Prints the hidden string

// Symbols are special. They act as keys for hidden values in objects.

id = Symbol("asdf")
console.log(obj[id])  // "undefined"
// Symbols are unique too, but they don't have to be

id = Symbol.for("asdf")
obj[id] = "another hidden string"
console.log(obj[id])  // Prints our hidden string
id = Symbol.for("asdf") 
console.log(obj[id])  // Prints our hidden string again
// The "for" method allows us to create a Symbol that can be recreated at a later time

console.log(Symbol.keyFor(id))  // Prints "asdf", just retrieves the original key

obj = {
    name: "Jerry",

    method() {
        console.log(this.name)
    }  // Yet another method syntax
}
obj.method()  // Prints "Jerry"

