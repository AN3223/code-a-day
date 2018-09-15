binmap f xs = let pairs = zip xs (drop 1 xs)
              in uncurry f <$> pairs 

binmapR f xs = let pairs = zip xs (drop 1 xs)
                   swap (a,b) = (b,a)
               in uncurry f <$> map swap pairs

printInput = getLine >>= putStrLn

main = let result = binmapR (-) [1,2,3,4,5]
       in putStrLn (show result)
