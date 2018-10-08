xs = {10,9,8,7,6,5,4,3,2,1}

for i = 1, #xs do
    if i >= 5 then
        print("...")
        break
    else
        print(xs[i])
    end
end

Dog = {}

function Dog:new()
    self.__index = self
    return setmetatable({}, self)
end

print(Dog:new())
