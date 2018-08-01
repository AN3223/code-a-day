let jerry = {
    name: "Jerry",
    age: 52
}
console.log(Object.keys(jerry))
console.log(Object.values(jerry))
console.log(Object.entries(jerry))
// Similar behavior as the keys/values/entries methods on maps,
// except it works on normal objects (and it returns an array,
// not an iterator)

let [name, age] = Object.values(jerry)
console.log(name, age)
// Works just like unpacking in Python, nice :D
// Also, it actually works on any iterable, not just arrays

let [first, second, ...rest] = [1,2,3,4,5,6]
console.log(first, second, rest)  // 1 2 [ 3, 4, 5, 6 ]
// The "..." notation makes it so that variable catches the
// rest of the items into a normal array. Neat!

let [username = "Admin", password = "admin"] = ["NotAdmin"]
// Default values, nice
console.log(username, password)  // NotAdmin admin

userInfo = {userID: 53462345, pass: "password"}

let {userID, pass} = userInfo
// Object unpacking
console.log(userID, pass)  // 53462345 'password'

let {userID: user, pass: pword} = userInfo
// {attr, varName} syntax, nice
console.log(user, pword)  // 53462345 'password'
// Objects can also be unpacked within other objects

function test(defaultArg = "10", ...otherArgs) {
    console.log(defaultArg)
    console.log(otherArgs)
}

test("asdf", "a", "a")
test()
// The same syntax for unpacking iterables can be used in function signatures

