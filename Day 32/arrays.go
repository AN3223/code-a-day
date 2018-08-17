package main

import "fmt"

func main() {
	oneThroughFive := [5]int{1, 2, 3, 4, 5}
	fmt.Println(oneThroughFive)
	one := oneThroughFive[0]
	fmt.Println(one)
	oneThroughFour := oneThroughFive[0:4]
	fmt.Println(oneThroughFour)
}
