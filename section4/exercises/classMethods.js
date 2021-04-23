/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protein, base, toppings,) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  addTopping(Avocado) {
    this.toppings.push("Avocado");
  }
changeProtein() {
  this.protein = "Fish";
}
};
var order1 = new Burrito("Steak", "Black beans", ["Lettuce","Tomatoes","Onion"], "order1");
var order2 = new Burrito("Chicken", "Pinto beans", ["Lettuce", "Tomatoes", "Salsa"], "order2");
var order3 = new Burrito("Pork", "Black beans", ["Lettuce", "Tomatoes", "Onion"], "order3");

console.log(order1);
console.log(order2);
console.log(order3);

order1.changeProtein();
console.log(order1);

order2.addTopping("Avocado");
console.log(order2);
