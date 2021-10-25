const jason = {
  firstName: 'Jason',
  lastName: 'Redfoot',
  age: 2037 - 1983,
  job: 'Security Analyst',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jason);

// dot vs bracket notation
console.log(jason.lastName);
console.log(jason['lastName']);

const name = 'Name'
console.log(jason['first' + name]);
console.log(jason['last' + name]);

// const interestedIn = prompt('What do you want to know about Jason? Choose between firstName, lastName, age, jobs, and friends.');
//
// if (jason[interestedIn]) {
//   console.log(jason[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, jobs, and friends.');
// }

// add and remove properties from an object
jason.location = 'North Carolina';
jason['twitter'] = 'jason.redfoot';
console.log(jason);

// Challenge - Output the following sentence
// "Jason has 3 friends, and his best friend is called Michael."
console.log(`${jason.firstName} has ${jason.friends.length} friends, and his best friend is called ${jason['friends'][0]}.`);

// Object Methods
// any function attached to an object is called a Method.
const jason1 = {
  firstName: 'Jason',
  lastName: 'Redfoot',
  birthYear: 1983,
  job: 'Security Analyst',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function() {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
  },
};
console.log(jason1.calcAge());
console.log(jason1.age);
console.log(jason1.age);
console.log(jason1.age);
// console.log(jason1['calcAge'](1983));

// Challenge - Output the following string by using a method in the object.:
// "Jason is a 54-year old Security Analyst, and he has a/no drivers license."
console.log(jason1.getSummary());
