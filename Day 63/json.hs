{-# LANGUAGE OverloadedStrings #-}  -- Needed for decoding
{-# LANGUAGE DeriveGeneric #-}  -- Needed for default implementations

import Data.Aeson
import GHC.Generics  -- Also needed for default implementations

data Person = Person {name :: String, age :: Int} deriving (Generic, Show)
instance ToJSON Person where
instance FromJSON Person where

main = do
    let person = Person {name = "John", age = 35}

    putStrLn "Person:"
    print person

    putStrLn "Person to JSON:"
    let json = encode (person)
    print json

    putStrLn "Person's JSON decoded:"
    print (decode json :: Maybe Person)
    
    putStrLn "Person's JSON decoded into Value type:"
    print (decode json :: Maybe Value)
