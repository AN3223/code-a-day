function throwError() {
  throw new Error("I just threw an error")
}

try {
  throwError()
} catch(error) {
  console.log(`I just caught this error: "${error}"`)
}

// So try/catch/throw is basically the same as in Java
// (I think, I just let Eclipse generate that mess)
// You can also have a "finally" block like in Python, not
// super helpful.

class MyError extends Error {
  constructor(msg) {
    super(msg)
    this.name = "MyError"
  }
}

try {
  throw new MyError("I just threw MY error")
} catch(error) {
  if (error instanceof MyError) {
    console.log("Just caught MyError")
  }
}

// Nothing crazy, but gosh this took a while to get to in this tutorial
