function printTable(t)
	for k, v in pairs(t) do
		print(k, v)
	end
end

table = {[1]=10, [2]=20}
printTable(table)

table = {10, 20}
printTable(table)

vector1 = {1,2}
vector2 = {2,3}

metavector = {}
function metavector.__add(v1, v2)
	return {v1[1] + v2[1], v1[2] + v2[2]}
end

setmetatable(vector1, metavector)
setmetatable(vector2, metavector)

printTable(vector1 + vector2)
