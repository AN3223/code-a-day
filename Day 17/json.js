let jerry = {
    name: "Jerry",
    DOB: new Date(1958, 5, 13),
    SS: 677846251
}
console.log(jerry)
// { name: 'Jerry', DOB: 1958-06-13T05:00:00.000Z, SS: 677846251 }

console.log(JSON.stringify(jerry))
// {"name":"Jerry","DOB":"1958-06-13T05:00:00.000Z","SS":677846251}
// JSON is a part of the core language, nice

obj = JSON.parse(JSON.stringify(jerry))  // To JSON and back
console.log(obj)
// { name: 'Jerry', DOB: '1958-06-13T05:00:00.000Z', SS: 677846251 }


console.log(JSON.stringify("asdf"))
console.log(JSON.stringify([1,2,3]))
// Shows that other types can be converted to JSON as well, nice

obj = {
    x: undefined,
    y: function() {},
    [Symbol.toPrimitive](hint) {
        return undefined
    }
}
console.log(JSON.stringify(obj))  // {}
// Members with undefined values, methods, and Symbols
// are ignored by JSON.stringify().

obj = {
    toJSON: function() {
        return "not valid JSON, shhh"
    }
}
console.log(JSON.stringify(obj))  // "not valid JSON, shhh"
// If the object passed to JSON.stringify() has a toJSON() method,
// that will be used to create the JSON.

// There is a problem with Jerry, though. When he's turned into JSON,
// his date of birth is no longer a Date object. Instead, it's just the
// string representation of his date object. If we want to return his date
// object back, how would we do that? Here's how:

let JSONJerry = JSON.stringify(jerry)
let jerryFromJSON = JSON.parse(JSONJerry)
console.log(typeof jerryFromJSON["DOB"])  // string

function DOBtoDate(key, value) {
    if (key === "DOB") return new Date(value)
    return value
}

jerryFromJSON = JSON.parse(JSONJerry, DOBtoDate)
console.log(jerryFromJSON)
console.log(typeof jerryFromJSON["DOB"])  // object

// Nice! JSON.parse takes a function as its second argument, and
// that function is called with each key/value pair in the JSON it's
// parsing. The result of that function is what ends up getting used as
// the value for that key.
