package main

import "fmt"

type Vector struct {
	X int
	Y int
}

func vectorMultiply(v1, v2 Vector) Vector {
	return Vector{v1.X * v2.X, v1.Y * v2.Y}
}

func main() {
	v1 := Vector{5, 5}
	v2 := v1
	fmt.Println(vectorMultiply(v1, v2))  // {25 25}
}
