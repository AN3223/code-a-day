x = 10

if x < 10 then
    print("x is less than 10")
elseif x > 10 then
    print("x is more than 10")
else
    print("x is 10")
end

for i = 1, x do
    print(i)
end

print(
    [[
    multi
    line
    string
    ]]
)

function fib(n)
    if n < 2 then
        return 1
    else
        return fib(n - 2) + fib(n - 1)
    end
end

print(fib(5))
