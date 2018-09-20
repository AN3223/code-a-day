import qualified Data.Vector as V

main = do
    let v = V.fromList [1..5]

    putStr "Vector \"v\": "
    print v

    putStrLn $ "\nBasic operations\n" ++ take 16 (cycle "-") ++ "\n"

    putStr "Head: "
    print $ V.head v

    putStr "Tail: "
    print $ V.tail v

    putStr "Index 3: "  -- Unsafe index, could panic
    print $ v V.! 3

    putStr "Index 10: "  -- Safe index, doesn't panic (returns a Maybe)
    print $ v V.!? 10

    putStr "Replace values: "
    print $ v V.// [(0, 3), (1, 4), (4, 3)]  -- (index, value)

    putStr "Map (+1): "
    print $ V.map (+1) v

    putStr "Slicing: "
    print $ V.slice 0 3 v  -- start, stop, vector

    -- Basically whatever list operation you can think of has a vector counterpart

    putStr "Back to a list again: "
    print $ V.toList v
