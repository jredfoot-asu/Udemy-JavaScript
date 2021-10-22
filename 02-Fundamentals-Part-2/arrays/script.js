'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// first way to create an array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// second way to create and array
const year = new Array(1991, 1984, 2008, 2020);
console.log(year);
// accessing the first element of an array
console.log(friends[0]);
// getting number of elements in an array
console.log(friends.length);
// get the last elemnt of an Array
console.log(friends[friends.length - 1]);
// add/change an element to an Array
friends[2] = 'Jay';
console.log(friends);
// An array can hold different types of variables.
const firstName = 'Jason';
const jason = [firstName, 'Redfoot', 2037-1983, 'Security Analyst', friends];
console.log(jason);

// Exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear
}
 const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]
console.log(ages);

// Array Operateions(Methods)
// add elements to the end of an array.
const newLength = friends.push('Peter');
console.log(friends);
console.log(newLength);

// add elements to the beggining of an array.
friends.unshift('John');
console.log(friends);

// remove last element from an array.
const popped = friends.pop();
console.log(friends);
console.log(popped);

// remove first element of an array.
friends.shift();
console.log(friends);

// find an element of a certain trpe.
console.log(friends.indexOf('Steven'));

// similar to indexOf, this is an ES6 Method
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
