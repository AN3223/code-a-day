package main

import (
	"fmt"
	"time"
)

type Card struct {
	attackP int
	defenseP int
}

type CardError struct {
	When time.Time
	What string
}

func (e *CardError) Error() string {
	return fmt.Sprintf("CardError at %v, %s", e.When, e.What)
}

func (c1 *Card) attack(c2 *Card) (Card, Card, error) {
	if c1.isDead() || c2.isDead() {
		return Card{}, Card{}, &CardError{time.Now(), "The dead can't attack or be attacked"}
	}
	newc1 := Card{c1.attackP, c1.defenseP - c2.attackP}
	newc2 := Card{c2.attackP, c2.defenseP - c1.attackP}
	return newc1, newc2, nil
}

func (c Card) isDead() bool {
	return c.defenseP <= 0
}

func newWarlock() Card {
	return Card{2, 1}
}

func newOrc() Card {
	return Card{1, 2}
}

func newElf() Card {
	return Card{2, 5}
}

func main() {
	orc := newOrc()
	warlock := newWarlock()
	elf := newElf()
	// Creating our characters

	orc, warlock, err := orc.attack(&warlock)
	// The orc attacks the warlock, we update their
	// state with the new Cards returned by "attack"

	fmt.Println(orc, warlock, elf)  // {1 0} {2 0} {2 5}
	fmt.Println(orc.isDead(), warlock.isDead(), elf.isDead())  // true true false
	// The orc and warlock died from the attack

	orc, warloc, err := orc.attack(&warlock)
	if err != nil {
		fmt.Println(err.Error())
		// If we wanted, we could os.Exit() here to stop the program,
		// or handle the error gracefully
	} 
	fmt.Println(orc, warloc)  // {0 0} {0 0}
}
