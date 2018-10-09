string = require("string")

s = "Hello"
print(s:byte(1, #s))
-- Returns the bytes for each character

print(string.char(65))
-- Byte -> character

print(s:reverse())
-- Reverses the string

print(s:lower())
-- Lowercase the string

print(s:upper())
-- Uppercase the string

name = "Jerry"
print(string.format("%s %s", s, name))
-- String formatting

