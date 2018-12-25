(ns test-project.core)


(defn destructuring-example
  [[first-item _ third-item]]
  "Prints only the first and third item of the vector supplied to the function"
  (println first-item)
  (println third-item)
  ;; Other data structures can be destructured too
  )


(defn main
  [& args]

  (def empty-coll [])
  ;; Empty collection

  (if (empty? empty-coll)
    (println "Collection is empty")
    (println "Collection is not empty"))
  ;; Checks if a collection is empty

  (if (seq empty-coll)
    (println "Collection is not empty")
    (println "Collection is empty"))
  ;; Preferred way to check if the collection is NOT empty
  ;; Instead of (not (empty? xs))

  (def five-to-one [5 4 3 2 1])

  (doseq [i five-to-one]
    (println i))
  ;; Equivalent to this Python code:
  ;; for i in five_to_one:
  ;;     print(i)

  (dotimes [i 5]
    (println i))
  ;; Equivalent to this Python code:
  ;; for i in range(5)
  ;;     print(i)

  (destructuring-example five-to-one)
  ;; Runs the destructuring example at the top of this script

  (println (remove odd? five-to-one))
  ;; Remove is just the opposite of filter

  (max 1 2 3)
  ;; Returns 3

  (apply max [1 2 3])
  ;; Same as before. Its behavior is much like the "apply" function from Python 2,
  ;; or the unary * operator from Python 3.

  (println
   (for [i (range 10)] (* i 2)))
  ;; The "for" expression generates a sequence,
  ;; like list comprehension in Python/Haskell.
  ;; In the example, I just made it double every item in (range 10)

  (def add-one (partial + 1))
  ;; The partial function in Clojure works just like the partial function in Python
  ;; (except you don't need to import it)

  (def double-then-add-one (comp add-one
                                 (partial * 2)))
  ;; The "comp" function composes other functions,
  ;; applying them starting from the rightmost function
  )

