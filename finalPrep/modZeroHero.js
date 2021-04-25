// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Hotdog Man";
var specialAbility = "Super strength, agility and weiner dispensing";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello there " + heroName;
var catchphrase = "Only you can prevent forest fires!"

// Declare two variables - power AND energy - set to integers

var power = 9000;
var energy = 3;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["The Diddler", "The Fiddler", "Jake from State Farm"];
var sidekicks = ["Cleft the Boy Chin Wonder", "David Goggins", "Ronnie McDonnie"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.unshift("Baba Yaga");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

var dangerLevel = 45;
var saveTheDay = "Get riggity riggity rekt!";
var badExcuse =  "I just got a pedicure, so....";

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <= 50 || dangerLevel >= 10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  };
};

assessSituation(dangerLevel, saveTheDay, badExcuse);

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Wizard Eater",
  smell: "like a combination of sun dried cottage cheese and peanut butter",
  weight: 20,
  citiesDestroyed: ["Park City", "Dallas", "Kathmandu", "Fayetteville"],
  luckyNumbers: [3,6,9],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    state: "Unknown",
    zip: 12345,
  }

};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superPower, age) {
    this.name = name;
    this.superPower = superPower;
    this.age = age;
  }
  //static archNemesis = "The Syntax Error";
  static archNemesis(){
    console.dir("The Syntax Error");
  }
  //static powerLevel = 100;
  static powerLevel() {
    console.dir(100);
  }
  //static energyLevel = 50;
  static energyLevel() {
    console.dir(50);
  }


  sayName() {
    this.name = "Fish Man";
  }
  maximizeEnergy() {
    console.log(1000);
  }
  gainPower() {
    console.log(100);
  }
}

var stretchDude = new SuperHero("Stretch Dude", "Elasticity", 10, ); // "stretchDude"
var clobberGirl = new SuperHero("Clobber Girl", "Super Strength", 8, ); // "clobberGirl"

stretchDude.sayName();
console.log(stretchDude);

SuperHero.archNemesis();
SuperHero.powerLevel();
SuperHero.energyLevel();

clobberGirl.maximizeEnergy();
console.log();

clobberGirl.gainPower();
console.log();

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number



// - Create 2 instances of your SuperHero class



// Reflection
// What parts were most difficult about this exerise?

// The class and methods.

// What parts felt most comfortable to you?

// The first half wasn't hard, but it took longer than I wanted.  I would like to remember everything and understand it well enough
// that it becomes easier.

// What skills do you need to continue to practice before starting Mod 1?

// I think I need to go back over everything.  I also need to work on explaining everything that is happening
// with every part of the code.  I need to get better at typing and shortcuts too.
