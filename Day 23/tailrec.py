# Inspired by tailrec in Joy

def tailrec(if_f, then_f, rec):
    def inner(*args):
        while True:
            if if_f(*args):
                return then_f(*args)
            else:
                args = rec(*args)

    return inner


if_f = lambda n, till: n == till
then_f = lambda n, _: n
rec = lambda n, till: (n + 1, till)
incr = tailrec(if_f, then_f, rec)

print(incr(1, 1e4))
# Works, even past the recursion limit, since it's not actually recursing
