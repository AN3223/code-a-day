def helloworld():
    print("Hello world")

def fib(n):
    return 1 if n < 2 else fib(n-1) + fib(n-2)

cpdef cpfib(n):
    return 1 if n < 2 else fib(n-1) + fib(n-2)

def main():
    cdef int my_num
    print(my_num)  # Seems to have a default value of 1
    my_num = 10
    print(my_num)  # Now it's 10
    print(type(my_num))  # Just says it's a normal int
    cdef int* my_num_pointer = &my_num
    print(my_num_pointer[0])  # Dereferencing is done via slicing, not a fan

cdef int static_signature(int x, long y):
    return 10
