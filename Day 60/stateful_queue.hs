import Control.Monad.State

type Queue = [Int]

push x q = ((),x:q)
pop q = (last q, init q)

pop' :: State Queue Int
pop' = state pop

push' :: Int -> State Queue ()
push' x = state $ push x

queueOperations = do
    push' 1
    push' 2
    push' 3
    pop'

main = print $ runState queueOperations []
