import Control.Concurrent (threadDelay)
import System.Console.ANSI

main :: IO ()
main = do
    setFillWait Dull Red
    setFillWait Dull Yellow
    setFillWait Dull Green
    setFillWait Vivid Blue
    setFillWait Dull Magenta
    setFillWait Vivid Magenta
    main

wait = threadDelay 50000

fillScreen = putStr $ take 500 (repeat '█')

setFG intensity color = setSGR [SetColor Foreground intensity color]

setFillWait intense clr = setFG intense clr >> fillScreen >> wait
