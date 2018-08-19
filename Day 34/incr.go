package main

import (
	"fmt"
	"sync"
)

func main() {
	var mutex sync.Mutex
	var wg sync.WaitGroup
	
	counter := 0

	incr := func() {
		defer wg.Done()
		defer mutex.Unlock()
		mutex.Lock()
		counter++
	}
	
	const incrTo = 1e6
	wg.Add(incrTo)
	for i := 0; i < incrTo; i++ {
		go incr()
	}

	wg.Wait()
	fmt.Println(counter)
}
