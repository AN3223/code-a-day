package main

import (
	"fmt"
	"strconv"
)

type Node struct {
	item int
	next *Node
}

func List(xs ...int) Node {
	var firstNode Node
	node := &firstNode
	for i, v := range xs {
		node.item = v
		if i != len(xs) - 1 {
			node.next = &Node{}
			node = node.next
		}  // We only create a "next" node if there is another item remaining
	}
	return firstNode
}

func ListRepr(node *Node) string {
	repr := ""
	for node != nil {
		repr += strconv.Itoa(node.item)
		if node.next != nil {
			repr += ", "
		}
		node = node.next
	}
	return "[" + repr + "]"
}

func main() {
	xs := List(1,2,3)
	fmt.Println(ListRepr(&xs))
}
