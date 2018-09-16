swap (a,b) = (b,a)

binmap f xs = let pairs = zip xs (drop 1 xs)
              in uncurry f <$> pairs 

binmapR f xs = let pairs = zip xs (drop 1 xs)
               in uncurry f <$> map swap pairs

binmap' f xs = [uncurry f xy | xy <- zip xs (drop 1 xs)]

binmapR' f xs = [uncurry f (swap xy) | xy <- zip xs (drop 1 xs)]

-- Much cleaner when written as list comprehensions
