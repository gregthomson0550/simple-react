class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  
    getInfo() {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks loudly!`);
    }
  
    // Overriding the speak method
    speak() {
      console.log(`${this.name} says woof!`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
  
    meow() {
      console.log(`${this.name} says meow!`);
    }
  
    // Overriding the speak method
    speak() {
      console.log(`${this.name} purrs softly.`);
    }
  }
  
  // Example usage
  const dog = new Dog('Buddy', 3, 'Golden Retriever');
  const cat = new Cat('Whiskers', 2, 'Calico');
  
  dog.speak(); // Output: Buddy says woof!
  dog.bark();  // Output: Buddy barks loudly!
  dog.getInfo(); // Output: Buddy is 3 years old.
  
  cat.speak(); // Output: Whiskers purrs softly.
  cat.meow();  // Output: Whiskers says meow!
  cat.getInfo(); // Output: Whiskers is 2 years old.
  