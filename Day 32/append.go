package main

import "fmt"

func main() {
	slice := []int{1,2,3}
	newslice := append(slice, 4)  // [1,2,3,4]
	newslice[0] = 11
	fmt.Println(slice)
	// Looks like it didn't mutate the original slice, nice
}
