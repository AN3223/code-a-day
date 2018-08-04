// Bitwise operator tricks

let x = 10
if (x & 1) {  // & is the AND operator
  console.log("x is odd")
} else {
  console.log("x is even")
}

// This works because 1010 & 0001 == 0000
// No matter what the number is on the left, if the last number
// is a 1, it's odd, otherwise it's even

let randnum = Math.floor(Math.random() * 1e4)  // Random number from 0 to 9,999
let randpow = Math.floor(Math.random() * 17)

normalWay = Math.floor(randnum * 2**randpow)
bitwiseWay = randnum << randpow
console.log(normalWay === bitwiseWay)

// This works because each digit in a binary number represents a power of two,
// so bitshifting x to the left by y is the same as multiplying x by 2**y

normalWay = Math.floor(randnum / 2**randpow)
bitwiseWay = randnum >> randpow
console.log(normalWay === bitwiseWay)

// This works on the same principle, but in reverse since we're shifting to the right
