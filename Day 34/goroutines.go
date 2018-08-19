package main

import (
	"fmt"
	"sync"
)

func asyncPrint(s string, wg *sync.WaitGroup) { // We take a reference to wg so a copy isn't created
	defer wg.Done() // When the function ends, we tell wg
	fmt.Println(s)
}

func main() {
	var wg sync.WaitGroup // We create a WaitGroup
	
	wg.Add(2)
	go asyncPrint("hello", &wg)
	go asyncPrint("world", &wg)
	
	wg.Wait() // We tell it to wait for 2 goroutines to finish
}
