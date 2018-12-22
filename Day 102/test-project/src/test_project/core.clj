(ns test-project.core)

(defn main
  "This is a docstring"
  [& args] ; These are the function arguments

  "This is a string" ; This is a trailing comment
  ;; This is a single line comment

  ["This" "is" "a" "vector" "of" "strings"] ; Commas are optional

  '("This" "is" "a" "linked list")

  \a ; This is a char

  (println "This prints a string")

  (def x "Hello I am x")
  (println x)

  (+ 5 5) ; This is addition

  (+ 5 5 5 5) ; The + actually computes the sum of an indefinite amount of numbers

  (/ 1 2) ; This makes the "ratio" "1/2", like a fraction

  (float (/ 1 2)) ; This is division

  nil ; This is Clojure's equivalent of "None" or "null"

  true, false ; These are booleans

  (def x true)
  (if x "x is true" "x is false") ; This is a conditional

  (or true false)
  (and true true)

  #"This is a regular expression"

  :this-is-a-keyword ; Keywords are scalars that just evaluate to themselves, similar strings.

  ["By the way," :vectors "are not homogeneous"]

  (def my-set #{"This" "is" "a" "set"}) ; Duplicate keys in a set raise an exception
  (println my-set)

  '(+ 1 1) ; This is a "quote" (notice the apostrophe)

  (let [x 5
        y 10
        z 20]
    (println (+ x y z))
    (println (+ x y z)))
  ;; This makes three variables named x, y, and z, and then prints the sum of them twice.
  ;; x/y/z are lexically-scoped, so they can't be accessed outside of the let expression.
  ;; Similar to Haskell's "let ... in" statement.
  )

