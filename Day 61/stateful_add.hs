import Control.Monad.State

add :: Int -> State Int Int
add x = do
    y <- get
    put (y+x)
    return y

main = print $ runState (add 5) 5
