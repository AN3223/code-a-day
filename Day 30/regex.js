string = "haystack"

string.match(/stack/)  // [ 'stack', index: 3, input: 'haystack', groups: undefined ]
// Actually returns an object with different information about
// the match. If we want to retrieve just the match we can just
// access it with [0]

string.replace(/a/, "")  // hystack
// Only replaces the first match, we can fix that though

string.replace(/a/g, "")  // hystck
// There we go. That's called the g modifier, which indicates a
// "global" search.

string.match(/a/g)  // We can even use it with other methods
// This makes the "match" method similar to re.findall in Python

string.match(/(a)c/)  // [ 'ac', 'a', index: 5, input: 'haystack', groups: undefined ]
string.match(/(a)c/g)  // [ 'ac' ]
// That's not very cool :(

console.log(/stack/.test(string)) // true
// The RegExp object has a couple methods of its one, this
// one in particular just returns a boolean, true if a match
// exists, and false otherwise.

string.split(/a/)  // [ 'h', 'yst', 'ck' ]
// Pretty self explanatory, just splits the string where the
// pattern matches

// string.search also can take RegExp objects, but ew, string.search
