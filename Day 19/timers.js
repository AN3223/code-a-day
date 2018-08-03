setTimeout(console.log, 1e3, "This took one second to print")
setInterval(console.log, 3e3, "This will print every three seconds")

let timer = (console.log, 1e3, "This will be canceled")
clearTimeout(timer)

setTimeout(console.log, 0, "World")
console.log("Hello")
// Prints "Hello" then "World", so it executes out of order. Cool.

// In the browser, setTimeout lets the browser take a break from running
// the JavaScript. Similar to doing a asyncio.sleep(0) in a Python coroutine.
