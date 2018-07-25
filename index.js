/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
oldID
let newID = 1000000000 + oldID
let ageIsValid = true 

if (Number.isInteger(currentAge)) {
  ageIsValid = true;
} else {
  ageIsValid = false;
  console.log("Please enter a new age")
}

let randomNumber = Math.floor(Math.random() * 20) + 1;

let randomInteger = Math.floor(randomNumber);

let randomUserID = randomInteger + 1000000000
  