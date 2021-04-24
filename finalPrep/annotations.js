// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { //create a fcn called buildABear with arguements name, age, fur, clothes and specialPower
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; //create variable greeting with name interpolation
  var demographics = [name, age]; //create demographics variable array with name and age variables inside
  var powerSaying = "Did you know that I can " + specialPower + " ?"; //creaete variable powerSaying with concatenation of specialPower
  var builtBear = { //create an object
    basicInfo: demographics, //key and value
    clothes: clothes, //key and value
    exterior: fur, //key and value
    cost: 49.99, //key and value
    sayings: [greeting, powerSaying, "Goodnight my friend!"], //key and value
    isCuddly: true, //key and value
  };

  return builtBear //fcn stopped
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); //create new object instance
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); //create new object instance



//FizzBuzz
function fizzBuzz(num1, num2, range) { // create new fcn called fizzBuzz with arguements num1, num2, num3
  for (var i = 0; i <= range; i++) { //create for loop and counter starting at 0 if i <= to the numbers it is evaluating it will continue to count up
    if (i % num1 === 0 && i % num2 === 0) { //if statement evaluating if remainder of num1 strictly equals 0 and ramainder num2 equals 0
      console.log('fizzbuzz'); //it will display fizzbuzz
    } else if (i % num1 === 0) { //if remainder of num1 equals 0
      console.log('fizz'); //display fizz
    } else if (i % num2 === 0) { //if remainder num2 equals 0
      console.log('buzz'); //display buzz
    } else { //in any other case
      console.log(i); //display the value of i
    }
  }
}

fizzBuzz(3, 5, 100);// values to put in fizzBuzz fcn for the arguements
fizzbuzz(5, 8, 400);
