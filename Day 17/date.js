let date = new Date()
console.log(date)
// Prints the current date, for it was 2018-08-01T12:57:21.781Z
// Might change tomorrow!

date = new Date("2018-8-1")
console.log(date)
// 2018-08-01T05:00:00.000Z
// Parses the date string into a Date object
// Reminds me of how Pandas does dates

console.log(date.getFullYear())  // 2018
console.log(date.getMonth())  // 7 (a month behind :( )
// Many similar methods like this, you get the point
// Also there are setter counterparts to these, nothing exciting,
// but good to know

console.log(new Date(2018, 0, 40))  // 2018-02-09T06:00:00.000Z
// Since there are less than 40 days in January, when it hits the last
// day of January, it takes the remainder and puts it towards the next month,
// February in this case. Like modular addition. Nice.

console.log(new Date(2018, 0))  // And yes, 0 represents January

console.log(date.getTime())  // 1533099600000
// Time in ms, since epoch I guess? Not sure.

console.log(Date.now())  // 1533129120808
// Hey that seems really similar to the last number, maybe it really
// is ms since epoch? Update: I just compared with time.time() in Python.
// It does seem it is ms since epoch, nice.
