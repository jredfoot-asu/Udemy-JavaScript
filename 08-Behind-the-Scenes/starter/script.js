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
