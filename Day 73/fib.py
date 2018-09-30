def fib(0) = 1

@addpattern(fib)
def fib(1) = 1

@addpattern(fib)
def fib(n) = fib(n-1) + fib(n-2)

fib(5) |> print  # 8
