package main

import "fmt"

func main() {
	array := []int{1,2,3}
	for index, value := range array {
		fmt.Println(index, value)
	}
}
