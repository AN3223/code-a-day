const fs = require("fs")

fs.writeFile("test.txt", "asdf", err => {})
// Creates a file named "test.txt" (overwrites any existing "test.txt")
// and populates it with the text "asdf". The arrow function is called
// if/when there is an error writing the file.

fs.readFile("test.txt", "utf8", (err, contents) => console.log(contents))
// It assumes the file is UTF-8 encoded, and calls the function passed
// when the file has been read, which prints the contents of the "test.txt"
// (in this case, "asdf")

fs.unlink("test.txt", (err) => {})
// Deletes (or "unlinks") test.txt

// There are also synchronous versions of these functions, but they aren't
// used often.
