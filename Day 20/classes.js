let MyClass = class {
  run() {
    console.log("hello")
  }
}
let MyInstance = new MyClass()
MyInstance.run()
// The syntax at the top is a class expression. Very similar
// to anonymous classes in Java

class Mammal {
  constructor(genus) {
    this.warm_blooded = true
    this.genus = genus
  }
}

class Person extends Mammal {  // Class inheritance, syntax is basically the same as Java
  constructor(name) {
    super("Humans")
    this.intelligence = "Very much"
    this.name = name
  }
}

let jerry = new Person("Jerry")
console.log(jerry.name)  // Jerry
console.log(jerry.warm_blooded)  // true

class StaticMethods {
  static hello() {  // Syntax for static methods, self explanatory
    console.log("hello")
  }
  static world() {
    console.log("world")
  }
}

StaticMethods.hello()  // hello
StaticMethods.world()  // world
