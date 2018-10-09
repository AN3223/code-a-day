table = require("table")

t1 = {1,2,3,4}

print(table.concat(t1))
-- Creates a string from the table, kind of like ''.join() in Python

function printTable(t)
    print(table.concat(t, ", "))
end

printTable(t1)
-- Now it's like ", ".join() in Python, nice

t2 = {4,3,2,1}
table.sort(t2)
printTable(t2)
-- Sorts the table in-place

table.insert(t2, 4, 3.5)
printTable(t2)
-- Inserts a value into the table, also in-place
-- The arguments go like this: table.insert(table, position, value)

table.remove(t2, 4)
printTable(t2)
-- Removes an item, in-place
