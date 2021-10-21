'use strict'
function logger () {
  console.log('My name is Jason');
}

// calling / running / invoking function.
logger();
logger();
logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice;
// }

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration.
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991)
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jason'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = (cutFruitPieces(apples))
  const orangePieces = (cutFruitPieces(oranges))
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`
  return juice;
}
