let jerry = {
  name: "Jerry",
  social: 677846251,
  address: "Pelican Dr"
}

let community = {
  HOA: "The Rockford Home Owners Association",
  state: "Ohio"
}

jerry.__proto__ = community  // Now jerry inherits community

console.log(jerry.HOA)  // The Rockford Home Owners Association

jerry.HOA = undefined
console.log(community.HOA)  // The Rockford Home Owners Association
// So Jerry's HOA attribute is a copy of community's HOA attribute, nice

jerry.__proto__ = undefined
console.log(jerry.state)  // Ohio
// So it keeps its attributes, nice

class Person {
  constructor(name, social, address) {
    this.name = name
    this.social = social
    this.address = address
    this.__proto__ = community
  }
}

marissa = new Person("Marissa", 837495247, "Street Rd")
console.log(marissa.HOA)

// Prototype example using a class

// There are multiple ways to add a prototype to an object, so JS has
// a builtin way to get the prototype:

console.log(Object.getPrototypeOf(marissa))  // { HOA: 'The Rockford Home Owners Association', state: 'Ohio' }

// There is also a similar method for setting the prototype, which
// works exactly how you'd thinkg
