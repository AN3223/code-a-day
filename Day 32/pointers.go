package main

import "fmt"

func main() {
	x := 10
	y := x
	z := &x
	
	x += 1
	y += 1
	*z += 1
	
	fmt.Println(x, y, *z)
}
// Prints 12 11 12, since y takes a copy of x and z takes a reference to x, so mutating z mutates x.
