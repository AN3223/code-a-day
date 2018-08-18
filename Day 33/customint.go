package main

import "fmt"

type MyInt int

func (x MyInt) add(y MyInt) MyInt {
	return x + y
}

func main() {
	four := MyInt(4)
	var five MyInt = 5
	fmt.Println(four.add(five))
}
