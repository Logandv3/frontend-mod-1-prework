/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
/*
class Dog {

}
var favorite = new Dog("Pepperoni","Giraffe", "Red Hollow", "favorite");
console.log(favorite);

// Prompt 2: Snack

class Snack {

}
var brunch = new Snack("mango", "pretzel", "Jicima", "brunch");
console.log(brunch);

// Prompt 3: Shirt

class Shirt {

}
var shirtDetail = new Shirt("black", "cotton", "Nike", "shirtDetail");
console.log(shirtDetail);
*/
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
/*
class Dog {
  constructor() {
    this.snack =
    this.toy =
    this.place =
  }
}
var favorite = new Dog("Pepperoni","Giraffe", "Red Hollow", "favorite");
console.log(favorite);

// Prompt 2: Snack

class Snack {
  constructor() {
    this.sweet =
    this.salty =
    this.healthy=
  }
}
var brunch = new Snack("mango", "pretzel", "Jicima", "brunch");
console.log(brunch);

// Prompt 3: Shirt

class Shirt {
  constructor() {
    this.color =
    this.material =
    this.brand =
  }
}
var shirtDetail = new Shirt("black", "cotton", "Nike", "shirtDetail");
console.log(shirtDetail);
*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog {
  constructor(snack, toy, place) {
    this.snack = snack;
    this.toy = toy;
    this.place = place;
  }
}
var favorite = new Dog("Pepperoni", "Giraffe", "Red Hollow", "favorite");
console.log(favorite);

// Prompt 2: Snack

class Snack {
  constructor(sweet, salty, healthy) {
    this.sweet = sweet;
    this.salty = salty;
    this.healthy = healthy;
  }
}
var brunch = new Snack("mango", "pretzel", "jicima", "brunch");
console.log(brunch);

// Prompt 3: Shirt

class Shirt {
  constructor(color, material, brand) {
    this.color = color;
    this.material = material;
    this.brand = brand;
  }
}
var shirtDetail = new Shirt("black", "cotton", "Nike", "shirtDetail");
console.log(shirtDetail);
