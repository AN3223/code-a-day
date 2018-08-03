function fib(n) {
    if (n < 2) return 1
    else return fib(n - 1) + fib(n - 2)
}
// Normal Fibonacci, nothing special


function memo(f) {
    let cache = new Map()

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        let result = f(x)
        cache.set(x, result)
        return result
    }
}
// Memo just takes a function and returns a memoized version of it

let fibMemo = memo(fib)

t1 = Date.now()
fibMemo(40)
t2 = Date.now()
fibMemo(40)
t3 = Date.now()

console.log(t2 - t1)  // Just over a second on my machine
console.log(t3 - t2)  // About 0ms!
// The second call is significantly faster, since it's found in the cache,
// so it doesn't need to be computed again. But we can get even faster!

function betterFibMemo() {
    let cache = new Map()

    function inner(n) {
        if (n < 2) return 1
        if (cache.has(n)) return cache.get(n)
        else {
            let result = inner(n - 1) + inner(n - 2)
            cache.set(n, result)
            return result
        }
    }

    return inner
}

fibMemo = betterFibMemo()
t1 = Date.now()
fibMemo(40)
t2 = Date.now()

console.log(t2 - t1)
// 0ms on my machine! And if I print fibMemo(40), I get 165580141, which is indeed
// the 40th Fibonacci number. Let's see how far we can push it now:

t1 = Date.now()
fibMemo(1475)  // About the highest possible before hitting the number boundary
t2 = Date.now()

console.log(t2 - t1)  // Within a few ms on my machine! Wow!
// We accomplished this by allowing the recursive calls to be
// cached/memoized. Nice.

// Not really a JavaScript specific problem, but I think it's beneficial for me
// to redo things I've done in other languages in a new language :D
