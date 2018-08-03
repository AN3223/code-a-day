let obj = {
    name: "Jerry"
}

let getDescriptor = () => Object.getOwnPropertyDescriptor(obj, "name")
let setDescriptor = Object.defineProperty.bind(null, obj, "name")
let showDescriptor = () => console.log(getDescriptor())
// Just making some helper functions for this example

showDescriptor()
/*
{ value: 'Jerry',
  writable: true,
  enumerable: true,
  configurable: true }
*/

setDescriptor({writable: false})
showDescriptor()
/*
{ value: 'Jerry',
  writable: false,
  enumerable: true,
  configurable: true }
*/  // We can see that the property is now

obj.name = "Not Jerry"
console.log(obj)  // { name: 'Jerry' }
// Just makes the property immutable. Useful!
// I think this throws an error in other environments, but here
// it seems to just ignore attempts to mutate attributes

setDescriptor({enumerable: false})  // Excludes the property from object.keys()
console.log(obj)  // {}
// Prints nothing, I assume because the builtin method for creating
// the string representation of the object only sees enumerable properties.

setDescriptor({configurable: false})
setDescriptor({enumerable: true})
// Error! We can't configure that property anymore!

let obj2 = {
    name: "Jerry"
}

Object.seal(obj2)
// We can no longer add/remove properties to the object

obj2["Social Security"] = 38932743
console.log(obj2)  // { name: 'Jerry' }

Object.freeze(obj2)
// We can no longer mutate properties of the object
obj2.name = "Not Jerry"
console.log(obj2)  // { name: 'Jerry' }
