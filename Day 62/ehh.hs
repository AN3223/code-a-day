import Control.Monad

main = do
    putStrLn "Normal function composition:"
    print $ Just . Just $ 5

    putStrLn "Using <=< instead:"
    print $ Just <=< Just $ 5

    putStrLn "Unflattened:"
    print $ Just (Just 5)

    putStrLn "Flattened:"
    print $ join $ Just (Just 5)
