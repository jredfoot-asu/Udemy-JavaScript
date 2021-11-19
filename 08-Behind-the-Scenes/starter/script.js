'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `You are ${firstName}, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // the current scope is the one that is used. JavaScript stops looking after the variable is found.
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
    }
    // can not access because outside scope
    // console.log(str);
    // var allows to traverse down.
    // console.log(millenial);
    // functions are allso constrained to their scope.
    // console.log(add);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jason';
calcAge(1983);
// can't call variables that are in functions
// console.log(age);
// printAge();

// Primatives vs Objects
// Primative Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Object.assign only creates a a shadow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
// The array is changed in both because the family object is in a deeper object. This requires an external library. This will be shown in a latter video.
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
