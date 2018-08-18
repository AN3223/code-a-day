package main

import "fmt"

type Vector struct {
	X, Y int
}

func (v1 Vector) multiply(v2 Vector) Vector {
	return Vector{v1.X * v2.X, v1.Y * v2.Y}
}

func main() {
	v1 := Vector{5, 5}
	v2 := Vector{5, 5}
	fmt.Println(v1.multiply(v2))
}
