(ns test-project.core
  (:require [clojure.string :as str])
  (:use [clojure.repl]))
;; This is what imports look like
;; Also this is our namespace.
;; If you wanted to access the main symbol, you would look for:
;; test-project.core/main

(defn main
  [& args]

  (> 2 1)
  (< 1 2)
  (<= 1 1)
  (>= 1 1)
  (not= 1 2)
  (= 1 1)
  ;; Equality and comparison (all evaluate to true)

  (= 1 1.0)
  ;; false
  (== 1 1.0)
  ;; true

  ;; The double == is more forgiving for numbers
  ;; = is more common for equality comparison

  (let [x 10
        y (+ x 5)
        z (+ y 10)]
    (println z))
  ;; The identifiers can refer to each other, pretty neat


  ;; STRINGS


  (def split-string
    (str/split "This is how you split strings." #" "))

  (println (count split-string))
  ;; Prints the length of the vector returned by str/split
  ;; representing how many words there were in the string

  (def join-string
    (str/join " " split-string))
  ;; Joins the string back together as it was originally

  (println
   (str/replace join-string "split" "join"))
  ;; Replaces the word "split" with the word "join"


  ;; HASHMAPS


  (def my-hash-map {:key1 "value1" :key2 "value2"})
  ;; Creates a hashmap

  (println (my-hash-map :key2))
  ;; Looks up the key in the hashmap, gives us back
  ;; the corresponding value. Or "nil" if it isn't found

  (println (:key2 my-hash-map))
  ;; This is equivalent to the last line of code

  (keys my-hash-map)
  (vals my-hash-map)
  ;; Get the keys and values for the hashmap


  ;; VECTORS


  (def my-vector [5 4 3 2 1])

  (println (my-vector 0))
  ;; Gives us the item at index "0"
  ;; The index must always be AFTER the vector
  ;; An index out of range will raise an exception

  (println (get my-vector 5))
  ;; Using the "get" symbol will give a "nil" instead
  ;; of raising an exception
  ;; (kind of like Python's .get() method on dictionaries)


  ;; LINKED LISTS


  (def my-linked-list '(5 4 3 2 1))
  ;; Creating a linked list

  (first my-linked-list)
  ;; Returns the first item of the linked list (head)

  (rest my-linked-list)
  ;; Returns the rest of the items of the linked list (tail)

  (next my-linked-list)
  ;; Strict version of "rest"

  (last my-linked-list)
  ;; Returns the last item of the linked list (last)

  ;; Linked lists can not be indexed!
  ;; The first/rest/next/last symbols can be used on any collection


  ;; MAP/FILTER/REDUCE


  (println
   (map
    (fn [x] (+ x 1))
    my-linked-list))
  ;; Maps a "plus one" function over the linked list we made before

  (println
   (filter even? my-linked-list))
  ;; Fairly self explanatory, it filters out all of the odd numbers

  (defn sum [xs]
    (reduce + xs))
  (println (sum my-linked-list))
  ;; Also fairly self explanatory, though the + function could just handle
  ;; this case by itself


  ;; FUNCTIONS


  (defn function-name
    "Hello I am a docstring"
    [arg1 arg2 & all-of-the-other-args]
    (println all-of-the-other-args))

  (function-name 1 2 3 4 5)
  ;; Prints (3 4 5)

  (doc function-name)
  ;; Prints out the function's docstring
  ;; along with other information about the function
  )

